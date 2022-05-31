import { $ } from "zx";
import { io } from "fsxx";
import glob from "glob";
import fs from "fs";
import path from "path";

interface PkgData {
  name: string;
  version: string;
}

io.json.spaces = 2;

const { data: pkg } = await io.json<PkgData>`package.json`;

const mainVersion = pkg.version;

glob.sync("packages/*").forEach(async (target) => {
  const stat = fs.statSync(target);
  if (!stat.isDirectory()) {
    return;
  }

  const { data: subPkg, save } = await io.json<PkgData>`${path.join(
    target,
    "package.json",
  )}`;
  subPkg.version = mainVersion;
  await save();

  console.log(`> publish ${subPkg.name}@${subPkg.version}`);

  await $`npm publish ${target} --access public`;
});

await $`git add .`;
await $`git commit -m "chore: release ${mainVersion}"`;
await $`git push`;
await $`git tag ${mainVersion}`;
await $`git push --tags`;
