import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart({ graphData, title }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        font: {
          size: 20
        },
        text: title
      }
    }
  }
  return <Line className="w-20" data={graphData} options={options} />;
}

export default LineChart;