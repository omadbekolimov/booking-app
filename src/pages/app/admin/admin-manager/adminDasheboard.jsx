import React, { useEffect } from "react";
import userIcon from "../../../../assets/images/Component 5.png";
import logo from "../../../../assets/images/HFfinder.png";
import itemLIst from "../../../../assets/images/clarity_list-line.png";
import orderList from "../../../../assets/images/clarity_list-line (1).png";
import customers from "../../../../assets/images/raphael_customer.png";
import analytics from "../../../../assets/images/logos_google-analytics.png";
import account from "../../../../assets/images/Vector.png";
import Order_LIst from "./Order_list";
import customer from "./customer";
import { Link } from "react-router-dom";

const AdminDasheboard = ({ activeClass, activeClassCus }) => {
	return (
		<>
			<div className=""></div>
			{/* top white piece */}
			<div className="bg-white px-4 py-3  rounded-tl-xl rounded-tr-xl mt-4 w-[400px] ">
				{/* logo */}
				<div className="flex items-center justify-center mt-8 mb-10">
					<img src={logo} alt="" />
				</div>
				{/* user data */}
				<div className="flex items-center gap-2">
					{/* user icon */}
					<div>
						<img src={userIcon} alt="" />
					</div>
					{/* user name */}
					<div>
						<p className="font-bold text-2xl ">Byiringiro Moise</p>
						<div className="flex items-center gap-1">
							<div className="w-[20px] h-[10px] rounded-md bg-[#F46A06]"></div>
							<p className="text-[#00000099] text-sm">System Admin</p>
						</div>
					</div>
				</div>
				{/* menu category */}
				<div className="flex flex-col justify-start mt-20">
					{/* first */}
					<div className="flex items-center  gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={itemLIst} alt="" /> <h1 className="font-bold text-l ml-3">Item list</h1>
					</div>
					<Link to="/order-list">
						<div
							className={`${activeClass} flex items-center gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none`}
						>
							<img src={orderList} alt="" />
							<h1 className="font-bold text-l ml-3">Order list</h1>
						</div>
					</Link>
				</div>
				<Link to="/customer">
					<div
						className={`${activeClassCus} flex items-center  gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none`}
					>
						<img src={customers} alt="" />
						<p className="text-l font-bold ml-2">Customers</p>
					</div>
				</Link>

				{/* Manage Accounts */}
				<div className="flex items-center mb-6 gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
					<img src={analytics} alt="" />
					<p className="text-l font-bold ml-5">Analytics</p>
				</div>
				<div className="flex items-center mb-6 gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
					<img src={account} alt="" />
					<p className="text-l font-bold ml-5">Analytics</p>
				</div>
				<div className="mt-20 ml-10">
					<button className="bg-orange-500 w-3/4 h-12 rounded-xl text-white font-bold  ">
						Logout
					</button>
				</div>
				<div className="mt-10">
					<h1>@B.Moise All rights reserved</h1>
				</div>
			</div>
		</>
	);
};

export default AdminDasheboard;
