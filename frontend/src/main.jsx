import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Menambahkan impor BrowserRouter
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./assets/components/BackUI/Handler/store";

axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
