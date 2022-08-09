import { useEffect, useState } from "react";
import {
  DateString,
  IndexCard,
  MarketPriceCard,
  PieChart,
  UserSidebar,
} from "../components";
import Index from "../models/types/Index";
import { market } from "../services/market";

const Dashboard = () => {
  const [selectedMarket, setSelectedMarket] = useState("advancing");
  const [selectedMarketIndices, setSelectedMarketIndices] = useState<Index[]>(
    []
  );

  // This useEffect sets the height of the Market Summary div to the total height
  // of the div containing the chart and the JSE Summary
  useEffect(() => {
    setMarketDivHeight();

    const changeHeight = async () => {
      window.onresize = async () => {
        setTimeout(setMarketDivHeight, 100);
      };
    };

    changeHeight();
  }, []);

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

  const setMarketDivHeight = () => {
    let marketDiv = document.getElementById("market-activity");
    let chartDiv = document.getElementById("chart-and-summary");

    if (marketDiv instanceof HTMLElement && chartDiv instanceof HTMLElement) {
      marketDiv.style.height = chartDiv.offsetHeight + "px";
    }
  };

  return (
    <div className="portal-page">
      <UserSidebar />
      <div className="portal-content">
        <div className="w-full p-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-2">
          <div className="flex flex-col w-full lg:w-auto lg:flex-row items-center justify-center gap-2">
            <h1 className="portal-headings">Portfolio</h1>
            <DateString />
          </div>
          <p>Hi User!</p>
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

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          <div id="chart-and-summary" className="w-full lg:w-5/12">
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <div className="w-full rounded-md bg-white shadow-md p-8">
                <div className="w-full flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">
                    Personalized Suggestions
                  </h3>
                  <button>hey</button>
                </div>
                <PieChart />
              </div>
              <div className="w-full">
                <div className="w-full bg-white p-4 shadow-md">
                  <h3 className="font-bold">JSE Summary</h3>
                  <div className="flex gap-4 w-full mb-4">
                    <div className="bg-gray-50 w-full rounded-md p-2">
                      <p>
                        Overall Market activity resulted from trading in 104
                        stocks of which 52 advanced, 39 declined and 13 traded
                        firm. <strong>(Hard Coded)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="market-activity"
            className="flex flex-col justify-between w-full lg:w-7/12 rounded-md bg-white shadow-md overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300"
          >
            <h3 className="font-bold text-lg p-8 pb-0">Market Activity</h3>
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
    </div>
  );
};

export default Dashboard;
