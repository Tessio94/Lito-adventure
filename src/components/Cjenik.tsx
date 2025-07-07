import React from "react";

const Cjenik = () => {
	return (
		<section className="pt-20 max-w-[50%] m-auto flex justify-between items-start">
			<div className="w-[200px] mb-10">
				<h3 className="text-color1 text-5xl mb-10 tracking-wide">Pricing</h3>
				<div className="flex items-center justify-between text-2xl border-[2px] border-color1 border-b-0 py-2 px-10 rounded-t-2xl bg-color1/30">
					<p className="">Price:</p>
					<p>25€</p>
				</div>
				<div className="flex justify-between items-center  text-2xl border-[2px] border-color1 py-2 px-10 rounded-b-2xl bg-color1/30">
					<p>Duration:</p>
					<p>1h</p>
				</div>
			</div>
			<div className="w-[400px]">
				<h5 className="text-color1 text-5xl mb-3 tracking-wide">Slots</h5>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10 bg-color1/30 rounded-t-2xl">
					1st Slot: 09:30-11:00
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10">
					Preparation: 11:00 - 11:20
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10 bg-color1/30">
					2nd Slot: 11:20-12:50
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10">
					Preparation: 12:50 - 13:10
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10 bg-color1/30">
					3rd Slot: 13:10-14:40
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10">
					Preparation: 14:40 - 15:00
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10 bg-color1/30">
					4th Slot: 15:00-16:30
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10">
					Preparation: 16:30 - 16:50
				</div>
				<div className="border-[2px] border-color1 text-2xl py-2 px-10 bg-color1/30 border-b-0">
					5th Slot: 16:50-18:20
				</div>
				<div className="border-[2px] border-color1 border-b-0 text-2xl py-2 px-10">
					Preparation: 18:20 - 18:40
				</div>
				<div className="border-[2px] border-color1 text-2xl py-2 px-10 bg-color1/30 rounded-b-2xl">
					6th Slot: 18:40-20:10
				</div>
			</div>
		</section>
	);
};

export default Cjenik;
