"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import nathanimg from "../../../assets/champfirst.svg";
import {Championsdata} from "../data/Data.js"

const ChampionCard: React.FC = () => {
  return (
    <div className=" h-[70vh]  border-green-500">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Championsdata.length > 0 && Championsdata.map((data)=>{
            return (
              <SwiperSlide key={data.id}>
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
                      {/* Nathan Bishop{" "} */}
                      {data.username}
                    </p>
                  </div>
                  <div className=" border-green-600 mt-5 ">
                    <p className="text-center  text-white user-descrip">
                      {" "}
                      {/* I love playing at Sikka Play because of massive bonuses-
                      theres always rewards waiting for us.{" "} */}
                      {data.userdes}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
        })}
       
        {/* 
        <SwiperSlide>
          <div className="border-3 w-[20vw] border-white-600">
            <div className="flex justify-center items-center ">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                <Image
                  src={nathanimg}
                  alt="Profile Image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className=" border-green-600 mt-5">
              <p className="text-center  text-white user-name">
                {" "}
                Nathan Bishop{" "}
              </p>
            </div>
            <div className=" border-green-600 mt-5 ">
              <p className="text-center  text-white user-descrip">
                {" "}
                I love playing at Sikka Play because of massive bonuses- theres
                always rewards waiting for us.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-3 w-[20vw] border-white-600">
            <div className="flex justify-center items-center ">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                <Image
                  src={nathanimg}
                  alt="Profile Image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className=" border-green-600 mt-5">
              <p className="text-center  text-white user-name">
                {" "}
                Nathan Bishop{" "}
              </p>
            </div>
            <div className=" border-green-600 mt-5 ">
              <p className="text-center  text-white user-descrip">
                {" "}
                I love playing at Sikka Play because of massive bonuses- theres
                always rewards waiting for us.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="border-3 w-[20vw] border-white-600">
            <div className="flex justify-center items-center ">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                <Image
                  src={nathanimg}
                  alt="Profile Image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className=" border-green-600 mt-5">
              <p className="text-center  text-white user-name">
                {" "}
                Nathan Bishop{" "}
              </p>
            </div>
            <div className=" border-green-600 mt-5 ">
              <p className="text-center  text-white user-descrip">
                {" "}
                I love playing at Sikka Play because of massive bonuses- theres
                always rewards waiting for us.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ChampionCard;
