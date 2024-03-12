import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "./assets/style.css";
// import Main from "./components/layout/main";
import ProfileMain from "./pages/app/profile/editProfile/profileMain";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<ProfileMain />
	</BrowserRouter>
);
