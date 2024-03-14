import AdminDasheboard from "./adminDasheboard";
import Customer from "./customer";

function MainCustomer() {
	return (
		<div className="flex w-full h-full bg-[#F46A06] px-4 py-4">
			<AdminDasheboard activeClassCus={`bg-[#ccc]`} />
			<Customer />
		</div>
	);
}

export default MainCustomer;
