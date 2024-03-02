import React from "react";
import Aside from "./Aside";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-[auto,1fr] gap-6 h-[95hv] ">
      <Aside />

      <main className="p-4">{children}</main>
    </main>
  );
};

export default layout;
