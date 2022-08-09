import { useEffect, useState } from "react";
import { IndexCard, MarketPriceCard, UserSidebar } from "../components";
import { useParams } from "react-router-dom";
import Index from "../models/types/Index";
import { market } from "../services/market";
import { useNavigate } from "react-router-dom";

const History = () => {
  let navigate = useNavigate();
  const { date } = useParams();
  const [dateString, setDateString] = useState<String>("");
  useEffect(() => {
    if (date) {
      setDateString(new Date(date).toDateString());
    }
  }, [date]);

  const [selectedMarket, setSelectedMarket] = useState("advancing");
  const [selectedMarketIndices, setSelectedMarketIndices] = useState<Index[]>(
    []
  );

  useEffect(() => {
    if (market) {
      if (selectedMarket === "advancing") {
        setSelectedMarketIndices(market.advancing);
      } else if (selectedMarket === "declining") {
        setSelectedMarketIndices(market.declining);
      } else if (selectedMarket === "firm") {
        setSelectedMarketIndices(market.trading_firm);
      }
    }
  }, [selectedMarket]);

  const handleDateChange = (e: any) => {
    e.preventDefault();
    navigate(`../history/${e.target.value}`, { replace: true });
  };

  return (
    <div className="portal-page">
      <UserSidebar />
      <div className="portal-content  flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col justify-between w-full rounded-md bg-white shadow-md p-8 gap-4">
          <h3 className="font-bold text-lg">Filter Stocks</h3>
          <p>Select a date below to get the market activity for that day.</p>
          <input
            className="w-64 border-2 rounded-md p-2 border-black"
            type="date"
            value={date}
            onChange={(e) => handleDateChange(e)}
          />
        </div>

        <div className="w-full bg-white rounded-md p-4 mb-4 shadow-md">
          <h3 className="font-bold">Indices</h3>
          <div className="flex gap-4 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 py-4">
            <IndexCard />
            <IndexCard />
            <IndexCard />
            <IndexCard />
            <IndexCard />
            <IndexCard />
            <IndexCard />
          </div>
        </div>

        <div className="w-full bg-white p-4 shadow-md">
          <h3 className="font-bold">JSE Summary</h3>
          <div className="flex gap-4 w-full mb-4">
            <div className="bg-gray-50 w-full rounded-md p-2">
              <p>
                Overall Market activity resulted from trading in 104 stocks of
                which 52 advanced, 39 declined and 13 traded firm.{" "}
                <strong>(Hard Coded)</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="h-[60vh] flex flex-col justify-between w-full rounded-md bg-white shadow-md overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
          <div className="w-full flex justify-between items-center p-8 pb-0">
            <h3 className="font-bold text-lg">Market Activity</h3>
            <p className="font-light">
              {dateString !== "" ? "For " + dateString : ""}
            </p>
          </div>
          <div className="flex gap-4 px-8 pt-4">
            <input
              type="submit"
              value="Advancing"
              className={`${
                selectedMarket === "advancing"
                  ? "border-b-4 border-indigo-600 text-indigo-600"
                  : ""
              } cursor-pointer`}
              onClick={() => setSelectedMarket("advancing")}
            />
            <input
              type="submit"
              value="Declining"
              className={`${
                selectedMarket === "declining"
                  ? "border-b-4 border-indigo-600 text-indigo-600"
                  : ""
              } cursor-pointer`}
              onClick={() => setSelectedMarket("declining")}
            />
            <input
              type="submit"
              value="Trading Firm"
              className={`${
                selectedMarket === "firm"
                  ? "border-b-4 border-indigo-600 text-indigo-600"
                  : ""
              } cursor-pointer`}
              onClick={() => setSelectedMarket("firm")}
            />
          </div>
          <div className="grid grid-cols-4 bg-gray-50 p-2">
            <p>Symbol</p>
            <p>Closing Price</p>
            <p>Price Change</p>
            <p>Percentage Change</p>
          </div>
          <div className="h-[calc(100%-200px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
            {selectedMarketIndices.map((index, pos) => (
              <MarketPriceCard
                key={pos}
                selectedMarket={selectedMarket}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
