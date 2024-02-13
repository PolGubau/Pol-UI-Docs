const code = `
import { CardStack } from "pol-ui";
import { twMerge } from "tailwind-merge";

import React from "react";
const Example = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge(
        "w-[150px] text-2xl h-[150px] rounded-3xl bg-primary grid place-items-center",
        props.className
      )}
    >
      {props.children ?? "Example"}
    </div>
  );
};
const CardStackComponent = () => {
  return (
    <CardStack>
      <Example className="bg-red-200">1</Example>
    </CardStack>
  );
};
export default CardStackComponent;
`;
export default code;
