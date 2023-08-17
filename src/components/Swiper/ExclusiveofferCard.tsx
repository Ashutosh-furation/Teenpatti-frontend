"use client";
import React from "react";
import { Exclusivedata } from "../data/Data";
import Image from "next/image";


const ExlcusiveofferCard: React.FC = () => {
  return (
    <div className=" w-[90vw]  m-auto  exclusive-container">
      {Exclusivedata.length > 0 &&
        Exclusivedata.map((game) => {
          return (
            <div className="w-[30vw] h-[60vh] m-auto " key={game.id}>
              <div className="w-[30vw] h-[60vh]">
                <Image
                  src={game.avatar}
                  alt="avtar"
                  className="w-[100%]"
                />
                <div className="w-[27vw] h-[80px] m-auto mt-[-25px] text-center rounded-b-lg  border-white-500 play-button-exclusive">
                  <button className="text-white  text-center playexclusive">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ExlcusiveofferCard;
