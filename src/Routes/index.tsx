import React from "react";
import { Route } from "react-router-dom";
import StatsAndSaves from "../Pages/Create/statsAndSaves";
import Welcome from "../Pages/welcome";

const routesFn = () => {
  return (
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/create" element={<StatsAndSaves />} />
    </>
  );
};

export default routesFn;
