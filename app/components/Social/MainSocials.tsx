import React from "react";
import SocialLink from "./SocialLink";
import { metadata } from "lib/constants";
import { TbBrandGithub, TbBrandNpm, TbUser } from "react-icons/tb";

const MainSocials = () => {
  return (
    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
      <SocialLink
        href={metadata.links.npm}
        label="Linkedin"
        icon={<TbBrandNpm />}
      />
      <SocialLink
        href={metadata.links.github}
        label="Github"
        icon={<TbBrandGithub />}
      />
      <SocialLink
        href={metadata.creator.website}
        label={"Creator"}
        icon={<TbUser />}
      />
    </div>
  );
};

export default MainSocials;
