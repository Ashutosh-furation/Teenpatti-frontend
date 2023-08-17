import React from 'react'
import suffleCoin from "../../assets/exclusive-suffle.svg"
import sufflecard from "../../assets/exclusiveCard (2).svg"
import Image from 'next/image';
import ExlcusiveofferCard from './Swiper/ExclusiveofferCard';


const ExlcusiveOffer: React.FC = () => {

  return (
    <div className="border-2 h-[120vh] w-[100vw]  text-center  border-green-500 exclusivebackground">
      <div className=" w-[90vw] m-auto  text-center mt-5 border-yellow-500 flex justify-between  ">
        <div className="h-[110px]   border-pink-500">
          <Image
            src={suffleCoin}
            alt="card"
            className="m-auto w-[200px] h-[150px]"
          />
        </div>

        <div className="h-[110px]   border-pink-500 ">
          <Image
            src={sufflecard}
            alt="Coin"
            className="w-[300px] h-[180px] m-auto"
          />
        </div>
      </div>

      <div className="border-2 w-[386px] h-[76px] m-auto text-white font-bold text-center text-lg border-pink-500 game-logo">
        <p className="text-center m-auto mt-5 text-white"> Exclusive Offers </p>
      </div>

      <div className="h-[60vh]   border-yellow-500">
        <ExlcusiveofferCard />
      </div>
    </div>
  );
}

export default ExlcusiveOffer