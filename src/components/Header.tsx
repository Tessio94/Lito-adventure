"use client";

import useHashChange from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { CiFacebook, CiInstagram, CiMobile3 } from "react-icons/ci";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hambActive, setHambActive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(hambActive);
  const hash = useHashChange();

  const pathname = usePathname();
  console.log(pathname);

  const hamb = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHambClick = () => {
      setHambActive((prevState) => {
        const newState = !prevState;

        if (newState) {
          if (hamb.current) {
            hamb.current.classList.add("open");
          }
          setShowSidebar(true);
        } else {
          if (hamb.current) {
            hamb.current.classList.remove("open");
          }
          setShowSidebar(false);
        }

        return newState;
      });
    };

    const currentHamb = hamb.current;

    if (currentHamb) {
      currentHamb.addEventListener("click", handleHambClick);
    }

    return () => {
      if (currentHamb) {
        currentHamb.removeEventListener("click", handleHambClick);
      }
    };
  }, []);

  useEffect(() => {
    setShowSidebar(false);
    setHambActive(false);
    if (hamb.current) {
      hamb.current.classList.remove("open");
    }
  }, [hash]);

  return (
    <header className="absolute z-10 flex w-full max-w-[1920px] items-center justify-between px-[20px] py-3 sm:px-[40px] lg:px-[50px] 2xl:px-[160px]">
      <Link href="/">
        <Image
          className=""
          src="/header-logo.svg"
          alt="Lito bike logo"
          width={200}
          height={88}
        />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center lg:gap-8 xl:gap-20">
          <li>
            <a
              href="#tours"
              className="text-color1 bg-color2/50 hover:border-color1 relative cursor-pointer rounded-2xl border-2 border-transparent p-1 text-2xl font-bold tracking-widest capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Tours
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-color1 bg-color2/50 hover:border-color1 relative cursor-pointer rounded-2xl border-2 border-transparent p-1 text-2xl font-bold tracking-widest capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#location"
              className="text-color1 bg-color2/50 hover:border-color1 relative cursor-pointer rounded-2xl border-2 border-transparent p-1 text-2xl font-bold tracking-widest capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Location
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-color1 bg-color2/50 hover:border-color1 relative cursor-pointer rounded-2xl border-2 border-transparent p-1 text-2xl font-bold tracking-widest capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="hidden flex-col gap-3 lg:flex xl:gap-5">
        <div className="text-color1 bg-color2/50 hover:border-color1 rounded-2xl border-2 border-transparent px-1 py-1 backdrop-blur-sm transition-all duration-500 xl:px-2">
          <a
            href="tel:+095 876 1857"
            className="text-color1 flex cursor-pointer items-center gap-1 text-2xl font-bold tracking-wider capitalize xl:gap-3"
          >
            <CiMobile3 className="text-color1 text-3xl" />
            +095 876 1857
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/people/Lito-Adventure/61574576488699/#"
            target="_blank"
            className="text-color1 bg-color2/50 hover:border-color1 rounded-2xl border-2 border-transparent p-1 backdrop-blur-sm transition-all duration-500"
          >
            <CiFacebook className="text-color1 text-3xl" />
          </a>
          <a
            href="https://instagram.com/lito_adventure?igsh=MWVkaTEzbm1kZXkwZA%3D%3D&utm_source=qr"
            target="_blank"
            className="text-color1 bg-color2/50 hover:border-color1 rounded-2xl border-2 border-transparent p-1 backdrop-blur-sm transition-all duration-500"
          >
            <CiInstagram className="text-color1 text-3xl" />
          </a>
        </div>
      </div>

      <div className="bg-color2/50 ml-auto block rounded-2xl p-2 lg:hidden">
        <div
          id="nav-icon1"
          className="relative z-50 order-1 cursor-pointer text-3xl text-stone-100 lg:hidden"
          ref={hamb}
        >
          <span className="bg-color1"></span>
          <span className="bg-color1"></span>
          <span className="bg-color1"></span>
        </div>
      </div>
      <nav
        className={cn(
          "xxsm:w-[260px] from-color1 to-color2 fixed top-0 bottom-0 left-0 z-50 flex w-[300px] flex-col justify-between bg-gradient-to-t py-12 shadow-lg transition-all duration-300 sm:w-[330px] lg:hidden",
          showSidebar ? "translate-x-0" : "translate-x-[-100%]",
        )}
      >
        <ul className="flex flex-col gap-6 text-2xl">
          <li className="w-full">
            <a
              href="#tours"
              className="bg-color1/80 hover:border-color1 relative block w-full cursor-pointer border-2 border-transparent p-1 text-2xl font-bold tracking-widest text-white capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Tours
            </a>
          </li>
          <li className="w-full">
            <a
              href="#pricing"
              className="bg-color1/80 hover:border-color1 relative block w-full cursor-pointer border-2 border-transparent p-1 text-2xl font-bold tracking-widest text-white capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Pricing
            </a>
          </li>
          <li className="w-full">
            <a
              href="#location"
              className="bg-color1/80 hover:border-color1 relative block w-full cursor-pointer border-2 border-transparent p-1 text-2xl font-bold tracking-widest text-white capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Location
            </a>
          </li>
          <li className="w-full">
            <a
              href="#contact"
              className="bg-color1/80 hover:border-color1 relative block w-full cursor-pointer border-2 border-transparent p-1 text-2xl font-bold tracking-widest text-white capitalize backdrop-blur-sm transition-all duration-500 xl:p-2"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-5">
          <div className="bg-color2/90 hover:border-color1 border-2 border-transparent px-1 py-1 backdrop-blur-sm transition-all duration-500 xl:px-2">
            <a
              href="tel:+095 876 1857"
              className="flex cursor-pointer items-center gap-1 text-2xl font-bold tracking-wider text-white capitalize xl:gap-3"
            >
              <CiMobile3 className="text-3xl text-white" />
              +095 876 1857
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/people/Lito-Adventure/61574576488699/#"
              target="_blank"
              className="text-color1 bg-color2/90 hover:border-color1 rounded-2xl border-2 border-transparent p-1 backdrop-blur-sm transition-all duration-500"
            >
              <CiFacebook className="text-3xl text-white" />
            </a>
            <a
              href="https://instagram.com/lito_adventure?igsh=MWVkaTEzbm1kZXkwZA%3D%3D&utm_source=qr"
              target="_blank"
              className="text-color1 bg-color2 hover:border-color1 rounded-2xl border-2 border-transparent p-1 backdrop-blur-sm transition-all duration-500"
            >
              <CiInstagram className="text-3xl text-white" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
