import React from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['800'],
});

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  bgColor?: string; // To match the background color for the 'R' cut
}

const sizeClasses = {
  sm: 'text-2xl',       // 24px
  md: 'text-4xl',       // 36px
  lg: 'text-6xl',       // 60px
  xl: 'text-[100px]',   // 100px
  custom: '',           // Use className to set your own text-[] size
};

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  bgColor = '#030811' // Default background color from your CSS
}) => {
  return (
    <div
      className={`${orbitron.className} flex items-center tracking-[0.04em] ${sizeClasses[size]} font-extrabold ${className}`}
    >
      <span 
        className="relative text-[#00f3ff] mr-[0.05em]
        [text-shadow:0_0_10px_rgba(0,243,255,0.8),0_0_30px_rgba(0,243,255,0.4)]"
      >
        R
      </span>
      <span 
        className="text-white
        [text-shadow:0_0_10px_rgba(0,243,255,0.6),0_0_30px_rgba(0,243,255,0.3)]"
      >
        NEXT
      </span>
    </div>
  );
};
