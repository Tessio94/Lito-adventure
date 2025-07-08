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
			<div className="absolute lg:top-[35%] xl:top-[35%] 2xl:top-[40%] lg:left-[80px] xl:left-[100px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px] bg-color2/40 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-4 xl:gap-8 items-start">
				<h2 className="text-4xl xl:text-5xl uppercase text-color1 font-extrabold tracking-widest">
					Bike tours Zadar
				</h2>
				<p className="text-2xl xl:text-3xl text-white font-lato">
					One of the best ways to spend a sunny summer day and to explore a new
					city is to go cycling. But what to do if you are a traveler visiting
					city and do not have your own bike? Visit us and enjoy Zadar without
					worries!
				</p>
				<a
					href="#tours"
					className="px-5 py-2 text-2xl xl:text-3xl text-white bg-color1 rounded-2xl flex items-center gap-3 border-2 border-transparent hover:border-white cursor-pointer transition-all duration-500 group"
				>
					More info{" "}
					<FaArrowDown className="group-hover:translate-y-[4px] transition-all duration-500" />
				</a>
			</div>
			<div className="absolute z-10 lg:top-[60%] xl:top-[55%] 3xl:top-[45%] lg:left-[61%] xl:left-[55%]">
				<div className="lg:w-[350px] lg:h-[216px] xl:w-[500px] xl:h-[308px] 2xl:w-[600px] 2xl:h-[370px]">
					<Image
						src="/bicycle.png"
						alt="Grad Zadar donat"
						fill
						sizes="(max-width: 1280px) 350px 
							   (max-width: 1536px) 500px, 
							   600px"
						className="object-contain"
					/>
				</div>
				<div className="rounded-full bg-color2 w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] top-[-10px] xl:top-[-40px] xl:left-0 2xl:top-[-100px] absolute p-[10px] flex items-center justify-center">
					<div className="bg-white rounded-full">
						<IoIosSunny className="lg:text-5xl xl:text-6xl text-color1" />
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[80px] h-[80px]  xl:w-[110px] xl:h-[110px] top-[-70px] xl:top-[-100px] 2xl:top-[-150px] left-[60px] xl:left-[100px] 2xl:left-[120px] absolute flex items-center justify-center">
					<div className="rounded-full w-fit overflow-hidden">
						<GiAtSea className="bg-white text-7xl xl:text-8xl text-color2" />
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[100px] h-[100px] xl:w-[140px] xl:h-[140px] 2xl:w-[200px] 2xl:h-[200px] top-[-160px] xl:top-[-240px] 2xl:top-[-300px] left-[140px] xl:left-[200px] 2xl:left-[220px] absolute p-[16px] xl:p-[26px] 2xl:p-[28px] flex items-center justify-center map-marker">
					<div className="bg-white rounded-full">
						<Image
							className="p-1 xl:p-2"
							src="/bike-icon.svg"
							alt="bike icon"
							width={200}
							height={200}
						/>
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[80px] h-[80px]  xl:w-[100px] xl:h-[100px] top-[-70px] xl:top-[-100px] 2xl:top-[-150px] left-[240px] xl:left-[330px] 2xl:left-[410px] absolute xl:p-[10px] flex items-center justify-center">
					<div className="bg-white rounded-full w-fit overflow-hidden p-1">
						<FaUserFriends className="text-6xl xl:text-7xl text-color2" />
					</div>
				</div>
				<div className="rounded-full bg-color2 w-[60px] h-[60px]  xl:w-[100px] xl:h-[100px] top-[-10px] xl:top-[-40px] 2xl:top-[-100px] right-[-30px] xl:right-[-35px] absolute xl:p-[10px] flex items-center justify-center">
					<div className="bg-white rounded-full p-2 xl:p-4">
						<FaLocationArrow className="text-4xl xl:text-5xl text-color1" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cover;
