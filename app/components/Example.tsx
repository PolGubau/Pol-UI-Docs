"use client";

import React, { PropsWithChildren } from "react";
import { IconButton, toast, useBoolean, useCopyToClipboard } from "pol-ui";
import { cn } from "lib/utils";
import { motion } from "framer-motion";
import {
  TbBrandStorybook,
  TbCheck,
  TbChevronDown,
  TbCopy,
} from "react-icons/tb";
const Example = ({
  name = "Component",
  children,
  code = "",
  storybookUrl = "",
  embedUrl = "",
  height = 400,
}: PropsWithChildren<{
  name?: string;
  code?: string;
  storybookUrl?: string;
  embedUrl?: string;
  height: number;
}>) => {
  const closedVariant = {
    height: 200,
    overflow: "hidden",
  };

  const openVariant = {
    height: "auto",
    overflow: "visible",
  };

  const { value, toggle } = useBoolean(false);
  const { copiedText, copy } = useCopyToClipboard();
  const [justCopied, setJustCopied] = React.useState(false);

  React.useEffect(() => {
    if (copiedText) {
      setJustCopied(true);
      setTimeout(() => {
        setJustCopied(false);
      }, 1000);
    }
  }, [copiedText]);

  const parsedChildrenToCopy: string =
    code ?? children?.toString() ?? "No children to copy";

  return (
    <div className="max-w-screen w-full rounded-[25px] bg-primary bg-gradient-to-br from-primary-200 to-blue-200 shadow-inner shadow-primary-500/10 dark:border-none  dark:bg-gray-700 dark:from-purple-700/10 dark:to-cyan-700/10 dark:shadow gap-1 p-[5px]">
      <header className="flex justify-between px-4 rounded-t-2xl items-center">
        <p className="py-0 fonst-medium text-lg p-0 first-letter:uppercase">
          {name}
        </p>
        {storybookUrl && (
          <IconButton
            outline
            size="sm"
            href={
              "https://pol-ui-storybook.vercel.app/?path=/story/components-" +
              storybookUrl
            }
            label="Open in storybook"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandStorybook size={20} />
          </IconButton>
        )}
      </header>
      <div className="rounded-t-[20px] flex justify-center items-center relative">
        <iframe
          title={embedUrl}
          className="rounded-t-[20px]"
          src={
            "https://pol-ui-storybook.vercel.app/iframe.html?args=&id=components-" +
            embedUrl
          }
          width="100%"
          height={height}
        ></iframe>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-white/0 to-secondary-50 dark:to-secondary-900 z-20 pointer-events-none" />
      </div>

      <motion.div
        animate={value ? openVariant : closedVariant}
        transition={{ duration: 0.5, type: "spring" }}
        className={cn(
          "overflow-hidden relative  rounded-b-[20px] bg-secondary-50 dark:bg-secondary-900"
        )}
      >
        {children}
        <div className="absolute bottom-6 right-6 z-10  flex flex-col gap-4">
          <IconButton
            color={justCopied ? "success" : "primary"}
            onClick={() => {
              copy(parsedChildrenToCopy);
              setJustCopied(true);
              toast({
                title: "Copied!",
                description: "The code was copied to your clipboard",
              });
            }}
          >
            {justCopied ? <TbCheck size={20} /> : <TbCopy size={20} />}
          </IconButton>
          <IconButton className="  bg-primary " onClick={toggle}>
            <TbChevronDown
              size={20}
              className={cn("transform", { "rotate-180": value })}
            />
          </IconButton>
        </div>
        {!value && (
          <div className="bg-gradient-to-b from-transparent mt-6 pointer-events-none from-50% to-secondary-50 dark:to-secondary-900 absolute top-0 left-0 inset-0"></div>
        )}
      </motion.div>
    </div>
  );
};

export default Example;
