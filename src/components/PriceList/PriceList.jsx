import React, { useEffect, useState } from "react";
import Price from "../Price/Price";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-5">
      <div className="p-5 bg-purple-400">
        <h2 className="text-purple-950 text-5xl font-extrabold text-center">
          Awesome Affordable Prices
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {prices.map((price) => (
          <Price key={price.id} price={price}></Price>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
