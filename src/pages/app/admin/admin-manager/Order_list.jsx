import React from "react";
import home from "../../../../assets/images/Vector (1).png";
import line from "../../../../assets/images/Line 10.png";

const Order_LIst = () => {
	return (
		<div className="w-full">
			<div className="flex flex-row-reverse w-full">
				<div className="w-full">
					<div className="flex ml-4 w-full">
						<img className="w-10 h-10 mt-20 ml-4" src={home} alt="" />
						<img className="w-5 h-12 mt-20 ml-2" src={line} alt="" />
						<h1 className="mt-[100px] ml-1 font-bold text-xl">Restaurant Manager Dashboard</h1>
						<div className="flex items-center"></div>
						<div className="flex flex-col-reverse w-1/4 ml-[200px]">
							<input className="rounded-full w-full h-8 border-2 border-white " type="text" />
						</div>
						<div className="flex flex-col-reverse ml-2 ">
							<button className="font-bold rounded-full border-4 border-white w-20">Search</button>
						</div>
					</div>

					<div className=" mt-6 ml-4 bg-white rounded-xl border-[10px] border-white-600 px-2 py-2">
						<button className="border-2 border-orange-500 px-3 py-1  rounded-lg mt-3">
							All Orders
						</button>
						<button className="border-2 border-orange-500 px-3 py-1 ml-6 rounded-lg">
							New order
						</button>
						<button className="border-2 border-orange-500 px-3 py-1 ml-6 rounded-lg">
							On Progress
						</button>
						<button className="border-2 border-orange-500 px-3 py-1 ml-6 rounded-lg">
							Canceled Orders
						</button>
						<button className="border-2 border-orange-500 px-3 py-1 ml-6 rounded-lg">
							Complete orders
						</button>
						<table className="mt-4 w-full ml-1 text-center rounded-lg">
							<tr className="border-2 w-full bg-[#F1E8D7] h-10 ">
								<th>OrderId</th>
								<th>Pick Up Time</th>
								<th>Pick Up Date</th>
								<th>Customer Name</th>
								<th>Ordered</th>
								<th>Payment Status</th>
							</tr>
							<tr>
								<td className="p-4">#2</td>
								<td>08:30:12</td>
								<td>2022-04-20</td>
								<td>Moise Byiringiro</td>
								<td>Yes</td>
								<td className="text-orange-500 font-bold">Pending</td>
							</tr>
							<tr>
								<td colSpan={6}>
									<hr />
								</td>
							</tr>
							<tr>
								<td className="p-4">#2</td>
								<td>08:30:12</td>
								<td>2022-04-20</td>
								<td>Moise Byiringiro</td>
								<td>Yes</td>
								<td className="text-orange-500 font-bold">Pending</td>
							</tr>
							<tr>
								<td colSpan={6}>
									<hr />
								</td>
							</tr>
							<tr>
								<td className="p-4">#2</td>
								<td>08:30:12</td>
								<td>2022-04-20</td>
								<td>Moise Byiringiro</td>
								<td>Yes</td>
								<td className="text-orange-500 font-bold">Pending</td>
							</tr>
							<tr>
								<td colSpan={6}>
									<hr />
								</td>
							</tr>
							<tr>
								<td className="p-4">#2</td>
								<td>08:30:12</td>
								<td>2022-04-20</td>
								<td>Moise Byiringiro</td>
								<td>Yes</td>
								<td className="text-orange-500 font-bold">Pending</td>
							</tr>
							<tr>
								<td colSpan={6}>
									<hr />
								</td>
							</tr>
							<tr>
								<td className="p-4">#2</td>
								<td>08:30:12</td>
								<td>2022-04-20</td>
								<td>Moise Byiringiro</td>
								<td>Yes</td>
								<td className="text-orange-500 font-bold">Pending</td>
							</tr>
							<tr>
								<td colSpan={6}>
									<hr />
								</td>
							</tr>
							<tr>
								<td className="p-4">#2</td>
								<td>08:30:12</td>
								<td>2022-04-20</td>
								<td>Moise Byiringiro</td>
								<td>Yes</td>
								<td className="text-orange-500 font-bold">Pending</td>
							</tr>
							<tr>
								<td colSpan={6}>
									<hr />
								</td>
							</tr>
							<tr>
								<td className="p-4">#2</td>
								<td>08:30:12</td>
								<td>2022-04-20</td>
								<td>Moise Byiringiro</td>
								<td>Yes</td>
								<td className="text-orange-500 font-bold">Pending</td>
							</tr>
							<tr>
								<td colSpan={6}>
									<hr />
								</td>
							</tr>
						</table>
						<div className="py-3">
							<button className="bg-orange-500 rounded-md w-32 h-10 text-white font-bold">
								Previous
							</button>
							<button className="bg-orange-500 rounded-md w-32 h-10 text-white font-bold ml-2">
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order_LIst;
