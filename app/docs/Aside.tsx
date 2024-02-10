"use client";

import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "lib/utils";

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
  const pathname = usePathname();

  // some docs have a order field, so we sort them by that, otherwise alphabetically
  const allDocsSorted = allDocs?.sort((a, b) =>
    a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  const allBase = allDocsSorted?.filter((d) => d.doc_type === "base");

  const allComponents = allDocsSorted?.filter(
    (d) => d.doc_type === "component"
  );

  return (
    <div className="min-w-[150px] sticky top-6 max-h-screen h-full flex flex-col gap-6">
      <AnimatePresence mode="wait">
        <ol className="flex flex-col ">
          {allBase?.map((docs) => {
            return (
              <AsideLink key={docs._id} path={docs.path}>
                {docs.title}
              </AsideLink>
            );
          })}
        </ol>

        <section className="flex flex-col gap-2">
          <span className="text-sm text-secondary-700 dark:secondary-300">
            Components
          </span>

          <ol>
            {allComponents?.map((c) => {
              return (
                <AsideLink key={c._id} path={c.path}>
                  {c.title}
                </AsideLink>
              );
            })}
          </ol>
        </section>
      </AnimatePresence>
    </div>
  );
};

export default Aside;
