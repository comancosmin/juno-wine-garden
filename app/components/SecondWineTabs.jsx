"use client";
import React from "react";
import WineMenuCrama from "../components/WineMenuCrama";
import WineMenu from "../components/WineMenu";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

function SecondWineTabs() {
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex gap-10 py-4 lg:text-xl  bottom-10 fixed w-screen overflow-scroll px-10 whitespace-nowrap bg-white">
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none opacity-60 px-2 text-sm"
                }
              >
                Dealu Mare
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2  text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Moldova
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
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Dobrogea
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 px-3 font-semibold text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 px-3 opacity-60 text-sm"
                }
              >
                Olt
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Republica Moldova
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Transilvania
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Banat
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Ferdinant & Moet
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Spumante
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title  rounded border-2 border-juno-title focus:outline-none p-1 font-semibold px-2 text-sm opacity-80"
                    : "text-juno-primary rounded border border-juno-primary focus:outline-none p-1 opacity-60 px-2 text-sm"
                }
              >
                Importuri
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <WineMenu />
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
          <Tab.Panel>
            <WineMenuCrama />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default SecondWineTabs;
