"use client";

import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "lib/utils";
const Aside = () => {
  const pathname = usePathname();

  const baseUrl = "/docs";

  // some docs have a order field, so we sort them by that, otherwise alphabetically
  const allDocsSorted = allDocs?.sort((a, b) =>
    a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  const allBase = allDocsSorted?.filter((d) => d.doc_type === "base");

  const allComponents = allDocsSorted?.filter(
    (d) => d.doc_type === "component"
  );

  return (
    <div className="min-w-[300px] sticky top-6 max-h-screen flex flex-col gap-6">
      <AnimatePresence mode="wait">
        <ol className="flex flex-col gap-2">
          {allBase?.map((docs) => {
            const isActive = pathname === "/docs/" + docs.path;
            return (
              <li key={docs._id} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="aside_dot"
                    className={cn(
                      "absolute -left-5 w-3 h-3 rounded-full bg-primary top-[5px]"
                    )}
                  />
                )}
                <Link
                  href={`${baseUrl}/${docs.path}`}
                  className={cn("transition-colors", {
                    "text-primary dark:text-primary": isActive,
                  })}
                >
                  {docs.title}
                </Link>
              </li>
            );
          })}
        </ol>

        <section className="flex flex-col gap-2">
          <span className="text-sm text-secondary-700 dark:secondary-300">
            Components
          </span>

          <ol>
            {allComponents?.map((c) => {
              const isActive = pathname === "/docs/" + c.path;
              return (
                <li key={c._id} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="aside_dot"
                      className={cn(
                        "absolute -left-5 w-3 h-3 rounded-full bg-primary top-[5px]"
                      )}
                    />
                  )}
                  <Link
                    href={`${baseUrl}/${c.path}`}
                    className={cn("transition-colors", {
                      "text-primary dark:text-primary": isActive,
                    })}
                  >
                    {c.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </AnimatePresence>
    </div>
  );
};

export default Aside;
