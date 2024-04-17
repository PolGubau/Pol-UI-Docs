const code = `
import { Button } from "pol-ui";
import { Link } from "react-router-dom / next / gatsby / etc";

import React from "react";

export const LinkButton = () => {
  return (
    <Button asChild>
      <Link href="https://google.com">Google</Link>
    </Button>
  );
};
export default LinkButton;
`;
export default code;
