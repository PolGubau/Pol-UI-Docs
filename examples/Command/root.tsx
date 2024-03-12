const code = `
import { Modal, Command, useBoolean } from "pol-ui";
import React from "react";

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
              <Command.Item onSelect={() => toast({ title: "Calendar" })}>
                Calendar
              </Command.Item>
              <Command.Item onSelect={() => toast({ title: "Emoji" })}>
                Search Emoji
              </Command.Item>
              <Command.Item onSelect={() => toast({ title: "calculator" })}>
                Calculator
              </Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Settings">
              <Command.Item
                value="profile"
                onSelect={() => toast({ title: "Profile" })}
                className="flex gap-2 items-center"
              >
                <TbUser />
                Profile
              </Command.Item>
              <Command.Item onSelect={() => toast({ title: "Billing" })}>
                Billing
              </Command.Item>
              <Command.Item onSelect={() => toast({ title: "Settings" })}>
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
`;
export default code;
