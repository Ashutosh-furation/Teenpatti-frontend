 'use client'
import React from "react";
import Image from "next/image";
// import "./css/hero.css";
import Rectangle from "../assets/Rectangle.png";


const Hero: React.FC = () => {
  return (
    <div>
      <div className="border-2 w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat hero-pattern">
        <div className="w-[80vw] border-2 h-400  border-pink-500 m-auto">
          <h1 className="text-center  text-white "> hello navbar </h1>
        </div>
      </div>

      <div className="border-2 h-400  border-pink-500"></div>

      
    </div>
  );
};

export default Hero;


//  import React from 'react'
//  import "./css/hero.css"
// import Rectangle from "../assets/Rectangle.png"

//  const Hero = () => {

//    return (
//      <div className="h-screen border-2 border-red-500">
//        <div className="h-20rem  border-2 border-yellow-500 bg-cover bg-center bg-no-repeat bg-image">
//          <img src={Rectangle} alt='Rectangle'/>
//        </div>
//      </div>
//    );
//  }
 
//  export default Hero