"use client";
import React from "react";
import Image from "next/image";
// import "./css/hero.css";
import sikka from "../../assets/sikkafontfilled 4.svg";
import Rectangle from "../assets/Rectangle.png";
import Navbar from "./Navbar";
import group 
from "../../assets/Group 152.svg";
import HeroRect from "./HeroRect";
import Nav from "./Nav";
import navlogo from "../../assets/onlyNavbar.svg"

const Hero: React.FC = () => {
  return (
    <div className=" border-yellow-600">
      <div className="w-[100%] m-auto  h-[813px] border-black-900 object-fit bg-no-repeat hero-pattern">
        {/* <div className="h-[20%] w-[100%] m-auto   border-green-600  main-nav-con">
          <div className=" w-[95%] h-[4.8rem] m-auto mt-5   border-pink-900 navbar-con">
            <div className="w-[95%] nav-main-box   border-2   border-pink-500 m-auto">
              <Navbar />
            </div>
          </div>
        </div> */}
        <div className="h-[20%]   w-[100%] m-auto   border-green-600  main-nav-con">
          <div className="w-[95%] h-[11vh]  m-auto relative top-5">
            <Image src={navlogo} alt="gamelogo" className="m-auto" />
          </div>
          <div className=" w-[85%] relative top-[-8vh] m-auto ">
            <Navbar />
          </div>
        </div>

        {/* <Nav/> */}

        <div className=" w-[90%]  h-[80vh] m-auto mt-40 border-green-500 flex justify-between">
          <div className="w-[70%]  h-[20rem] m-auto border-yellow-500">
            <div className=" w-[100%]  h-[20vh] border-pink-500">
              <Image src={sikka} alt="Sikka logo" />
            </div>

            <div className="w-[80%]  h-[13vh] mt-5 border-pink-500">
              <p className="text-white font-[500] leading-[2rem] p-text">
                Experience boundless amusement on ultimate betting platform!
                Unfold endless entertainment.
              </p>
            </div>
            <div className=" w-[90%] mt-5 border-pink-500">
              <button className="w-[22%] h-[8vh] text-white rounded-[5px] join-button">
                Join Now!
              </button>
            </div>
          </div>

          <div className="w-[60%]  h-[28rem]  m-auto border-pink-500">
            {/* <div className="m-auto">
              <Image
                src={group}
                alt="group"
                className=" m-auto justify-center"
              />
            </div> */}
            <div className="flex  justify-center items-center ">
              <div className=" border-green-600  sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] rounded-t-lg  ">
                <Image src={group} alt="Image" className="w-full  h-auto " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
