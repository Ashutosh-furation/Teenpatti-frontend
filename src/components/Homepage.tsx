"use client";
import Hero from "@/components/Hero";

import React from "react";
import Game from "./Game";
import Explore from "./Explore";
import ExlcusiveOffer from "./ExlcusiveOffer";
import Champions from "./Champions";

import Faq from "./Faq";
import GameFeature from "@/components/GameFeature";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="w-full overflow-x-hidden	">
      <Hero />
      <Game />
      <Explore />
      <ExlcusiveOffer />
      <Champions />
      <Faq />
      <GameFeature />
      <Footer />
    </div>
  );
};

export default Homepage;
