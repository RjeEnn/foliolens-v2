import React from "react";

const IndexCard = () => {
  return (
    <div className="h-20 rounded-md bg-gray-100 w-64 flex flex-col items-center justify-center p-2 gap-1 text-sm flex-shrink-0">
      <div className="flex items-center justify-between w-full">
        <p>Main</p>
        <p className="bg-green-600 px-1 text-white">+0.19%</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p>Points</p>
        <p className="font-semibold">390.99</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p>Volume Traded</p>
        <p className="font-semibold">2,000,000</p>
      </div>
    </div>
  );
};

export default IndexCard;
