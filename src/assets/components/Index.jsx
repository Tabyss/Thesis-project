import React from "react";
import Landing from "./Layout/Landing/Landing";
import Fitur from "./Layout/Fitur/Fitur";
import Tema from "./Layout/Tema/Tema";
import Package from "./Layout/Package/Package";
import Review from "./Layout/Review/Review";
import Footer from "./Layout/Footer/Footer";


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
