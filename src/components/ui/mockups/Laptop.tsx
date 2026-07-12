import React from 'react';

export function Laptop({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[16/10] mx-auto ${className}`}>
      {/* Screen */}
      <div className="absolute inset-0 bg-[#0B1020] rounded-[4%] border-[4px] md:border-[8px] lg:border-[12px] border-[#151C2F] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Browser Bar */}
        <div className="h-[8%] min-h-[16px] max-h-[32px] bg-[#060816] w-full flex items-center px-[2%] gap-[1%] border-b border-white/5">
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FF5F56]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#FFBD2E]"></div>
          <div className="w-[1.5%] aspect-square rounded-full bg-[#27C93F]"></div>
        </div>
        
        {/* Fake UI: Website Homepage */}
        <div className="flex-1 bg-gradient-to-b from-[#060816] to-[#0B1020] p-[4%] flex flex-col relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] aspect-square bg-[#00D4FF]/20 blur-[60px] rounded-full pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-[8%] relative z-10">
             <div className="text-white font-bold text-[8px] md:text-sm lg:text-lg tracking-tight">RNEXT.</div>
             <div className="flex gap-[10%] w-[30%] justify-end">
               <div className="h-1 lg:h-2 w-[25%] bg-white/20 rounded-full"></div>
               <div className="h-1 lg:h-2 w-[25%] bg-white/20 rounded-full"></div>
               <div className="h-1 lg:h-2 w-[40%] bg-[#00D4FF] rounded-full"></div>
             </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-[6%] relative z-10">
            <div className="h-[12%] w-[80%] bg-white/90 rounded-[4px] md:rounded-md"></div>
            <div className="h-[12%] w-[60%] bg-white/90 rounded-[4px] md:rounded-md"></div>
            <div className="h-[4%] w-[50%] bg-white/40 rounded-full mt-[2%]"></div>
            <div className="h-[14%] w-[25%] bg-[#00D4FF] rounded-full mt-[4%] shadow-[0_0_20px_rgba(0,212,255,0.3)]"></div>
          </div>
        </div>
      </div>
      
      {/* Laptop Base Lip */}
      <div className="absolute -bottom-[2%] left-[-2%] right-[-2%] h-[4%] bg-[#151C2F] rounded-b-xl md:rounded-b-2xl border-t border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 flex justify-center">
         <div className="w-[20%] h-[50%] bg-[#060816] rounded-b-md"></div>
      </div>
    </div>
  );
}
