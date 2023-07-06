"use client";
import React from "react";
import Coffee from "./categorii-bar/Coffee";
import Lemonades from "./categorii-bar/Lemonades";
import SoftDrinks from "./categorii-bar/SoftDrinks";
import Beers from "./categorii-bar/Beers";
import LongDrinks from "./categorii-bar/LongDrinks";
import Spirits from "./categorii-bar/Spirits";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Arrows from "./Arrows";

function SecondWineTabs() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Tab.Group>
        <Arrows />
        <Tab.List className="flex gap-7 py-4 lg:text-xl  bottom-11 fixed w-screen  overflow-scroll px-10 whitespace-nowrap z-20 scrollbar-css lg:left-1/3">
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                onClick={scrollToTop}
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none opacity-60 px-2 text-sm"
                }
              >
                Coffee
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                onClick={scrollToTop}
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2  text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Lemonades
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                onClick={scrollToTop}
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2  text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Soft Drinks
              </button>
            )}
          </Tab>
          {/* ...  */}
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                onClick={scrollToTop}
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Beers
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                onClick={scrollToTop}
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 px-3 font-semibold text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 px-3 opacity-60 text-sm"
                }
              >
                Long Drinks
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                onClick={scrollToTop}
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Spirits
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Coffee />
          </Tab.Panel>
          <Tab.Panel>
            <Lemonades />
          </Tab.Panel>
          <Tab.Panel>
            <SoftDrinks />
          </Tab.Panel>
          <Tab.Panel>
            <Beers />
          </Tab.Panel>
          <Tab.Panel>
            <LongDrinks />
          </Tab.Panel>
          <Tab.Panel>
            <Spirits />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default SecondWineTabs;
