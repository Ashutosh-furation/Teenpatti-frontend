'use client';
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Homepage = () => {
  return (
    <div className="h-1440 max-h-full md:max-h-screen h-screen border-2 border-green-500">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Homepage;