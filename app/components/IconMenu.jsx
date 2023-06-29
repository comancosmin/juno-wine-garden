import React from "react";
import Image from "next/image";
import icon_1 from "../../public/images/icons/icon-menu.png";

function IconMenu() {
  return (
    <>
      <Image
        src={icon_1}
        width={1000}
        height={1000}
        alt="menu-background"
        className="fixed -z-10 -bottom-56"
      />
    </>
  );
}

export default IconMenu;
