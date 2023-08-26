"use client";

import Homepage from '@/components/Homepage';
import { useEffect } from 'react';


export default function Home() {
 useEffect(() => {
   if (window.innerWidth < 1024) {
     window.location.href = "/desktoponly";
   }
     if(window.innerWidth>1023){
      window.location.href="/home"
     }

 }, []);


  return (
    <main>
        <Homepage/>
    </main>
  );
}
