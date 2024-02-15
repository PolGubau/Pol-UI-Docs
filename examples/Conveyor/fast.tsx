const code = `
import { Conveyor } from "pol-ui";

import React from "react";

const ConveyorComponent = () => {
  return (
    <Conveyor direction="right" speed="fast">
    {['1', '2', '3', '4', '5', '6'].map(item => (
      <div
        key={item}
        className="w-[350px] h-full max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-secondary-500 px-8 py-6 md:w-[450px] bg-secondary-300 flex justify-center"
      >
        {item}
      </div>
    ))}
    </Conveyor>
  );
};
export default ConveyorComponent;
`;
export default code;
