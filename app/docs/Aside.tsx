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

  return (
    <ol className="min-w-[300px]">
      <AnimatePresence mode="wait">
        {allDocs?.map((docs) => {
          const isActive = pathname === "/docs/" + docs.path;
          return (
            <li key={docs.path} className="p-2 relative">
              {isActive && (
                <motion.span
                  layoutId="aside_dot"
                  className={cn(
                    "absolute -left-3 w-3 h-3 top-[14px] rounded-full bg-primary"
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
      </AnimatePresence>
    </ol>
  );
};

export default Aside;
