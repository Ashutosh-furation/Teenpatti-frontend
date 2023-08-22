"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Logo.svg"
import Image from "next/image";


const Navbar: React.FC = () => {


  return (
    <nav className="h-[11vh]  w-[100%]  flex justify-between items-center bg-navbar">
      <div className="flex items-center">
        <div className="p-5">
          <GiHamburgerMenu className="h-[2rem] w-[1.2rem] text-white cursor-pointer" />
        </div>
      </div>
      {/* <div className="text-white font-bold text-center text-lg">
          <Image src={Logo} alt="Logo" />
        </div> */}
      <div className="text-white font-bold text-center">
        <p className="text-center m-auto  text-white game-text"> Logo</p>
      </div>

      <div className="flex items-center space-x-4 p-5">
        <button className="bg-blue-500 w-[5.8rem]  text-white px-4 py-2 rounded bg-login">
          Login
        </button>
        <button className="bg-white-500 w-[7rem]  text-white px-4 py-2 rounded bg-signup">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
