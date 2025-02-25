import React from "react";
import { Route } from "react-router-dom";
import CreateCharacter from "../Pages/createCharacter";
import Welcome from "../Pages/welcome";

const routesFn = () => {
  return (
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/create" element={<CreateCharacter />} />
    </>
  );
};

export default routesFn;
