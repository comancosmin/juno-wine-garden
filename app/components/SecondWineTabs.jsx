"use client";
import React from "react";
import Moldova from "./regiuni-vinuri/regiunea_Moldova";
import DealuMare from "./regiuni-vinuri/regiunea_Dealu-Mare";
import Spumante from "./regiuni-vinuri/regiunea_Spumante";
import Importuri from "./regiuni-vinuri/regiunea_Importuri";
import FerdinandMoet from "./regiuni-vinuri/regiunea_Ferdinand-Moet";
import Olt from "./regiuni-vinuri/regiunea_Olt";
import Banat from "./regiuni-vinuri/regiunea_Banat";
import Transilvania from "./regiuni-vinuri/regiunea_Transilvania";
import Dobrogea from "./regiuni-vinuri/regiunea_Dobrogea";
import RepublicaMoldova from "./regiuni-vinuri/regiunea_Republica-Moldova";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Arrows from "./Arrows";
import { useState, useEffect } from "react";

function SecondWineTabs() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Tab.Group>
        <Arrows />
        <Tab.List className="flex gap-7 py-4 lg:text-xl  bottom-11 fixed w-screen  overflow-scroll px-10 whitespace-nowrap z-20 scrollbar-css">
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
                Dealu Mare
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
                Moldova
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
                Dobrogea
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
                Olt
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
                Republica Moldova
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
                Transilvania
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
                Banat
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
                Ferdinant & Moet
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
                Spumante
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
                Importuri
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <DealuMare />
          </Tab.Panel>
          <Tab.Panel>
            <Moldova />
          </Tab.Panel>
          <Tab.Panel>
            <Dobrogea />
          </Tab.Panel>
          <Tab.Panel>
            <Olt />
          </Tab.Panel>
          <Tab.Panel>
            <RepublicaMoldova />
          </Tab.Panel>
          <Tab.Panel>
            <Transilvania />
          </Tab.Panel>
          <Tab.Panel>
            <Banat />
          </Tab.Panel>
          <Tab.Panel>
            <FerdinandMoet />
          </Tab.Panel>
          <Tab.Panel>
            <Spumante />
          </Tab.Panel>
          <Tab.Panel>
            <Importuri />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default SecondWineTabs;
