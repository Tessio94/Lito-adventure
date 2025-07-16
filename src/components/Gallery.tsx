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
  //   {
  //     url: "/zadar-cover.jpg",
  //     alt: "Zadar iz zraka",
  //   },
  {
    url: "/bajlo1.jpg",
    alt: "Punta Bajlo",
  },
  {
    url: "/bajlo2.jpg",
    alt: "Vodič vodi turu",
  },
  {
    url: "/bajlo3.jpg",
    alt: "Punta Bajlo iz zraka",
  },
  {
    url: "/bajlo4.jpg",
    alt: "Lito adventure tura iz zraka",
  },
  {
    url: "/bajlo5.jpg",
    alt: "Zadar karma tura",
  },
  {
    url: "/bajlo6.jpg",
    alt: "Zadar karma tura",
  },
  {
    url: "/bajlo7.jpg",
    alt: "Zadar karma tura",
  },
  {
    url: "/bajlo8.jpg",
    alt: "Zadar karma tura",
  },
  {
    url: "/donat.jpg",
    alt: "Donat i forum",
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
              className="rounded-xl bg-center object-contain"
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
                className="aspect-video cursor-pointer rounded-xl object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Gallery;
