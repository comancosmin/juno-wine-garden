import React from "react";
import data from "../../../public/utils/bar-data/data_lemonades";
import IconWinery from "../IconWinery";

function Lemonades() {
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
          <div className="container-table-spirits">
            {item.title && (
              <>
                <div className="container-title">
                  <h1 className="lg:text-2xl">{item.title}</h1>
                  {item.description && (
                    <p className="italic text-xs lg:text-lg">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="container-price">
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

export default Lemonades;
