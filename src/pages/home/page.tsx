"use client";
import Champions from "@/components/Champions";
import ExlcusiveOffer from "@/components/ExlcusiveOffer";
import Explore from "@/components/Explore";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Game from "@/components/Game";
import GameFeatures from "@/components/GameFeature";
import Hero from "@/components/Hero";

import React from "react";


const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Game />
      <Explore />
      <ExlcusiveOffer />
      <Champions />
      <Faq />
      <GameFeatures />
      <Footer />
    </div>
  );
};

export default page;
