import React from 'react';

export function Tablet({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[4/3] mx-auto ${className}`}>
      {/* Screen */}
      <div className="absolute inset-0 bg-[#111827] rounded-[5%] border-[6px] md:border-[10px] lg:border-[14px] border-[#0B1020] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Fake UI: Dashboard */}
        <div className="flex-1 bg-[#060816] p-[6%] flex flex-col relative overflow-hidden gap-[6%]">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="h-2 lg:h-4 w-[35%] bg-white/80 rounded-md"></div>
            <div className="w-[10%] aspect-square bg-[#7C3AED]/20 rounded-full"></div>
          </div>
          
          {/* Grid Layout */}
          <div className="grid grid-cols-3 gap-[4%] h-[50%]">
            <div className="col-span-2 bg-white/5 rounded-lg border border-white/10 p-[4%] flex flex-col justify-end">
              <div className="w-full h-1/2 border-b border-l border-white/20 relative">
                {/* Fake Chart Line */}
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-[#00D4FF] overflow-visible">
                   <path d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,0" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                   <path d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,0 L100,50 L0,50" fill="currentColor" fillOpacity="0.2" stroke="none" />
                </svg>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-[8%]">
              <div className="flex-1 bg-[#7C3AED]/20 rounded-lg border border-[#7C3AED]/30 flex items-center justify-center p-[10%]">
                 <div className="w-[80%] aspect-square rounded-full border-[3px] lg:border-[4px] border-[#7C3AED] border-t-transparent"></div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-[10%] flex flex-col justify-between">
                 <div className="h-[15%] w-[60%] bg-white/40 rounded-full"></div>
                 <div className="h-[30%] w-[90%] bg-white/90 rounded-[2px] lg:rounded-md"></div>
              </div>
            </div>
          </div>
          
          {/* List */}
          <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-[4%] flex flex-col justify-center gap-[15%]">
             <div className="h-[15%] w-full bg-white/10 rounded-sm"></div>
             <div className="h-[15%] w-[85%] bg-white/10 rounded-sm"></div>
             <div className="h-[15%] w-[95%] bg-white/10 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
