import React from 'react'

import champrectangle from "../../assets/champ-sidelogo.svg"
import Image from 'next/image';
import ChampionCard from './Swiper/ChampionCard';
import sufflecoin from "../../assets/Sufflechamp.svg"
import gamelogo from "../../assets/Gamelogo.svg"

const Champions: React.FC = () => {
  return (
    <div className="w-[100%] h-[105vh]  m-auto border-pink-400 champ-con">
      <div className=" w-[100%]  h-[15vh] m-auto p-5 flex justify-between  border-green-600">
        <div className="w-[15%]  border-red-700">
          <Image src={champrectangle} alt="logo" className="mt-[-2px]" />
        </div>

        {/* <div className="flex justify-center items-center border-2 w-[40%] h-[76px] m-auto text-white font-bold text-center text-lg border-pink-500 champ-talk">
          <p className="text-center  text-white ">Champions Talk</p>
        </div> */}
        <div className=' border-green-700 relative top-5'>
          <div className="w-[100%] h-[76px] m-auto text-white font-bold text-center  border-pink-500 ">
            <Image src={gamelogo} alt="gamelogo" />
          </div>
          <p className="text-center m-auto mt-3 relative font-[1rem] top-[-60px] text-white
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

      <div className="w-[85vw] h-[85vh] m-auto mt-4 border-yellow-500">
        <ChampionCard />
      </div>
    </div>
  );
};

export default Champions