"use client";
import { Button } from "pol-ui";
import React from "react";

interface SocialLinkProps {
  href: string;
  label: React.ReactNode;
  icon: React.ReactNode;
}

const SocialLink = ({ href, label, icon }: SocialLinkProps) => {
  return (
    <Button
      href={href}
      rounded="full"
      color="secondary"
      outline
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {label}
    </Button>
  );
};

export default SocialLink;
