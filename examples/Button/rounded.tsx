const code = `
import { Button } from "pol-ui";

import React from "react";
const ButtonComponent = () => {
  return (<div className="flex gap-3 flex-wrap">
    {Object.keys(theme.button.rounded).map(rounded => (
      <Button key={rounded} {...args} rounded={rounded as RoundedSizes}>
        {rounded}
      </Button>
    ))}
  </div>);
};
export default ButtonComponent;
`;
export default code;
