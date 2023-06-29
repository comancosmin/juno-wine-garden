import React from "react";
import Image from "next/image";
import icon_1 from "../../public/images/icons/icon-winery.png";

function IconWinery() {
  return (
    <>
      <Image
        src={icon_1}
        width={200}
        height={200}
        alt="icon"
        className="absolute -ml-4 -z-50"
      />
    </>
  );
}

export default IconWinery;
