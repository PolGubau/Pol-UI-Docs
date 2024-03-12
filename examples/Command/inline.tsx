const code = `
import { Command } from "pol-ui";
import React from "react";

export const CommandMenu = () => {
  return (
    <Command
      label="Command Menu"
      className="bg-white rounded-xl p-2 shadow-xl flex justify-center max-w-[500px]"
    >
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command>
  );
};
`;
export default code;
