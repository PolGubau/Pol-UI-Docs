const code = `
export const CompleteExample = () => {
  const { value, toggle } = useBoolean(true)

  return (
    <div className="flex w-full rounded-xl overflow-hidden border border-secondary-800 min-h-[400px]  bg-primary-100 flex-col">
      <Navbar
        links={[
          {
            href: '#',
            label: 'Home',
            active: true,
          },
          {
            href: '#',
            label: 'About',
          },
          {
            href: '#',
            label: 'Contact',
          },
        ]}
        leftContent={<img src="https://ui.polgubau.com/logo.png" className="mr-3 h-6 sm:h-6" alt="Pol-ui Logo" />}
      />
      <section className="flex h-full gap-4">
        <Sidebar
          open={value}
          toggle={toggle}
          className="rounded-tr-xl flex flex-col justify-between h-full"
          footer={
            <div className="flex justify-start gap-3 h-10 my-2">
              <Avatar img="https://avatars.githubusercontent.com/u/63197171?v=4" />
              <p className="flex flex-col items-start">
                <strong>Pol Gubau</strong>
                <span className="text-xs">Developer</span>
              </p>
            </div>
          }
        >
          <div className="flex flex-col gap-1 ">
            <SidebarItem href="#" icon={TbDatabaseSearch} active rounded="full">
              Home
            </SidebarItem>
            <SidebarItem href="#" icon={TbLayoutKanban} label="Empty" labelColor={ColorsEnum.primary} rounded="full">
              Menus
            </SidebarItem>
            <SidebarItem href="#" icon={TbAt} label="3" rounded="full">
              Mail
            </SidebarItem>
            <SidebarItem href="#" icon={TbUser} rounded="full">
              Accounts
            </SidebarItem>
          </div>
        </Sidebar>
        <div className="flex flex-col gap-5 p-8 w-full bg-primary-200  rounded-xl">
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
  )
}
`;
export default code;
