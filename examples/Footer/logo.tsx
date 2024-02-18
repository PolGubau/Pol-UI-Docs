const code = `
import { Copyright, Footer, FooterLinkGroup, Link } from "pol-ui";
import React from "react";

const FooterComponent = () => {
  return (
    <Footer>
    <div className="w-full p-6 text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="https://ui.polgubau.com" src="https://ui.polgubau.com/logo.png" alt="Pol-ui Logo" />
      <FooterLinkGroup>
        <Link href="#">About</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Licensing</Link>
        <Link href="#">Contact</Link>
      </FooterLinkGroup>
    </div>
    <Divider />
    <Copyright href="#" by="Pol-ui™" year={2022} />
  </div>
    </Footer>
  );
};
export default FooterComponent;
`;
export default code;
