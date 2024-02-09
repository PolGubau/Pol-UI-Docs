"use client";
import React from "react";
import { motion } from "framer-motion";
import { Docs } from "contentlayer/generated";
import { BigLink } from "app/components/BigLink";
const DocsList = ({ docs }: { docs: Docs[] }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        type: "spring",
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4"
    >
      {docs.map((post) => (
        <motion.li key={post._id} variants={item}>
          <BigLink
            slug={post.slug}
            name={post.title}
            className="pl-8"
          ></BigLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default DocsList;
