import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  ChartOptions,
} from "chart.js";
import { Bar, Line, Radar, Scatter } from "react-chartjs-2";
import { companyData, radarData, scatterData } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Filler
);

export const options: ChartOptions<any> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Graph Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: companyData,
};

export default function CompanyChart() {
  const [chartType, setChartType] = useState("bar");

  const handleChartTypeChange = (newType: string) => {
    setChartType(newType);
  };

  return (
    <>
      <h3 className="text-center text-4xl mb-8">
        Chart For Comparing In Different Variations
      </h3>
      <div className="text-center">
        <label>
          Change View:
          <select
            onChange={(e) => handleChartTypeChange(e.target.value)}
            value={chartType}
            className="ml-4 mb-8 outline-none px-4 py-1 rounded-md text-lg"
          >
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
          </select>
        </label>
      </div>
      {chartType === "bar" ? (
        <Bar options={options} data={data} className="max-h-[450px]" />
      ) : (
        <Line options={options} data={data} className="max-h-[450px]" />
      )}
      <h3 className="text-center text-4xl my-8">Radar Chart Example</h3>
      <Radar
        options={options}
        data={radarData}
        className="max-h-[450px] my-14"
      />
      <h3 className="text-center text-4xl my-8">Scatter Chart Example</h3>

      <Scatter
        options={options}
        data={scatterData}
        className="max-h-[450px] my-14"
      />
    </>
  );
}
