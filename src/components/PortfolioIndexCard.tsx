import React from "react";
import UserIndex from "../models/types/UserIndex";

const PortfolioIndexCard = ({ index }: { index: UserIndex }) => {
  return (
    <div className="w-full grid grid-cols-2 py-2">
      <p>{index.ticker}</p>
      <p>{(parseFloat(index.weight) * 100).toFixed(3)}%</p>
    </div>
  );
};

export default PortfolioIndexCard;
