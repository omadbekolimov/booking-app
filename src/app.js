import React from "react";
import Main from "./components/layout/main";
import { Route, Routes } from "react-router-dom";
import HomeRestaurant from "./components/layout/homeRestaurant/homeRestaurant";
import OrderLanding from "./pages/app/orderLandingPage";
import Login from "./pages/auth/login";
import AdminDasheboard from "./pages/app/admin/admin-manager/adminDasheboard";
import MainDashboard from "./pages/app/admin/admin-manager";
import { Customer } from './pages/app/admin/admin-manager/customer';
import MainCustomer from './pages/app/admin/admin-manager/index1';

const App = () => {
	return (
		<Routes>
			<Route path="/" Component={Main} />
			<Route path="/home" Component={HomeRestaurant} />
			<Route path="/order-landing page" Component={OrderLanding} />
			<Route path="/loginSignUp" Component={Login} />
			<Route path="/restaran-managment" Component={MainDashboard} />
			<Route path="/customer" Component={MainCustomer} />
		</Routes>
	);
};

export default App;
