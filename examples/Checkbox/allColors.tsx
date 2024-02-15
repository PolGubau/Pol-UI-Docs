const code = `
import { Checkbox, ColorsEnum } from "pol-ui";

import React from "react";

const CheckboxComponent = () => {
  return (
    <div className="flex flex-wrap gap-8">
    {Object.keys(ColorsEnum).map(status => (
      <div key={status} className="flex flex-col items-center justify-center">
        <Checkbox color={status as keyof typeof ColorsEnum} defaultChecked label={status} />
      </div>
    ))}
  </div>
  );
};
export default CheckboxComponent;
`;
export default code;
