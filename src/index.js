import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
import App from "./app";
import { MainHotelDashboard } from "./pages/main-hotel-dashboard";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainHotelDashboard />
  </React.StrictMode>
  )