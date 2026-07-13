"use client";
import React from 'react';

export const ChatCVMockup = () => (
  <div className="w-full h-full min-h-screen bg-[#050508] p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center font-sans gap-8 overflow-hidden">
    
    {/* Top Brand Title Section */}
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
        AI Resume Builder
      </div>
      <h1 className="text-3xl md:text-[40px] font-bold text-white tracking-tight flex items-center gap-3">
        ChatCV <span className="text-white/40">—</span> <span className="text-purple-400">AI Resume Builder</span>
      </h1>
    </div>

    {/* Main App Container with Purple Glow */}
    <div className="w-full max-w-[1360px] h-[780px] bg-[#12121a] rounded-[24px] border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col overflow-hidden relative z-10">
      
      {/* Top Application Header */}
      <div className="h-[68px] w-full border-b border-white/5 bg-[#12121a] flex items-center justify-between px-6 flex-shrink-0 z-20">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#6366f1] flex items-center justify-center text-white font-bold text-[15px] tracking-wide shadow-lg shadow-indigo-500/20">
              CV
            </div>
            <span className="text-white font-bold text-[20px] tracking-tight">ChatCV</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full text-[13px] font-semibold border border-emerald-500/10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Saved
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 text-white/90 transition-colors border border-white/10 text-sm font-semibold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            Save
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6366f1] hover:bg-indigo-500 text-white transition-colors text-sm font-semibold shadow-lg shadow-indigo-500/25">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download PDF
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Far Left Navigation Sidebar */}
        <div className="w-[90px] bg-[#0c0c11] border-r border-white/5 flex flex-col items-center py-6 flex-shrink-0 justify-between z-10 relative">
          <div className="flex flex-col gap-3 w-full px-3">
            <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-indigo-500/10 text-[#818cf8] cursor-pointer border border-indigo-500/20 relative before:absolute before:left-[-12px] before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-[#818cf8] before:rounded-r-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              <span className="text-[11px] font-semibold tracking-wide">Editor</span>
            </div>
            {[
              { icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></>, name: "Templates" },
              { icon: <><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></>, name: "AI Assistant" },
              { icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>, name: "Settings" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl text-white/40 hover:bg-white/5 hover:text-white/80 cursor-pointer transition-all">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                <span className="text-[11px] font-medium tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1.5 px-2">
            <div className="flex items-center gap-1 text-[#818cf8] font-semibold text-[11px] tracking-wide mb-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              AI Credits
            </div>
            <div className="text-emerald-400 text-[11px] font-bold tracking-widest uppercase">Unlimited</div>
          </div>
        </div>

        {/* Editor Inner Panel */}
        <div className="w-[500px] bg-[#12121a] flex flex-col p-6 overflow-y-auto custom-scrollbar relative flex-shrink-0 z-10 border-r border-black/40">
          
          <div className="flex flex-col gap-4">
            
            {/* Personal Details Section (Expanded) */}
            <div className="bg-[#181822] rounded-2xl border border-white/5 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-5 bg-[#181822] cursor-pointer hover:bg-[#1a1a24] transition-colors">
                <div className="flex items-center gap-3 text-white/90">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#818cf8]"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span className="font-semibold text-[15px] tracking-wide">Personal Details</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </div>
              
              <div className="px-5 pb-6 flex flex-col gap-5">
                <div className="flex items-center justify-between bg-[#12121a] p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center text-[#818cf8] border border-[#6366f1]/20">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white text-[14px] font-semibold">Add Profile Photo</span>
                      <span className="text-white/40 text-[12px] font-medium">Make your resume stand out</span>
                    </div>
                  </div>
                  <div className="w-11 h-6 bg-white/10 rounded-full relative cursor-pointer border border-white/5">
                    <div className="w-4 h-4 bg-white/60 rounded-full absolute left-1 top-1 shadow-sm"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-[12px] font-semibold tracking-wide">Full Name</label>
                    <input type="text" readOnly value="Chat CV" className="bg-[#12121a] border border-white/5 rounded-lg h-11 px-3 text-white text-[14px] font-medium focus:outline-none focus:border-[#6366f1]/50" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-[12px] font-semibold tracking-wide">Email</label>
                    <input type="text" readOnly value="chatcv@gmail.com" className="bg-[#12121a] border border-white/5 rounded-lg h-11 px-3 text-white text-[14px] font-medium focus:outline-none focus:border-[#6366f1]/50" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-[12px] font-semibold tracking-wide">Phone</label>
                    <input type="text" readOnly value="1236549512" className="bg-[#12121a] border border-white/5 rounded-lg h-11 px-3 text-white text-[14px] font-medium focus:outline-none focus:border-[#6366f1]/50" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-[12px] font-semibold tracking-wide">Address / Website</label>
                    <input type="text" readOnly value="chatcv.in" className="bg-[#12121a] border border-white/5 rounded-lg h-11 px-3 text-white text-[14px] font-medium focus:outline-none focus:border-[#6366f1]/50" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-[12px] font-semibold tracking-wide">LinkedIn</label>
                    <input type="text" readOnly value="chatcv" className="bg-[#12121a] border border-white/5 rounded-lg h-11 px-3 text-white text-[14px] font-medium focus:outline-none focus:border-[#6366f1]/50" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/50 text-[12px] font-semibold tracking-wide">Portfolio / Other</label>
                    <input type="text" readOnly value="Your portfolio link" className="bg-[#12121a] border border-white/5 rounded-lg h-11 px-3 text-white/30 text-[14px] focus:outline-none focus:border-[#6366f1]/50 italic font-medium" />
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsed Sections */}
            {[
              { icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></>, name: "Professional Summary", action: "AI Rewrite", highlight: true },
              { icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>, name: "Work Experience", action: "+" },
              { icon: <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>, name: "Education", action: "+" },
              { icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>, name: "Skills", action: "+" },
              { icon: <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>, name: "Projects", action: "+" }
            ].map((section, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-[#181822] hover:bg-[#1a1a25] border border-white/[0.02] hover:border-white/10 rounded-2xl cursor-pointer transition-colors shadow-sm">
                <div className="flex items-center gap-3 text-white/90">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#818cf8]">{section.icon}</svg>
                  <span className="font-semibold text-[15px] tracking-wide">{section.name}</span>
                </div>
                {section.action === "AI Rewrite" ? (
                  <div className="flex items-center gap-1.5 text-[#818cf8] bg-[#6366f1]/10 px-3 py-1.5 rounded-lg text-[12px] font-bold tracking-wide border border-[#6366f1]/20 hover:bg-[#6366f1]/20 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    AI Rewrite
                  </div>
                ) : (
                  <span className="text-white/40 text-2xl leading-none font-light pb-1">{section.action}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Divider Splitter */}
        <div className="absolute left-[590px] top-[calc(50%+34px)] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#818cf8] shadow-[0_0_20px_rgba(129,140,248,0.4)] flex items-center justify-center text-white z-30 cursor-pointer border-[5px] border-[#12121a] hover:scale-110 transition-transform">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7"></polyline><polyline points="13 7 18 12 13 17"></polyline></svg>
        </div>

        {/* Right Preview Panel (Paper Container) */}
        <div className="flex-1 bg-[#1a1a24] flex flex-col relative overflow-hidden z-0 shadow-[inset_20px_0_40px_rgba(0,0,0,0.3)]">
          
          {/* Editor Toolbar */}
          <div className="h-14 w-full bg-[#1e1e2b] border-b border-black/40 flex items-center justify-between px-6 flex-shrink-0 z-10 shadow-md">
            <div className="flex items-center text-white/50 hover:text-white/90 cursor-pointer transition-colors bg-white/5 p-2 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </div>
            
            <div className="flex items-center gap-2 text-white/60">
              <button className="hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
              <button className="hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
              <button className="hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
              
              <div className="flex items-center gap-2 bg-[#2a2a35] px-4 py-1.5 rounded-lg text-sm font-semibold text-white/90 cursor-pointer ml-1 border border-white/5">
                100%
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/50">
              <button className="hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg></button>
              <button className="hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></button>
              <button className="hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>
              <button className="hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors ml-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg></button>
            </div>
          </div>

          {/* Canvas Wrapper */}
          <div className="flex-1 overflow-y-auto custom-scrollbar flex justify-center py-12 px-6 items-start bg-[#16161f]">
            
            {/* White Resume Paper */}
            <div className="w-full max-w-[780px] min-h-[1050px] bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-14 flex flex-col gap-8 relative text-slate-800 shrink-0 transform-gpu transition-transform origin-top">
              
              {/* Header Title & Info */}
              <div className="flex justify-between items-start pt-4">
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="text-[52px] font-bold text-slate-900 tracking-tighter lowercase leading-none">
                    chat cv
                    <div className="h-[6px] w-[90px] bg-[#818cf8] mt-4 rounded-full" />
                  </h1>
                  <h2 className="text-[20px] text-slate-500 font-semibold mt-4 tracking-tight">AI Resume Builder</h2>
                </div>
                
                <div className="flex flex-col gap-3.5 text-[13px] text-slate-600 mt-6 font-medium">
                  <div className="flex items-center gap-3.5 justify-end">
                    <span>chatcv@gmail.com</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#818cf8]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="flex items-center gap-3.5 justify-end">
                    <span>1236549512</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#818cf8]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="flex items-center gap-3.5 justify-end">
                    <span>chatcv.in</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#818cf8]"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div className="flex items-center gap-3.5 justify-end">
                    <span>chatcv</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#818cf8]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                </div>
              </div>

              {/* Resume Body Sections */}
              <div className="flex flex-col gap-10 mt-6">
                
                {/* Professional Summary */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 text-[#818cf8] mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <h3 className="font-bold text-[13px] tracking-[0.15em] uppercase">Professional Summary</h3>
                    </div>
                    <div className="h-[2px] w-full bg-[#10b981]/60 rounded-full" />
                  </div>
                  <p className="text-slate-700 text-[14px] leading-relaxed mt-1 font-medium">
                    ChatCV offers a completely free online resume builder. You can create, edit, and export your professional CV to PDF easily. Our AI helps you build an ATS-friendly resume that stands out to recruiters.
                  </p>
                </div>

                {/* Work Experience */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 text-[#818cf8] mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      <h3 className="font-bold text-[13px] tracking-[0.15em] uppercase">Work Experience</h3>
                    </div>
                    <div className="h-[2px] w-full bg-[#10b981]/60 rounded-full" />
                  </div>
                  
                  <div className="flex flex-col gap-1.5 mt-2 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#818cf8] before:rounded-full">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-slate-900 text-[15px]">Dev</h4>
                      <span className="text-[13px] font-semibold text-slate-500">Jan 2026 — Present</span>
                    </div>
                    <a href="#" className="text-[#818cf8] text-[14px] font-semibold hover:underline">chatcv</a>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 text-[#818cf8] mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                      <h3 className="font-bold text-[13px] tracking-[0.15em] uppercase">Skills</h3>
                    </div>
                    <div className="h-[2px] w-full bg-[#10b981]/60 rounded-full" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 mt-3">
                    {["Web Development", "React", "Node.js", "JavaScript", "UI/UX Design", "Problem Solving", "TypeScript", "Next.js"].map((skill, i) => (
                      <span key={i} className="px-3.5 py-1.5 bg-[#818cf8]/10 text-[#6366f1] rounded-lg text-[13px] font-bold border border-[#818cf8]/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 text-[#818cf8] mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      <h3 className="font-bold text-[13px] tracking-[0.15em] uppercase">Education</h3>
                    </div>
                    <div className="h-[2px] w-full bg-[#10b981]/60 rounded-full" />
                  </div>
                  
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-slate-900 text-[15px]">B.Tech in Computer Science</h4>
                      <span className="text-[13px] font-semibold text-slate-500">2026</span>
                    </div>
                    <span className="text-[#818cf8] text-[14px] font-semibold">Your University</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom Feature Highlights Section */}
    <div className="flex items-center justify-center gap-4 lg:gap-6 flex-wrap max-w-[1360px] w-full mt-2 z-10">
      
      <div className="flex items-center gap-4 bg-[#12121a] border border-white/5 rounded-2xl px-6 py-4 shadow-lg flex-1 min-w-[220px]">
        <div className="w-12 h-12 rounded-xl bg-[#818cf8]/10 text-[#818cf8] flex items-center justify-center border border-[#818cf8]/10">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-white text-[15px] font-bold">AI Powered</span>
          <span className="text-white/40 text-[13px] font-medium tracking-wide">Smart Resume Builder</span>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-[#12121a] border border-white/5 rounded-2xl px-6 py-4 shadow-lg flex-1 min-w-[220px]">
        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/10">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-white text-[15px] font-bold">ATS Friendly</span>
          <span className="text-white/40 text-[13px] font-medium tracking-wide">Recruiter Optimized</span>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-[#12121a] border border-white/5 rounded-2xl px-6 py-4 shadow-lg flex-1 min-w-[220px]">
        <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center border border-[#10b981]/10">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-white text-[15px] font-bold">100% Free</span>
          <span className="text-white/40 text-[13px] font-medium tracking-wide">No Hidden Costs</span>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-[#12121a] border border-white/5 rounded-2xl px-6 py-4 shadow-lg flex-1 min-w-[220px]">
        <div className="w-12 h-12 rounded-xl bg-[#818cf8]/10 text-[#818cf8] flex items-center justify-center border border-[#818cf8]/10">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-white text-[15px] font-bold">Export to PDF</span>
          <span className="text-white/40 text-[13px] font-medium tracking-wide">One Click Download</span>
        </div>
      </div>

    </div>

  </div>
);
