import Image from "next/image";
import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-color2/10 z-10 flex w-full max-w-[1920px] flex-col items-center justify-between gap-8 px-[20px] py-5 sm:px-[40px] lg:px-[50px] xl:flex-row 2xl:px-[160px]">
      <a href="#">
        <Image
          className=""
          src="/footer-logo.svg"
          alt="Lito bike logo"
          width={150}
          height={243}
        />
      </a>
      <div className="text-color1 order-1 text-center xl:order-0">
        Copyright © 2025 Lito Adventure - All Rights Reserved.
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-color1 text-2xl">
          <span className="text-color2">Location: </span>Ul. Dinka Šimunovića 9,
          23000, Zadar
        </p>
        <p className="text-color1 text-2xl">
          <span className="text-color2">Mail: </span>
          <a
            href="mailto:dinodokozanikpalj@gmail.com"
            className="after:bg-color2 relative after:absolute after:top-[100%] after:right-[100%] after:left-0 after:h-[2px] after:transition-all after:duration-500 after:content-[''] hover:after:right-0"
          >
            Dinodokoza@icloud.com
          </a>
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.facebook.com/people/Lito-Adventure/61574576488699/#"
            target="_blank"
            aria-label="Lito Adventure on Facebook - Footer social link"
            className="text-color1 bg-color2/50 hover:border-color1 rounded-2xl border-2 border-transparent p-1 backdrop-blur-sm transition-all duration-500"
          >
            <CiFacebook className="text-color1 text-3xl" />
          </a>
          <a
            href="https://instagram.com/lito_adventure?igsh=MWVkaTEzbm1kZXkwZA%3D%3D&utm_source=qr"
            target="_blank"
            aria-label="Lito Adventure on Instagram - Footer social link"
            className="text-color1 bg-color2/50 hover:border-color1 rounded-2xl border-2 border-transparent p-1 backdrop-blur-sm transition-all duration-500"
          >
            <CiInstagram className="text-color1 text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
