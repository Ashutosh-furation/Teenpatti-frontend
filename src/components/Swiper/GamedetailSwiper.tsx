"use client";
import React from "react";
import { Gamedetail } from "../data/Data";
import Image from "next/image";



const GamedetailSwiper: React.FC = () => {
  return (
    <div className="m-auto mt-5 border-green-500">
      <div className="w-[90%] py-[1rem]  border-pink-600 m-auto  grid grid-cols-3 gap-7">
        {Gamedetail.length > 0 &&
          Gamedetail.map((game) => {
            return (
              <div
                className="h-auto  m-auto game-box-con"
                key={game.id}
              >
                <div className="flex  justify-center items-center ">
                  <div className="bg-gray-300   sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]   avatar-box">
                    <div className="image-color">
                      <Image
                        src={game.avatar}
                        alt="Image"
                        className="w-full  rounded-t-2xl"
                      />
                    </div>
                  </div>
                </div>

                <div className=" w-[100%]  py-[1rem] border-green-600 float-left p-5 m-auto ">
                  <div className="float-left py-[1rem] px-[.2rem] m-auto">
                    <p className="text-white tracking-normal expl-text leading-8 font-normal text-4xl  text-left ">
                      {" "}
                      {game.Title}{" "}
                    </p>
                  </div>
                  <div className="float-left  h-20 py-[1rem] px-[.2rem] m-auto  ">
                    <p className="text-base  leading-[1.2rem] tracking-[0.04em] text-left marriage-des">
                      {game.description}
                    </p>
                  </div>

                  <div className=" flex w-[100%] px-[.2rem] py-[1rem] float-left items-center justify-center text-center  m-auto mt-7 border-white-500 play-button">
                    <button className="text-white m-auto text-2xl text-center font-lato font-normal leading-5 tracking-[0em] ">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GamedetailSwiper;
