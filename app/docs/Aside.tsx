"use client";

import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import { Sidebar, SidebarItem, useBoolean } from "pol-ui";
import { TbFishHook, TbHelpSquareRounded, TbLayout } from "react-icons/tb";

const Aside = () => {
  // some docs have a order field, so we sort them by that, otherwise alphabetically
  const allDocsSorted = allDocs?.sort((a, b) =>
    a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  const pathname = usePathname();
  const isActive = (path: string) => {
    const pathnameSame = pathname === "/docs/" + path;
    return pathnameSame;
  };

  const allBase = allDocsSorted?.filter((d) => d.doc_type === "base");

  const allComponents = useMemo(
    () => allDocsSorted?.filter((d) => d.doc_type === "component"),
    []
  );

  const allHooks = useMemo(
    () => allDocsSorted?.filter((d) => d.doc_type === "hook"),
    []
  );

  const allHelpers = useMemo(
    () => allDocsSorted?.filter((d) => d.doc_type === "helper"),
    []
  );

  const { value, toggle } = useBoolean(false);
  return (
    <section
      className="h-auto "
      style={{
        scrollbarWidth: "thin",
      }}
    >
      {pathname}
      <div className="sticky top-[75px]">
        <Sidebar
          toggle={toggle}
          collapsed={value}
          collapsable={true}
          className="h-[92vh] bg-secondary-50 dark:bg-secondary-900"
        >
          {allBase?.map((docs) => {
            return (
              <SidebarItem
                active={isActive(docs.path)}
                key={docs._id}
                href={"/docs/" + docs.path}
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
                  active={isActive(c.path)}
                  href={"/docs/" + c.path}
                  className=" bg-secondary-50 dark:bg-secondary-900"
                >
                  {c.title}
                </SidebarItem>
              );
            })}
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Hooks" icon={TbFishHook}>
            {allHooks?.map((c) => {
              return (
                <SidebarItem
                  key={c._id}
                  active={isActive(c.path)}
                  href={"/docs/" + c.path}
                  className=" bg-secondary-50 dark:bg-secondary-900"
                >
                  {c.title}
                </SidebarItem>
              );
            })}
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Helpers" icon={TbHelpSquareRounded}>
            {allHelpers?.map((c) => {
              return (
                <SidebarItem
                  key={c._id}
                  active={isActive(c.path)}
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
