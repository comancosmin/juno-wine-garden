import React from "react";
import Image from "next/image";
import LogoImage from "/public/images/logo.png";
import { Pivot as Hamburger } from "hamburger-react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Nav = ({ isOpen, setOpen }) => {
  return (
    <div className="h-24 shadow">
      <div className="flex flex-row justify-between lg:h-24 px-4 pt-6 lg:px-20 lg:pt-0">
        <div className="lg:pt-6">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#6F6F6F" />
        </div>
        <Link href={"/"}>
          <Image
            src={LogoImage}
            alt="logo"
            className="object-fit h-14 w-32 lg:h-24 lg:w-52 z-10 "
          ></Image>
        </Link>
        <div className="social flex justify-between w-16 lg:w-24 pt-4 lg:pt-8 z-10">
          <Link href="https://www.facebook.com/junobrasov/" target="_blank">
            <AiFillFacebook
              color="#6f6f6f"
              className="lg:w-6 lg:h-6"
            ></AiFillFacebook>
          </Link>
          <Link href="https://www.instagram.com/junowinebar/" target="_blank">
            <AiFillInstagram
              color="#6f6f6f"
              className="lg:w-6 lg:h-6"
            ></AiFillInstagram>
          </Link>
          <Link href="https://www.tiktok.com/@junowinegarden" target="_blank">
            <FaTiktok color="#6f6f6f" className="lg:w-6 lg:h-6"></FaTiktok>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
