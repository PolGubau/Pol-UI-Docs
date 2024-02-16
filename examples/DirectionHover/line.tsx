const code = `
import { DirectionHover } from "pol-ui";

import React from "react";

const DirectionHoverComponent = () => {
  return (
    <div className="flex gap-2">
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
  </div>
  );
};
export default DirectionHoverComponent;
`;
export default code;
