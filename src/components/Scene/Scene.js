import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import "../../App.css";

const Scene = ({ data }) => {
  //   const [currentTab, setCurrentTab] = useState(0);

  //   const selectContent = (tab) => {
  //     const Content = {
  //       0: <DummyTable />,
  //       1: <DummyChart />,
  //       2: <DummyList1 />,
  //     };
  //     return Content[tab];
  //   };

  return (
    <div className="scene">
      <Tabs data={data} />
      <Suspense fallback={<p className="loader">Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Scene;
