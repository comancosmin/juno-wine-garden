"use client";
import React from "react";
import WineMenu from "../components/WineMenu";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { LiaCocktailSolid } from "react-icons/lia";
import { IoIosWine } from "react-icons/io";
import { IoRestaurantOutline } from "react-icons/io5";
import SecondWineTabs from "../components/SecondWineTabs";
import IconMenu from "../components/IconMenu";

function Menu2() {
  return (
    <>
      <title>Juno | Menu</title>
      <Tab.Group>
        <Tab.List className="flex justify-center align-middle gap-10 py-3 lg:text-xl bg-white bottom-0 fixed w-screen text-lg z-20">
          <IconMenu />
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title font-semibold flex focus:outline-none px-2"
                    : "text-juno-primary flex focus:outline-none opacity-80"
                }
              >
                <LiaCocktailSolid className="mt-0.5 mr-1" /> Bar
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title font-semibold flex focus:outline-none px-2"
                    : "text-juno-primary flex focus:outline-none opacity-80"
                }
              >
                <IoIosWine className="mt-0.5 mr-1" /> Wines
              </button>
            )}
          </Tab>
          {/* ...  */}
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title font-semibold flex focus:outline-none px-2"
                    : "text-juno-primary flex focus:outline-none  opacity-80 "
                }
              >
                <IoRestaurantOutline className="mt-0.5 mr-1 pt-0.5" /> Food
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel></Tab.Panel>
          <Tab.Panel>
            <SecondWineTabs />
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default Menu2;
