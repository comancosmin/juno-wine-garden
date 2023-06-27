"use client";
import React from "react";
import WineMenu from "../components/WineMenu";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { LiaCocktailSolid } from "react-icons/lia";
import { IoIosWine } from "react-icons/io";
import { IoRestaurantOutline } from "react-icons/io5";

function Menu2() {
  return (
    <>
      <title>Juno | Menu</title>
      <Tab.Group
        onChange={(index) => {
          console.log("Changed selected tab to:", index);
        }}
      >
        <Tab.List className="flex justify-center align-middle gap-10 py-6 lg:text-xl bg-gray-100">
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title font-semibold flex"
                    : "text-juno-primary flex"
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
                    ? " text-juno-title font-semibold flex"
                    : "text-juno-primary flex"
                }
              >
                <IoIosWine className="mt-0.5 mr-1" /> Wine
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
                    ? " text-juno-title font-semibold flex"
                    : "text-juno-primary flex"
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
            <WineMenu className="overflow-scroll" />
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default Menu2;
