"use client";

import { Toaster } from "pol-ui";
import React, { PropsWithChildren } from "react";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default AppProvider;
