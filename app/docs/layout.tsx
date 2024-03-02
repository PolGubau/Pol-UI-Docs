import React from "react";
import Aside from "./Aside";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative gap-4 min-h-screen flex w-screen">
      <div className="hidden md:flex ">
        <Aside />
      </div>
      <main className="p-4 w-full">{children}</main>
    </main>
  );
};

export default layout;
