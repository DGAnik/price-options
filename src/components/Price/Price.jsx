import React from "react";
import Feature from "../Feature/Feature";

const Price = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-5 flex flex-col">
      <h2 className="text-center mb-3">
        <span className="text-5xl font-extrabold text-purple-900">
          {price.price}
        </span>
        <span className="text-2xl font-bold">/mon</span>
      </h2>
      <h3 className="font-bold text-2xl text-center">{price.name}</h3>
      <div className="mb-2">
        <p className="font-bold underline text-1xl text-white">Features</p>
        {price.features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
        </div>
       <button className="bg-green-500 w-full rounded-md py-1 font-bold text-white mt-auto hover:bg-green-700">
          Buy Now
        </button>
    </div>
  );
};

export default Price;
