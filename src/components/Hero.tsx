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
    <div className="sticky bg-scroll">

      <div className="border-2 w-[100vw]  h-[813px] border-b-rose-900 bg-cover bg-center bg-no-repeat hero-pattern">
        
        <div className="w-[90vw]  h-[13vh] border-2  mt-10 border-pink-500 m-auto">
          <Navbar />
        </div>
       
        <div className="border-2 w-[90vw]  h-[80vh] m-auto mt-10  border-green-500 flex justify-between">
          <div className="border-2 w-[60vw] h-[49vh] m-auto border-yellow-500">
            <div className=" w-[54vw] h-[20vh] border-pink-500">
              <Image src={sikka} alt="Sikka logo" />
            </div>
            <div className="border-2 w-[32vw] h-[13vh] mt-5 border-pink-500">
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
         
          <div className="border-2 w-[54vw]  m-auto border-pink-500">
            <Image src={group} alt="group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

