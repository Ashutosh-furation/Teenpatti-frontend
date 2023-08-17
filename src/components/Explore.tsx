'use client';

import Image from 'next/image';
import React from 'react'
import insta from "../../assets/Insta play.svg"
import  exlusive from "../../assets/Exlusive.svg"
import legal from "../../assets/Exlusive.svg"
import safe from "../../assets/safe.svg"


const Explore: React.FC = () => {

  return (
    <div className="w-[100vw] h-[60vh] explore-container">
      <div className="border-2 h-[50px] mt-4 text-center  border-green-500">
        <h1 className="text-center explore-font"> Explore Sikka Play </h1>
      </div>

      <div className='w-[95vw] flex justify-between'>
        

      </div>

      <div className="border-2 text-center h-[40vh] border-white-500 gap-10 flex justify-around">
        <div className="border-2 text-center w-[176px] h-[153px] mt-5 border-white-500">
          <div className="border-2 text-center w-[176px] h-[153px] m-auto border-white-500">
            <Image src={insta} alt="insta" />
          </div>
        </div>
        <div className="border-2 text-center w-[176px] h-[153px] mt-5 border-white-500">
          <div className="border-2 text-center w-[176px] h-[153px] m-auto border-white-500">
            <Image src={insta} alt="insta" />
          </div>
        </div>
        <div className="border-2 text-center w-[176px] h-[153px] mt-5 border-white-500">
          <div className="border-2 text-center w-[176px] h-[153px] m-auto border-white-500">
            <Image src={insta} alt="insta" />
          </div>
        </div>
        <div className="border-2 text-center w-[176px] h-[153px] mt-5 border-white-500">
          <div className="border-2 text-center w-[176px] h-[153px] m-auto border-white-500">
            <Image src={insta} alt="insta" />
          </div>
        </div>

        
        <div className="border-2 text-center w-[40vw] h-[153px] mt-5 border-white-500">
          <div className="border-2 text-center w-[176px] h-[153px] m-auto border-white-500">
            <Image src={insta} alt="insta" />
          </div>
        </div>



      </div>

      {/* <div className="border-2 text-center w-[176px] h-[153px] border-white-500">
        <div className="border-2 text-center w-[125px] h-[125px] border-white-500">
          <Image src={insta} alt="insta" />
        </div>
      </div> */}
    </div>
  );
};

export default Explore