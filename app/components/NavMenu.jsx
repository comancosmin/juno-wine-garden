import React from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function NavMenu({ isOpen }) {
  return (
    <div className={`menu z-30 ${isOpen ? "active-menu" : ""}`}>
      <div className="flex justify-center pt-4 lg:pt-12 px-4 text-center text-juno-primary lg:text-xl">
        <m.ul
          className="flex flex-col gap-4 pr-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Link
            className="hover:opacity-70"
            href={"/"}
            onClick={() => setOpen(!isOpen)}
          >
            <m.li variants={item}>Home</m.li>
          </Link>
          <Link
            className="hover:opacity-70"
            href={"/the-garden"}
            onClick={() => setOpen(!isOpen)}
          >
            <m.li variants={item}>The Garden</m.li>
          </Link>
          <Link
            className="hover:opacity-70"
            href={"/menu"}
            onClick={() => setOpen(!isOpen)}
          >
            <m.li variants={item}>Menu</m.li>
          </Link>
          <Link
            className="hover:opacity-70"
            href={"/wineries"}
            onClick={() => setOpen(!isOpen)}
          >
            <m.li variants={item}>Wineries</m.li>
          </Link>
          <Link
            className="hover:opacity-70"
            href={"/events"}
            onClick={() => setOpen(!isOpen)}
          >
            <m.li variants={item}>Events</m.li>
          </Link>
          <Link
            className="hover:opacity-70"
            href={"/photos"}
            onClick={() => setOpen(!isOpen)}
          >
            <m.li variants={item}>Photos</m.li>
          </Link>
          <Link
            className="hover:opacity-70"
            href={"/contact"}
            onClick={() => setOpen(!isOpen)}
          >
            <m.li variants={item}>Contact</m.li>
          </Link>
        </m.ul>
      </div>
    </div>
  );
}

export default NavMenu;
