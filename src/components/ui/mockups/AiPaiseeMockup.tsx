"use client";
import React from 'react';

export const AiPaiseeMockup = () => (
  <div className="w-full min-h-screen bg-[#050505] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center font-sans overflow-hidden">
    
    <div className="w-full max-w-[1200px] h-[90vh] max-h-[850px] min-h-[700px] bg-[#0c0c0e] rounded-[32px] border border-white/5 shadow-2xl flex flex-col overflow-hidden relative z-10">
      
      {/* Background Floating AI Nodes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] animate-[shimmer_5s_infinite_alternate]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] animate-[shimmer_7s_infinite_alternate]"></div>
        
        {/* Constellation Nodes */}
        <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-orange-400/40 rounded-full shadow-[0_0_10px_#f97316]"></div>
        <div className="absolute top-[35%] left-[80%] w-1.5 h-1.5 bg-orange-400/40 rounded-full shadow-[0_0_10px_#f97316]"></div>
        <div className="absolute top-[70%] left-[30%] w-2.5 h-2.5 bg-orange-400/40 rounded-full shadow-[0_0_10px_#f97316]"></div>
        <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-orange-400/40 rounded-full shadow-[0_0_10px_#f97316]"></div>
        
        {/* Connecting SVG Lines (Mock) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <line x1="20%" y1="20%" x2="30%" y2="70%" stroke="#f97316" strokeWidth="1" />
          <line x1="80%" y1="35%" x2="70%" y2="60%" stroke="#f97316" strokeWidth="1" />
          <line x1="30%" y1="70%" x2="70%" y2="60%" stroke="#f97316" strokeWidth="1" />
        </svg>
      </div>

      {/* Top Nav */}
      <div className="h-[72px] lg:h-[80px] w-full border-b border-white/5 flex items-center justify-between px-6 lg:px-10 flex-shrink-0 z-20 bg-[#0c0c0e]/80 backdrop-blur-md">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)] border border-orange-400/30">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">AI Paisee</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'AI Tools', 'Blog', 'Resources'].map((item, i) => (
            <span key={item} className={`text-[14px] font-bold tracking-wide cursor-pointer transition-colors ${i === 0 ? 'text-white' : 'text-white/50 hover:text-white/90'}`}>{item}</span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col p-6 lg:p-10 z-20">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mt-6 mb-12 lg:mb-16">
          <div className="px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[13px] font-bold uppercase tracking-widest mb-6">
            AI Learning Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Learn AI.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Build Skills.</span><br/>
            Create Income.
          </h1>
          <p className="text-white/50 text-base lg:text-lg max-w-lg mb-8 font-medium">
            Master the tools of the future. Discover the best AI products, learn prompt engineering, and build automated workflows.
          </p>
          <button className="h-14 px-8 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-bold tracking-wide shadow-[0_15px_30px_-10px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3 text-[16px] group hover:-translate-y-0.5">
            Start Learning
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Featured Tools Grid */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-bold text-[20px] tracking-tight">Featured AI Tools</h2>
            <span className="text-orange-400 text-sm font-bold tracking-wide cursor-pointer hover:text-orange-300 transition-colors">View Directory</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "ChatGPT", category: "Language Model", rating: "4.9", icon: <><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.5 7.5"/><path d="M12 12l9.5 4.5"/></>, colorClass: "text-emerald-400" },
              { name: "Gemini", category: "Multimodal AI", rating: "4.8", icon: <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>, colorClass: "text-blue-400" },
              { name: "Grok", category: "Real-time AI", rating: "4.7", icon: <><line x1="4" y1="4" x2="20" y2="20"/><line x1="4" y1="20" x2="20" y2="4"/></>, colorClass: "text-zinc-300" }
            ].map((tool, i) => (
              <div key={i} className="bg-[#151518] border border-white/5 rounded-[24px] p-6 hover:border-orange-500/30 hover:bg-[#1a1a1e] transition-colors cursor-pointer group shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(249,115,22,0.2)]">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center ${tool.colorClass} group-hover:scale-110 group-hover:bg-white/5 transition-all duration-300`}>
                     <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{tool.icon}</svg>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-400 bg-amber-400/10 px-2.5 py-1.5 rounded-lg border border-amber-400/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span className="text-[13px] font-bold leading-none mt-0.5">{tool.rating}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-[18px] mb-1">{tool.name}</h3>
                <p className="text-white/40 text-[14px] font-medium tracking-wide">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Roadmap & Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8">
           
           {/* Learning Roadmap */}
           <div className="lg:col-span-4 flex flex-col gap-6">
             <h2 className="text-white font-bold text-[20px] tracking-tight">Learning Path</h2>
             <div className="bg-[#151518] border border-white/5 rounded-[24px] p-8 flex flex-col relative overflow-hidden shadow-sm">
               {/* Vertical Line */}
               <div className="absolute left-[47px] top-[52px] bottom-[110px] w-[2px] bg-white/5"></div>
               
               {[
                 { title: "Beginner", active: true },
                 { title: "Prompt Engineering", active: false },
                 { title: "AI Automation", active: false },
                 { title: "Monetization", active: false }
               ].map((step, i) => (
                 <div key={i} className="flex items-center gap-5 mb-8 last:mb-0 relative z-10">
                   <div className={`w-8 h-8 rounded-full border-[3px] flex items-center justify-center shrink-0 ${step.active ? 'bg-[#151518] border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'bg-[#151518] border-white/10'}`}>
                     {step.active && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>}
                   </div>
                   <span className={`font-bold text-[16px] tracking-wide ${step.active ? 'text-white' : 'text-white/40'}`}>{step.title}</span>
                 </div>
               ))}
               <div className="mt-8 pt-6 border-t border-white/5">
                 <button className="w-full h-12 bg-white/[0.03] hover:bg-white/10 border border-white/5 text-white rounded-xl font-bold tracking-wide transition-colors text-[14px]">
                   View Full Roadmap
                 </button>
               </div>
             </div>
           </div>

           {/* Featured Articles */}
           <div className="lg:col-span-8 flex flex-col gap-6">
             <div className="flex items-center justify-between">
               <h2 className="text-white font-bold text-[20px] tracking-tight">Editorial Guides</h2>
               <span className="text-orange-400 text-sm font-bold tracking-wide cursor-pointer hover:text-orange-300 transition-colors">Read Blog</span>
             </div>
             
             <div className="flex flex-col gap-4">
               {[
                 { title: "How to Earn with AI in 2026", desc: "A comprehensive guide to monetizing your AI skills through freelance work and digital products.", date: "Oct 12" },
                 { title: "Top 10 AI Tools for Productivity", desc: "Discover the most effective AI applications to automate your daily administrative tasks.", date: "Oct 10" },
                 { title: "Building an AI Content Workflow", desc: "Step-by-step instructions for integrating language models into your content creation pipeline.", date: "Oct 05" }
               ].map((article, i) => (
                 <div key={i} className="bg-[#151518] border border-white/5 rounded-[20px] p-6 lg:p-7 hover:border-white/10 hover:bg-[#1a1a1e] transition-colors cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-sm">
                   <div className="flex flex-col gap-2.5">
                     <h3 className="text-white font-bold text-[17px] group-hover:text-orange-400 transition-colors tracking-tight">{article.title}</h3>
                     <p className="text-white/40 text-[14px] leading-relaxed max-w-xl font-medium">{article.desc}</p>
                   </div>
                   <div className="flex items-center gap-4 shrink-0">
                     <span className="text-white/30 text-[13px] font-bold tracking-wider uppercase">{article.date}</span>
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-colors border border-transparent group-hover:border-orange-500/20">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

        </div>

      </div>
    </div>
  </div>
);
