"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setShowSpinner(false), 400);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={cn("preloader", showSpinner ? "" : "preloader-hide")}>
      <div className="loader">
        <div className="ytp-spinner">
          <div className="ytp-spinner-container">
            <div className="ytp-spinner-rotator">
              <div className="ytp-spinner-left">
                <div className="ytp-spinner-circle"></div>
              </div>
              <div className="ytp-spinner-right">
                <div className="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
