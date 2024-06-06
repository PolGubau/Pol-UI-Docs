import Header from "../components/Layout/Header";
import { ContainerScrollComp } from "./ContainerScroll";
import FloatingComponents from "./FloatingComponents";
import { readdir } from "fs/promises";
import { readFileSync } from "fs";
export default async function Page() {
  // get directory info about pol-ui
  const path = require("path");
  const url = "./node_modules/pol-ui/lib/esm/components";

  // get all inner files and dirs inside of /lib
  const files = await readdir(url, { withFileTypes: true });

  const dirs = files.filter((f) => f.isDirectory());
  const innerFiles = files.filter((f) => f.isFile());

  const allInfo = files.map((f) => {
    const componentUrl = path.join(url, f.name);

    const componentFiles = readdir(componentUrl, { withFileTypes: true });
    // get the main component file, if the folder is called Alert, the main file is Alert.js

    const mainFileUrl = path.join(componentUrl, `${f.name}.js`);

    const mainFileCode = readFileSync(mainFileUrl, "utf8");

    return {
      name: f.name,
      homePath: componentUrl,
      mainFile: mainFileUrl,
      code: mainFileCode,
      componentFiles,
      isDir: f.isDirectory(),
      isFile: f.isFile(),
    };
  });

  return (
    <main className="flex flex-col justify-center  text-center">
      <pre>{JSON.stringify(allInfo, null, 2)}</pre>
      <Header />
      <FloatingComponents />
      <ContainerScrollComp />
    </main>
  );
}
