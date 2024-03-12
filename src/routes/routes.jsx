import React from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { App } from "../pages";
import { AdminD } from "../pages/app";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
	return (
		<div>
			<Switch>
				<Route path="admin">
					<Route index path="*" element={<AdminD />} />
				</Route>
				<Route index path="*" element={<Navigate />} />
			</Switch>
		</div>
	);
};

export default Router;
