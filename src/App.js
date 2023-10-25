import { Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import data from "./data.json";
import Scene from "./components/Scene/Scene";
import { DummyList } from "./components/DummyList/index.js";
import { DummyChart } from "./components/DummyChart/index.js";
import { DummyTable } from "./components/DummyTable/index.js";
import { ChartProvider } from "./providers/ChartProvider/ChartProvider";
import { useNavigate, useLocation } from "react-router-dom";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (data.tabs && location.pathname === "/") {
      let f = data.tabs.filter((el) => el.order === 1);
      navigate(`/${f[0].id}`);
    }
    console.log(data);
  }, []);
  // 'The first tab must open by default' - I’m not entirely sure that this is the best solution, since I noticed this feature in the end...
  const selectElement = (element) => {
    const Content = {
      dummyTable: <DummyTable />,
      dummyChart: (
        <ChartProvider>
          <DummyChart />
        </ChartProvider>
      ),
      dummyList: <DummyList />,
    };
    return Content[element];
  };

  // ******ChartProvider used to load asynchronously libs when it's needed only*******

  return (
    <div className="App">
      <Suspense fallback={<p className="loader">Please wait...</p>}>
        <Routes>
          <Route path="/" element={<Scene data={data.tabs} />}>
            {data.tabs &&
              data.tabs.map((tab, i) => {
                let indexForFistElement = i === 0 ? true : false;
                return <Route index={indexForFistElement} path={`/${tab.id}`} element={selectElement(tab.id)} />;
              })}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
