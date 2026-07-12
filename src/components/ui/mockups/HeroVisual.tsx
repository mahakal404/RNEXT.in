import React from 'react';
import { Laptop } from './Laptop';
import { Tablet } from './Tablet';
import { Phone } from './Phone';

export function HeroVisual() {
  return (
    <div className="relative w-full lg:w-[50%] mx-auto mt-12 lg:mt-16 flex items-center justify-center pointer-events-none">
      
      {/* Container to handle proportional scaling */}
      <div className="relative w-full max-w-[800px] aspect-[2/1] flex items-center justify-center">
        
        {/* Laptop (Center, Base Layer) */}
        <div className="absolute z-10 w-[75%] top-[10%] left-1/2 -translate-x-1/2 shadow-[0_0_80px_rgba(0,212,255,0.15)]">
           <Laptop />
        </div>

        {/* Tablet (Left, Overlapping) */}
        <div className="absolute z-20 w-[32%] bottom-[-5%] left-[5%] shadow-[-15px_15px_40px_rgba(0,0,0,0.5)]">
           <Tablet />
        </div>

        {/* Phone (Right, Overlapping) */}
        <div className="absolute z-30 w-[14%] bottom-[-10%] right-[12%] shadow-[15px_15px_40px_rgba(0,0,0,0.5)]">
           <Phone />
        </div>

      </div>

    </div>
  );
}
