import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Portfolio from "../models/types/Portfolio";
import { user } from "../services/user";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const Portfolio: Portfolio = user.portfolio;

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    labels: Portfolio.indices.map((data) => data.ticker),
    datasets: [
      {
        label: "Users Gained",
        data: Portfolio.indices.map((data) => parseFloat(data.weight)),
        backgroundColor: [
          "rgba(255, 99, 132, 1",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 211, 1)",
          "rgba(54, 224, 235, 1)",
          "rgba(255, 187, 86, 1)",
          "rgba(75, 101, 192, 1)",
          "rgba(148, 64, 255, 1)",
          "rgba(116, 186, 74, 1)",
          "rgba(209, 32, 160, 1)",
          "rgba(23, 174, 207, 1)",
          "rgba(244, 147, 0, 1)",
          "rgba(129, 156, 255, 1)",
          "rgba(197, 152, 255, 1)",
          "rgba(208, 105, 179, 1)",
          "rgba(133, 204, 220, 1)",
          "rgba(122, 163, 96, 1)",
          "rgba(157, 175, 240, 1)",
          "rgba(218, 190, 253, 1)",
        ],
        borderColor: ["rgba(255, 255, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
