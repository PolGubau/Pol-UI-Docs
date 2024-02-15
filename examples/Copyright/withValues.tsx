const code = `
import { Copyright } from "pol-ui";

import React from "react";

const CopyrightComponent = () => {
  return (
    <Copyright
      by="Pol Gubau Amores"
      href="https://polgubau.com"
      year={new Date().getFullYear()}
    />
  );
};
export default CopyrightComponent;
`;
export default code;
