import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

// type ChartType = typeof import('chart.js');
// type Chart2Type = typeof import('react-chartjs-2');

const ChartContext = createContext({});

const getAsyncChartModules = async () => {
  return Promise.all([import("chart.js"), import("react-chartjs-2")]);
};

export const useChartLibs = () => {
  return useContext(ChartContext);
};

export const ChartProvider = ({ children }) => {
  const ChartRef = useRef();
  const Chart2Ref = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncChartModules().then(([Chart, Chart2]) => {
      ChartRef.current = Chart;
      Chart2Ref.current = Chart2;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      ChartLib: ChartRef.current,
      Chart2Lib: Chart2Ref.current,
      isLoaded,
    }),
    [isLoaded]
  );

  return <ChartContext.Provider value={value}>{children}</ChartContext.Provider>;
};
