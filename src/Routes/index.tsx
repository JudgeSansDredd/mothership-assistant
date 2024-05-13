import React from "react";
import { Route } from "react-router-dom";
import CharacterClass from "../Pages/Create/characterClass";
import StatsAndSaves from "../Pages/Create/statsAndSaves";
import Welcome from "../Pages/welcome";

const routesFn = () => {
  return (
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/create/statsandsaves" element={<StatsAndSaves />} />
      <Route path="/create/characterclass" element={<CharacterClass />} />
    </>
  );
};

export default routesFn;
