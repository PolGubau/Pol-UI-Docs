"use client";
import Link from "next/link";
import { cn } from "pol-ui";
import React from "react";

export const Toc = ({ text }: { text: string }) => {
  const allHeadings = text.match(/(#{1,6})\s(.*)/g) ?? [];

  const headings =
    allHeadings?.map((heading: any) => {
      const level = heading.match(/(#{1,6})/g)[0].length;
      const text = heading.replace(/(#{1,6})\s/, "");
      return { level, text };
    }) ?? [];

  if (headings.length < 2) return null;
  return (
    <aside className="hidden md:flex flex-col border border-secondary/50 p-4 rounded-2xl">
      <h3 className="text-sm">Table of contents</h3>
      <ul className="flex flex-col">
        {headings.map((heading) => {
          const { text, level } = heading;
          return (
            <Link
              key={text + level}
              href={`#${text.toLowerCase().split(" ").join("-")}`}
              className="w-full flex flex-1"
            >
              <li
                className={cn(
                  "text-secondary-900 dark:text-secondary-400 text-xs px-2 hover:bg-primary-300 dark:hover:bg-primary-800 py-1 rounded-md w-full",
                  {
                    "pl-2": level === 2,
                    "pl-6": level === 3,
                    "pl-10": level === 4,
                    "pl-16": level === 5,
                    "pl-20": level === 6,
                  }
                )}
              >
                {text}
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};
