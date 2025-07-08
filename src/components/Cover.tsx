import Image from "next/image";
import React from "react";
import { IoIosSunny } from "react-icons/io";
import { GiAtSea } from "react-icons/gi";
import { FaArrowDown, FaLocationArrow, FaUserFriends } from "react-icons/fa";

const Cover = () => {
  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[url(/zadar-cover-1080.jpg)] bg-bottom bg-no-repeat lg:h-fit lg:min-h-[unset] lg:bg-none">
      <Image
        className="z-0 hidden lg:block lg:h-auto lg:object-contain"
        src="/cover2.jpg"
        alt="Grad Zadar donat"
        width={1920}
        height={1080}
      />
      <div className="bg-color2/40 xsm:gap-4 xsm:p-5 absolute top-[45%] left-[5%] z-0 flex w-[90%] flex-col items-start gap-3 rounded-2xl p-3 backdrop-blur-md sm:left-[20%] sm:w-[60%] lg:top-[35%] lg:left-[80px] lg:w-[500px] xl:top-[35%] xl:left-[100px] xl:w-[550px] xl:gap-8 2xl:top-[40%] 2xl:w-[650px]">
        <h2 className="text-color1 text-4xl font-extrabold tracking-widest uppercase xl:text-5xl">
          Bike tours Zadar
        </h2>
        <p className="font-lato text-2xl text-white xl:text-3xl">
          One of the best ways to spend a sunny summer day and to explore a new
          city is to go cycling. But what to do if you are a traveler visiting
          city and do not have your own bike? Visit us and enjoy Zadar without
          worries!
        </p>
        <a
          href="#tours"
          className="bg-color1 group xsm:py-2 flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-transparent px-5 py-1 text-2xl text-white transition-all duration-500 hover:border-white xl:text-3xl"
        >
          More info{" "}
          <FaArrowDown className="transition-all duration-500 group-hover:translate-y-[4px]" />
        </a>
      </div>

      <div className="3xl:top-[45%] absolute top-[45%] z-10 hidden lg:top-[60%] lg:left-[61%] lg:block lg:w-auto xl:top-[55%] xl:left-[55%]">
        <div className="lg:h-[216px] lg:w-[350px] xl:h-[308px] xl:w-[500px] 2xl:h-[370px] 2xl:w-[600px]">
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
        <div className="bg-color2 absolute top-[-10px] left-0 flex h-[60px] w-[60px] items-center justify-center rounded-full p-[10px] xl:top-[-40px] xl:left-0 xl:h-[80px] xl:w-[80px] 2xl:top-[-100px]">
          <div className="rounded-full bg-white">
            <IoIosSunny className="text-color1 lg:text-5xl xl:text-6xl" />
          </div>
        </div>
        <div className="bg-color2 absolute top-[-70px] left-[60px] flex h-[80px] w-[80px] items-center justify-center rounded-full xl:top-[-100px] xl:left-[100px] xl:h-[110px] xl:w-[110px] 2xl:top-[-150px] 2xl:left-[120px]">
          <div className="w-fit overflow-hidden rounded-full">
            <GiAtSea className="text-color2 bg-white text-7xl xl:text-8xl" />
          </div>
        </div>
        <div className="bg-color2 map-marker absolute top-[-160px] left-[140px] flex h-[100px] w-[100px] items-center justify-center rounded-full p-[16px] xl:top-[-240px] xl:left-[200px] xl:h-[140px] xl:w-[140px] xl:p-[26px] 2xl:top-[-300px] 2xl:left-[220px] 2xl:h-[200px] 2xl:w-[200px] 2xl:p-[28px]">
          <div className="rounded-full bg-white">
            <Image
              className="p-1 xl:p-2"
              src="/bike-icon.svg"
              alt="bike icon"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="bg-color2 absolute top-[-70px] left-[240px] flex h-[80px] w-[80px] items-center justify-center rounded-full xl:top-[-100px] xl:left-[330px] xl:h-[100px] xl:w-[100px] xl:p-[10px] 2xl:top-[-150px] 2xl:left-[410px]">
          <div className="w-fit overflow-hidden rounded-full bg-white p-1">
            <FaUserFriends className="text-color2 text-6xl xl:text-7xl" />
          </div>
        </div>
        <div className="bg-color2 absolute top-[-10px] right-[-30px] flex h-[60px] w-[60px] items-center justify-center rounded-full xl:top-[-40px] xl:right-[-35px] xl:h-[100px] xl:w-[100px] xl:p-[10px] 2xl:top-[-100px]">
          <div className="rounded-full bg-white p-2 xl:p-4">
            <FaLocationArrow className="text-color1 text-4xl xl:text-5xl" />
          </div>
        </div>
      </div>

      <div className="bg-color2 absolute top-[35%] left-[5%] flex h-[60px] w-[60px] items-center justify-center rounded-full p-[10px] sm:top-[60%] lg:hidden">
        <div className="rounded-full bg-white">
          <IoIosSunny className="text-color1 text-5xl" />
        </div>
      </div>
      <div className="bg-color2 absolute top-[30%] left-[20%] flex h-[80px] w-[80px] items-center justify-center rounded-full sm:left-[10%] lg:hidden">
        <div className="w-fit overflow-hidden rounded-full">
          <GiAtSea className="text-color2 bg-white text-7xl" />
        </div>
      </div>
      <div className="bg-color2 map-marker absolute top-[20%] left-[50%] flex h-[100px] w-[100px] translate-x-[-50%] items-center justify-center rounded-full p-[16px] lg:hidden">
        <div className="rounded-full bg-white">
          <Image
            className="p-1"
            src="/bike-icon.svg"
            alt="bike icon"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="bg-color2 absolute top-[30%] right-[20%] flex h-[80px] w-[80px] items-center justify-center rounded-full sm:right-[10%] lg:hidden">
        <div className="w-fit overflow-hidden rounded-full bg-white p-1">
          <FaUserFriends className="text-color2 text-6xl" />
        </div>
      </div>
      <div className="bg-color2 absolute top-[35%] right-[5%] flex h-[60px] w-[60px] items-center justify-center rounded-full sm:top-[60%] lg:hidden">
        <div className="rounded-full bg-white p-2">
          <FaLocationArrow className="text-color1 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
