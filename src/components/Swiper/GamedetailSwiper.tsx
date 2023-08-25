"use client";
import React from "react";
import { Gamedetail } from "../data/Data";
import Image from "next/image";



const GamedetailSwiper: React.FC = () => {
  return (
    <div className="m-auto  mt-5 border-yellow-500">
      <div className="w-[90%]   border-green-600 m-auto h-[37rem] grid grid-cols-3">
        {Gamedetail.length > 0 &&
          Gamedetail.map((game) => {
            return (
              <div className="w-[27vw]   m-auto game-box-con" key={game.id}>
                <div className="flex  justify-center items-center ">
                  <div className="bg-gray-300   sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]   avatar-box">
                    <div className="image-color">
                      <Image
                        src={game.avatar}
                        alt="Image"
                        className="w-full   h-auto rounded-t-2xl"
                      />
                    </div>
                  </div>
                </div>

                <div className=" w-[100%] h-[55%] border-green-600 float-left p-5 m-auto ">
                  <div className="h-[8vh]   float-left  m-auto">
                    <p className="text-white tracking-normal expl-text leading-8 font-normal text-4xl font-Bricolage-grotesque text-left mb-5">
                      {" "}
                      {game.Title}{" "}
                    </p>
                  </div>
                  <div className="h-[9vh]   float-left  m-auto mt-3 ">
                    <p className="  text-base  leading-[1.2rem] tracking-[0em] text-left marriage-des">
                      {game.description}
                    </p>
                  </div>

                  <div className=" flex w-[100%] h-[50px] float-left items-center justify-center text-center  m-auto mt-7 border-white-500 play-button">
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
