import React, { memo } from "react";
import { useChartLibs } from "../../providers/ChartProvider/ChartProvider.js";
import "../../App.css";

const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const DummyChart = (props) => {
  const { ChartLib, Chart2Lib } = useChartLibs();

  ChartLib.Chart.register(
    ChartLib.RadialLinearScale,
    ChartLib.PointElement,
    ChartLib.LineElement,
    ChartLib.Filler,
    ChartLib.Tooltip,
    ChartLib.Legend
  );

  return <Chart2Lib.Radar options={{ maintainAspectRatio: false }} width={100} height={150} data={data} />;
};

const Chart = memo((props) => {
  const { isLoaded } = useChartLibs();

  if (!isLoaded) {
    return <p className="loader">Loading additional libs...</p>;
  }

  return <DummyChart {...props} />;
});

export default Chart;
