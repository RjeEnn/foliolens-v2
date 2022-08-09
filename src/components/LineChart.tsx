import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Tracker from "../models/types/Tracker";
import { user } from "../services/user";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const Tracker: Tracker = user.tracker;

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Portfolio Performance",
      },
    },
  };

  const chartData = {
    labels: Tracker.dates.map((date) => date.date),
    datasets: [
      {
        label: "Growth %",
        data: Tracker.dates.map(
          (date) => parseFloat(date.value) - parseFloat(Tracker.dates[0].value)
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
