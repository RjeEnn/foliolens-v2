import { useEffect, useState } from "react";
import DailyIndices from "../models/types/DailyIndices";

const IndexCard = ({
  type,
  dailyIndex,
}: {
  type: string;
  dailyIndex: DailyIndices;
}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (type) {
      if (type === "main") {
        setName("Main");
      } else if (type === "junior") {
        setName("Junior");
      } else if (type === "combined") {
        setName("Combined");
      } else if (type === "us") {
        setName("US");
      } else if (type === "financial") {
        setName("Financial");
      } else if (type === "manufacturing") {
        setName("Manufacturing");
      }
    }
  }, [type]);

  return (
    <div className="h-20 rounded-md bg-gray-100 w-64 flex flex-col items-center justify-center p-2 gap-1 text-sm flex-shrink-0">
      <div className="flex items-center justify-between w-full">
        <p>{name}</p>
        <p
          className={`${
            parseFloat(dailyIndex.change) < 0
              ? "bg-red-600 text-white"
              : parseFloat(dailyIndex.change) > 0
              ? "bg-green-600 text-white"
              : "bg-gray-50"
          }`}
        >
          {dailyIndex.change_percent}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p>Points</p>
        <p className="font-semibold">{dailyIndex.points}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p>Volume Traded</p>
        <p className="font-semibold">{dailyIndex.volume}</p>
      </div>
    </div>
  );
};

export default IndexCard;
