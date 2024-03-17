"use client";

import { CommandMenu } from "app/components/Cmdk/Command";
import GoTopButton from "app/components/GoTopButton";
import Navbar from "app/components/navbar";
import NextTopLoader from "nextjs-toploader";
import { PoluiProvider, Toaster } from "pol-ui";
import React, { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <RecoilRoot>
      <NextTopLoader color="#b49cff" height={2} showSpinner={false} />
      <GoTopButton />
      <CommandMenu />
      <Navbar />

      <PoluiProvider>{children}</PoluiProvider>
      <Toaster />
    </RecoilRoot>
  );
};

export default AppProvider;
