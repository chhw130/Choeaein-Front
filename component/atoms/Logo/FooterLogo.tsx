import Image from "next/image";
import React from "react";
import logo from "../../../utils/img/logo_footer.png";

const FooterLogo = () => {
  return (
    <Image
      src={logo}
      alt="logo"
      width={200}
      height={200}
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default FooterLogo;
