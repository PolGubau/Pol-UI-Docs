import { metadata } from "lib/constants";
import Link from "next/link";
import React from "react";
import MainSocials from "../Social/MainSocials";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-24 sm:mb-20 gap-6 px-10 text-neutral-700 dark:text-neutral-300 text-center justify-center md:justify-start md:text-left">
      <Link href={metadata.links.github} className="sm:text-3xl font-semibold">
        Proudly Open Source
      </Link>
      <MainSocials />
      <p>
        Made with <span className="text-primary font-semibold">love</span> and
        Pol-ui by{" "}
        <Link href={metadata.creator.website} title="Visit my website">
          {metadata.creator.name}
        </Link>
      </p>
    </div>
  );
};

export default Footer;
