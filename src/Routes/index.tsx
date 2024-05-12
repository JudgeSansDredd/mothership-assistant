import React from "react";
import { Route } from "react-router-dom";
import Create from "../Pages/create";
import Welcome from "../Pages/welcome";

const routesFn = () => {
  return (
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/create" element={<Create />} />
    </>
  );
};

export default routesFn;
