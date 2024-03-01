"use client";

import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import { Sidebar, SidebarItem, useBoolean } from "pol-ui";
import { TbLayout } from "react-icons/tb";

const AsideLink = ({ path, children }) => {
  const pathname = usePathname();
  const baseUrl = "/docs";
  const isActive = pathname === baseUrl + "/" + path;

  return (
    <li className="relative">
      {isActive && (
        <motion.span
          layoutId="aside_dot"
          className={cn(
            "absolute -left-5 w-3 h-3 rounded-full bg-primary top-[8px]"
          )}
        />
      )}
      <Link
        href={baseUrl + "/" + path}
        className={cn(
          "px-2 transition-colors hover:bg-primary/20 flex flex-1 w-full py-1 rounded-lg text-sm text-secondary-800 dark:secondary-100 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary ",
          {
            "text-primary dark:text-primary": isActive,
          }
        )}
      >
        {children}
      </Link>
    </li>
  );
};

const Aside = () => {
  // some docs have a order field, so we sort them by that, otherwise alphabetically
  const allDocsSorted = allDocs?.sort((a, b) =>
    a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  const allBase = allDocsSorted?.filter((d) => d.doc_type === "base").reverse();
  console.log(allBase);

  const allComponents = allDocsSorted?.filter(
    (d) => d.doc_type === "component"
  );

  const { value, toggle } = useBoolean(false);
  return (
    <section className="min-h-screen ">
      <div className="sticky top-0 ">
        <Sidebar
          toggle={toggle}
          collapsed={value}
          collapsable={true}
          className="h-[92vh] bg-secondary-50 dark:bg-secondary-900"
        >
          {allBase?.map((docs) => {
            return (
              <SidebarItem
                key={docs._id}
                href={docs.path}
                className=" bg-secondary-50 dark:bg-secondary-900"
              >
                {docs.title}
              </SidebarItem>
            );
          })}

          <Sidebar.Collapse open label="Components" icon={TbLayout}>
            {allComponents?.map((c) => {
              return (
                <SidebarItem
                  key={c._id}
                  href={"/docs/" + c.path}
                  className=" bg-secondary-50 dark:bg-secondary-900"
                >
                  {c.title}
                </SidebarItem>
              );
            })}
          </Sidebar.Collapse>
        </Sidebar>
      </div>
    </section>
  );
};

export default Aside;
