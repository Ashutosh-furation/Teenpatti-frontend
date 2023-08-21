'use client';

import Image from 'next/image';
import React from 'react'
import insta from "../../assets/Insta play.svg"
import  exlusive from "../../assets/Exlusive.svg"
import legal from "../../assets/Legal.svg"
import safe from "../../assets/safe.svg"
import suffleAnimation from "../../assets/https___lottiefiles.com_animations_ace-of-spade-XlKBNiUy5Q.gif";
import { Exploredata } from "./data/Data.js";
// console.log("Exploredata", Exploredata);


const Explore: React.FC = () => {

  return (
    <div className="w-[100%] border-2 border-green-800 h-[60vh] explore-container">
      <div className="h-[50px] mt-4 text-center  border-green-500">
        <h1 className="text-center explore-font"> Explore Sikka Play </h1>
      </div>

      <div className="w-[100%] m-auto  border-yellow-600 flex justify-around">
        <div className=" text-center h-[40vh] mt-5 border-white-500 p-5 flex justify-around explore-offer">
          {Exploredata.length > 0 &&
            Exploredata.map((data) => {
              return (
                <div
                  className="text-center w-[100%] h-[30vh] mt-5 border-white-500"
                  key={data.id}
                >
                  <div className="  text-center  m-auto justify-center border-yellow-500">
                    {/* <div className="w-[100%] border-2 border-green-600  h-[125px] m-auto mt-1 text-center">
                      <Image src={data.img} alt="insta" className="m-auto" />
                    </div> */}

                    <div className="flex  justify-center items-center ">
                      <div className="h-[15vh] m-auto justify-center items-center  border-green-600   ">
                        <div>
                          <Image
                            src={data.img}
                            alt="Image"
                            className="w-full  m-auto"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="offer-title">{data.Title} </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="text-center  w-[25vw] h-[25vh] border-white-500 mt-10 border-white-500">
          <div className=' border-yellow-500'>
            <Image
              src={suffleAnimation}
              alt="explore"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore