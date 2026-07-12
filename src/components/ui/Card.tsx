import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
}

export function Card({ className = '', children, glow = true, ...props }: CardProps) {
  return (
    <div
      className={`glass rounded-[20px] p-6 transition-all duration-300 ${
        glow ? 'hover:glass-hover hover:-translate-y-2' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
