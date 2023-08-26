import Image from 'next/image';
import React from 'react'
import card from "../../public/assets/Card.svg"
import coin from "../../public/assets/cardcoin.svg"
import GamedetailSwiper from './Swiper/GamedetailSwiper';
import gamelogo from "../../public/assets/Gamelogo.svg"


const Game: React.FC =() => {
  return (
    <div>
      <div className="w-[100%]  py-[2rem]  border-yellow-500  bg-[black]">
        <div className="p-4 m-auto text-center  flex justify-between">
          <div className="w-[5rem] p-2 relative top-20 border-pink-500">
            <Image src={card} alt="card" />
          </div>

          <div>
            <div className=" m-auto text-white font-bold text-center text-2xl border-pink-500 ">
              <Image src={gamelogo} alt="gamelogo" />
            </div>
            <div className=" relative top-[-60px]">
              <p className="flex  justify-center  text-white expl-text  text-4xl font-normal leading-[3rem] tracking-[0em] text-center">
                {" "}
                Games
              </p>
            </div>
          </div>

          <div className="p-2  relative top-10 border-pink-500 ">
            <Image src={coin} alt="Coin" />
          </div>
        </div>

        {/* ---------------- */}

        <div className="py-[1rem] px-[1rem]   border-yellow-400">
          <GamedetailSwiper />
        </div>
      </div>
    </div>
  );
}

export default Game