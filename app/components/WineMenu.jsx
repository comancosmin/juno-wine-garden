import React from "react";
import wineList from "../../public/utils/wineList";
import Image from "next/image";
import IconWinery from "./IconWinery";

function WineMenu() {
  return (
    <div className="px-4">
      {wineList.map((item, index) => (
        <div key={index} className=" text-juno-primary flex lg:justify-center">
          <div className="flex flex-col lg:flex-row lg:p-5">
            {item.region && (
              <div className="font-juno text-juno-title text-4xl pl-4">
                {item.region}
              </div>
            )}
            {item.winery && (
              <div className="text-juno-primary text-xl lg:py-1 font-serif uppercase pl-4 pb-10 pt-5">
                <div className="container ">
                  <IconWinery />
                  <div className="absolute">Crama - {item.winery}</div>
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
                    className="w-60 h-72 object-cover"
                  />
                </div>
                <div className="container-title">
                  <h1>{item.title}</h1>
                  {item.description && (
                    <p className="italic text-xs">{item.description}</p>
                  )}
                </div>
                <div className="container-price">
                  {item.price && <p className="text-black">{item.price} ron</p>}{" "}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WineMenu;
