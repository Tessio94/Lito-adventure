import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="2xsm:min-h-[calc(100vh-541px)] relative h-screen min-h-[calc(100vh-509px)] bg-[url(/zadar-cover-1080.jpg)] bg-bottom bg-no-repeat lg:bg-none xl:min-h-[calc(100vh-283px)]">
        <Image
          className="z-0 hidden lg:block lg:h-auto lg:object-cover"
          src="/cover2.jpg"
          alt="Grad Zadar donat"
          fill
        />
        <div className="bg-color2/40 absolute top-[50%] left-[50%] flex w-[90%] translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-6 rounded-2xl p-10 text-center backdrop-blur-md lg:w-fit">
          <h2 className="text-color1 mb-3 text-5xl tracking-wide">
            Page not Found
          </h2>
          <p className="mb-3 text-3xl tracking-wide text-white">
            Could not find requested resource
          </p>
          <Link
            href="/"
            className="bg-color1 group xsm:py-2 flex w-fit cursor-pointer items-center gap-3 rounded-2xl border-2 border-transparent px-5 py-1 text-2xl text-white transition-all duration-200 hover:border-white focus:border-white active:border-white lg:duration-500 xl:text-3xl"
          >
            More info{" "}
            <FaArrowLeft className="transition-all duration-200 group-hover:translate-x-[-4px] group-focus:translate-x-[-4px] group-active:translate-x-[-4px] lg:duration-500" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
