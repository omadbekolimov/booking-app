import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/style.css";
// import { Routes } from "./routes/routes";
import { MainAdmin } from "./pages/app/admin/mainAdmin/index.jsx";
// import ReactDOM  from "react-dom/client";
import "./index.css";
import App from "./app";
import { MainHotelDashboard } from "./pages/main-hotel-dashboard";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
//   <React.StrictMode>
//     <MainHotelDashboard />
//   </React.StrictMode>
//   )
