import React from "react";

import SocialMedia from "./SocialMedia";
import ContactMe from "./ContactMe";
import Describe from "./Describe";
import Links from "./Links";
import CopyRight from "./CopyRight";

function Footer() {
  return (
    <footer
      className="bg-dark text-center text-white"
      style={{ bottom: "0" }}
    >
      <div className="container p-4">
        <SocialMedia />
        <ContactMe />
        <Describe />
        <Links />
      </div>

      <CopyRight />
    </footer>
  );
}

export default Footer;
