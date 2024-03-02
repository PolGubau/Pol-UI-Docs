"use client";

import GoTopButton from "app/components/GoTopButton";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "pol-ui";
import React, { PropsWithChildren } from "react";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NextTopLoader color="#b49cff" height={2} showSpinner={false} />
      <GoTopButton />
      {children}
      <Toaster />
    </>
  );
};

export default AppProvider;
