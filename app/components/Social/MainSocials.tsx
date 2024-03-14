"use client";
import React from "react";
import { metadata } from "lib/constants";
import { Chip } from "pol-ui";
import Link from "next/link";
import { TbBrandGithub, TbBrandNpm, TbUser } from "react-icons/tb";

const MainSocials = () => {
  return (
    <div className="flex gap-2 flex-wrap justify-center ">
      <Link href={metadata.links.npm}>
        <Chip
          className="flex gap-2 hover:brightness-75 transition-all"
          textClassName="flex items-center gap-1"
        >
          <TbBrandNpm />
          Npm
        </Chip>
      </Link>
      <Link href={metadata.links.github}>
        <Chip
          className="flex w-fit flex-row gap-2 hover:brightness-75 transition-all"
          textClassName="flex items-center gap-1"
        >
          <TbBrandGithub />
          Github
        </Chip>
      </Link>
      <Link href={metadata.creator.website}>
        <Chip
          className="flex w-fit flex-row gap-2 hover:brightness-75 transition-all"
          textClassName="flex items-center gap-1"
        >
          <TbUser />
          Creator
        </Chip>
      </Link>
    </div>
  );
};

export default MainSocials;
