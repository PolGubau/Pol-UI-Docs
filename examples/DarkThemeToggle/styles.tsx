const code = `
import { DarkThemeToggle } from "pol-ui";

import React from "react";

const DarkThemeToggleComponent = () => {
  return (
    <PoluiProvider>
    <DarkThemeToggle className="bg-transparent hover:bg-gray-100 dark:hover:bg-secondary-800 text-secondary-900 dark:text-secondary-50" />
  </PoluiProvider>
  );
};
export default DarkThemeToggleComponent;
`;
export default code;
