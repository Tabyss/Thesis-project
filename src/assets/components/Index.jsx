import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import Fitur from "./Fitur/Fitur";

function Link() {
  return (
    <></>
  );
}

function Index() {
  return (
    <div>
      <Landing />
      <Fitur />
    </div>
  );
}

export default Index;
