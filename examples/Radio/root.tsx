const code = `
import { Radio } from "pol-ui";
import { useState } from "react";

export const RadioComponent = (): JSX.Element => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setValue] = useState(options[0]);
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl">
      {options.map((option) => {
        return (
          <Radio
            key={option}
            checked={value === option}
            onChange={() => setValue(option)}
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
