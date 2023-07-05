import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Arrows() {
  return (
    <>
      <div className="flex justify-between bottom-test fixed w-screen z-10 touch-none text-juno-primary px-2 py-4 bg-white lg:hidden">
        <HiChevronLeft />
        <HiChevronRight />
      </div>
    </>
  );
}

export default Arrows;
