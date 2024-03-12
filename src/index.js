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

import ReactDOM  from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import "./assets/style.css";
// import { MainAdmin } from "./pages/app/admin/mainAdmin/index.jsx";
import { EditProfile } from "./pages/app/profile/editProfile/EditProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<App />
		<EditProfile />
	</BrowserRouter>
);
