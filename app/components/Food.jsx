import React from "react";
import foodList from "../../public/utils/food";
import Image from "next/image";
import IconWinery from "../components/IconWinery";
import { Disclosure } from "@headlessui/react";

function Food() {
  return (
    <div className="px-4">
      <Disclosure>
        <div className="flex justify-center align-middle pt-3 -mb-4">
          <Disclosure.Button className="py-2 ">
            <h1 className="text-sm text-juno-primary">
              Vezi lista de alergeni ▼
            </h1>
          </Disclosure.Button>
        </div>
        <Disclosure.Panel className="text-gray-400 text-xs pt-4">
          <h1 className="text-juno-primary">
            Conform Regulamentului UE 1169/2011
          </h1>
          <p>
            Produsele noastre pot conține următorii alergeni: gluten, ouă,
            lactoză, arahide și produse derivate, lapte și produse derivate.
          </p>
        </Disclosure.Panel>
      </Disclosure>
      {foodList.map((item, index) => (
        <div
          key={index}
          className=" text-juno-primary flex lg:flex-col lg:px-36"
        >
          <div className="flex flex-col lg:p-5 ">
            {item.head && (
              <div className="text-juno-primary text-xl font-serif uppercase pl-4 py-5 lg:py-10">
                <div className="container py-6">
                  <IconWinery />
                  <div className="absolute -z-10">{item.head}</div>
                </div>
              </div>
            )}
          </div>
          <div className="container-table">
            {item.image && item.title && (
              <>
                <div className="container-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-60 h-36 object-scale-down lg:w-60 lg:h-96 lg:object-cover rounded-xl"
                  />
                </div>
                <div className="container-title">
                  <h1 className="px-2 pb-2">{item.title}</h1>
                  {item.description && (
                    <p className="italic text-xs px-2">{item.description}</p>
                  )}
                </div>
                <div className="container-price">
                  {item.price && (
                    <p className="text-black whitespace-nowrap">
                      {item.price} ron
                    </p>
                  )}{" "}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Food;
