import Image from 'next/image';
import React from 'react'
import card from "../../assets/Card.svg"
import coin from "../../assets/cardcoin.svg"
import game from "../../assets/Games.svg"
import GamedetailSwiper from './Swiper/GamedetailSwiper';



const Game: React.FC =() => {
  return (
    <div>
      <div className="border-2 w-[100vw] h-[150vh] border-black  game-background">
        <div className="w-[100vw] m-auto mt-5 flex justify-between">
          <div className=" w-[7vw] h-[12vh]  border-pink-500">
            <Image src={card} alt="card" />
          </div>
          <div className="border-2 w-[30vw] h-[13vh] text-white font-bold text-center text-lg border-pink-500 game-logo">
            <Image className="m-auto mt-5" src={game} alt="game" />
          </div>
          <div className=" w-[12vw] h-[19vh] border-pink-500 ">
            <Image src={coin} alt="Coin" />
          </div>
        </div>
        /** Game detail */
        <div className="h-[90vh]">
          <GamedetailSwiper />
        </div>
      </div>
    </div>
  );
}

export default Game