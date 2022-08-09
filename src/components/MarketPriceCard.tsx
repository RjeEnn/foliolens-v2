import React from "react";
import Index from "../models/types/Index";

const MarketPriceCard = ({
  selectedMarket,
  index,
}: {
  selectedMarket: string;
  index: Index;
}) => {
  return (
    <div className="w-full grid grid-cols-4 py-2">
      <p>{index.ticker}</p>
      <p>${index.c_price}</p>
      <p>${index.price_change}</p>
      <p
        className={`${
          selectedMarket === "advancing"
            ? "bg-green-500"
            : selectedMarket === "declining"
            ? "bg-red-600"
            : "bg-gray-100 text-black"
        } w-1/2 m-auto py-1 text-white`}
      >
        {index.change}%
      </p>
    </div>
  );
};

export default MarketPriceCard;
