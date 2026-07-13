import React from 'react';

export const AiProductMockup = () => (
  <div className="w-full h-full bg-bg-secondary flex flex-col relative overflow-hidden items-center justify-center p-6 md:p-12 lg:p-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />

    <div className="w-full max-w-4xl flex gap-8 items-center justify-center relative z-10 h-full">
      {/* Node Interface */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-black/40 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Core Node */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center relative shadow-[0_0_60px_rgba(6,182,212,0.2)]">
          <div className="absolute inset-0 rounded-full border border-brand-primary/50 animate-ping opacity-20" />
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-primary/30 blur-[2px] flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]" />
          </div>
        </div>

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="currentColor" className="text-brand-primary/20" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="currentColor" className="text-brand-primary/20" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="currentColor" className="text-brand-primary/20" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="currentColor" className="text-brand-primary/20" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Data Nodes */}
        <div className="absolute top-[20%] left-[15%] w-32 h-16 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md">
          <div className="w-1/2 h-2 bg-white/20 rounded-full" />
          <div className="w-full h-2 bg-brand-primary/40 rounded-full" />
        </div>
        <div className="absolute top-[20%] right-[15%] w-32 h-16 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md">
          <div className="w-1/2 h-2 bg-white/20 rounded-full" />
          <div className="w-full h-2 bg-brand-primary/40 rounded-full" />
        </div>
        <div className="absolute bottom-[20%] left-[15%] w-32 h-16 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md">
          <div className="w-1/2 h-2 bg-white/20 rounded-full" />
          <div className="w-full h-2 bg-brand-primary/40 rounded-full" />
        </div>
        <div className="absolute bottom-[20%] right-[15%] w-32 h-16 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between backdrop-blur-md">
          <div className="w-1/2 h-2 bg-white/20 rounded-full" />
          <div className="w-full h-2 bg-brand-primary/40 rounded-full" />
        </div>

        {/* Floating Data Bars */}
        <div className="absolute bottom-6 w-full flex justify-center gap-2">
          <div className="w-2 h-8 bg-brand-primary/40 rounded-t-sm" />
          <div className="w-2 h-12 bg-white/20 rounded-t-sm" />
          <div className="w-2 h-6 bg-brand-primary/40 rounded-t-sm" />
          <div className="w-2 h-16 bg-white/40 rounded-t-sm" />
          <div className="w-2 h-10 bg-brand-primary/40 rounded-t-sm" />
        </div>

      </div>
    </div>
  </div>
);
