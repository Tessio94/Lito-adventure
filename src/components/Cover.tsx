import Image from "next/image";
import React from "react";
import { IoIosSunny } from "react-icons/io";
import { GiAtSea } from "react-icons/gi";
import { FaArrowDown, FaLocationArrow, FaUserFriends } from "react-icons/fa";

const Cover = () => {
	return (
		<div className="relative">
			<Image
				className="z-0"
				src="/cover2.jpg"
				alt="Grad Zadar donat"
				width={1920}
				height={1080}
			/>
			<div className="absolute top-[40%] left-[100px] w-[650px] bg-color2/40 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-8 items-start">
				<h2 className="text-5xl uppercase text-color1 font-extrabold tracking-widest">
					Bike tours Zadar
				</h2>
				<p className="text-3xl text-white font-lato">
					One of the best ways to spend a sunny summer day and to explore a new
					city is to go cycling. But what to do if you are a traveler visiting
					city and do not have your own bike? Visit us and enjoy Zadar without
					worries!
				</p>
				<button className="px-5 py-2 text-3xl text-white bg-color1 rounded-2xl flex items-center gap-3 border-2 border-transparent hover:border-white cursor-pointer transition-all duration-500 group">
					More info{" "}
					<FaArrowDown className="group-hover:translate-y-[4px] transition-all duration-500" />
				</button>
			</div>
			<div className="absolute z-10 top-[45%] left-[55%]">
				<Image
					className=""
					src="/bicycle.png"
					alt="Grad Zadar donat"
					width={600}
					height={370}
				/>
				<div className="rounded-full bg-color2 w-[80px] h-[80px] top-[-100px] absolute p-[10px] flex items-center justify-center">
					<div className="bg-white rounded-full">
						<IoIosSunny className="text-6xl text-color1" />
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[110px] h-[110px] top-[-150px] left-[120px] absolute flex items-center justify-center">
					<div className="rounded-full w-fit overflow-hidden">
						<GiAtSea className="bg-white text-8xl text-color2" />
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[200px] h-[200px] top-[-300px] left-[220px] absolute p-[28px] flex items-center justify-center map-marker">
					<div className="bg-white rounded-full">
						<Image
							className="p-2"
							src="/bike-icon.svg"
							alt="bike icon"
							width={200}
							height={200}
						/>
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[100px] h-[100px] top-[-150px] left-[400px] absolute p-[10px] flex items-center justify-center">
					<div className="bg-white rounded-full w-fit overflow-hidden p-1">
						<FaUserFriends className="text-7xl text-color2" />
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[100px] h-[100px] top-[-100px] right-[0px] absolute p-[10px] flex items-center justify-center">
					<div className="bg-white rounded-full p-4">
						<FaLocationArrow className="text-5xl text-color1" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cover;
