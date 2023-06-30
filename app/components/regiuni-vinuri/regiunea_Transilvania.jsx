import React from "react";
import wineList from "../../../public/utils/regiunea_Transilvania";
import Image from "next/image";
import IconWinery from "../IconWinery";

function Dobrogea() {
  return (
    <div className="px-4">
      {wineList.map((item, index) => (
        <div
          key={index}
          className=" text-juno-primary flex lg:flex-col lg:px-36"
        >
          <div className="flex flex-col lg:p-5 ">
            {item.winery && (
              <div className="text-juno-primary text-xl font-serif uppercase pl-4 py-5 lg:py-10">
                <div className="container py-6">
                  <IconWinery />
                  <div className="absolute -z-10">Crama - {item.winery}</div>
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
                    className="w-60 h-44 object-cover lg:w-60 lg:h-96 lg:object-cover"
                  />
                </div>
                <div className="container-title">
                  <h1>{item.title}</h1>
                  {item.description && (
                    <p className="italic text-xs">{item.description}</p>
                  )}
                </div>
                <div className="container-price">
                  {item.price && (
                    <p className="text-black pl-2">{item.price} ron</p>
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

export default Dobrogea;
