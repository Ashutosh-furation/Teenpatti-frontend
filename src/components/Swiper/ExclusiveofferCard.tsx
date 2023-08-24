"use client";
import React from "react";
import { Exclusivedata } from "../data/Data";
import Image from "next/image";


const ExlcusiveofferCard: React.FC = () => {
  return (
    <div className="w-[90%] h-[65vh] relative top-[-20px] border-yellow-600  m-auto  grid grid-cols-3 gap-1">
      {Exclusivedata.length > 0 &&
        Exclusivedata.map((game) => {
          return (
            <div className="w-[100%] h-[60vh] m-auto " key={game.id}>
              <div className="w-[100%]  border-yellow-600 h-[60vh]">
                <Image src={game.avatar} alt="avtar" className="w-[100%]" />
                <div className="w-[90.5%]  border-green-600 h-[75px] m-auto mt-[-25px] text-center rounded-b-lg  border-white-500 play-button-exclusive">
                  <button className=" text-white   font-Lato  text-xl font-medium leading-8 tracking-normal mt-6 items-center">
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
