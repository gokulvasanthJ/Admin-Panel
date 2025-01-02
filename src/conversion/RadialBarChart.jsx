import React, { useState } from "react";
import Chart from "react-apexcharts";

const RadialBarChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [70], // Percentage value
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "30%", // Size of the inner circle
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "18px",
              color: "#333",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "22px",
              color: "#111",
              offsetY: 5,
            },
          },
        },
      },
      labels: ["Progress"], // Label for the chart
    },
  });

  return (
    <div>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default RadialBarChart;
