import React from "react";
import Footer from "./footer/Footer";
import Landing from "./Landing/Landing";
import Fitur from "./Fitur/Fitur";
import Tema from "./Tema/Tema";
import Review from "./Review/Review";
import Package from "./package/Package";

function Index() {
  return (
    <>
      <Landing />
      <Fitur />
      <Tema />
      <Package />
      <Review />
      <Footer />
    </>
  );
}

export default Index;
