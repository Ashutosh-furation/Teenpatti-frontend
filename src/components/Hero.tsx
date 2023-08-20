 'use client'
import React from "react";
import Image from "next/image";
// import "./css/hero.css";
import sikka from "../../assets/sikkafontfilled 4.svg"
import Rectangle from "../assets/Rectangle.png";
import Navbar from "./Navbar";
import group from  "../../assets/Group 152.svg"

const Hero: React.FC = () => {
  return (
    <div className=" bg-scroll">
      <div className="border-2 w-[100%]  h-[813px] border-b-green-900 bg-cover bg-center bg-no-repeat hero-pattern">
        {/* navbar-con */}
        <div className=" h-[20vh]   border-green-600  main-nav-con">
          <div className="w-[90vw] h-[13vh] right-10  m-auto mt-20px border-green-900 navbar-con">
            <div className="w-[90vw] nav-main-box  h-[13vh] border-2   border-pink-500 m-auto">
              <Navbar />
            </div>
          </div>
        </div>

        <div className=" w-[90vw]  h-[80vh] m-auto  border-green-500 flex justify-between">
          <div className=" w-[60vw] h-[49vh] m-auto border-yellow-500">
            <div className=" w-[54vw] h-[20vh] border-pink-500">
              <Image src={sikka} alt="Sikka logo" />
            </div>
            <div className=" w-[32vw] h-[13vh] mt-5 border-pink-500">
              <p className="text-white font-[500] leading-[2.2rem] p-text">
                Experience boundless amusement on ultimate betting platform!
                Unfold endless entertainment.
              </p>
            </div>
            <div className="  mt-5 border-pink-500">
              <button className="w-[13vw] h-[8vh] text-white rounded-[5px] join-button">
                Join Now!
              </button>
            </div>
          </div>

          <div className=" w-[54vw]  m-auto border-pink-500">
            <Image src={group} alt="group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

