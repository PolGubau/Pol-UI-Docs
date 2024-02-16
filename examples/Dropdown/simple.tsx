const code = `
import { DropdownItem, Dropdown } from "pol-ui";
import React from "react";

const DropdownComponent = () => {
  return (
    <Dropdown label="Dropdown">
    <DropdownItem label="Undo" onClick={() => console.log("Undo")} />
    <DropdownItem label="Redo" disabled />
    <DropdownItem label="Cut text " shortcut="⌘Z" />
    <Dropdown label="Share">
      <DropdownItem label="Mail" />
      <DropdownItem label="Instagram" />
    </Dropdown>
  </Dropdown>
  );
};
export default DropdownComponent;
`;
export default code;
