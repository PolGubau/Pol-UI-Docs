const code = `
import { Alert } from "pol-ui";
import React from "react";
import { TbBulb } from "react-icons/tb";

const AlertComponent = () => {
  return (
    <Alert icon={TbBulb}>
      An alert could be an incredible useful component when showing an important
      advice is needed. You can easily customize it's colors, actions and texts.
      Use it for feedback or warnings.
    </Alert>
  );
};
export default AlertComponent;
`;
export default code;
