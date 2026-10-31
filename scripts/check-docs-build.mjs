import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { stripVTControlCharacters } from "node:util";
import { createRequire } from "node:module";

const [dest, buildLog] = process.argv.slice(2);
assert(dest && buildLog, "Pass the isolated output directory and complete build log");
const log = stripVTControlCharacters(await readFile(buildLog, "utf8"));
assert(!/^(?:Error|TypeError|ReferenceError|RangeError|SyntaxError)(?:\s+\[[^\]]+\])?:/m.test(log), "Every page must render without SSR exceptions even when the CLI exits zero");
const output = path.resolve(dest);
for (const page of ["index.html", "404.html", "markdown/1.html", "Gomd_super/index.html", "go-advancend/index.html"]) {
  await access(path.join(output, page));
}
const home = await readFile(path.join(output, "index.html"), "utf8");
const article = await readFile(path.join(output, "markdown/1.html"), "utf8");
const expectedVuePress = createRequire(import.meta.url)("vuepress/package.json").version;
assert(home.includes(`content="VuePress ${expectedVuePress}"`) && article.includes(`content="VuePress ${expectedVuePress}"`), "Serve the installed VuePress generator, never historical tracked output");
const advanced = await readFile(path.join(output, "go-advancend/index.html"), "utf8");
assert(advanced.includes("第21节 go 语言切片原理") && advanced.includes("第50节"), "Render the formerly empty advanced chapter links with their existing article headings");
assert(home.includes("Golang"), "Keep the existing home page title");
assert(home.includes("/Gomd_super/"), "Keep the advanced navigation route");
assert(home.includes('type="checkbox"'), "Render the existing task lists");
assert(!article.includes("code-group-item"), "Migrate the existing code group without exposing obsolete markers");
assert(article.includes('role="tablist"'), "Keep the existing Ubuntu/CentOS code tabs");
assert(article.includes("ubuntu") && article.includes("centos"), "Keep both environment instructions");
assert(article.includes("历史评论"), "Expose the explicit legacy comment recovery state");
assert(!article.includes("hm.baidu.com"), "Verification must not inject legacy analytics");
assert(!article.includes("clientSecret"), "Do not embed the former OAuth secret configuration");
console.log("Documentation build output checks passed");
