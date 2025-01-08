import React from "react";
import "./barChart.css";
import Bar from "./bar/Bar";

function BarChart() {
  const bars = [
    { name: "UI/UX Design", value: 90 },
    { name: "Web Development", value: 95 },
    { name: "Digital Marketing", value: 85 },
  ];

  return (
    <div className="barChart">
      {bars.map((bar, index) => (
        <Bar key={index} bar={bar} />
      ))}
    </div>
  );
}

export default BarChart;
