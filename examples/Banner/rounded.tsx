const code = `
import { Banner, RoundedSizesEnum, RoundedSizes } from "pol-ui";
import React from "react";
const BannerComponent = () => {
  return (
   <div className="flex flex-col gap-4">
    {Object.keys(RoundedSizesEnum).map((rounded, index) => (
      <Banner key={index} rounded={rounded as RoundedSizes}>
        {rounded}
      </Banner>
    ))}
  </div>
  );
};
export default BannerComponent;
`;
export default code;
