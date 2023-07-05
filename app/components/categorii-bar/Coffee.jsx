import React from "react";
import data from "../../../public/utils/bar-data/data_coffee";
import Image from "next/image";
import IconWinery from "../IconWinery";

function Coffee() {
  return (
    <div className="px-4">
      {data.map((item, index) => (
        <div
          key={index}
          className=" text-juno-primary flex lg:flex-col lg:px-36"
        >
          <div className="flex flex-col lg:p-5 ">
            {item.head && (
              <div className="text-juno-primary text-xl font-serif uppercase pl-4 py-5 lg:py-10">
                <div className="container py-6">
                  <IconWinery />
                  <div className="absolute -z-10 lg:text-2xl">{item.head}</div>
                </div>
              </div>
            )}
          </div>
          <div className="container-table-bar">
            {item.image && item.title && (
              <>
                <div className="container-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-60 h-44 object-cover lg:w-auto lg:h-auto lg:object-cover"
                  />
                </div>
                <div className="container-title pt-10">
                  <h1 className="lg:text-2xl">{item.title}</h1>
                  {item.description && (
                    <p className="italic text-xs lg:text-lg">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="container-price pt-10">
                  {item.price && (
                    <p className="text-black pl-2 whitespace-nowrap lg:text-2xl">
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

export default Coffee;
