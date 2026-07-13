"use client";
import React from 'react';

export const ExpenseTrackerMockup = () => (
  <div className="w-full min-h-screen bg-slate-50 p-4 md:p-6 lg:p-10 flex flex-col items-center justify-center font-sans overflow-hidden">
    
    {/* Main App Container */}
    <div className="w-full max-w-[1200px] h-[90vh] min-h-[700px] max-h-[850px] bg-white rounded-[24px] md:rounded-[32px] border border-slate-200/60 shadow-2xl shadow-indigo-500/5 flex flex-col overflow-hidden relative z-10">
      
      {/* Top Header */}
      <div className="h-[76px] lg:h-[88px] w-full border-b border-slate-100 bg-white flex items-center justify-between px-6 lg:px-10 flex-shrink-0 z-20">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/50 shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <span className="text-slate-800 font-bold text-xl tracking-tight hidden sm:block">ExpenseTracker</span>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors shadow-sm">
            <span className="text-slate-600 text-sm font-bold tracking-wide">USD ($)</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors px-3 py-2 rounded-xl hover:bg-slate-50">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-md border-2 border-white cursor-pointer hover:scale-105 transition-transform"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col p-6 lg:p-10 bg-[#f8fafc]">
        
        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 lg:mb-10">
          {[
            { title: "Balance Left", amount: "$3,450.00", colorClass: "bg-indigo-50 text-indigo-500 border-indigo-100", highlight: true, icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></> },
            { title: "Opening Balance", amount: "$5,000.00", colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100", icon: <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></> },
            { title: "Total Spent", amount: "$1,550.00", colorClass: "bg-rose-50 text-rose-500 border-rose-100", icon: <><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></> }
          ].map((stat, i) => (
            <div key={i} className={`rounded-[24px] p-6 lg:p-8 flex flex-col gap-5 border ${stat.highlight ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_40px_-15px_rgba(79,70,229,0.5)]' : 'bg-white border-slate-200/60 text-slate-800 shadow-sm hover:shadow-md transition-shadow'}`}>
               <div className="flex justify-between items-start">
                 <span className={`text-[13px] font-bold uppercase tracking-widest ${stat.highlight ? 'text-indigo-200' : 'text-slate-400'}`}>{stat.title}</span>
                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.highlight ? 'bg-white/10 text-white shadow-inner border border-white/10' : `${stat.colorClass} border`}`}>
                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{stat.icon}</svg>
                 </div>
               </div>
               <span className="text-4xl font-bold tracking-tight">{stat.amount}</span>
            </div>
          ))}
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 flex-1">
          
          {/* Left Panel: Add Expense Form */}
          <div className="xl:col-span-5 flex flex-col gap-6 lg:gap-8">
            <div className="bg-white rounded-[24px] border border-slate-200/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500"></div>
               <h2 className="text-slate-800 text-[20px] font-bold tracking-tight">Add Expense</h2>
               
               <div className="flex flex-col gap-5">
                 
                 <div className="flex flex-col gap-2">
                   <label className="text-slate-500 text-[13px] font-bold tracking-wide uppercase">Amount</label>
                   <div className="relative">
                     <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
                     <input type="text" readOnly value="42.50" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 text-slate-800 font-bold text-lg focus:outline-none focus:border-indigo-500 transition-colors cursor-text" />
                   </div>
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-slate-500 text-[13px] font-bold tracking-wide uppercase">Category</label>
                   <div className="relative cursor-pointer group">
                     <div className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-5 flex items-center justify-between group-hover:border-indigo-300 transition-colors">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center border border-orange-200/50">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                         </div>
                         <span className="text-slate-700 font-bold text-[15px]">Food & Dining</span>
                       </div>
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400"><polyline points="6 9 12 15 18 9"/></svg>
                     </div>
                   </div>
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-slate-500 text-[13px] font-bold tracking-wide uppercase">Date</label>
                   <div className="relative cursor-pointer group">
                     <div className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-5 flex items-center justify-between group-hover:border-indigo-300 transition-colors">
                       <span className="text-slate-700 font-bold text-[15px]">Today, Oct 15</span>
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                     </div>
                   </div>
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-slate-500 text-[13px] font-bold tracking-wide uppercase">Notes <span className="text-slate-400 font-semibold lowercase tracking-normal">(Optional)</span></label>
                   <input type="text" readOnly value="Lunch with team" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-slate-700 font-semibold text-[15px] focus:outline-none focus:border-indigo-500 transition-colors cursor-text" />
                 </div>

                 <button className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold tracking-wide mt-3 shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-md text-[16px]">
                   Add Expense
                 </button>
               </div>
            </div>

            {/* Monthly Progress Widget */}
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[24px] p-8 text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/20 transition-colors duration-700"></div>
               <h3 className="font-bold text-indigo-200 text-[13px] uppercase tracking-widest mb-3">Monthly Limit</h3>
               <div className="flex justify-between items-end mb-4 relative z-10">
                 <span className="text-[28px] font-bold leading-none">$1,550 <span className="text-indigo-200 text-base font-semibold">/ $3,000</span></span>
                 <span className="text-white font-bold text-[14px] bg-white/20 px-3 py-1.5 rounded-lg border border-white/10">51%</span>
               </div>
               <div className="h-3 w-full bg-indigo-900/40 rounded-full overflow-hidden border border-indigo-400/20 relative z-10">
                 <div className="h-full bg-white rounded-full w-[51%] shadow-[0_0_15px_rgba(255,255,255,0.6)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Panel: Transactions */}
          <div className="xl:col-span-7 flex flex-col bg-white rounded-[24px] border border-slate-200/60 shadow-sm overflow-hidden h-full max-h-[800px]">
             <div className="px-6 lg:px-8 py-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-5 flex-shrink-0">
               <h2 className="text-slate-800 text-[20px] font-bold tracking-tight">Recent Transactions</h2>
               
               <div className="flex bg-slate-50 p-1.5 rounded-xl border border-slate-200/60">
                 {['All', 'Week', 'Month', 'Year'].map((tab, i) => (
                   <button key={i} className={`px-5 py-2 rounded-lg text-[14px] font-bold transition-all ${i === 0 ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'}`}>
                     {tab}
                   </button>
                 ))}
               </div>
             </div>
             
             <div className="flex-1 overflow-y-auto custom-scrollbar p-3 lg:p-4 flex flex-col gap-1">
               {[
                 { title: "Starbucks Coffee", category: "Food & Dining", amount: "$5.40", date: "Today, 08:30 AM", colorClass: "bg-orange-50 text-orange-600 border-orange-100", icon: <><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></> },
                 { title: "Uber Ride", category: "Transportation", amount: "$18.50", date: "Today, 07:15 AM", colorClass: "bg-blue-50 text-blue-600 border-blue-100", icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M3 11l2-6h14l2 6"/></> },
                 { title: "Spotify Subscription", category: "Entertainment", amount: "$10.99", date: "Yesterday, 10:00 AM", colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100", icon: <><circle cx="12" cy="12" r="10"/><path d="M8 11.933a11 11 0 0 1 7.625-2.05"/><path d="M9 15.356a8 8 0 0 1 5.372-1.346"/></> },
                 { title: "Grocery Store", category: "Shopping", amount: "$84.20", date: "Oct 13, 05:45 PM", colorClass: "bg-purple-50 text-purple-600 border-purple-100", icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></> },
                 { title: "Gym Membership", category: "Health & Fitness", amount: "$45.00", date: "Oct 12, 09:00 AM", colorClass: "bg-rose-50 text-rose-600 border-rose-100", icon: <><path d="M18 2h4v4"/><path d="M22 2l-6 6"/><path d="M6 22H2v-4"/><path d="M2 22l6-6"/><path d="M2 2l20 20"/><path d="M22 22l-20-20"/></> },
                 { title: "Amazon Prime", category: "Shopping", amount: "$14.99", date: "Oct 10, 01:20 PM", colorClass: "bg-purple-50 text-purple-600 border-purple-100", icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></> },
                 { title: "Freelance Income", category: "Income", amount: "$1,200.00", date: "Oct 05, 10:00 AM", isIncome: true, colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100", icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-4 lg:p-5 rounded-2xl hover:bg-slate-50 transition-all group cursor-pointer border border-transparent hover:border-slate-200 hover:shadow-sm">
                   <div className="flex items-center gap-5">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><>{item.icon}</></svg>
                     </div>
                     <div className="flex flex-col gap-1">
                       <span className="text-slate-800 font-bold text-[16px]">{item.title}</span>
                       <span className="text-slate-500 text-[13px] font-bold tracking-wide">{item.category} <span className="mx-1 text-slate-300">•</span> {item.date}</span>
                     </div>
                   </div>
                   <div className={`font-bold text-[18px] tracking-tight ${item.isIncome ? 'text-emerald-500' : 'text-slate-800'}`}>
                     {item.isIncome ? '+' : '-'}{item.amount}
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
