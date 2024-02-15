const code = `
import { Checkbox } from "pol-ui";

import React from "react";

const CheckboxComponent = () => {
  return (
    <Checkbox
      label="Controlled checkbox"
      color={ColorsEnum.primary}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};
export default CheckboxComponent;
`;
export default code;
