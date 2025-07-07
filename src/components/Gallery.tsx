"use client";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { useState } from "react";
import Image from "next/image";

const gallery = [
	{
		url: "/donat.jpg",
		alt: "Donat",
	},
	{
		url: "/zadar-cover.jpg",
		alt: "Zadar cover jpg",
	},
	{
		url: "/zadar-zalazak.jpg",
		alt: "Zadar cover jpg",
	},
];

const Gallery = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, Thumbs]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
			>
				{gallery?.map((image, i) => (
					<SwiperSlide key={i} className="my-auto max-h-[70vh]">
						<Image
							src={image.url}
							alt={image.alt}
							width={1920}
							height={1080}
							className="object-contain bg-center rounded-xl"
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				modules={[Thumbs]}
				watchSlidesProgress
				onSwiper={(swiperInstance) => {
					// Prevent invalid swiper assignment
					if (!swiperInstance.destroyed) {
						setThumbsSwiper(swiperInstance);
					}
				}}
				spaceBetween={10}
				slidesPerView={4}
				className="m-4!"
			>
				{gallery?.map((image, i) => {
					return (
						<SwiperSlide key={i} className="h-fit">
							<Image
								src={image.url}
								alt={image.alt}
								width={300}
								height={200}
								className="object-cover rounded-xl aspect-video cursor-pointer"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Gallery;
