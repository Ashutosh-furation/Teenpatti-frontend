import Image from 'next/image';
import React from 'react'
import card from "../../public/assets/Card.svg"
import coin from "../../public/assets/cardcoin.svg"
import game from "../../public/assets/Games.svg"
import GamedetailSwiper from './Swiper/GamedetailSwiper';
import gamelogo from "../../public/assets/Gamelogo.svg"


const Game: React.FC =() => {
  return (
    <div>
      <div className="w-[100%] h-[850px]  border-yellow-500  bg-[black]">
        <div className="w-[100%] border- p-3 m-auto text-center  flex justify-between">
          <div className=" w-[5rem] relative top-20 border-pink-500">
            <Image src={card} alt="card" />
          </div>

          <div>
            <div className="w-[100%] h-[76px] m-auto text-white font-bold text-center text-2xl border-pink-500 ">
              <Image src={gamelogo} alt="gamelogo" />
            </div>
            <div className=" relative top-[-60px]">
              <p className="flex  justify-center  text-white expl-text  text-4xl font-normal leading-[3rem] tracking-[0em] text-center">
                {" "}
                Games
              </p>
            </div>
            {/* <p className="flex text-center justify-center m-auto mt-8 relative top-[-12vh] text-white game-text">
              {" "}
              Games
            </p> */}
          </div>

          <div className=" w-[8vw] h-[14vh] relative top-10 border-pink-500 ">
            <Image src={coin} alt="Coin" />
          </div>
        </div>

        <div className="h-[90vh]  border-yellow-400">
          <GamedetailSwiper />
        </div>
      </div>
    </div>
  );
}

export default Game