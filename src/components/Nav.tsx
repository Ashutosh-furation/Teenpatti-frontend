 'use client';

 import Image from 'next/image'
import React from 'react'
import Navbarborder from "../../assets/navbarborder.png"
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav:React.FC = () => {
  return (
    <div className="border-2 w-[90%] m-auto border-yellow-700 Navbar-box">
      <Image src={Navbarborder} alt="Navbar" />
      <nav className="h-[13vh] bottom-2 border-yellow-500 p-5  flex justify-between items-center ">
        <div className="flex items-center">
          <div className="p-5">
            <GiHamburgerMenu className="h-[2rem] w-[1.2rem] text-white cursor-pointer" />
          </div>
        </div>
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
    </div>
  );
}

export default Nav