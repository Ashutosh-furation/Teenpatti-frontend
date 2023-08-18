"use client";
import React from "react";
import { Gamedetail } from "../data/Data";
import Image from "next/image";



const GamedetailSwiper: React.FC = () => {
  return (
    <div className="border-2 w-[90vw]  m-auto border-yellow-500">
      <div className="w-[90vw] border-pink-500 h-[100vh] m-auto  Games-container">
        {Gamedetail.length > 0 &&
          Gamedetail.map((game) => {
            return (
              <div className=" w-[28vw] m-auto game-box-con" key={game.id}>
                <div className="flex  justify-center items-center ">
                  <div className="bg-gray-300 border-2 border-green-600  sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] rounded-t-lg  avatar-box">
                    <div className="bg-AD0B40-500 image-color">
                      <Image
                        src={game.avatar}
                        alt="Image"
                        className="w-full  bg-pink-600 h-auto rounded-t-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="w-[406px] h-[347px] m-auto rounded-t-lg  avatar-box">
                  <Image
                    src={game.avatar}
                    alt="avtar"
                    className="rounded-t-lg"
                  />
                </div> */}

                <div className="float-left p-5 m-auto">
                  <div className="h-[8vh]  float-left  m-auto">
                    <p className="text-white font-title"> {game.Title} </p>
                  </div>
                  <div className="h-[9vh]  float-left  m-auto mt-5 ">
                    <p className="text-white  marriage-des">
                      {game.description}
                    </p>
                  </div>

                  <div className="border-2 w-[25vw] h-[50px] float-left text-center  m-auto mt-10 border-white-500 play-button">
                    <button className="text-white m-auto mt-3 text-center play">
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

/**
 *   <div className=" w-[95vw]  m-auto  ">
      
      <div className="w-[90vw] h-[100vh] m-auto  Games-container">
        {Gamedetail.length > 0 &&
          Gamedetail.map((game) => {
            return (
              <div
                className=" w-[409px] m-auto game-box-con"
                key={game.id}
              >
                <div className="w-[406px] h-[347px] m-auto rounded-t-lg  avatar-box">
                  <Image
                    src={game.avatar}
                    alt="avtar"
                    className="rounded-t-lg"
                  />
                </div>

                <div className="float-left p-5 m-auto">
                  <div className="h-[50px] float-left  m-auto">
                    <p className="text-white font-title"> {game.Title} </p>
                  </div>
                  <div className="h-[54px] float-left  m-auto mt-5 ">
                    <p className="text-white  marriage-des">
                      {game.description}
                    </p>
                  </div>

                  <div className="border-2 w-[360px] h-[50px] float-left text-center  m-auto mt-10 border-white-500 play-button">
                    <button className="text-white m-auto mt-3 text-center play">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>


    </div>
 */
