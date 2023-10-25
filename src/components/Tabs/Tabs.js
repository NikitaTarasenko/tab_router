import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({ data }) => {
  return (
    <div className="tabs">
      {data &&
        data.map((tab, i) => (
          <Link to={`/${tab.id}`} key={tab.id} className={`order${tab.order}`}>
            <button className={`tab`}>{tab.title}</button>
          </Link>
        ))}
    </div>
  );
};

export default Tabs;
