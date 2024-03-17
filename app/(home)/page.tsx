import Header from "../components/Layout/Header";
import { ContainerScrollComp } from "./ContainerScroll";
import FloatingComponents from "./FloatingComponents";

export default async function Page() {
  return (
    <main className="flex flex-col justify-center mx-16 text-center">
      <Header />
      <FloatingComponents />
      <ContainerScrollComp />
    </main>
  );
}
