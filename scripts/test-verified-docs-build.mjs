import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, rm, stat, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { test } from "node:test";
import { assertRuntime, buildVerifiedDocs, executeStep, selectCommit } from "./build-verified-docs.mjs";

const commit = "a".repeat(40);
const facts = { npmCli: "fixture-only", npmVersion: "12.0.2", nodeVersion: "22.23.2", commit };
const page = '<meta name="generator" content="VuePress 2.0.0-rc.30">Golang /Gomd_super/ <input type="checkbox"><div role="tablist">ubuntu centos</div>历史评论 第21节 go 语言切片原理 第50节';

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "awesome-go-runner-fixture-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, "scripts"));
  await copyFile(new URL("./check-docs-build.mjs", import.meta.url), path.join(root, "scripts/check-docs-build.mjs"));
  await writeFile(path.join(root, "package-lock.json"), '{"fixture":true}\n');
  await mkdir(path.join(root, "node_modules/vuepress"), { recursive: true });
  await writeFile(path.join(root, "node_modules/vuepress/package.json"), '{"version":"2.0.0-rc.30"}');
  await mkdir(path.join(root, "dist"));
  await writeFile(path.join(root, "dist/historical.txt"), "keep historical tracked output");
  return root;
}

function simulatedBuild({ failure, ssrError, oldGenerator } = {}) {
  return async step => {
    if (step.step === failure) throw new Error(`fixture ${failure} exit 1`);
    if (step.step === "graph") return;
    if (step.step === "output") return executeStep(step);
    for (const file of ["index.html", "404.html", "markdown/1.html", "Gomd_super/index.html", "go-advancend/index.html"]) {
      const target = path.join(step.dist, file);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, oldGenerator ? page.replace("2.0.0-rc.30", "2.0.0-beta.51") : page);
    }
    // Simulated CLI exits zero in both cases; the real output gate must decide.
    await writeFile(step.logFile, ssrError ? "Error: synthetic SSR fixture\n" : "fixture rendered\n");
  };
}

test("exact source commit and Node/npm contracts reject mismatches", () => {
  assert.equal(selectCommit({ GITHUB_SHA: commit }, commit), commit);
  assert.equal(selectCommit({ VERCEL_GIT_COMMIT_SHA: commit }, undefined), commit);
  assert.throws(() => selectCommit({ GITHUB_SHA: "b".repeat(40) }, commit));
  assert.throws(() => selectCommit({ GITHUB_SHA: "not-a-sha" }, undefined));
  assert.throws(() => selectCommit({}, undefined));
  assert.doesNotThrow(() => assertRuntime("22.18.0", "12.0.2"));
  assert.throws(() => assertRuntime("22.17.0", "12.0.2"));
  assert.throws(() => assertRuntime("24.0.0", "12.0.2"));
  assert.throws(() => assertRuntime("22.23.2", "10.9.0"));
});

for (const [name, options] of [
  ["graph failure", { failure: "graph" }],
  ["build nonzero", { failure: "build" }],
  ["CLI zero with SSR error", { ssrError: true }],
  ["CLI zero with stale beta generator", { oldGenerator: true }],
]) {
  test(`${name} leaves no deployable output or identity`, async t => {
    const root = await fixture(t);
    await assert.rejects(buildVerifiedDocs({ root, facts, execute: simulatedBuild(options) }));
    await assert.rejects(stat(path.join(root, ".build-artifacts/verified-docs/dist")), { code: "ENOENT" });
    assert.equal(await readFile(path.join(root, "dist/historical.txt"), "utf8"), "keep historical tracked output");
  });
}

test("identity appears only after the real output gate accepts fresh pages", async t => {
  const root = await fixture(t);
  const identity = await buildVerifiedDocs({ root, facts, execute: simulatedBuild() });
  assert.equal(identity.sourceCommit, commit);
  assert.equal(identity.npmVersion, "12.0.2");
  assert.equal(identity.vuepressVersion, "2.0.0-rc.30");
  assert.match(identity.lockSHA256, /^[0-9a-f]{64}$/);
  assert.deepEqual(JSON.parse(await readFile(path.join(root, ".build-artifacts/verified-docs/dist/build-info.json"), "utf8")), identity);
  assert.equal(await readFile(path.join(root, "dist/historical.txt"), "utf8"), "keep historical tracked output");
});

