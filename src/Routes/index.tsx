import React from "react";
import { Route } from "react-router-dom";
import Welcome from "../Pages/welcome";

const routesFn = () => {
  return (
    <>
      <Route path="/" element={<Welcome />} />
    </>
  );
};

export default routesFn;
