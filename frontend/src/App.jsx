import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Index from "./assets/components/Index";
import Login from "./assets/components/login/login";
import SignUp from "./assets/components/login/SignUp";

function Link() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <Link />
    </>
  );
}

export default App;
