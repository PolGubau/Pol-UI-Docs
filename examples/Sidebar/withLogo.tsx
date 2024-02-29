const code = `
import { Sidebar, useBoolean, SidebarItem, SidebarCollapse } from "pol-ui";
import { TbLayout, TbLayoutKanban, TbAt, TbUser, TbCoin } from "react-icons/tb";

export const SidebarComponent = (): JSX.Element => {
  const { value, toggle } = useBoolean(false);

  return (
    <Sidebar open={value} toggle={toggle}>
    <SidebarLogo href="#" img="favicon.svg" imgAlt="Pol-ui logo">
    Pol-ui
  </SidebarLogo>
      <SidebarItem href="#" icon={TbHome}>
        1
      </SidebarItem>
      <SidebarCollapse icon={TbShoppingBag} badge="2" defaultOpen>
        <SidebarItem href="#" label="2.1">
          2.1
        </SidebarItem>
        <SidebarItem href="#">2.2</SidebarItem>
      </SidebarCollapse>
      <SidebarItem href="#" icon={TbAt}>
        3
      </SidebarItem>
      <SidebarItem href="#" icon={TbUser}>
        4
      </SidebarItem>

      <SidebarItem href="#" icon={TbSignRight}>
        5
      </SidebarItem>
      <SidebarItem href="#" icon={TbPlus}>
        6
      </SidebarItem>
    </Sidebar>
  );
};
`;
export default code;
