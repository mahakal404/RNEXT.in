"use client";
import React from 'react';

export const AiProductMockup = () => (
  <div className="w-full min-h-screen bg-[#050505] p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center font-sans overflow-hidden">
    
    <div className="w-full max-w-[1360px] h-[90vh] max-h-[850px] min-h-[700px] bg-[#0c0c0c] rounded-[32px] border border-white/5 shadow-2xl flex overflow-hidden relative z-10">
      
      {/* Left Sidebar */}
      <div className="w-[260px] border-r border-white/5 bg-[#0a0a0a] flex flex-col justify-between py-8 flex-shrink-0 z-20">
        <div className="flex flex-col gap-10 px-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-[15px]">V-Try</span>
          </div>
          
          <div className="flex flex-col gap-2">
            {[
              { name: "Studio", active: true, icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></> },
              { name: "History", active: false, icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
              { name: "V-Tokens", active: false, icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></> },
              { name: "Settings", active: false, icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></> }
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${item.active ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-inner' : 'text-white/40 border border-transparent hover:text-white/90 hover:bg-white/[0.02]'}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                <span className="font-bold text-[14px] tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-[#0f0f13] custom-scrollbar p-8 lg:p-12 relative">
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <h1 className="text-2xl lg:text-[28px] font-bold text-white tracking-tight">Studio Setup</h1>
          <div className="flex items-center gap-3 text-white/40 text-[13px] font-bold tracking-widest uppercase bg-[#15151a] px-5 py-2.5 rounded-xl border border-white/5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]"></div>
            Engine: SD v1.5
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1">
          
          {/* Inputs Column */}
          <div className="lg:w-[340px] flex flex-col gap-6 lg:gap-8">
             <div className="flex-1 bg-[#15151a] rounded-[24px] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all p-6 text-center shadow-sm">
               <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 group-hover:text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
               </div>
               <div className="flex flex-col gap-1.5 mt-2">
                 <p className="text-white font-bold text-[15px]">Upload Person</p>
                 <p className="text-white/30 text-[13px] font-medium">High resolution, full body</p>
               </div>
             </div>

             <div className="flex-1 bg-[#15151a] rounded-[24px] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all p-6 text-center shadow-sm">
               <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 group-hover:text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
               </div>
               <div className="flex flex-col gap-1.5 mt-2">
                 <p className="text-white font-bold text-[15px]">Upload Clothing</p>
                 <p className="text-white/30 text-[13px] font-medium">Flat lay or on mannequin</p>
               </div>
             </div>
             
             <button className="w-full h-14 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold tracking-wide shadow-[0_15px_30px_-10px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-3 text-[16px] hover:-translate-y-0.5 mt-2">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
               Generate Preview
             </button>
          </div>

          {/* Preview Column */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 min-h-[400px]">
            <div className="flex-1 bg-[#0a0a0a] rounded-[32px] border border-white/5 relative overflow-hidden flex items-center justify-center shadow-inner group py-10">
              
              {/* Elegant CSS Silhouette Placeholder */}
              <div className="w-full max-w-[320px] h-full min-h-[400px] border border-white/5 rounded-[160px] rounded-b-none relative overflow-hidden opacity-60 flex flex-col items-center justify-end group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-white/[0.02] to-transparent">
                 <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                 
                 {/* Body Abstract Shapes */}
                 <div className="w-[120px] h-[140px] border border-white/10 bg-[#0c0c0c] rounded-full absolute top-[10%]"></div>
                 <div className="w-[200px] h-full border border-white/10 bg-[#0c0c0c] rounded-[100px] absolute top-[40%]"></div>
                 
                 {/* Scanning Line Animation */}
                 <div className="absolute w-full h-[1px] bg-purple-500 shadow-[0_0_20px_#a855f7] top-1/2 animate-[shimmer_2.5s_ease-in-out_infinite_alternate]"></div>
              </div>

            </div>

            {/* AI Status Card */}
            <div className="bg-[#15151a] rounded-[24px] border border-white/5 p-6 lg:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
               <div className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] relative">
                   <div className="absolute w-full h-full border border-purple-400/50 rounded-xl animate-ping opacity-20"></div>
                   <div className="w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <p className="text-white font-bold text-[15px] tracking-wide">Processing Image...</p>
                   <p className="text-white/40 text-[13px] font-medium">Applying neural segmentation masks</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 sm:w-1/3">
                 <div className="h-2 flex-1 bg-[#0a0a0a] rounded-full overflow-hidden border border-white/5">
                   <div className="h-full w-[45%] bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                 </div>
                 <span className="text-purple-400 font-bold text-[14px]">45%</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);
