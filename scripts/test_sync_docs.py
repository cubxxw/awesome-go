"""No-secret local Git safety cases; full Git fixtures run on GHA, not the agent host."""

import base64
import hashlib
import io
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch

import sync_docs as sync


# Filled with the two exact public configuration blobs during candidate preparation.
CONFIGS = {'cubxxw/awesome-go': 'IyBodHRwczovL2dpdGh1Yi5jb20vQmV0YUh1aG4vcmVwby1maWxlLXN5bmMtYWN0aW9uCiMgU3luY2hyb25pemF0aW9uIGZvciB0aGUuZ2l0aHViIHJlcG9zaXRvcnkKZ3JvdXA6CiAgIyBmaXJzdCBncm91cO+8mmNvbW1vbiB0byBhbGwgd2FyZWhvdXNlcwogICMgVE9ETzogYWRkIHRoZSByZXF1aXJlZCB3YXJlaG91c2UgaGVyZQogIC0gcmVwb3M6IHwKICAgICAgY3VieHh3L2F3ZXNvbWUtY3MtY2xvdWRuYXRpdmUtYmxvY2tjaGFpbkBtYXN0ZXIKICAgIGZpbGVzOiAKICAgICAgIyAtIHNvdXJjZTogLmdpdGluZ29yZQogICAgICAjICAgZGVzdDogLmdpdGluZ29yZQogICAgICAjICAgcmVwbGFjZTogZmFsc2UKICAgICAgLSBzb3VyY2U6IGRvY3MvCiAgICAgICAgZGVzdDogYXdlc29tZS1nb2xhbmcvCiAgICAgICAgcmVwbGFjZTogdHJ1ZQogICAgICAgIGV4Y2x1ZGU6IHwKICAgICAgICAgICouZ28KICAgICAgICAgIC52dWVwcmVzcwogICAgICAgICAgLioKICAgICAgICAgIFJFQURNRS5tZAogICAgICAtIHNvdXJjZTogZG9jcy9SRUFETUUubWQKICAgICAgICBkZXN0OiBhd2Vzb21lLWdvbGFuZy9SRUFETUUubWQKICAgICAgICByZXBsYWNlOiB0cnVl', 'cubxxw/awesome-cloud-native': 'IyBodHRwczovL2dpdGh1Yi5jb20vQmV0YUh1aG4vcmVwby1maWxlLXN5bmMtYWN0aW9uCiMgU3luY2hyb25pemF0aW9uIGZvciB0aGUuZ2l0aHViIHJlcG9zaXRvcnkKZ3JvdXA6CiAgIyBmaXJzdCBncm91cO+8mmNvbW1vbiB0byBhbGwgd2FyZWhvdXNlcwogICMgVE9ETzogYWRkIHRoZSByZXF1aXJlZCB3YXJlaG91c2UgaGVyZQogIC0gcmVwb3M6IHwKICAgICAgY3VieHh3L2F3ZXNvbWUtY3MtY2xvdWRuYXRpdmUtYmxvY2tjaGFpbkBtYXN0ZXIKICAgIGZpbGVzOiAKICAgICAgIyAtIHNvdXJjZTogLmdpdGluZ29yZQogICAgICAjICAgZGVzdDogLmdpdGluZ29yZQogICAgICAjICAgcmVwbGFjZTogZmFsc2UKICAgICAgLSBzb3VyY2U6IGRvY3MvCiAgICAgICAgZGVzdDogYXdlc29tZS1kb2NrZXIta3ViZXJuZXRlcy8KICAgICAgICByZXBsYWNlOiB0cnVlCiAgICAgICAgZXhjbHVkZTogfAogICAgICAgICAgKi5nbwogICAgICAgICAgLnZ1ZXByZXNzCiAgICAgICAgICAuKgogICAgICAgICAgUkVBRE1FLm1kCiAgICAgIC0gc291cmNlOiBkb2NzL1JFQURNRS5tZAogICAgICAgIGRlc3Q6IGF3ZXNvbWUtZG9ja2VyLWt1YmVybmV0ZXMvUkVBRE1FLm1kCiAgICAgICAgcmVwbGFjZTogdHJ1ZQ=='}


def call(root, *args):
    result = subprocess.run(["git", *args], cwd=root, env=sync.git_env(),
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=20)
    if result.returncode:
        raise AssertionError("Fixture Git command failed: " + args[0])
    return result.stdout.decode().strip()


def commit(root):
    call(root, "add", ".")
    call(root, "-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid",
         "-c", "commit.gpgsign=false", "commit", "-m", "fixture")
    return call(root, "rev-parse", "HEAD")


