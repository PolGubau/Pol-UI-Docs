const code = `
import { IconButton, theme, RoundedSizes } from "pol-ui";
import { TbTrash } from "react-icons/tb";
import React from "react";

const IconButtonComponent = () => {
  return (
    <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.button.rounded).map(v => (
      <div className="flex flex-col gap-4" key={v}>
        <span>{v}</span>
        <IconButton {...args} rounded={v as RoundedSizes}>
          <TbTrash />
        </IconButton>
      </div>
    ))}
  </div>
  );
};
export default IconButtonComponent;
`;
export default code;
