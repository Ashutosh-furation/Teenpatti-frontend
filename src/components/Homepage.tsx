'use client';
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Game from './Game';
import Explore from './Explore';
import ExlcusiveOffer from './ExlcusiveOffer';
import Champions from './Champions';

const Homepage = () => {
   
  return (
    <div>
      <Hero />
       <Game/>
       <Explore/>
       <ExlcusiveOffer />
       <Champions/>
    </div>
  );
}

export default Homepage;