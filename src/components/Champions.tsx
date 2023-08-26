import React from 'react'

import champrectangle from "../../public/assets/champ-sidelogo.svg"
import Image from 'next/image';
import ChampionCard from './Swiper/ChampionCard';
import sufflecoin from "../../public/assets/Sufflechamp.svg"
import gamelogo from "../../public/assets/Gamelogo.svg"

const Champions: React.FC = () => {
  return (
    <div className=" w-[100%] py-[1rem] px-[1rem] m-auto border-green-600 champ-con">
      <div className="w-[100%] py-[1rem] px-[.5rem]  m-auto  flex justify-between ">
        <div className="w-[15%]  border-red-700">
          <Image src={champrectangle} alt="logo" className="mt-[-2px]" />
        </div>

    
        <div className=' border-green-700 relative top-3'>
          <div className="w-[100%] py-[.2rem] px-[.3rem] m-auto text-white font-bold text-center  border-pink-500 ">
            <Image src={gamelogo} alt="gamelogo" />
          </div>
          <p className="text-center m-auto mt-1 relative font-[1rem] top-[-55px] text-white
           champ-text
          ">
            {" "}
            Champions Talk
          </p>
        </div>

        <div className="w-[15%] border-red-700">
          <Image src={sufflecoin} alt="logo" className="mt-[-2px]" />
        </div>
      </div>

      <div className="max-w-8xl py-[1rem] px-[1rem] m-auto border-yellow-500">
        <ChampionCard />
      </div>
    </div>
  );
};

export default Champions