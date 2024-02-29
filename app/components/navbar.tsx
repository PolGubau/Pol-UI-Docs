"use client";
import { DarkThemeToggle, IconButton, Input, Navbar as UINavbar } from "pol-ui";
import { LayoutGroup } from "framer-motion";
import { TbBrandGithub, TbSearch } from "react-icons/tb";
import { metadata } from "lib/constants";
const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    href: "/docs",
    label: "Docs",
  },
];

export default function Navbar() {
  return (
    <UINavbar
      className="w-full"
      links={navItems}
      rightContent={
        <div className="flex gap-2">
          <DarkThemeToggle />
          <IconButton
            label="Github"
            href={metadata.links.github}
            target="_blank"
            rel="noopener"
          >
            <TbBrandGithub />
          </IconButton>
        </div>
      }
      leftContent={
        <img
          src="https://ui.polgubau.com/logo.png"
          className="h-6 sm:h-7"
          alt="Pol-ui Logo"
        />
      }
    />
  );
}
