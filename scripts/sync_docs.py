"""Sync these two repositories' tracked docs through a new target PR only."""

import base64
from dataclasses import dataclass
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import urllib.error
import urllib.request


TARGET = "cubxxw/awesome-cs-cloudnative-blockchain"
TARGET_URL = "https://github.com/" + TARGET + ".git"
RULES = {
    "cubxxw/awesome-go": (544877512, "awesome-golang", "0d2c1dc5c602b29d84238000061818b483c37252"),
    "cubxxw/awesome-cloud-native": (536613166, "awesome-docker-kubernetes", "8c35387f44ff38c9b3c2bf7db28f9b921430f343"),
}
HEX = re.compile(r"[0-9a-f]{40}")
BRANCH = re.compile(r"codex/docs-sync/[1-9][0-9]*/[1-9][0-9]*-[1-9][0-9]*")


class SyncError(Exception):
    pass


@dataclass(frozen=True)
class Context:
    repository: str
    repository_id: int
    sha: str
    run_id: str
    attempt: str

    @property
    def branch(self):
        return f"codex/docs-sync/{self.repository_id}/{self.run_id}-{self.attempt}"

    @property
    def rule(self):
        return RULES[self.repository]


def context_from_env(env):
    repository = env.get("GITHUB_REPOSITORY", "")
    if repository not in RULES:
        raise SyncError("Unsupported source repository")
    values = [env.get(key, "") for key in ("GITHUB_REPOSITORY_ID", "GITHUB_RUN_ID", "GITHUB_RUN_ATTEMPT")]
    if not all(re.fullmatch(r"[1-9][0-9]*", value) for value in values):
        raise SyncError("Invalid source repository/run identity")
    if int(values[0]) != RULES[repository][0]:
        raise SyncError("Source repository ID differs from its reviewed identity")
    sha = env.get("GITHUB_SHA", "")
    if not HEX.fullmatch(sha):
        raise SyncError("Invalid source commit")
    if env.get("GITHUB_EVENT_NAME") not in ("push", "workflow_dispatch"):
        raise SyncError("Sync writes are not allowed for this event")
    if env.get("GITHUB_REF") not in ("refs/heads/master", "refs/heads/main"):
        raise SyncError("Sync writes are restricted to the existing source branches")
    return Context(repository, int(values[0]), sha, values[1], values[2])


def require_token(env):
    token = env.get("BOT_GITHUB_TOKEN", "").strip()
    if not token:
        raise SyncError("Existing BOT_GITHUB_TOKEN is unavailable; no target operation attempted")
    return token


def git_env(token=None):
    # Neither traces, global helpers nor another checkout's configuration may disclose/use credentials.
    env = {key: value for key, value in os.environ.items()
           if not key.startswith("GIT_") and key not in ("BOT_GITHUB_TOKEN", "GITHUB_TOKEN", "GH_TOKEN")}
    env.update(GIT_CONFIG_NOSYSTEM="1", GIT_CONFIG_GLOBAL=os.devnull, GIT_TERMINAL_PROMPT="0")
    if token is not None:
        header = base64.b64encode(("x-access-token:" + token).encode()).decode()
        env.update(GIT_CONFIG_COUNT="1",
                   GIT_CONFIG_KEY_0="http." + TARGET_URL + ".extraheader",
                   GIT_CONFIG_VALUE_0="AUTHORIZATION: basic " + header)
    return env


def git(root, *args, env=None, data=None):
    result = subprocess.run(
        ["git", "-c", "credential.helper=", "-c", "http.followRedirects=false", *args],
        cwd=root, input=data, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        env=git_env() if env is None else env, timeout=120,
    )
    if result.returncode:
        # Never echo a credential-bearing header, subprocess environment or server error body.
        http = re.search(rb"requested URL returned error: ([0-9]{3})", result.stderr)
        status = "; HTTP " + http[1].decode() if http else ""
        raise SyncError(f"Git operation {args[0]} failed (exit {result.returncode}{status}); no automatic retry")
    return result.stdout


def entries(root, revision="HEAD", prefix=None):
    args = ["ls-tree", "-r", "-z", revision]
    if prefix is not None:
        args += ["--", prefix]
    result = {}
    for record in git(root, *args).split(b"\0"):
        if not record:
            continue
        meta, name = record.split(b"\t", 1)
        mode, kind, oid = meta.decode().split()
        name = name.decode("utf-8")
        if mode not in ("100644", "100755", "120000", "160000") or not HEX.fullmatch(oid):
            raise SyncError("Unsupported tracked entry; no guessing or submodule traversal")
        result[name] = (mode, oid)
    return result


def destination(source, prefix):
    if not source.startswith("docs/"):
        return None
    parts = source[5:].split("/")
    if any(part in ("", ".", "..", ".git") for part in parts):
        raise SyncError("Unsafe tracked source path")
    # Match the existing consumer's literal source-relative excludes, not invented glob semantics.
    # The separately declared docs/README.md mapping intentionally includes the root README again.
    if parts[0] in (".vuepress", "*.go", ".*"):
        return None
    return prefix + "/" + "/".join(parts)


def projection(source, context):
    if git(source, "rev-parse", "HEAD").decode().strip() != context.sha:
        raise SyncError("Checkout differs from the source commit")
    config = git(source, "rev-parse", "HEAD:.github/sync.yml").decode().strip()
    if config != context.rule[2]:
        raise SyncError("Sync rules changed from the reviewed two mappings; review before writing")
    projected = {}
    source_entries = entries(source, prefix="docs")
    if "docs/README.md" not in source_entries:
        raise SyncError("The explicitly mapped docs/README.md is missing")
    for name, entry in source_entries.items():
        target = destination(name, context.rule[1])
        if target is not None:
            projected[target] = entry
    return projected


