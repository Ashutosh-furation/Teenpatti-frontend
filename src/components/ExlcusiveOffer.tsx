import React from 'react'
import suffleCoin from "../../public/assets/exclusive-suffle.svg"
import sufflecard from "../../public/assets/exclusiveCard (2).svg"
import Image from 'next/image';
import ExlcusiveofferCard from './Swiper/ExclusiveofferCard';
import gamelogo from "../../public/assets/Gamelogo.svg"

const ExlcusiveOffer: React.FC = () => {

  return (
    <div className="h-[120vh] b w-[100%]  text-center  border-green-500 bg-[black]">
      <div className="w-[95%]  m-auto  text-center  border-yellow-500 flex justify-between  ">
        <div className="h-[110px] w-[10%]  relative top-5  border-pink-500">
          <Image
            src={suffleCoin}
            alt="card"
            className="m-auto w-[200px] h-[150px]"
          />
        </div>

        <div className="h-[110px] w-[15%] relative top-5  border-pink-500 ">
          <Image src={sufflecard} alt="Coin" className="w-[100%]  m-auto" />
        </div>
      </div>

     
      <div className="w-[100%]  border-green-700 m-auto">
    
        <div className="flex justify-center">
          <Image src={gamelogo} alt="gamelogo" />
        </div>
        <p className="text-center m-auto mt-5 relative top-[-70px] text-white exclusive-text">
          {" "}
          Exclusive Offers{" "}
        </p>
      </div>

      <div className="h-[60vh]  mt-5  border-yellow-500">
        <ExlcusiveofferCard />
      </div>
    </div>
  );
}

export default ExlcusiveOffer