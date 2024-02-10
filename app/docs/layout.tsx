import React from "react";
import Aside from "./Aside";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="grid grid-cols-[auto,1fr] gap-4 "
      style={{
        scrollbarGutter: "stable",
      }}
    >
      <Aside />

      <main>{children}</main>
    </main>
  );
};

export default layout;
