"use client";

import { allBase, allComponents, allHelpers, allHooks } from "app/docs/Aside";
import { metadata } from "lib/constants";
import { useRouter } from "next/navigation";
import { Command, Modal } from "pol-ui";
import { useEffect } from "react";
import { TbBrandGithub, TbBrandNpm, TbUser } from "react-icons/tb";
import { useRecoilState } from "recoil";
import { commandAtom } from "./state";
export const CommandMenu = () => {
  const [open, setOpen] = useRecoilState(commandAtom);
  const toggle = () => setOpen(!open);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey || e.shiftKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelected = (path: string) => {
    router.push(`/docs/${path}`);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={toggle}
      style={{
        zIndex: 1000,
      }}
      contentClassName="p-0 bg-secondary-100 shadow-lg "
    >
      <Command>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Base">
            {allBase?.map((docs) => {
              return (
                <Command.Item
                  key={docs._id}
                  onSelect={() => handleSelected(docs.path)}
                >
                  {docs.title}
                </Command.Item>
              );
            })}
          </Command.Group>
          <Command.Group heading="Components">
            {allComponents?.map((docs) => {
              return (
                <Command.Item
                  key={docs._id}
                  onSelect={() => handleSelected(docs.path)}
                >
                  {docs.title}
                </Command.Item>
              );
            })}
          </Command.Group>
          <Command.Group heading="Hooks">
            {allHooks?.map((docs) => {
              return (
                <Command.Item
                  key={docs._id}
                  onSelect={() => handleSelected(docs.path)}
                >
                  {docs.title}
                </Command.Item>
              );
            })}
          </Command.Group>
          <Command.Group heading="Helpers">
            {allHelpers?.map((docs) => {
              return (
                <Command.Item
                  key={docs._id}
                  onSelect={() => handleSelected(docs.path)}
                >
                  {docs.title}
                </Command.Item>
              );
            })}
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Interest links">
            <Command.Item
              value="github-link"
              onSelect={() => router.push(metadata.links.github)}
              className="flex gap-2 items-center"
            >
              <TbBrandGithub />
              Github
            </Command.Item>
            <Command.Item
              value="npm-link"
              onSelect={() => router.push(metadata.links.npm)}
              className="flex gap-2 items-center"
            >
              <TbBrandNpm />
              NPM repo
            </Command.Item>
            <Command.Item
              value={`author ${metadata.creator.name}`}
              onSelect={() => router.push(metadata.creator.website)}
              className="flex gap-2 items-center"
            >
              <TbUser />
              Author: {metadata.creator.name}
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </Modal>
  );
};
