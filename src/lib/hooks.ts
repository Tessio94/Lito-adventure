"use client";

import { useEffect, useState } from "react";

export default function useHashChange() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return hash;
}
