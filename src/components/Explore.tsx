'use client';

import Image from 'next/image';
import React from 'react'

import suffleAnimation from "../../assets/https___lottiefiles.com_animations_ace-of-spade-XlKBNiUy5Q.gif";
import { Exploredata } from "./data/Data.js";



const Explore: React.FC = () => {

  return (
    <div className="w-[100%]  p-10 explore-container">
      <div className=" text-center  py-[1rem] relative top-[-10px]  border-green-500">
        <h1 className="text-center expl-text font-marbley text-white text-4xl font-normal leading-3 tracking-[0em]">
          {" "}
          Explore Sikka Play{" "}
        </h1>
      </div>

      <div className="max-w-8xl  mx-auto relative top-5  border-yellow-600 flex justify-around">
        <div className=" text-center   border-white-500 p-5 flex justify-around explore-offer">
          {Exploredata.length > 0 &&
            Exploredata.map((data) => {
              return (
                <div
                  className="text-center   mt-5 border-white-500"
                  key={data.id}
                >
                  <div className=" text-center  m-auto justify-center border-yellow-500">
                    <div className="flex  py-[.5rem] justify-center items-center ">
                      <div className="h-[100px]  m-auto justify-center items-center  border-green-600   ">
                        <div className="py-[1rem] object-fill">
                          <Image
                            src={data.img}
                            alt="Image"
                            style={{
                              width:
                                data.id === 1 || data.id === 2
                                  ? "200px"
                                  : "100px",
                              height:
                                data.id === 1 || data.id === 2
                                  ? "110px"
                                  : "80px",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-white  md:text-2xl  sm:text-lg font-normal leading-loose tracking-normal expl-text">
                        {data.Title}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="text-center   border-white-500 mt-5 border-white-500">
          <div className="border-yellow-500">
            <Image
              src={
                "/assets/https___lottiefiles.com_animations_ace-of-spade-XlKBNiUy5Q.gif"
              }
              alt="explore"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore