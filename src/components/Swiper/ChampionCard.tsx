"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import {Championsdata} from "../data/Data.js"

const ChampionCard: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number>(0);
    
 const handleSlideChange = (swiper:any) => {
    // setActiveIndex(swiper.activeIndex);
    // console.log("swiper",swiper)
  };
  console.log("active", activeIndex)

  return (
    <div className="border-2 h-[70vh] relative top-10 border-green-500 ">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        // onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Championsdata.length > 0 &&
          Championsdata.map((data,index) => {
            return (
              <SwiperSlide
                key={data.id}
                // key={index}
                // className={`swiper-dot ${
                //   activeIndex === index ? "selected" : ""
                // }`}
                // onClick={() => setActiveIndex(index)}
              >
                <div className=" w-[20vw] border-white-600">
                  <div className="flex justify-center items-center ">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                      <Image
                        src={data.avatar}
                        alt="Profile Image"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className=" border-green-600 mt-5">
                    <p className="text-center  text-white user-name">
                      {" "}
                      {data.username}
                    </p>
                  </div>
                  <div className=" border-green-600 mt-5 ">
                    <p className="text-center  text-white user-descrip">
                      {data.userdes}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ChampionCard;
