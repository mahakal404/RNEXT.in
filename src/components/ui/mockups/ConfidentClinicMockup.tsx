import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Clock, MapPin, 
  Phone, Star, Activity, Heart, Smile, User, 
  ChevronDown, ArrowRight, ShieldCheck,
  Sparkles, Camera, Award
} from 'lucide-react';

export const ConfidentClinicMockup = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden font-sans">
      
      {/* Browser Window Frame */}
      <div className="w-full max-w-[1400px] h-[800px] bg-white rounded-[24px] border border-slate-200 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.1)] flex flex-col overflow-hidden relative z-10">
        
        {/* Browser Header - Light Mode */}
        <div className="h-12 w-full border-b border-slate-100 bg-slate-50 flex items-center px-6 gap-4 flex-shrink-0 z-50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-amber-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-green-400 transition-colors" />
          </div>
          <div className="flex-1 max-w-xl mx-auto h-7 bg-white border border-slate-200 rounded-md flex items-center px-4 justify-center shadow-sm relative group cursor-pointer">
            <span className="text-xs font-medium text-slate-400 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              confidentclinic.com
            </span>
            <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-md transition-colors" />
          </div>
        </div>

        {/* Scrollable Website Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white relative scroll-smooth">
          
          {/* Navigation */}
          <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-8 py-5 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Sparkles size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Confident</span>
                <span className="text-[11px] font-bold text-blue-600 tracking-[0.25em] uppercase">Premium Clinic</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-600 uppercase tracking-wide">
              <span className="text-blue-600 cursor-pointer">Home</span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1">Services <ChevronDown size={14} /></span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer">About</span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer">Reviews</span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer">Contact</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 relative overflow-hidden group">
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative pt-20 pb-28 px-8 lg:px-16 overflow-hidden flex flex-col lg:flex-row items-center gap-16 max-w-[1300px] mx-auto min-h-[650px]">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50/80 via-indigo-50/40 to-transparent rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 flex flex-col gap-8 z-10"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-blue-600 text-xs font-bold tracking-widest uppercase border border-slate-100 shadow-sm shadow-blue-900/5">
                <Star size={14} className="fill-blue-600" /> Premium Cosmetic Dentistry
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Design Your<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dream Smile.</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
                Experience world-class cosmetic dentistry in a luxury environment. We combine advanced 3D technology with artistic precision for flawless results.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all flex items-center gap-2 group">
                  Book Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-slate-700 text-base bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                  View Services
                </button>
              </div>
            </motion.div>
            
            <div className="flex-1 relative w-full h-full min-h-[500px] flex items-center justify-center">
              {/* CSS Medical Illustration (Dental Chair, Scanner, Badges) */}
              <div className="relative w-full max-w-[450px] aspect-square">
                
                {/* Backdrop Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-full border border-white/50 shadow-inner" />
                
                {/* CSS Dental Chair */}
                <div className="absolute top-[40%] left-[20%] w-[200px] h-[140px] z-10 rotate-[-5deg]">
                  {/* Chair Base */}
                  <div className="absolute bottom-0 left-[40%] w-[20%] h-[60px] bg-slate-200 rounded-t-lg shadow-inner" />
                  <div className="absolute bottom-0 left-[30%] w-[40%] h-[15px] bg-slate-300 rounded-lg" />
                  {/* Seat */}
                  <div className="absolute top-[30%] left-[20%] w-[60%] h-[20px] bg-blue-100 rounded-full border border-blue-200 shadow-sm" />
                  <div className="absolute top-[30%] left-[60%] w-[35%] h-[20px] bg-blue-100 rounded-full border border-blue-200 shadow-sm rotate-[20deg] origin-left" />
                  {/* Backrest */}
                  <div className="absolute top-[-20%] left-[10%] w-[30%] h-[80px] bg-blue-100 rounded-[20px] border border-blue-200 shadow-sm rotate-[-30deg] origin-bottom-right" />
                  {/* Headrest */}
                  <div className="absolute top-[-25%] left-[2%] w-[20%] h-[30px] bg-blue-200 rounded-full border border-blue-300 rotate-[-30deg]" />
                </div>

                {/* CSS 3D Scanner (Right Side) */}
                <div className="absolute top-[20%] right-[25%] w-[80px] h-[220px] z-20">
                  <div className="absolute bottom-0 left-[35%] w-[30%] h-[180px] bg-slate-100 rounded-full border border-slate-200 shadow-sm" />
                  <div className="absolute top-[20%] left-[20%] w-[80%] h-[15px] bg-slate-200 rounded-full rotate-[-40deg] origin-right shadow-sm" />
                  <div className="absolute top-[5%] left-[10%] w-[30px] h-[40px] bg-white border border-slate-200 rounded-xl shadow-md rotate-[-40deg]" />
                  {/* Scanner Glow */}
                  <motion.div 
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[-10%] w-[20px] h-[20px] bg-blue-400 rounded-full blur-md"
                  />
                </div>

                {/* Floating Doctor Card */}
                <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-[15%] -left-[5%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 z-30"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center overflow-hidden border border-indigo-100">
                    <User className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-800 leading-none">Dr. Sarah Jenkins</div>
                    <div className="text-xs font-bold text-slate-500 mt-1">Lead Cosmetic Dentist</div>
                  </div>
                </motion.div>

                {/* Floating Rating Badge */}
                <motion.div 
                  animate={{ y: [8, -8, 8] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[20%] -right-[5%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-3 z-30"
                >
                  <div className="flex gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <div className="w-px h-6 bg-slate-200 mx-1" />
                  <div className="text-sm font-extrabold text-slate-800">4.9/5</div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Animated Statistics */}
          <section className="bg-slate-900 py-20 px-8 relative z-20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { number: "1500+", label: "Smile Makeovers" },
                { number: "4.9★", label: "Google Rating" },
                { number: "10+", label: "Years Experience" },
                { number: "99%", label: "Patient Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3"
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Premium Treatments Grid */}
          <section className="py-28 px-8 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4">Premium Treatments</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Artistry Meets Dentistry</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Smile Makeover", icon: <Smile /> },
                { title: "Teeth Whitening", icon: <Sparkles /> },
                { title: "Ceramic Crowns", icon: <ShieldCheck /> },
                { title: "Dental Implants", icon: <Heart /> },
                { title: "Root Canal", icon: <Activity /> },
                { title: "Laser Dentistry", icon: <Camera /> }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-lg shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-800 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm border border-slate-100 group-hover:border-blue-600">
                    {React.cloneElement(service.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">Precision crafted treatments designed to restore function and deliver a flawless, natural appearance.</p>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                    Explore Treatment <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Smile Transformation Preview */}
          <section className="py-28 px-8 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-20">
              
              <div className="flex-1 flex flex-col gap-8 z-10">
                <div>
                  <span className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">Real Results</span>
                  <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">Experience a True Smile Transformation</h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Our digital smile design process allows you to preview your new smile before treatment even begins. We combine artistry with precision to deliver stunning results.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-extrabold text-slate-900">100%</span>
                    <span className="text-sm font-bold text-slate-500">Customized Designs</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-extrabold text-slate-900">3D</span>
                    <span className="text-sm font-bold text-slate-500">Digital Scanning</span>
                  </div>
                </div>
              </div>

              {/* Transformation Visualization (CSS Only) */}
              <div className="flex-1 w-full max-w-lg relative flex items-center justify-center h-[400px]">
                
                {/* Before Card */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute left-0 top-[20%] w-[220px] h-[260px] bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center justify-center p-6 z-10"
                >
                  <div className="w-24 h-32 flex gap-1 pb-4 relative opacity-60 grayscale brightness-90">
                    <div className="flex-1 bg-slate-200 rounded-t-[30px] rounded-bl-[30px] rounded-br-[10px]" />
                    <div className="flex-1 bg-slate-200 rounded-t-[30px] rounded-br-[30px] rounded-bl-[10px]" />
                  </div>
                  <div className="mt-4 px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">Before</div>
                </motion.div>

                {/* Animated Arrow */}
                <motion.div 
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="z-20 text-blue-500 bg-white p-2 rounded-full shadow-md"
                >
                  <ArrowRight size={32} />
                </motion.div>

                {/* After Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute right-0 top-[10%] w-[250px] h-[300px] bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-blue-50 flex flex-col items-center justify-center p-6 z-30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl" />
                  <div className="w-28 h-36 flex gap-1.5 pb-4 relative drop-shadow-[0_10px_20px_rgba(37,99,235,0.2)]">
                    <div className="flex-1 bg-white rounded-t-[35px] rounded-bl-[35px] rounded-br-[10px] border border-blue-50 relative overflow-hidden">
                       <div className="absolute top-2 left-2 w-4 h-8 bg-blue-50/50 rounded-full rotate-12" />
                    </div>
                    <div className="flex-1 bg-white rounded-t-[35px] rounded-br-[35px] rounded-bl-[10px] border border-blue-50" />
                  </div>
                  <div className="mt-6 px-5 py-2 bg-blue-600 rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-md shadow-blue-600/30">After</div>
                </motion.div>
                
              </div>
            </div>
          </section>

          {/* Meet the Doctor & Clinic Highlights */}
          <section className="py-28 px-8 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Meet the Doctor */}
              <div className="bg-slate-900 rounded-[40px] p-10 md:p-14 relative overflow-hidden flex flex-col text-white">
                <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-blue-600/30 blur-[80px] rounded-full" />
                
                <span className="text-blue-400 font-extrabold uppercase tracking-[0.2em] text-xs mb-8 block">Lead Specialist</span>
                
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center overflow-hidden shrink-0">
                    <User size={40} className="text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold mb-2">Dr. Sarah Jenkins</h3>
                    <p className="text-slate-400 font-medium">BDS, MDS - Cosmetic Dentistry</p>
                  </div>
                </div>
                
                <p className="text-slate-300 font-medium leading-relaxed mb-10 text-lg">
                  "My philosophy is simple: everyone deserves a smile they are proud to share. We focus on patient-first care, combining artistry with the latest dental technology."
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <Award className="text-blue-400" size={24} />
                    <span className="font-bold text-sm">Award Winning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="text-blue-400" size={24} />
                    <span className="font-bold text-sm">Patient First</span>
                  </div>
                </div>
              </div>

              {/* Clinic Highlights */}
              <div className="flex flex-col justify-center gap-8 pl-0 lg:pl-8">
                <h3 className="text-4xl font-extrabold text-slate-900 mb-4">The Confident Clinic Standard</h3>
                <div className="flex flex-col gap-6">
                  {[
                    "3D Digital Scanning Technology",
                    "Pain-Free Treatment Protocols",
                    "Medical-Grade Sterilization",
                    "Luxury Waiting Lounge",
                    "Same Day Consultations",
                    "Expert Cosmetic Care"
                  ].map((highlight, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-28 px-8 bg-slate-50 border-t border-slate-200">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4">Patient Stories</span>
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Life Changing Results</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Emily R.", text: "The premium care I received was unmatched. My new ceramic crowns look incredibly natural and I can't stop smiling." },
                  { name: "James T.", text: "A truly luxury experience from the waiting lounge to the dental chair. The 3D scanning process was fascinating and painless." },
                  { name: "Sophia M.", text: "Dr. Jenkins transformed my smile completely. The attention to detail and artistic approach made all the difference." }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col gap-6">
                    <div className="flex text-blue-600 gap-1">
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed flex-1 text-lg">&quot;{review.text}&quot;</p>
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-extrabold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div className="font-extrabold text-slate-900">{review.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking Preview */}
          <section className="py-24 px-8 max-w-[800px] mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Ready for Your Transformation?</h2>
            <p className="text-slate-500 font-medium mb-12 text-lg max-w-lg mx-auto">Take the first step towards your dream smile. Request a premium consultation today.</p>
            
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl shadow-blue-900/10 border border-slate-100 flex flex-col sm:flex-row gap-4 items-center">
              <input type="text" readOnly placeholder="Full Name" className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-medium text-slate-700 outline-none border border-slate-200" />
              <input type="text" readOnly placeholder="Phone Number" className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-medium text-slate-700 outline-none border border-slate-200" />
              <button className="w-full sm:w-auto shrink-0 h-14 px-10 bg-slate-900 text-white rounded-2xl font-bold shadow-lg shadow-slate-900/20 hover:bg-blue-600 transition-colors">
                Book Now
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white pt-20 pb-10 px-8 border-t border-slate-200">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-slate-500 text-sm font-medium">
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <Sparkles size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-2xl font-extrabold tracking-tight text-slate-900">Confident</span>
                  </div>
                  <p className="leading-relaxed">Premium cosmetic dentistry clinic providing luxury care and exceptional results.</p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-slate-900 font-extrabold text-lg mb-2">Quick Links</h4>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">About Clinic</span>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">Patient Reviews</span>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">Book Consultation</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-slate-900 font-extrabold text-lg mb-2">Treatments</h4>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">Smile Makeover</span>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">Ceramic Crowns</span>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">Dental Implants</span>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">Teeth Whitening</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-slate-900 font-extrabold text-lg mb-2">Contact</h4>
                  <span className="flex items-center gap-3"><MapPin size={18} className="text-blue-600 shrink-0" /> 100 Luxury Avenue, Suite 1</span>
                  <span className="flex items-center gap-3"><Phone size={18} className="text-blue-600 shrink-0" /> +1 (555) 100-2000</span>
                  <span className="flex items-center gap-3"><Clock size={18} className="text-blue-600 shrink-0" /> Mon-Fri: 9am - 6pm</span>
                </div>
                
              </div>
              <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
                <span>© 2026 Confident Clinic. All Rights Reserved.</span>
                <div className="flex gap-6">
                  <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
                  <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};
