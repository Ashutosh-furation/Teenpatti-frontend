import Image from 'next/image';
import React from 'react'
import card from "../../assets/Card.svg"
import coin from "../../assets/cardcoin.svg"
import game from "../../assets/Games.svg"
import GamedetailSwiper from './Swiper/GamedetailSwiper';



const Game: React.FC =() => {
  return (
    <div className="border-2    border-pink-500">
      <div className="border-2 w-[100vw] h-[1000px]  game-background">
        /** top data */
        <div className="w-[95vw] flex justify-between">
          <div className="border-2  border-pink-500">
            <Image src={card} alt="card" />
          </div>
          <div className="border-2 w-[386px] h-[76px] text-white font-bold text-center text-lg border-pink-500 game-logo">
            <Image className="m-auto mt-5" src={game} alt="game" />
          </div>
          <div className="border-2  border-pink-500 ">
            <Image src={coin} alt="Coin" />
          </div>
        </div>

        /** Game detail */
        <div className="border-2 h-[650px]   border-green-500">
          <GamedetailSwiper />
        </div>

      </div>
    </div>
  );
}

export default Game