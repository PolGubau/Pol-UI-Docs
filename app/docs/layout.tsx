import React from "react";
import Aside from "./Aside";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-[auto,1fr] ">
      <Aside />

      <main>{children}</main>
    </main>
  );
};

export default layout;
