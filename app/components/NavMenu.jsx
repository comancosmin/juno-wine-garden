import React from "react";
import Link from "next/link";

function NavMenu({ isOpen }) {
  return (
    <div className={`menu ${isOpen ? "active-menu" : ""}`}>
      <div className="flex justify-center pt-4 lg:pt-12">
        <ul className="flex flex-col gap-4">
          <Link href={"/"} onClick={() => setOpen(!isOpen)}>
            <li>Home</li>
          </Link>
          <Link href={"/about"} onClick={() => setOpen(!isOpen)}>
            <li>About</li>
          </Link>
          <Link href={"/menu"} onClick={() => setOpen(!isOpen)}>
            <li>Menu</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
