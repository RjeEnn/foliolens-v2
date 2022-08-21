import { useEffect, useState } from "react";
import {
  LineChart,
  PortfolioIndexCard,
  RegenerationConfirmation,
  UserSidebar,
} from "../components";
import { useAuth } from "../components/auth/Auth";

const Suggestions = () => {
  const auth = useAuth();
  const [closeValue, setCloseValue] = useState("0");
  const [closePercentage, setClosePercentage] = useState("0");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (auth?.user) {
      try {
        let percentage =
          parseFloat(
            auth.user.tracker.dates[auth.user.tracker.dates.length - 1].value
          ) - parseFloat(auth.user.tracker.dates[0].value);
        let closeVal = 250000 * ((100 + percentage) / 100);

        setClosePercentage(percentage.toFixed(2));
        setCloseValue(closeVal.toFixed(2));
      } catch (error) {}
    }
  }, [auth?.user]);

  // This useEffect sets the height of the Market Summary div to the total height
  // of the div containing the chart and the JSE Summary
  useEffect(() => {
    setBreakdownDivHeight();

    const changeHeight = async () => {
      window.onresize = async () => {
        setTimeout(setBreakdownDivHeight, 100);
      };
    };

    changeHeight();
  }, []);

  const setBreakdownDivHeight = () => {
    let breakdownDiv = document.getElementById("portfolio-breakdown");
    let chartDiv = document.getElementById("suggestions-chart");

    if (
      breakdownDiv instanceof HTMLElement &&
      chartDiv instanceof HTMLElement
    ) {
      breakdownDiv.style.height = chartDiv.offsetHeight + "px";
    }
  };

  return (
    <div className="portal-page">
      <UserSidebar />
      <RegenerationConfirmation open={open} setOpen={setOpen} />
      <div className="portal-content">
        <div className="w-full p-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-2">
          <h1 className="portal-headings">Suggestions</h1>
          <p>Hi {auth?.user ? auth.user.firstName : "User"}!</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          <div
            id="portfolio-breakdown"
            className="flex flex-col justify-between w-full lg:w-5/12 rounded-md bg-white shadow-md overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300"
          >
            <h3 className="font-bold text-lg p-8 pb-0">Portfolio Breakdown</h3>

            <div className="grid grid-cols-2 bg-gray-50 p-2">
              <p>Symbol</p>
              <p>Portfolio %</p>
            </div>
            <div className="h-[calc(100%-200px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
              {auth?.user?.portfolio.indices ? (
                auth.user.portfolio.indices.map((index, pos) => (
                  <PortfolioIndexCard key={pos} index={index} />
                ))
              ) : (
                <p className="text-gray-500 text-center">Nothing to see here</p>
              )}
            </div>
          </div>

          <div
            id="suggestions-chart"
            className="w-full lg:w-7/12 flex flex-col items-center justify-center gap-4"
          >
            <div className="w-full">
              <div className="w-full rounded-md shadow-md px-2 py-2 mb-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
                  <p>Don't like your portfolio? Create a new one now!</p>
                  <button onClick={() => setOpen(true)}>
                    Regenerate Portfolio
                  </button>
                </div>
              </div>
              <div className="w-full rounded-md lg:shadow-md px-2 py-4 mb-4">
                <p>
                  This would have been your portfolio growth if you invested
                  <strong> $250,000</strong> into our recommended portfolio
                </p>
              </div>
              <div className="w-full flex flex-col xl:flex-row gap-2 items-center justify-between">
                <div className="w-full xl:w-1/3 rounded-md shadow-md px-2 py-4">
                  <p className="font-light text-sm mb-2">Open Value</p>
                  <p className="text-2xl font-semibold">$250,000.00</p>
                </div>
                <div className="w-full xl:w-1/3 rounded-md shadow-md px-2 py-4">
                  <p className="font-light text-sm mb-2">Closing Value</p>
                  <p className="text-2xl font-semibold">{closeValue}</p>
                </div>
                <div className="w-full xl:w-1/3 rounded-md shadow-md px-2 py-4">
                  <p className="font-light text-sm mb-2">Your Return</p>
                  <p
                    className={`${
                      parseFloat(closePercentage) >= 1
                        ? "bg-green-700"
                        : "bg-red-700"
                    } text-2xl font-semibold rounded-md shadow-sm text-white w-1/2 text-center`}
                  >
                    {closePercentage}%
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-md bg-white shadow-md p-8">
              <div className="w-full flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Personalized Suggestions</h3>
              </div>
              <LineChart Tracker={auth?.user?.tracker} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