class PureContractTests(unittest.TestCase):
    def test_both_real_rule_blobs_and_separate_namespaces(self):
        for repository, encoded in CONFIGS.items():
            raw = base64.b64decode(encoded)
            oid = hashlib.sha1(b"blob " + str(len(raw)).encode() + b"\0" + raw).hexdigest()
            self.assertEqual(oid, sync.RULES[repository][2])
        self.assertEqual(sync.RULES["cubxxw/awesome-cloud-native"][:2],
                         (536613166, "awesome-docker-kubernetes"))
        self.assertNotEqual(sync.RULES["cubxxw/awesome-go"][1],
                            sync.RULES["cubxxw/awesome-cloud-native"][1])

    def test_actual_literal_excludes_and_readme_mapping(self):
        prefix = "awesome-golang"
        self.assertEqual(sync.destination("docs/README.md", prefix), prefix + "/README.md")
        self.assertEqual(sync.destination("docs/nested/README.md", prefix), prefix + "/nested/README.md")
        self.assertEqual(sync.destination("docs/example.go", prefix), prefix + "/example.go")
        self.assertEqual(sync.destination("docs/.hidden", prefix), prefix + "/.hidden")
        for name in ["docs/.vuepress/config.ts", "docs/*.go", "docs/.*"]:
            self.assertIsNone(sync.destination(name, prefix))
        self.assertIsNone(sync.destination("code/unmapped", prefix))
        with self.assertRaises(sync.SyncError):
            sync.destination("docs/../escape", prefix)

    def test_source_identity_event_and_unique_branch(self):
        env = {"GITHUB_REPOSITORY": "cubxxw/awesome-go", "GITHUB_REPOSITORY_ID": "544877512",
               "GITHUB_SHA": "a" * 40, "GITHUB_RUN_ID": "101", "GITHUB_RUN_ATTEMPT": "2",
               "GITHUB_EVENT_NAME": "push", "GITHUB_REF": "refs/heads/master"}
        context = sync.context_from_env(env)
        self.assertEqual(context.branch, "codex/docs-sync/544877512/101-2")
        for key, value in [("GITHUB_REPOSITORY", "other/source"), ("GITHUB_REPOSITORY_ID", "1"),
                           ("GITHUB_EVENT_NAME", "pull_request"), ("GITHUB_REF", "refs/heads/other")]:
            with self.assertRaises(sync.SyncError):
                sync.context_from_env({**env, key: value})

    def test_missing_token_fails_before_any_git_or_api(self):
        with patch.dict(os.environ, {}, clear=True), patch.object(sync, "git") as git:
            with self.assertRaisesRegex(sync.SyncError, "BOT_GITHUB_TOKEN"):
                sync.main()
            git.assert_not_called()

    def test_credential_is_not_in_arguments_or_persistent_config(self):
        sentinel = "synthetic-only-not-a-real-credential"
        with patch.dict(os.environ, {"GIT_TRACE": "1", "GIT_CURL_VERBOSE": "1"}):
            env = sync.git_env(sentinel)
        self.assertNotIn("GIT_TRACE", env)
        self.assertNotIn("GIT_CURL_VERBOSE", env)
        self.assertEqual(env["GIT_TERMINAL_PROMPT"], "0")
        self.assertNotIn(sentinel, env["GIT_CONFIG_VALUE_0"])
        self.assertEqual(base64.b64decode(env["GIT_CONFIG_VALUE_0"].split()[-1]).decode(),
                         "x-access-token:" + sentinel)

    def test_target_pr_request_has_no_auto_merge_labels_or_review_requests(self):
        context = sync.Context("cubxxw/awesome-go", 544877512, "a" * 40, "101", "1")
        requests = []

        class Opener:
            def open(self, request, timeout):
                requests.append(request)
                return io.BytesIO(json.dumps({"html_url": "https://github.com/" + sync.TARGET + "/pull/1"}).encode())

        with patch.object(sync.urllib.request, "build_opener", return_value=Opener()):
            self.assertTrue(sync.create_pr(context, "synthetic-only-credential").endswith("/pull/1"))
        self.assertEqual(len(requests), 1)
        payload = json.loads(requests[0].data)
        self.assertEqual(set(payload), {"base", "head", "title", "body"})
        self.assertEqual(payload["base"], "master")
        self.assertEqual(payload["head"], context.branch)
        self.assertNotIn("GET-325", payload["body"])


class LocalGitSafetyTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="own-sync-fixture-")
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.source = self.root / "source"
        self.seed = self.root / "seed"
        self.remote = self.root / "remote.git"
        self.target = self.root / "target"
        for root in [self.source, self.seed]:
            root.mkdir()
            call(root, "init", "--initial-branch=master")
        (self.source / ".github").mkdir()
        (self.source / ".github/sync.yml").write_bytes(base64.b64decode(CONFIGS["cubxxw/awesome-go"]))
        (self.source / "docs/.vuepress").mkdir(parents=True)
        (self.source / "docs/README.md").write_text("source README\n")
        (self.source / "docs/article.md").write_text("source article\n")
        (self.source / "docs/example.go").write_text("source example\n")
        (self.source / "docs/.vuepress/config.ts").write_text("must not copy\n")
        source_sha = commit(self.source)
        self.context = sync.Context("cubxxw/awesome-go", 544877512, source_sha, "101", "1")
        (self.seed / "README.md").write_text("target root README\n")
        (self.seed / "awesome-golang").mkdir()
        (self.seed / "awesome-golang/orphan.md").write_text("retain orphan\n")
        (self.seed / "unrelated.txt").write_text("retain outside namespace\n")
        commit(self.seed)
        call(self.seed, "update-index", "--add", "--cacheinfo", "160000," + "b" * 40 + ",code/unmapped")
        call(self.seed, "-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid",
             "commit", "-m", "retain gitlink")
        call(self.root, "init", "--bare", str(self.remote))
        call(self.seed, "remote", "add", "origin", str(self.remote))
        call(self.seed, "push", "origin", "HEAD:refs/heads/master")
        self.master = call(self.remote, "rev-parse", "refs/heads/master")
        # Match production's index-only target: do not materialize tracked files/gitlinks.
        call(self.root, "clone", "--no-checkout", "--branch=master", str(self.remote), str(self.target))

    def test_prepare_and_normal_push_preserve_master_orphans_and_gitlinks(self):
        result = sync.prepare_branch(self.source, self.target, self.context)
        self.assertIsNotNone(result)
        entries = sync.entries(self.target)
        self.assertEqual(call(self.target, "show", "HEAD:README.md"), "target root README")
        self.assertEqual(call(self.target, "show", "HEAD:awesome-golang/orphan.md"), "retain orphan")
        self.assertEqual(entries["code/unmapped"], ("160000", "b" * 40))
        self.assertNotIn("awesome-golang/.vuepress/config.ts", entries)
        self.assertIn("awesome-golang/example.go", entries)
        self.assertNotIn("GET-325", call(self.target, "show", "-s", "--format=%B", "HEAD"))
        sync.push_new_branch(self.target, self.context.branch)
        self.assertEqual(call(self.remote, "rev-parse", "refs/heads/master"), self.master)
        self.assertEqual(call(self.remote, "rev-parse", "refs/heads/" + self.context.branch), result["commit"])

    def test_preexisting_branch_is_never_updated(self):
        sync.prepare_branch(self.source, self.target, self.context)
        call(self.seed, "push", "origin", "HEAD:refs/heads/" + self.context.branch)
        with self.assertRaisesRegex(sync.SyncError, "already exists"):
            sync.push_new_branch(self.target, self.context.branch)
        self.assertEqual(call(self.remote, "rev-parse", "refs/heads/" + self.context.branch), self.master)

    def test_racing_divergent_ref_is_rejected_by_real_non_force_push(self):
        sync.prepare_branch(self.source, self.target, self.context)
        (self.seed / "human.txt").write_text("human branch must survive\n")
        human = commit(self.seed)
        original = sync.git

        def racing_git(root, *args, **kwargs):
            if args[0] == "push":
                call(self.seed, "push", "origin", "HEAD:refs/heads/" + self.context.branch)
            return original(root, *args, **kwargs)

        with patch.object(sync, "git", side_effect=racing_git):
            with self.assertRaises(sync.SyncError):
                sync.push_new_branch(self.target, self.context.branch)
        self.assertEqual(call(self.remote, "rev-parse", "refs/heads/" + self.context.branch), human)
        self.assertEqual(call(self.remote, "rev-parse", "refs/heads/master"), self.master)

    def test_changed_rules_fail_before_target_commit(self):
        (self.source / ".github/sync.yml").write_text("unreviewed rule\n")
        sha = commit(self.source)
        context = sync.Context(self.context.repository, self.context.repository_id, sha, "101", "1")
        with self.assertRaisesRegex(sync.SyncError, "rules changed"):
            sync.prepare_branch(self.source, self.target, context)
        self.assertEqual(call(self.target, "rev-parse", "HEAD"), self.master)

    def test_matching_docs_do_not_create_another_commit(self):
        sync.prepare_branch(self.source, self.target, self.context)
        first = call(self.target, "rev-parse", "HEAD")
        self.assertIsNone(sync.prepare_branch(self.source, self.target, self.context))
        self.assertEqual(call(self.target, "rev-parse", "HEAD"), first)

    def test_mapped_gitlink_collision_stops_instead_of_replacing_it(self):
        call(self.target, "read-tree", "HEAD")
        call(self.target, "update-index", "--add", "--cacheinfo",
             "160000," + "c" * 40 + ",awesome-golang/article.md")
        call(self.target, "-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid",
             "commit", "-m", "mapped link")
        with self.assertRaisesRegex(sync.SyncError, "gitlink"):
            sync.prepare_branch(self.source, self.target, self.context)


if __name__ == "__main__":
    unittest.main()
