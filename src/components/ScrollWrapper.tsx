"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollWrapper = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className="group bg-color1 bg-opacity-35 fixed right-2 bottom-5 z-50 flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-xl p-3"
        >
          <FaArrowUp className="group-hover:text-color2 group-focus:text-colo2 group-active:text-color2 text-5xl text-white transition-all duration-300" />
        </div>
      )}
    </>
  );
};

export default ScrollWrapper;
