const code = `
import { Sidebar, useBoolean, SidebarItem, IconButton, Input, Navbar } from "pol-ui";
import { TbLayout, TbLayoutKanban, TbAt, TbUser, TbCoin } from "react-icons/tb";

export const WithSearch = () => {
  const { value, toggle } = useBoolean(true);

  return (
    <div className="flex w-full rounded-xl overflow-hidden bg-secondary-50 min-h-[400px] flex-col">
      <Navbar
        links={[
          {
            href: "#",
            label: "Home",
            active: true,
          },
          {
            href: "#",
            label: "About",
          },
          {
            href: "#",
            label: "Contact",
          },
        ]}
        leftContent={
          <img
            src="https://ui.polgubau.com/logo.png"
            className="mr-3 h-6 sm:h-6"
            alt="Pol-ui Logo"
          />
        }
      />
      <section className="flex h-full">
        <div className="bg-secondary-50 w-fit shadow-lg">
          <Sidebar open={value} toggle={toggle}>
            <div>
              <Input
                leftComponent={<TbSearch />}
                placeholder="Search"
                className={'w-full'+value ? "hidden" : "flex"}
              />
              <IconButton
                className={'w-full max-w-10 '+value ? "flex" : "hidden"}
                onClick={toggle}
              >
                <TbSearch />
              </IconButton>
            </div>

            <SidebarItem href="#" icon={TbDatabaseSearch} active>
              Home
            </SidebarItem>
            <SidebarItem
              href="#"
              icon={TbLayoutKanban}
              label="Empty"
              labelColor={ColorsEnum.primary}
            >
              Menus
            </SidebarItem>
            <SidebarItem href="#" icon={TbAt} label="3">
              Mail
            </SidebarItem>
            <SidebarItem href="#" icon={TbUser}>
              Accounts
            </SidebarItem>
          </Sidebar>
        </div>
        <div className="flex flex-col gap-5 p-8 w-full bg-primary-200 m-4 rounded-xl">
          <h2>Content</h2>
          <div className="bg-primary-400 rounded-2xl w-full h-20"></div>
          <div className="bg-primary-400 rounded-2xl w-full h-10"></div>
          <div className="bg-primary-300 rounded-2xl w-full h-14"></div>
          <div className="w-full h-20 flex gap-5">
            <div className="bg-primary-300 rounded-2xl w-full h-14"></div>
            <div className="bg-primary-300 rounded-2xl w-full h-14"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
`;
export default code;
