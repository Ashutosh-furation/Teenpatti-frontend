import React from 'react'

import champrectangle from "../../assets/champ-sidelogo.svg"
import Image from 'next/image';
import ChampionCard from './Swiper/ChampionCard';
import sufflecoin from "../../assets/Sufflechamp.svg"

const Champions: React.FC = () => {
  return (
    <div className="border-2  h-[105vh] border-yellow-400 champ-con">
      <div className="border-2 w-[90vw] h-[15vh] m-auto mt-2 flex justify-between border-green-600">
        <div className=" w-[10vw] h-[10vh] border-red-700">
          <Image src={champrectangle} alt="logo" className="mt-[-2px]" />
        </div>
        <div className="border-2 w-[30vw] h-[76px] m-auto text-white font-bold text-center text-lg border-pink-500 champ-logo">
          <p className="text-center m-auto mt-4 text-white">Champions Talk</p>
        </div>
        <div className="w-[10vw] h-[10vh] border-red-700">
          <Image src={sufflecoin} alt="logo" className="mt-[-2px]" />
        </div>
      </div>

      <div className="border-2 w-[90vw] h-[85vh] m-auto mt-1 border-yellow-500">
        <ChampionCard />
      </div>
    </div>
  );
};

export default Champions