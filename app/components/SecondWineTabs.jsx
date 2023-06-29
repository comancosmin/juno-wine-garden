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
        <Tab.List className="flex gap-10 py-4 lg:text-xl bg-white bottom-10 fixed w-screen overflow-scroll px-10 whitespace-nowrap">
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none"
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none"
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
                    ? " text-juno-title font-semibold flex focus:outline-none"
                    : "text-juno-primary flex focus:outline-none "
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