test("linked artifact parents are rejected before cleanup", async t => {
  const root = await fixture(t);
  const outside = await mkdtemp(path.join(os.tmpdir(), "awesome-go-runner-outside-"));
  t.after(() => rm(outside, { recursive: true, force: true }));
  await writeFile(path.join(outside, "keep.txt"), "outside");
  await symlink(outside, path.join(root, ".build-artifacts"), "dir");
  await assert.rejects(buildVerifiedDocs({ root, facts, execute: simulatedBuild() }));
  assert.equal(await readFile(path.join(outside, "keep.txt"), "utf8"), "outside");
});

test("credential-free exact-SHA sparse checkout preserves an unmapped gitlink", async t => {
  const base = await mkdtemp(path.join(os.tmpdir(), "awesome-go-git-fixture-"));
  t.after(() => rm(base, { recursive: true, force: true }));
  const source = path.join(base, "source"), checkout = path.join(base, "checkout");
  await mkdir(path.join(source, "docs"), { recursive: true });
  await mkdir(checkout);
  await writeFile(path.join(source, "docs/README.md"), "source fixture\n");
  const git = (cwd, ...args) => {
    const result = spawnSync("git", args, { cwd, encoding: "utf8", env: { ...process.env,
      GIT_CONFIG_NOSYSTEM: "1", GIT_CONFIG_GLOBAL: "/dev/null", GIT_TERMINAL_PROMPT: "0" } });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };
  git(source, "init");
  git(source, "add", "docs/README.md");
  const unmapped = "b".repeat(40);
  git(source, "update-index", "--add", "--cacheinfo", `160000,${unmapped},code/unknown`);
  git(source, "-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid", "-c", "core.hooksPath=/dev/null", "commit", "-m", "fixture");
  await writeFile(path.join(source, "docs/README.md"), "current source fixture\n");
  git(source, "add", "docs/README.md");
  git(source, "-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid", "-c", "core.hooksPath=/dev/null", "commit", "-m", "second fixture");
  git(source, "config", "uploadpack.allowFilter", "true");
  const exact = git(source, "rev-parse", "HEAD");
  git(checkout, "init");
  git(checkout, "remote", "add", "origin", pathToFileURL(source).href);
  git(checkout, "-c", "protocol.version=2", "fetch", "--no-tags", "--no-recurse-submodules", "origin", exact);
  git(checkout, "config", "core.sparseCheckout", "true");
  await writeFile(path.join(checkout, ".git/info/sparse-checkout"), "/docs/\n");
  git(checkout, "-c", "submodule.recurse=false", "checkout", "--detach", exact);
  assert.equal(git(checkout, "rev-parse", "HEAD"), exact);
  assert.match(git(checkout, "ls-tree", "HEAD", "code/unknown"), new RegExp(`160000 commit ${unmapped}`));
  assert.equal(await readFile(path.join(checkout, "docs/README.md"), "utf8"), "current source fixture\n");
  assert.doesNotMatch(git(checkout, "--no-lazy-fetch", "rev-list", "--objects", "--missing=print", exact), /^\?/m);
  // Warm the partial clone's current checkout; its historical blob must still be missing.
  const partial = path.join(base, "partial");
  await mkdir(partial);
  git(partial, "init");
  git(partial, "remote", "add", "origin", pathToFileURL(source).href);
  git(partial, "-c", "protocol.version=2", "fetch", "--filter=blob:none", "--no-tags", "--no-recurse-submodules", "origin", exact);
  git(partial, "config", "core.sparseCheckout", "true");
  await writeFile(path.join(partial, ".git/info/sparse-checkout"), "/docs/\n");
  git(partial, "-c", "submodule.recurse=false", "checkout", "--detach", exact);
  assert.equal(await readFile(path.join(partial, "docs/README.md"), "utf8"), "current source fixture\n");
  assert.match(git(partial, "--no-lazy-fetch", "rev-list", "--objects", "--missing=print", exact), /^\?/m);
});
