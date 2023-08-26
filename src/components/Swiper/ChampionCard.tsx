"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Championsdata } from "../data/Data.js";

const ChampionCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    // console.log("swiper",swiper)
  };
  // console.log("active", activeIndex);

  return (
    <div
      className=" py-[1rem] px-[2rem]
     relative top-[-20px] "
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {Championsdata.length > 0 &&
          Championsdata.map((data, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`swiper-dot congrs user-descrip userimage user-name Image ${
                  activeIndex === index ? "selected" : ""
                }`}
              >
                <div className="py-[1rem] px-[1rem]">
                  <div className="m-auto  congrs"></div>
                  <div className="flex py-[.1rem] px-[.3rem]  justify-center items-center ">
                    <div
                      className={`Image rounded-full userimage  `}
                      style={{
                        width: activeIndex === index ? "280px" : "150px",
                        opacity: activeIndex === index ? "3" : ".5",
                        border:
                          activeIndex === index ? "5px solid #B40E0D" : "",
                        marginTop: activeIndex === index ? "-10px" : "30px",
                      }}
                    >
                      <Image
                        src={data.avatar}
                        alt={`Profile Image ${index + 1}`}
                      />
                    </div>
                  </div>

                  <div className=" py-[.5rem] px-[1rem] border-green-600 mt-5">
                    <p
                      className="text-center  expl-text font-normal text-2xl leading-8 tracking-normal text-gray-600"
                      style={{
                        color: activeIndex === index ? "#ffffff" : "#6E6E6E",
                      }}
                    >
                      {" "}
                      {data.username}
                    </p>
                  </div>
                  <div className=" py-[1rem] px-[2rem] border-green-600 mt-4 ">
                    <p
                      className={`${
                        index + 1
                      } text-center  font-lato text-lg font-normal leading-5 tracking-normal`}
                      style={{
                        color: activeIndex === index ? "#ffffff" : "#6E6E6E",
                      }}
                    >
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
