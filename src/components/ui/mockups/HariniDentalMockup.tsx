import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronRight, Clock, MapPin, Phone, Star, Activity, Heart, Smile } from 'lucide-react';

export const HariniDentalMockup = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden font-sans">
      
      {/* Browser Window Frame */}
      <div className="w-full max-w-[1400px] h-[800px] bg-white rounded-[24px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(13,148,136,0.1)] flex flex-col overflow-hidden relative z-10">
        
        {/* Browser Header - Light Mode */}
        <div className="h-12 w-full border-b border-slate-100 bg-slate-50 flex items-center px-6 gap-4 flex-shrink-0 z-50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
          </div>
          <div className="flex-1 max-w-xl mx-auto h-7 bg-white border border-slate-200 rounded-md flex items-center px-4 justify-center shadow-sm">
            <span className="text-xs font-medium text-slate-400 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              harinidentalcare.com
            </span>
          </div>
        </div>

        {/* Scrollable Website Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white relative scroll-smooth">
          
          {/* Top Bar */}
          <div className="bg-teal-600 text-white py-2 px-8 flex justify-between items-center text-xs font-medium hidden md:flex">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><MapPin size={14} /> 123 Health Avenue, Medical District</span>
              <span className="flex items-center gap-2"><Clock size={14} /> Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
            <span className="flex items-center gap-2"><Phone size={14} /> Emergency: +1 (555) 123-4567</span>
          </div>

          {/* Navigation */}
          <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Smile size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800 tracking-tight leading-none">Harini</span>
                <span className="text-xs font-semibold text-teal-600 tracking-widest uppercase">Dental Care</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <span className="text-teal-600">Home</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">Services</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">About</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">Contact</span>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30">
              Book Appointment
            </button>
          </nav>

          {/* Hero Section */}
          <section className="relative pt-20 pb-32 px-8 lg:px-16 overflow-hidden flex flex-col lg:flex-row items-center gap-12 max-w-[1200px] mx-auto">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold w-fit border border-teal-100">
                <Activity size={16} /> Advanced Dental Care
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Perfect Smile,<br/>
                <span className="text-teal-600">Perfect Health.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed mt-2 font-medium">
                Experience world-class dental care with our team of expert specialists. Modern technology meets compassionate care for your entire family.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/40 transition-all flex items-center gap-2 relative overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-slate-700 text-base bg-white border border-slate-200 hover:bg-slate-50 transition-all">
                  Our Services
                </button>
              </div>
            </motion.div>
            
            <div className="flex-1 relative w-full aspect-square max-w-[500px]">
              {/* CSS Medical Illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central Circle */}
                <div className="w-[340px] h-[340px] bg-teal-50 rounded-full border border-teal-100 flex items-center justify-center relative shadow-inner">
                  {/* Abstract Tooth */}
                  <div className="w-32 h-40 flex gap-2 pb-6 relative z-10">
                    <div className="flex-1 bg-white rounded-t-[40px] rounded-bl-[40px] rounded-br-[10px] shadow-[0_15px_30px_rgba(13,148,136,0.15)] relative overflow-hidden">
                       <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-teal-50" />
                    </div>
                    <div className="flex-1 bg-white rounded-t-[40px] rounded-br-[40px] rounded-bl-[10px] shadow-[0_15px_30px_rgba(13,148,136,0.15)] relative overflow-hidden">
                    </div>
                  </div>
                </div>

                {/* Floating Elements using Framer Motion (Soft float) */}
                <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-[10%] left-[10%] bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                  <Heart className="text-teal-500" size={32} />
                </motion.div>

                <motion.div 
                  animate={{ y: [8, -8, 8] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="absolute bottom-[15%] right-[5%] bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                    <Star className="text-teal-600" size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">4.9/5</div>
                    <div className="text-xs text-slate-500">Patient Rating</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-[25%] right-[0%] bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                  <Activity className="text-teal-400" size={28} />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="bg-teal-600 py-16 px-8 relative">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-teal-500/50">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "5000+", label: "Happy Patients" },
                { number: "100%", label: "Modern Equipment" },
                { number: "24/7", label: "Emergency Care" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                  <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{stat.number}</span>
                  <span className="text-teal-100 font-medium mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-24 px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h2>
              <h3 className="text-4xl font-bold text-slate-900">Comprehensive Dental Care</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Dental Consultation", icon: <Activity /> },
                { title: "Root Canal", icon: <Activity /> },
                { title: "Dental Implants", icon: <Smile /> },
                { title: "Orthodontics (Braces)", icon: <Smile /> },
                { title: "Teeth Cleaning", icon: <Star /> },
                { title: "Smile Design", icon: <Heart /> }
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">High quality care tailored to your needs, ensuring a healthy and beautiful smile.</p>
                  <div className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ChevronRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us & Dashboard Mockup */}
          <section className="py-24 px-8 bg-slate-50 border-y border-slate-200">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 flex flex-col gap-8">
                <div>
                  <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</h2>
                  <h3 className="text-4xl font-bold text-slate-900 leading-tight">Modern Technology & Expert Care</h3>
                </div>
                <p className="text-lg text-slate-600">
                  We use state-of-the-art clinic management systems to ensure your visits are seamless, records are perfectly maintained, and treatments are precisely tracked.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Digital records and quick access",
                    "Advanced diagnostic tools",
                    "Painless treatment procedures",
                    "Strict sterilization protocols"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-teal-500" size={24} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Light Clinic Dashboard Mockup */}
              <div className="flex-1 w-full max-w-lg">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 flex flex-col gap-6 relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold">JD</div>
                      <div>
                        <div className="font-bold text-slate-800">John Doe</div>
                        <div className="text-xs text-slate-500">Patient ID: #HD-4029</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">
                      Active
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Upcoming Appointment</div>
                      <div className="font-bold text-slate-800">Tomorrow, 10:00 AM</div>
                      <div className="text-sm text-teal-600 font-medium mt-1">Teeth Cleaning</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Last Visit</div>
                      <div className="font-bold text-slate-800">12 May 2026</div>
                      <div className="text-sm text-slate-600 mt-1">General Checkup</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-slate-800 mb-3">Treatment Progress</div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 w-[75%] rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                      <span>Phase 2 of 3</span>
                      <span>75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h2>
              <h3 className="text-4xl font-bold text-slate-900">What Our Patients Say</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Jenkins", text: "The most comfortable dental experience I've ever had. The staff is incredibly friendly and professional." },
                { name: "Michael Chang", text: "State of the art facility and the doctors really take the time to explain every procedure. Highly recommended!" },
                { name: "Emma Thompson", text: "Got my smile makeover here. The results exceeded my expectations and the aftercare support was amazing." }
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4 relative">
                  <div className="flex text-amber-400">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed italic">&quot;{review.text}&quot;</p>
                  <div className="font-bold text-slate-900 mt-auto">{review.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Appointment Booking */}
          <section className="py-24 px-8 bg-teal-600">
            <div className="max-w-[1000px] mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Book Your Visit Today</h3>
                <p className="text-slate-600 mb-8">Schedule an appointment easily through our online booking system. Choose a time that works best for you.</p>
                
                <div className="flex flex-col gap-4">
                  <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-teal-500 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm"><Calendar size={20} /></div>
                      <div className="font-medium text-slate-700">Select Date</div>
                    </div>
                    <ChevronRight className="text-slate-400" />
                  </div>
                  
                  <button className="w-full bg-teal-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-teal-600/30 hover:bg-teal-700 transition-colors mt-4 relative overflow-hidden group">
                    <span className="relative z-10">Confirm Booking</span>
                    <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 w-full flex justify-center">
                {/* Calendar Mockup */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 w-full max-w-sm shadow-inner">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-bold text-slate-800">July 2026</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">&lt;</div>
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800">&gt;</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-slate-400">
                    <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                    {Array.from({ length: 31 }).map((_, i) => {
                      const isSelected = i === 14;
                      const isPast = i < 12;
                      return (
                        <div 
                          key={i} 
                          className={`aspect-square flex items-center justify-center rounded-full ${isSelected ? 'bg-teal-600 text-white shadow-md shadow-teal-600/40' : isPast ? 'text-slate-300' : 'text-slate-700 hover:bg-teal-50 cursor-pointer'}`}
                        >
                          {i + 1}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer (Simple) */}
          <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
            <p>© 2026 Harini Dental Care. All rights reserved.</p>
          </footer>

        </div>
      </div>
    </div>
  );
};
