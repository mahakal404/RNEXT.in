import React from 'react';

export const BusinessWebsiteMockup = () => (
  <div className="w-full h-full bg-bg-secondary flex flex-col relative overflow-hidden items-center justify-center p-6 md:p-12 lg:p-20">
    {/* Abstract Background Elements */}
    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />

    {/* Web Browser Frame */}
    <div className="w-full max-w-4xl bg-[#0B1020] rounded-2xl md:rounded-3xl border border-white/10 flex flex-col overflow-hidden shadow-2xl relative z-10 aspect-[16/10]">
      {/* Browser Header */}
      <div className="h-10 md:h-12 w-full border-b border-white/5 bg-black/40 flex items-center px-4 md:px-6 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="mx-auto h-5 md:h-6 w-1/3 bg-white/5 rounded-md flex items-center justify-center px-4">
          <div className="h-2 w-1/2 bg-white/10 rounded-full" />
        </div>
      </div>
      
      {/* Page Content */}
      <div className="flex-1 p-6 md:p-10 flex flex-col gap-8 relative overflow-hidden">
        {/* Navbar */}
        <div className="w-full flex justify-between items-center mb-4">
          <div className="w-24 md:w-32 h-6 md:h-8 bg-white/10 rounded-md" />
          <div className="hidden md:flex gap-4">
            <div className="w-12 h-3 bg-white/5 rounded-full" />
            <div className="w-12 h-3 bg-white/5 rounded-full" />
            <div className="w-16 h-3 bg-white/5 rounded-full" />
          </div>
          <div className="w-24 md:w-32 h-8 md:h-10 bg-brand-primary/20 rounded-md border border-brand-primary/30" />
        </div>
        
        {/* Hero Section */}
        <div className="w-full flex gap-8 h-48 md:h-64">
          <div className="w-1/2 flex flex-col justify-center gap-4">
            <div className="h-8 md:h-12 w-3/4 bg-white/20 rounded-md" />
            <div className="h-8 md:h-12 w-1/2 bg-white/20 rounded-md" />
            <div className="h-3 md:h-4 w-5/6 bg-white/5 rounded-sm mt-4" />
            <div className="h-3 md:h-4 w-4/6 bg-white/5 rounded-sm" />
            <div className="w-32 md:w-40 h-10 md:h-12 bg-white/10 rounded-md mt-6" />
          </div>
          <div className="w-1/2 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent" />
          </div>
        </div>
        
        {/* Feature Grid */}
        <div className="w-full grid grid-cols-3 gap-6">
          <div className="h-24 md:h-32 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-primary/20 mb-2" />
             <div className="h-3 w-3/4 bg-white/10 rounded-sm" />
             <div className="h-2 w-full bg-white/5 rounded-sm" />
          </div>
          <div className="h-24 md:h-32 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-secondary/20 mb-2" />
             <div className="h-3 w-3/4 bg-white/10 rounded-sm" />
             <div className="h-2 w-full bg-white/5 rounded-sm" />
          </div>
          <div className="h-24 md:h-32 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-accent/20 mb-2" />
             <div className="h-3 w-3/4 bg-white/10 rounded-sm" />
             <div className="h-2 w-full bg-white/5 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
