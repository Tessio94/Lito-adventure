import React from "react";
import Gallery from "./Gallery";

const Main = () => {
	return (
		<main className="pt-20 px-[20px] sm:px-[50px] lg:px-[60px] 2xl:px-[160px]">
			<h3 className="text-color1 text-5xl mb-3 tracking-wide">
				Lito-adventure bike tours
			</h3>
			<div className="flex items-center justify-between gap-10 ">
				<div className="flex flex-col gap-5 items-start basis-[55%] max-w-[55%] text-2xl">
					<p className="font-lato text-3xl mb-5">
						Discover Zadar in the most fun and active way—with our guided bike
						tours!
					</p>
					<p className="text-2xl font-lato">
						We’re a young, energetic team passionate about combining outdoor
						adventure with the rich history and beauty of our hometown. Our
						tours take you off the beaten path to explore coastal views,
						historic landmarks, and hidden gems—all while enjoying the freedom
						of two wheels.
					</p>
					<p className="text-2xl font-lato">
						Whether you're a seasoned cyclist or just looking for a unique
						sightseeing experience, our tours are designed for all levels. Join
						us for a ride full of laughter, stories, and unforgettable views of
						Zadar like you’ve never seen before!
					</p>
				</div>
				<div className="basis-[35%] max-w-[35%] bg-color1/10 p-3 rounded-2xl">
					<Gallery />
				</div>
			</div>
		</main>
	);
};

export default Main;
