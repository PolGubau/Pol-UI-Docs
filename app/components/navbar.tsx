"use client";
import { DarkThemeToggle, IconButton, Input } from "pol-ui";
import { LayoutGroup } from "framer-motion";
import { TbBrandGithub, TbSearch } from "react-icons/tb";
import NavItem from "./nav-item";
import { metadata } from "lib/constants";
const navItems = {
  "/": {
    name: "Home",
  },
  "/docs": {
    name: "Docs",
  },
};

export default function Navbar() {
  return (
    <aside className="mb-12 tracking-tight flex justify-center ">
      <div className="lg:sticky lg:top-20 flex gap-2 items-center w-full md:justify-between">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative p-2 fade md:overflow-auto md:relative w-full "
            id="nav"
          >
            {Object.entries(navItems).map(([path, { name }]) => {
              return <NavItem key={path} path={path} name={name} />;
            })}
          </nav>
          <Input placeholder="Search documentation" />
          <IconButton>
            <TbSearch />
          </IconButton>
          <IconButton href={metadata.links.github} target="_blank">
            <TbBrandGithub />
          </IconButton>
          <DarkThemeToggle />
        </LayoutGroup>
      </div>
    </aside>
  );
}
