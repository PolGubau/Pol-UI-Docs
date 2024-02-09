import { metadata } from "lib/constants";
import Link from "next/link";
import React from "react";
import MainSocials from "../Social/MainSocials";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-24 mb-20 gap-6 text-neutral-700 dark:text-neutral-300 text-center justify-center md:justify-start md:text-left">
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
