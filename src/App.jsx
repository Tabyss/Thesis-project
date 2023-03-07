import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Index from "./assets/components/Index";
import Login from "./assets/components/login/login";

function Link() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Index />} />
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
