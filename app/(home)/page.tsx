import { readFileSync } from "fs";
import Header from "../components/Layout/Header";
import { ContainerScrollComp } from "./ContainerScroll";
import FloatingComponents from "./FloatingComponents";
import { readdir } from "fs/promises";
export default async function Page() {
  // get directory info about pol-ui
  // const path = require("path");
  // const url = "./node_modules/pol-ui/lib/esm/components";

  // // get all inner files and dirs inside of /lib
  // const files = await readdir(url, { withFileTypes: true });
  // const getOneComponent = (componentName: string) => {
  //   return readFileSync(
  //     path.join(url, componentName, `${componentName}.js`),
  //     "utf-8"
  //   );
  // };
  // const allInfo = files.map((f) => {
  //   const componentUrl = path.join(url, f.name);

  //   const componentFiles = readdir(componentUrl, { withFileTypes: true });
  //   // get the main component file, if the folder is called Alert, the main file is Alert.js

  //   const mainFileUrl = path.join(componentUrl, `${f.name}.js`);

  //   return {
  //     name: f.name,
  //     homePath: componentUrl,
  //     mainFile: mainFileUrl,
  //     code: getOneComponent(f.name),
  //     componentFiles,
  //     isDir: f.isDirectory(),
  //     isFile: f.isFile(),
  //   };
  // });

  return (
    <main className="flex flex-col justify-center  text-center">
      {/* <pre>{JSON.stringify(allInfo, null, 2)}</pre> */}
      <Header />
      <FloatingComponents />
      <ContainerScrollComp />
    </main>
  );
}
