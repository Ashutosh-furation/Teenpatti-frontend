"use client";
import React from "react";
import Image from "next/image";

import sikka from "../../public/assets/sikkafontfilled.svg";
import Rectangle from "../assets/Rectangle.png";
import Navbar from "./Navbar";
import group from "../../public/assets/Group 152.svg";

import navlogo from "../../public/assets/onlyNavbar.svg";
import heroshadow from "../../public/assets/heroboxshadow.png";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="w-[100%] m-auto  h-[813px] border-black-900 object-fit bg-no-repeat bg-black bg-[url('/assets/Grouphero.svg')]">
        <div className=" w-[100%] m-auto     border-green-600     main-nav-con">
          <div className="max-w-8xl  m-auto  text-center justify-center items-center  border-green-500  relative left-5 top-4">
            <Image
              src={navlogo}
              alt="navlogo"
              className="mx-auto   nav-background-img"
            />
          </div>
          <div className="mx-auto">
            <Navbar />
          </div>
        </div>
        /**------------- herro part ------------ */
        <div className=" w-[90%] py-3  m-auto mt-40 border-green-500 flex justify-between">
          <div className="w-[70%]   py-[2rem] m-auto border-yellow-500">
            <div className=" w-[100%]  px-1 py-2 border-pink-500">
              <Image src={sikka} alt="Sikkafont" />
            </div>

            <div className="w-[80%]  px-[1rem] py-[1rem]  border-pink-500">
              <p className="text-white  leading-[2rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] text-lg">
                Experience boundless amusement on ultimate betting platform!
                Unfold endless entertainment.
              </p>
            </div>
            <div className=" w-[90%]  px-[1rem] border-pink-500">
              <button className=" py-3 px-6  text-white rounded-[5px] join-button">
                Join Now!
              </button>
            </div>
          </div>

          <div className="w-[60%]   m-auto border-pink-500">
            <div className="heroshadow  relative top-[-60px] h-[1px]">
              <Image src={heroshadow} alt="heroshadow" />
            </div>
            <div className="flex  py-[2rem] px-[3rem] justify-center items-center ">
              <div className=" py-2 px-5  border-green-600  m-auto rounded-t-lg  ">
                <Image src={group} alt="Image" className=" m-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
