'use client';
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Game from './Game';
import Explore from './Explore';
import ExlcusiveOffer from './ExlcusiveOffer';
import Champions from './Champions';
import Hexa from './Hexa';
import HeroRect from './HeroRect';

const Homepage = () => {
   
  return (
    <div>
      <Hero />
      <HeroRect />
      <Game/>
      <Explore/>
      <ExlcusiveOffer />
      <Champions/>

    </div>
  );
}

export default Homepage;