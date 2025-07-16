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

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

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
    alt: "Guide with group",
  },
  {
    url: "/bajlo3.jpg",
    alt: "Punta Bajlo from air",
  },
  {
    url: "/bajlo4.jpg",
    alt: "Fresh air and sea",
  },
  {
    url: "/bajlo5.jpg",
    alt: "Zadar coastline",
  },
  {
    url: "/bajlo6.jpg",
    alt: "Zadar karma tour",
  },
  {
    url: "/bajlo7.jpg",
    alt: "Lito adventure bike group",
  },
  {
    url: "/bajlo8.jpg",
    alt: "Lito adventure bike group",
  },
  {
    url: "/donat.jpg",
    alt: "Donat i forum sightseeing",
  },
];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Optional config
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

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
            <a
              href={image.url}
              data-fancybox="gallery"
              data-caption={image.alt}
              className="group relative block"
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={1920}
                height={1080}
                className="rounded-xl bg-center object-contain"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-color1 absolute top-3 right-3 h-10 w-10 rounded-2xl bg-white/70 p-2 transition-all duration-300 xl:opacity-0 xl:group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 3h6v6m0-6l-7 7m-3 11H3v-6m0 6l7-7"
                />
              </svg>
            </a>
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
