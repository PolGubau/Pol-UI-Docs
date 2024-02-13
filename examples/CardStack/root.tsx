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
      <Example className="bg-green-200">2</Example>
      <Example className="bg-blue-200">3</Example>
      <Example className="bg-purple-200">4</Example>
      <Example className="bg-orange-200">5</Example>
    </CardStack>
  );
};
export default CardStackComponent;
`;
export default code;
