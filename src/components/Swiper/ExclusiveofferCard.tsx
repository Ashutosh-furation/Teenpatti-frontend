"use client";
import React from "react";
import { Gamedetail } from "../data/Data";
import Image from "next/image";

// console.log("game", Gamedetail);

const ExlcusiveofferCard: React.FC = () => {
  return (
    <div className="border-2 w-[95vw] h-[629px] m-auto border-purple-500">
      /** section */
      <div className=" w-[90vw]  m-auto  Games-container">
        {Gamedetail.length > 0 &&
          Gamedetail.map((game) => {
            return (
              <div
                className=" w-[409px] m-auto border-purple-500 game-box-con"
                key={game.id}
              >
                <div className="w-[406px] h-[347px] m-auto ">
                  <Image
                    src={game.avatar}
                    alt="avtar"
                    className="rounded-t-lg"
                  />
                </div>

                {/* <div className="float-left p-5 m-auto">
                  <div className="border-2 w-[360px] h-[50px] float-left text-center  m-auto mt-10 border-white-500 play-button">
                    <button className="text-white m-auto mt-3 text-center play">
                      Play Now
                    </button>
                  </div>
                </div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExlcusiveofferCard;
