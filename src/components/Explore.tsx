'use client';

import Image from 'next/image';
import React from 'react'

import suffleAnimation from "../../assets/https___lottiefiles.com_animations_ace-of-spade-XlKBNiUy5Q.gif";
import { Exploredata } from "./data/Data.js";
// console.log("Exploredata", Exploredata);


const Explore: React.FC = () => {

  return (
    <div className="w-[100%]  h-[64vh] explore-container">
      <div className="h-[50px] mt-8 text-center relative top-5  border-green-500">
        <h1 className="text-center expl-text font-marbley text-white text-4xl font-normal leading-3 tracking-[0em]">
          {" "}
          Explore Sikka Play{" "}
        </h1>
      </div>

      <div className="w-[100%] h-[35vh]  m-auto relative top-10  border-yellow-600 flex justify-around">
        <div className=" text-center h-[35vh] mt-5 border-white-500 p-5 flex justify-around explore-offer">
          {Exploredata.length > 0 &&
            Exploredata.map((data) => {
              return (
                <div
                  className="text-center w-[100%] h-[30vh] mt-5 border-white-500"
                  key={data.id}
                >
                  <div className="  text-center  m-auto justify-center border-yellow-500">
                    <div className="flex  justify-center items-center ">
                      <div className="h-[15vh] m-auto justify-center items-center  border-green-600   ">
                        <div className="h-[30%] object-fill">
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
                      <p className="text-white text-2xl font-normal leading-loose tracking-normal expl-text">
                        {data.Title}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="text-center  w-[25vw] h-[20vh] border-white-500 mt-10 border-white-500">
          <div className=" border-yellow-500">
            <Image
              src={
                "/assets/https___lottiefiles.com_animations_ace-of-spade-XlKBNiUy5Q.gif"
              }
              alt="explore"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore