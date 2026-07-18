"use client";
import React from 'react';

export const FinTrackMockup = () => (
  <div className="w-full min-h-screen bg-[#050508] p-4 md:p-6 lg:p-10 flex flex-col items-center justify-center font-sans overflow-hidden">
    
    {/* Main App Container */}
    <div className="w-full max-w-[1400px] h-[90vh] min-h-[750px] max-h-[900px] bg-[#0c0c12] rounded-[24px] md:rounded-[32px] border border-white/5 shadow-2xl shadow-emerald-500/5 flex overflow-hidden relative z-10">
      
      {/* Mobile Header (Hidden on Desktop) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#0c0c12] border-b border-white/5 z-30 lg:hidden flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <span className="text-white font-bold text-lg tracking-wide">FinTrack</span>
        </div>
        <div className="text-white/50 cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>

      {/* Left Sidebar (Hidden on Mobile) */}
      <div className="hidden lg:flex w-[260px] bg-[#101016] border-r border-white/5 flex-col justify-between py-8 flex-shrink-0 z-20">
        <div className="flex flex-col gap-10 px-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-[#050508] flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">FinTrack</span>
          </div>
          
          <div className="flex flex-col gap-2">
            {[
              { name: "Dashboard", active: true, icon: <><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></> },
              { name: "Transactions", active: false, icon: <><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></> },
              { name: "Reports", active: false, icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></> },
              { name: "Goals", active: false, icon: <><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></> },
              { name: "Settings", active: false, icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></> }
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-white/50 border border-transparent hover:bg-white/[0.03] hover:text-white/90'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                <span className="font-semibold text-[14px]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6">
          <div className="bg-[#151520] rounded-2xl p-4 border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors cursor-pointer shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-[#151520] shadow-sm flex items-center justify-center text-[#151520] font-bold text-sm">JS</div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">Pro Plan</span>
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest mt-0.5">Manage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-[#0a0a0f] custom-scrollbar relative pt-16 lg:pt-0">
        
        {/* Top Header */}
        <div className="h-24 lg:h-[110px] w-full px-6 lg:px-10 flex items-center justify-between flex-shrink-0">
           <div className="flex flex-col gap-1">
             <h1 className="text-2xl lg:text-[28px] font-bold text-white tracking-tight">Dashboard</h1>
             <p className="text-white/40 text-sm font-medium tracking-wide">Your financial overview for October 2026</p>
           </div>
           <div className="hidden sm:flex items-center gap-3">
             <button className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-colors">Export Report</button>
             <button className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050508] text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
               Add Transaction
             </button>
           </div>
        </div>

        {/* Content Body */}
        <div className="px-6 lg:px-10 pb-10 flex flex-col gap-6 lg:gap-8">
          
          {/* 4 Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
            {[
              { title: "Total Income", amount: "$12,450.00", trend: "+14.5%", trendUp: true, iconBg: "bg-emerald-500/10 text-emerald-400", icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></> },
              { title: "Total Expenses", amount: "$4,230.50", trend: "-2.4%", trendUp: false, iconBg: "bg-rose-500/10 text-rose-400", icon: <><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></> },
              { title: "Net Balance", amount: "$8,219.50", trend: "+18.2%", trendUp: true, iconBg: "bg-blue-500/10 text-blue-400", icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></> },
              { title: "Available Budget", amount: "$2,840.00", trend: "On Track", neutral: true, iconBg: "bg-purple-500/10 text-purple-400", icon: <><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></> }
            ].map((stat, i) => (
              <div key={i} className="bg-[#12121a] rounded-3xl border border-white/5 p-6 flex flex-col gap-5 hover:border-white/10 transition-colors shadow-sm group">
                <div className="flex justify-between items-start">
                  <span className="text-white/50 text-[12px] font-bold tracking-widest uppercase">{stat.title}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{stat.icon}</svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-white text-3xl font-bold tracking-tight">{stat.amount}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[12px] font-bold tracking-wide px-2 py-1 rounded-md ${stat.neutral ? 'bg-white/5 text-white/60' : stat.trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {stat.trend}
                    </span>
                    <span className="text-white/40 text-[13px] font-medium">vs last month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Main Column (2/3) */}
            <div className="xl:col-span-2 flex flex-col gap-6 lg:gap-8">
              
              {/* Budget Progress Panel */}
              <div className="bg-[#12121a] rounded-3xl border border-white/5 p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700" />
                 
                 <div className="flex justify-between items-end relative z-10">
                   <div className="flex flex-col gap-1.5">
                     <h2 className="text-white text-[17px] font-bold tracking-wide">Monthly Budget</h2>
                     <p className="text-white/40 text-[14px] font-medium">You have used 65% of your total monthly budget.</p>
                   </div>
                   <div className="text-right flex flex-col gap-1">
                     <span className="text-emerald-400 text-3xl font-bold">65%</span>
                     <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest">Utilized</span>
                   </div>
                 </div>
                 
                 <div className="h-6 w-full bg-[#181822] rounded-full overflow-hidden flex shadow-inner border border-white/5 relative z-10 p-1">
                   <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full w-[65%] relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                   </div>
                 </div>
                 
                 <div className="flex justify-between text-[14px] font-semibold relative z-10 mt-1">
                   <div className="flex items-center gap-2 text-white/80">
                     <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span> Spent: $4,230.50
                   </div>
                   <div className="flex items-center gap-2 text-white/40">
                     <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span> Total: $6,500.00
                   </div>
                 </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-[#12121a] rounded-3xl border border-white/5 p-6 lg:p-8 flex flex-col gap-6 flex-1">
                 <div className="flex justify-between items-center mb-2">
                   <h2 className="text-white text-[17px] font-bold tracking-wide">Recent Transactions</h2>
                   <button className="text-indigo-400 text-[13px] font-bold tracking-wide hover:text-indigo-300 transition-colors bg-indigo-500/10 px-4 py-1.5 rounded-lg border border-indigo-500/20 hover:bg-indigo-500/20">View All</button>
                 </div>

                 <div className="flex flex-col gap-3">
                   {[
                     { title: "Netflix Subscription", category: "Entertainment", amount: "-$15.99", date: "Today, 2:45 PM", iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20", icon: <polygon points="5 3 19 12 5 21 5 3"/> },
                     { title: "Apple Store", category: "Technology", amount: "-$1,299.00", date: "Yesterday, 10:20 AM", iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20", icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></> },
                     { title: "Salary Deposit", category: "Income", amount: "+$8,500.00", date: "Oct 1, 9:00 AM", isIncome: true, iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> },
                     { title: "Whole Foods Market", category: "Groceries", amount: "-$142.30", date: "Sep 28, 4:15 PM", iconBg: "bg-orange-500/10 text-orange-400 border-orange-500/20", icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></> }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all group cursor-pointer">
                       <div className="flex items-center gap-4">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                         </div>
                         <div className="flex flex-col gap-1.5">
                           <span className="text-white font-bold text-[15px]">{item.title}</span>
                           <span className="text-white/40 text-[13px] font-medium">{item.category} <span className="mx-1">•</span> {item.date}</span>
                         </div>
                       </div>
                       <div className={`font-bold text-[16px] tracking-wide ${item.isIncome ? 'text-emerald-400' : 'text-white'}`}>
                         {item.amount}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
              
            </div>

            {/* Side Column (1/3) */}
            <div className="flex flex-col gap-6 lg:gap-8">
              
              {/* Expense Breakdown Donut Chart */}
              <div className="bg-[#12121a] rounded-3xl border border-white/5 p-6 lg:p-8 flex flex-col gap-6">
                 <h2 className="text-white text-[17px] font-bold tracking-wide">Expense Breakdown</h2>
                 <div className="relative flex items-center justify-center py-4 group">
                   <svg viewBox="0 0 36 36" className="w-[200px] h-[200px] transform -rotate-90 group-hover:scale-105 transition-transform duration-500">
                     <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="3.5" />
                     {/* Tech 35% */}
                     <circle cx="18" cy="18" r="16" fill="none" className="stroke-indigo-500" strokeWidth="4" pathLength="100" strokeDasharray="35 100" strokeDashoffset="0" strokeLinecap="round" />
                     {/* Groceries 40% */}
                     <circle cx="18" cy="18" r="16" fill="none" className="stroke-emerald-500" strokeWidth="4" pathLength="100" strokeDasharray="40 100" strokeDashoffset="-35" strokeLinecap="round" />
                     {/* Entertainment 15% */}
                     <circle cx="18" cy="18" r="16" fill="none" className="stroke-purple-500" strokeWidth="4" pathLength="100" strokeDasharray="15 100" strokeDashoffset="-75" strokeLinecap="round" />
                     {/* Other 10% */}
                     <circle cx="18" cy="18" r="16" fill="none" className="stroke-orange-400" strokeWidth="4" pathLength="100" strokeDasharray="10 100" strokeDashoffset="-90" strokeLinecap="round" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center flex-col">
                     <span className="text-white font-bold text-3xl tracking-tight">$4,230</span>
                     <span className="text-white/40 text-[11px] font-bold tracking-widest uppercase mt-1">Total Spent</span>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-y-5 gap-x-2 mt-4 px-2">
                   {[
                     { colorClass: "bg-emerald-500 text-emerald-500", label: "Groceries", value: "40%" },
                     { colorClass: "bg-indigo-500 text-indigo-500", label: "Technology", value: "35%" },
                     { colorClass: "bg-purple-500 text-purple-500", label: "Entertainment", value: "15%" },
                     { colorClass: "bg-orange-400 text-orange-400", label: "Other", value: "10%" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <div className={`w-3 h-3 rounded-full ${item.colorClass} shadow-[0_0_10px_currentColor]`} />
                       <div className="flex flex-col gap-0.5">
                         <span className="text-white/90 text-[13px] font-bold">{item.label}</span>
                         <span className="text-white/40 text-[12px] font-semibold">{item.value}</span>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Monthly Snapshot */}
              <div className="bg-gradient-to-br from-emerald-500/10 via-[#12121a] to-indigo-500/10 rounded-3xl border border-white/5 p-6 lg:p-8 flex flex-col gap-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12121a]/90"></div>
                
                <div className="relative z-10 flex flex-col gap-1.5">
                  <h2 className="text-white text-[17px] font-bold tracking-wide">Monthly Snapshot</h2>
                  <p className="text-white/50 text-[14px] font-medium leading-relaxed">You&apos;ve saved <strong className="text-emerald-400">18% more</strong> this month compared to September. Keep it up!</p>
                </div>
                
                <div className="w-full h-[100px] flex items-end gap-2 mt-2 relative z-10">
                   {[40, 60, 50, 80, 100, 75, 45].map((h, i) => (
                     <div key={i} className={`flex-1 rounded-t-md transition-all duration-500 ${i === 4 ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:h-full' : 'bg-white/5 group-hover:bg-white/10'}`} style={{ height: `${h}%` }}></div>
                   ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
);
