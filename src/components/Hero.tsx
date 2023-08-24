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
    <div className=" border-yellow-600">
      <div className="w-[100%] m-auto  h-[813px] border-black-900 object-fit bg-no-repeat bg-black bg-[url('/assets/Grouphero.svg')]">
        <div className="h-[20%]  w-[100%] m-auto  relative top-0    border-green-600 bg-[#1F141F]      main-nav-con">
          <div className=" w-[100%]  h-[5rem]  m-auto  text-center justify-center items-center  border-green-500  relative left-5 top-4">
            <Image
              src={navlogo}
              alt="navlogo"
              className="m-auto  h-[6rem]  nav-background-img "
            />
          </div>
          <div className="w-[85%]  m-auto relative top-[-38%] md:relative sm:top-[-36%]">
            <Navbar />
          </div>
        </div>
        /**------------- herro part ------------ */
        <div className=" w-[90%]  h-[75vh] m-auto mt-40 border-green-500 flex justify-between">
          <div className="w-[70%]  h-[20rem] m-auto border-yellow-500">
            <div className=" w-[100%]  h-[20vh] border-pink-500">
              <Image src={sikka} alt="Sikkafont" />
            </div>

            <div className="w-[80%]  h-[13vh] mt-5 border-pink-500">
              <p className="text-white font-[500] leading-[2rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.4px] text-lg">
                Experience boundless amusement on ultimate betting platform!
                Unfold endless entertainment.
              </p>
            </div>
            <div className=" w-[90%] mt-5 border-pink-500">
              <button className="w-[22%] h-[48px] text-white rounded-[5px] join-button">
                Join Now!
              </button>
            </div>
          </div>

          <div className="w-[60%]  h-[28rem]  m-auto border-pink-500">
            <div className="heroshadow  relative top-[-60px] h-[1px]">
              <Image src={heroshadow} alt="heroshadow" />
            </div>
            <div className="flex  relative top-[-50px] justify-center items-center ">
              <div className=" h-[30%] border-green-600  sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] m-auto rounded-t-lg  ">
                <Image src={group} alt="Image" className="h-[30%] m-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
