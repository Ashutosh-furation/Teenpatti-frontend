'use client'


import { useEffect } from "react";


const page = () => {

  useEffect(() => {
    const checkViewportWidth = () => {
      if (window.innerWidth >= 1024) {
         window.location.href = "/";
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
    <div className="flex items-center justify-center h-screen bg-[#440c0c]">
      <div className="container  border-red-900 mx-auto text-center">
        <h1 className="text-8xl expl-text text-white font-bold">
          Welcome to the Desktop Only Website
        </h1>
        <p className="text-xl  text-white mt-10">
          This website is designed for desktop mode only.
        </p>
      </div>
    </div>
  );
};

export default page;
