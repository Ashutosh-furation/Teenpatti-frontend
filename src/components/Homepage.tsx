'use client';
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Game from './Game';
import Explore from './Explore';

const Homepage = () => {
  
  return (
    <div>
      <Hero />
       <Game/>
       <Explore/>
    </div>
  );
}

export default Homepage;