def prepare_branch(source, target, context):
    if not BRANCH.fullmatch(context.branch):
        raise SyncError("Invalid sync branch")
    projected = projection(source, context)
    original = entries(target)
    # An index-only copy preserves unrelated blobs/gitlinks and never follows filesystem symlinks.
    for name, entry in projected.items():
        ancestors = ["/".join(name.split("/")[:i]) for i in range(1, len(name.split("/")))]
        if any(parent in original for parent in ancestors) or any(old.startswith(name + "/") for old in original):
            raise SyncError("Source/target file-directory collision requires explicit review")
        if entry[0] == "160000" or original.get(name, (None,))[0] == "160000":
            if original.get(name) != entry:
                raise SyncError("Mapped gitlink changes require explicit review; no submodule initialized")
    changed = {name: entry for name, entry in projected.items() if original.get(name) != entry}
    if not changed:
        return None
    base = git(target, "rev-parse", "HEAD").decode().strip()
    git(target, "read-tree", base)
    updates = []
    for name, (mode, oid) in changed.items():
        raw = git(source, "cat-file", "blob", oid)
        actual = git(target, "hash-object", "-w", "--stdin", data=raw).decode().strip()
        if actual != oid:
            raise SyncError("Copied Git object differs from the reviewed source")
        updates.append(f"{mode} {oid}\t{name}\0".encode())
    git(target, "update-index", "-z", "--index-info", data=b"".join(updates))
    git(target, "branch", "--no-track", context.branch, base)
    git(target, "symbolic-ref", "HEAD", "refs/heads/" + context.branch)
    message = (f"docs: sync {context.repository} documentation\n\n"
               f"Source: https://github.com/{context.repository}/commit/{context.sha}\n"
               f"Source run: https://github.com/{context.repository}/actions/runs/{context.run_id}\n\n"
               "Signed-off-by: kubbot <3293172751ysy@gmail.com>")
    git(target, "-c", "user.name=kubbot", "-c", "user.email=3293172751ysy@gmail.com",
        "-c", "commit.gpgsign=false", "commit", "--quiet", "-m", message)
    return {"commit": git(target, "rev-parse", "HEAD").decode().strip(), "files": len(changed)}


def push_new_branch(target, branch, env=None):
    if not BRANCH.fullmatch(branch):
        raise SyncError("Invalid sync branch")
    refs = git(target, "ls-remote", "--heads", "origin", "refs/heads/" + branch, env=env)
    if refs.strip():
        raise SyncError("Unique sync branch already exists; refusing to overwrite it")
    # A concurrent divergent ref causes an ordinary non-fast-forward rejection. Never force/update an API ref.
    git(target, "push", "origin", "HEAD:refs/heads/" + branch, env=env)


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


def create_pr(context, token):
    payload = {"base": "master", "head": context.branch,
               "title": f"Sync documentation from {context.repository}",
               "body": (f"Update only `{context.rule[1]}/` from "
                        f"[{context.repository}@{context.sha}](https://github.com/{context.repository}/commit/{context.sha}).\n\n"
                        "Unmapped target files and gitlinks are retained. No orphan deletion or automatic merge.\n\n"
                        f"[Source run](https://github.com/{context.repository}/actions/runs/{context.run_id}).")}
    request = urllib.request.Request("https://api.github.com/repos/" + TARGET + "/pulls",
                                     data=json.dumps(payload).encode(), method="POST",
                                     headers={"Authorization": "Bearer " + token,
                                              "Accept": "application/vnd.github+json",
                                              "X-GitHub-Api-Version": "2022-11-28",
                                              "Content-Type": "application/json", "User-Agent": "own-docs-sync"})
    try:
        with urllib.request.build_opener(NoRedirect()).open(request, timeout=30) as response:
            data = json.load(response)
    except urllib.error.HTTPError as error:
        raise SyncError(f"Target PR API returned HTTP {error.code}; inspect branch/PR before any retry") from None
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        raise SyncError("Target PR response failed/uncertain; inspect the published branch/PR before any retry") from None
    url = data.get("html_url", "")
    if not url.startswith("https://github.com/" + TARGET + "/pull/"):
        raise SyncError("Unexpected PR response; inspect state before retry")
    return url


def main():
    token = require_token(os.environ)
    context = context_from_env(os.environ)
    source = Path(__file__).resolve().parents[1]
    projection(source, context)  # Reject changed rules/checkout before using the credential at the target.
    env = git_env(token)
    with tempfile.TemporaryDirectory(prefix="own-docs-sync-", dir=os.environ.get("RUNNER_TEMP")) as temp:
        target = Path(temp) / "target"
        git(Path(temp), "clone", "--no-checkout", "--filter=blob:none", "--depth=1", "--single-branch", "--branch=master",
            "--no-recurse-submodules", TARGET_URL, str(target), env=env)
        prepared = prepare_branch(source, target, context)
        if prepared is None:
            print("Target documentation already matches the tracked source; no push or PR")
            return
        print(json.dumps({"phase": "push-new-branch", "branch": context.branch, "source": context.sha}), flush=True)
        push_new_branch(target, context.branch, env=env)
        print(json.dumps({"phase": "create-target-pr", "branch": context.branch}), flush=True)
        url = create_pr(context, token)
        print(json.dumps({"source": context.sha, "branch": context.branch, "files": prepared["files"], "pr": url}))


if __name__ == "__main__":
    try:
        main()
    except (SyncError, subprocess.TimeoutExpired) as error:
        print("Documentation sync failed: " + (str(error) if isinstance(error, SyncError) else "Git response timed out; inspect state before retry"), file=sys.stderr)
        sys.exit(1)
