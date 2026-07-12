import React from 'react';

export function Phone({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[9/19.5] mx-auto ${className}`}>
      {/* Screen */}
      <div className="absolute inset-0 bg-[#0B1020] rounded-[10%] lg:rounded-[12%] border-[4px] md:border-[6px] lg:border-[8px] border-[#151C2F] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[4%] bg-[#060816] rounded-full z-20"></div>

        {/* Fake UI: Mobile App */}
        <div className="flex-1 bg-[#060816] flex flex-col relative overflow-hidden pt-[15%] px-[6%] pb-[8%] gap-[6%]">
           
           {/* App Header */}
           <div className="flex justify-between items-center">
             <div className="flex flex-col gap-[20%] w-[50%] h-[12px] lg:h-[20px]">
                <div className="h-[45%] w-full bg-white/80 rounded-[2px]"></div>
                <div className="h-[35%] w-[70%] bg-white/40 rounded-[2px]"></div>
             </div>
             <div className="w-[15%] aspect-square rounded-full bg-[#00D4FF]/20"></div>
           </div>

           {/* Hero Card */}
           <div className="w-full h-[25%] bg-gradient-to-br from-[#5B5FFF] to-[#7C3AED] rounded-xl p-[6%] flex flex-col justify-end shadow-lg shadow-[#7C3AED]/20">
              <div className="h-[12%] w-[80%] bg-white/90 rounded-[2px] mb-[4%]"></div>
              <div className="h-[8%] w-[60%] bg-white/60 rounded-[2px]"></div>
           </div>

           {/* Content List */}
           <div className="flex-1 flex flex-col gap-[5%]">
              <div className="flex items-center gap-[5%] p-[4%] bg-white/5 rounded-lg border border-white/5 h-[30%]">
                 <div className="h-[80%] aspect-square rounded-md bg-white/10"></div>
                 <div className="flex flex-col gap-[15%] flex-1 h-[60%]">
                    <div className="h-[40%] w-full bg-white/70 rounded-[2px]"></div>
                    <div className="h-[30%] w-[60%] bg-white/30 rounded-[2px]"></div>
                 </div>
              </div>
              <div className="flex items-center gap-[5%] p-[4%] bg-white/5 rounded-lg border border-white/5 h-[30%]">
                 <div className="h-[80%] aspect-square rounded-md bg-white/10"></div>
                 <div className="flex flex-col gap-[15%] flex-1 h-[60%]">
                    <div className="h-[40%] w-[90%] bg-white/70 rounded-[2px]"></div>
                    <div className="h-[30%] w-[70%] bg-white/30 rounded-[2px]"></div>
                 </div>
              </div>
           </div>

           {/* Bottom Bar */}
           <div className="h-[8%] w-full bg-white/5 rounded-full flex items-center justify-around px-[10%] border border-white/10 backdrop-blur-md">
              <div className="w-[15%] h-[30%] rounded-[2px] bg-[#00D4FF]"></div>
              <div className="w-[15%] h-[30%] rounded-full bg-white/30"></div>
              <div className="w-[15%] h-[30%] rounded-[2px] bg-white/30"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
