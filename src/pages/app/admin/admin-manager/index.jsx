import React from "react";
import AdminDasheboard from "./adminDasheboard";
import Order_LIst from "./Order_list";
import Customer from "./customer";

function MainDashboard() {
	return (
		<div className="flex w-full h-full bg-[#F46A06] px-4 py-4">
			<AdminDasheboard />
			<Order_LIst />
		</div>
	);
}

export default MainDashboard;
