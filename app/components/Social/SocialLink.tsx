"use client";
import Link from "next/link";
import { Button } from "pol-ui";
import React from "react";

interface SocialLinkProps {
  href: string;
  label: React.ReactNode;
  icon: React.ReactNode;
}

const SocialLink = ({ href, label, icon }: SocialLinkProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button rounded="full" color="secondary" variant={"outline"}>
        {icon}
        {label}
      </Button>
    </Link>
  );
};

export default SocialLink;
