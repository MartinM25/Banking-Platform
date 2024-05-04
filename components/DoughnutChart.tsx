"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500],
        backgroundColor: ["#0747B6", "#2265D8"]
      }
    ],
    labels: ["Bank 1", "Bank 2"]
  }

  return <Doughnut 
    data={data} 
    options={{
      cutout: "60%",
      plugins: {
        legend: {
          display: false
        }
      }
    }}

    />
}

export default DoughnutChart