import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Index.scss";
import Index from "./assets/components/Index";
import SignIn from "./assets/components/Middle/SignIn";
<<<<<<< HEAD
import SignUp from "./assets/components/Middle/SignUp";
=======
import SignUp from "./assets/components/middle/SignUp";
<<<<<<< HEAD
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
import Dashboard from "./assets/components/BackUI/Elements/Dashboard";
import Inlink from "./assets/components/BackUI/Inlink";
import Undangan from "./assets/components/Template/Undangan";

function Link() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="Sign-In" element={<SignIn />} />
      <Route path="Sign-Up" element={<SignUp />} />
      <Route path="Dashboard/:id_user" element={<Dashboard />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <Link />
      <Inlink />
      <Undangan />
    </>
  );
}

export default App;
