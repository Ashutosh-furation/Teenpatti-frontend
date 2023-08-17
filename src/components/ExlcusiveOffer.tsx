import React from 'react'
import suffleCoin from "../../assets/exclusive-suffle.svg"
import sufflecard from "../../assets/exclusiveCard (2).svg"
import Image from 'next/image';
import ExlcusiveofferCard from './Swiper/ExclusiveofferCard';


const ExlcusiveOffer: React.FC = () => {

  return (
    <div className="border-2 h-[100vh] w-[100vw]  text-center  border-green-500 exclusivebackground">
      <div className="border-2  w-[95vw] m-auto  text-center mt-5 border-yellow-500 flex justify-between  ">
        <div className="border-2 h-[110px] w-[130px] border-pink-500">
          <Image src={suffleCoin} alt="card" />
        </div>

        <div className="border-2 h-[54px] w-[56px] border-pink-500 ">
          <Image src={sufflecard} alt="Coin" />
        </div>
      </div>

      <div className="border-2 w-[386px] h-[76px] m-auto text-white font-bold text-center text-lg border-pink-500 game-logo">
        <p className="text-center m-auto mt-5 text-white"> Exclusive Offers </p>
      </div>

      <div className="border-2 h-[60vh]   border-yellow-500">
            <ExlcusiveofferCard/>
      </div>


    </div>
  );
}

export default ExlcusiveOffer