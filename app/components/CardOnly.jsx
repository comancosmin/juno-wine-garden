import React, { useEffect, useState } from "react";
const CardOnly = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const shouldShow = scrollTop > 100; // Verificăm dacă s-a derulat în jos suficient

      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`scrollRevealElement ${
          isVisible ? "visible" : ""
        } flex justify-center align-middle h-12`}
      >
        <h1 className="text-lg pt-3 text-juno-title font-bold">
          Comanda la bar / Plata doar Card
        </h1>
      </div>
    </>
  );
};

export default CardOnly;
