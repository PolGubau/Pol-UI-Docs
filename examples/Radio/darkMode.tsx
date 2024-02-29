const code = `
import { Radio, theme } from "pol-ui";
import React from "react";
export const DarkMode = (): JSX.Element => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setValue] = React.useState(options[0]);
  return (
    <div className="dark flex flex-col gap-2 bg-secondary-900 p-4 rounded-xl">
      {options.map((option) => {
        return (
          <Radio
            key={option}
            checked={value === option}
            onClick={() => setValue(option)}
            value={option}
            label={option}
          />
        );
      })}
    </div>
  );
};
`;
export default code;
