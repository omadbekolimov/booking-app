import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/style.css";
import { Routes } from "./routes/routes";
import { Dashboard } from "./pages/app/admin/mainAdmin";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<Dashboard />
	</BrowserRouter>
);
