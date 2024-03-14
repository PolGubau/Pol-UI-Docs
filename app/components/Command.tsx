import React, { useEffect } from "react";
import { useBoolean, Modal, Command, Button } from "pol-ui";
import { TbUser } from "react-icons/tb";
export const CommandMenu = () => {
  const { value, toggle } = useBoolean(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>

      <Modal
        open={value}
        onOpenChange={toggle}
        contentClassName="p-0   bg-secondary-100 shadow-lg "
      >
        <Command>
          <Command.Input placeholder="Type a command or search..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Suggestions">
              <Command.Item onSelect={() => alert({ title: "Calendar" })}>
                Calendar
              </Command.Item>
              <Command.Item onSelect={() => alert({ title: "Emoji" })}>
                Search Emoji
              </Command.Item>
              <Command.Item onSelect={() => alert({ title: "calculator" })}>
                Calculator
              </Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Settings">
              <Command.Item
                value="profile"
                onSelect={() => alert({ title: "Profile" })}
                className="flex gap-2 items-center"
              >
                <TbUser />
                Profile
              </Command.Item>
              <Command.Item onSelect={() => alert({ title: "Billing" })}>
                Billing
              </Command.Item>
              <Command.Item onSelect={() => alert({ title: "Settings" })}>
                Settings
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </Modal>
      <Button onClick={toggle}>Open Command</Button>
    </>
  );
};
