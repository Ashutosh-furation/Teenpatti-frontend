"use client";

import Homepage from '@/components/Homepage';

import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    const checkViewportWidth = () => {
      if (window.innerWidth < 1024) {
      window.location.href = "/desktoponly";
      }
    };

    checkViewportWidth();

    const handleResize = () => {
      checkViewportWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <main>
        <Homepage/>
    </main>
  );
}
