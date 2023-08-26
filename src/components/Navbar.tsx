"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Logo.svg"
import Image from "next/image";


const Navbar: React.FC = () => {


  return (
    <nav className=" border-pink-600 px-5  lg:relative lg:top-[-70px] sm:relative sm:top-[-40px] w-[90%] mx-auto flex justify-between items-center bg-navbar">
      <div className="flex  items-center">
        <div className="">
          <GiHamburgerMenu className="text-4xl  w-[1.2rem] text-white cursor-pointer" />
        </div>
      </div>

      <div className="text-white w-[20%] font-bold ">
        <p className=" float-right text-white sm:text-2xl lg:text-3xl game-text">Logo</p>
      </div>

      <div className="flex   items-center space-x-4 lg:p-5 sm:p-1">
        <button className="w-[5.8rem]  text-white px-4 py-2 rounded  bg-opacity-15  border-white border-[0.5px]">
          Login
        </button>
        <button className="bg-white-500 w-[7rem] px-4 py-2 rounded bg-white text-[#ad0b40]  border-white border-[0.5px]">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
