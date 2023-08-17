"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar: React.FC = () => {


  return (
    <div className="w-600">

      <nav className="bg-gray-600 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <GiHamburgerMenu className="h-6 w-6 text-white cursor-pointer" />
          </div>
          <div className="text-white font-bold text-center text-lg">  </div>
        </div>
        <div className="text-white font-bold text-center text-lg">Logo</div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-white-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
