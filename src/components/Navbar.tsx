"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Logo.svg"
import Image from "next/image";


const Navbar: React.FC = () => {


  return (
    <div>
      <nav className="bg-brown-600 py-4 px-6 flex justify-between items-center bg-navbar">
        <div className="flex items-center">
          <div className="mr-4">
            <GiHamburgerMenu className="h-6 w-6 text-white cursor-pointer" />
          </div>
          <div className="text-white font-bold text-center text-lg"> </div>
        </div>
        <div className="text-white font-bold text-center text-lg">
      
          <Image src={Logo} alt="Logo"/>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 w-[93px] text-white px-4 py-2 rounded bg-login">
            Login
          </button>
          <button className="bg-white-500 w-[112px] text-white px-4 py-2 rounded bg-signup">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
