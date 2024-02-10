const code = `
import { Banner } from "pol-ui";
import React from "react";
const BannerComponent = () => {
  return (
  <div className="flex flex-col gap-4">
    <Banner color="error">Error</Banner>
    <Banner color="info">Info</Banner>
    <Banner color="success">Success</Banner>
    <Banner color="warning">Warning</Banner>
    <Banner color="secondary">Secondary</Banner>
    <Banner color="primary">Primary</Banner>
  </div>
  );
};
export default BannerComponent;
`;
export default code;
