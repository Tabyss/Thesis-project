import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import Fitur from "./Fitur/Fitur";
import Tema from "./Tema/Tema";
import Review from "./Review/Review";

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
      <Tema />
      <Review />
    </div>
  );
}

export default Index;
