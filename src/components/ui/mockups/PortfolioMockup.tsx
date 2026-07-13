import React from 'react';

export const PortfolioMockup = () => (
  <div className="w-full h-full bg-bg-secondary flex relative overflow-hidden items-center justify-center p-6 md:p-12 lg:p-20">
    <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-white/5 skew-x-[-15deg] pointer-events-none" />

    <div className="w-full max-w-4xl bg-[#0B1020] rounded-2xl md:rounded-3xl border border-white/10 flex overflow-hidden shadow-2xl relative z-10 aspect-[16/10]">
      {/* Sidebar Profile */}
      <div className="w-1/3 border-r border-white/5 bg-black/20 p-6 md:p-10 flex flex-col items-center justify-center gap-6 text-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden" />
        <div className="flex flex-col gap-3 items-center w-full">
          <div className="h-6 md:h-8 w-3/4 bg-white/20 rounded-md" />
          <div className="h-3 md:h-4 w-1/2 bg-white/10 rounded-sm" />
        </div>
        <div className="w-full h-[1px] bg-white/10 my-4" />
        <div className="flex gap-4">
           <div className="w-8 h-8 rounded-full bg-white/5" />
           <div className="w-8 h-8 rounded-full bg-white/5" />
           <div className="w-8 h-8 rounded-full bg-white/5" />
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="w-1/4 h-3 md:h-4 bg-white/20 rounded-sm" />
          <div className="w-full h-2 md:h-3 bg-white/5 rounded-sm" />
          <div className="w-full h-2 md:h-3 bg-white/5 rounded-sm" />
          <div className="w-3/4 h-2 md:h-3 bg-white/5 rounded-sm" />
        </div>

        {/* Project Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-full h-full bg-white/5 rounded-xl border border-white/5 overflow-hidden flex flex-col">
               <div className="h-2/3 bg-white/5" />
               <div className="h-1/3 p-4 flex flex-col justify-center gap-2">
                 <div className="w-1/2 h-3 bg-white/20 rounded-sm" />
                 <div className="w-3/4 h-2 bg-white/10 rounded-sm" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
