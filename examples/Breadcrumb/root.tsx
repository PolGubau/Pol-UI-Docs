const code = `
import { Breadcrumb, BreadcrumbItem } from "pol-ui";
import { TbHome, TbUser } from "react-icons/tb";

import React from "react";
const BreadcrumbComponent = () => {
  return (
    <Breadcrumb {...args}>
      <BreadcrumbItem href="https://polgubau.com/" icon={TbHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="https://polgubau.com/" icon={TbUser}>
        Authors
      </BreadcrumbItem>
      <BreadcrumbItem>Pol Gubau Amores</BreadcrumbItem>
    </Breadcrumb>
  );
};
export default BreadcrumbComponent;
`;
export default code;
