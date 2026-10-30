import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { createWriteStream } from "node:fs";
import { lstat, mkdir, readFile, rm, symlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { finished } from "node:stream/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const shaPattern = /^[0-9a-f]{40}$/;

export function assertRuntime(nodeVersion, npmVersion) {
  const [major, minor] = nodeVersion.replace(/^v/, "").split(".").map(Number);
  assert(major === 22 && minor >= 18, "Use Node 22 >=22.18.0");
  assert.equal(npmVersion, "12.0.2", "Use the actual npm 12.0.2 executable");
}

export function selectCommit(environment, gitCommit) {
  const declared = environment.VERCEL_GIT_COMMIT_SHA || environment.GITHUB_SHA;
  if (declared) assert(shaPattern.test(declared), "Invalid declared commit SHA");
  if (gitCommit) assert(shaPattern.test(gitCommit), "Invalid checked-out commit SHA");
  if (declared && gitCommit) assert.equal(declared, gitCommit, "Checkout and declared commit differ");
  const commit = gitCommit || declared;
  assert(commit, "A verified source commit is required");
  return commit;
}

function factsFor(root) {
  const npmCli = process.env.npm_execpath;
  assert(npmCli, "Run through npm 12.0.2: npm run docs:build:verified");
  const version = spawnSync(process.execPath, [npmCli, "--version"], { encoding: "utf8", cwd: root });
  assert.equal(version.status, 0, "Cannot verify the npm executable");
  const git = spawnSync("git", ["rev-parse", "HEAD"], { encoding: "utf8", cwd: root });
  return { npmCli, npmVersion: version.stdout.trim(), nodeVersion: process.version,
    commit: selectCommit(process.env, git.status === 0 ? git.stdout.trim() : undefined) };
}

export async function executeStep({ command, args, cwd, logFile }) {
  const log = createWriteStream(logFile, { flags: "w" });
  const logFinished = finished(log);
  logFinished.catch(() => {});
  let result;
  try {
    result = await new Promise((resolve, reject) => {
      const child = spawn(command, args, { cwd, env: process.env, stdio: ["ignore", "pipe", "pipe"] });
      child.stdout.on("data", chunk => { process.stdout.write(chunk); log.write(chunk); });
      child.stderr.on("data", chunk => { process.stderr.write(chunk); log.write(chunk); });
      child.on("error", reject);
      child.on("close", (code, signal) => resolve({ code, signal }));
    });
  } finally {
    log.end();
    await logFinished;
  }
  assert.equal(result.code, 0, `Command failed: exit=${result.code}, signal=${result.signal}`);
}

async function requirePlainDirectory(directory) {
  const info = await lstat(directory).catch(error => {
    if (error.code !== "ENOENT") throw error;
    return null;
  });
  assert(!info || (info.isDirectory() && !info.isSymbolicLink()), `Refuse linked/non-directory output: ${directory}`);
}

export async function buildVerifiedDocs({ root = projectRoot, facts, execute = executeStep } = {}) {
  const artifacts = path.join(root, ".build-artifacts");
  const output = path.join(artifacts, "verified-docs");
  const dist = path.join(output, "dist");
  await requirePlainDirectory(artifacts);
  await requirePlainDirectory(output);
  // This constant ignored directory is the only cleanup scope; historical dist is untouched.
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  try {
    const runtime = facts || factsFor(root);
    assertRuntime(runtime.nodeVersion, runtime.npmVersion);
    assert(shaPattern.test(runtime.commit), "A verified source commit is required");
    await symlink(path.join(root, "node_modules"), path.join(output, "node_modules"), "dir");
    const run = (step, args) => execute({ step, command: process.execPath, args, cwd: root,
      logFile: path.join(output, `${step}.log`), dist, output });
    await run("graph", [runtime.npmCli, "ls", "--all"]);
    await run("build", [runtime.npmCli, "run", "docs:build", "--", "--dest", dist,
      "--temp", path.join(output, "temp"), "--cache", path.join(output, "cache")]);
    await run("output", [path.join(root, "scripts/check-docs-build.mjs"), dist, path.join(output, "build.log")]);
    const identity = { schemaVersion: 1, sourceCommit: runtime.commit,
      lockSHA256: createHash("sha256").update(await readFile(path.join(root, "package-lock.json"))).digest("hex"),
      nodeVersion: runtime.nodeVersion, npmVersion: runtime.npmVersion,
      vuepressVersion: JSON.parse(await readFile(path.join(root, "node_modules/vuepress/package.json"), "utf8")).version,
      builtAt: new Date().toISOString() };
    await writeFile(path.join(dist, "build-info.json"), JSON.stringify(identity, null, 2) + "\n");
    console.log(`Verified documentation: ${runtime.commit}`);
    return identity;
  } catch (error) {
    // Preserve diagnostic logs while leaving no publishable output after any failure.
    await rm(dist, { recursive: true, force: true });
    throw error;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await buildVerifiedDocs();
}
