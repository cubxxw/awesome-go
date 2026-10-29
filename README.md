# Go learning documentation

The existing articles, navigation and source examples live in [docs/README.md](docs/README.md) and [code/README.md](code/README.md).

## Local verification

Use Node 22.23.2 (see `.nvmrc`) and npm 12.0.2; the VuePress toolchain requires Node >=22.18.0. This site uses the pinned VuePress 2 RC core, Vite bundler and default theme; their RC version numbers differ by package family.

```bash
set -o pipefail
npm ci --ignore-scripts --strict-peer-deps --engine-strict
npm run docs:check-deps
output="$(mktemp -d)"
ln -s "$PWD/node_modules" "$output/node_modules"
npm run docs:build -- --dest "$output/dist" --temp "$output/temp" --cache "$output/cache" 2>&1 | tee "$output/build.log"
npm run docs:check-build -- "$output/dist" "$output/build.log"
```

The generated SSR modules resolve dependencies from their temporary directory, so the isolated directory links this exact installation. Use an isolated output directory for verification. `vuepress build` empties its destination first; the historical tracked `dist` and `.vuepress` generated files must not be overwritten or committed as a build proof. Full Git history is needed for accurate last-updated/contributor metadata.

The project npm configuration enforces Node engines and strict peer resolution during installation. The separate `npm ls --all` gate checks the installed dependency graph, including present optional peers; a successful install alone does not establish that all declared peer ranges are satisfied. Lockfile tarballs use the public npm registry; inherited mirror origins were normalized without changing package versions or integrity checks.

Local search works without a provider account. The previous search-only Algolia configuration is retained behind `AWESOME_GO_DOCSEARCH=1`; Vercel previews always use local search. No analytics hook is enabled. No new account, token or paid service is required.

## Incomplete integration acceptance

The pinned Markdown tab plugin still splits an `@tab` line inside a fenced code block. The existing Ubuntu/CentOS article has only its two intended tab headings and passes the output checks; the separate fenced-delimiter regression remains open. Full Markdown syntax compatibility is not accepted by this baseline.

GET-325 restores the build baseline, not complete production acceptance. The legacy Gitalk integration is unavailable without embedding its former OAuth secret. The old configured discussion repository could not be verified; no replacement owner or historical link is guessed, and no discussion is migrated or deleted. Credential revocation/rotation requires the account owner; source removal does not revoke historical exposure.

Three historical code gitlinks lack `.gitmodules` metadata; their paths and commit IDs remain unchanged. Unknown upstream URLs must not be guessed. The sync configuration still targets the same repository and full `docs/README.md` article index; it does not substitute these build instructions for that index. The existing cross-repository sync has a separate authentication failure and must not be used as a build test. This change grants no other repository write authority and does not run that workflow.

Both existing Vercel project checks and same-head CI remain release gates. The new CI job only installs the locked public dependencies, builds into runner-local temporary paths and checks output; it does not deploy. Keep the migration draft until comment, submodule and deployment acceptance gaps have been reviewed.
