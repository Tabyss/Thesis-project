import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Landing from "./Landing/Landing";
import Package from "./package/Package";

function Link() {
  return (
    <></>
  );
}

function Index() {
  return (
    <>
      <Landing />
      <Package/>
      <Footer/>
    </>
  );
}

export default Index;
