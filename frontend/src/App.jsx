import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Index.scss";
import Index from "./assets/components/Index";
import SignIn from "./assets/components/Middle/SignIn";
import SignUp from "./assets/components/Middle/SignUp";
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
