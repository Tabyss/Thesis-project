import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Index.scss";
import Index from "./assets/components/Index";
import SignIn from "./assets/components/Middle/SignIn";
import SignUp from "./assets/components/middle/SignUp";
import Dashboard from "./assets/components/BackUI/Elements/Dashborad";
import Inlink from "./assets/components/BackUI/Inlink";
import Register from "./assets/components/Middle/Register";

function Link() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="Sign-In" element={<SignIn />} />
      <Route path="Sign-Up" element={<SignUp />} />
      <Route path="register" element={<Register />} />
      <Route path="Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <Link />
      <Inlink />
    </>
  );
}

export default App;