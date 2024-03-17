"use client";
import React from "react";
import { metadata } from "lib/constants";
import { Button } from "pol-ui";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row gap-8 justify-center items-center mt-40 mb-40">
      <div className="flex flex-col gap-4 text-center ">
        <h1 className="font-medium md:font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter  balance">
          {metadata.longName}
        </h1>
        <h2 className="text-xl md:text-2xl opacity-75 balance ">
          {metadata.slogan}
        </h2>
        {/* <MainSocials /> */}

        <div className="flex gap-2 items-center justify-center">
          <Button href="/docs" label="Documentation" rounded="xl">
            Documentation
          </Button>
          <Button
            href={metadata.links.github}
            label="Github"
            color="secondary"
            rounded="xl"
          >
            Github
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
