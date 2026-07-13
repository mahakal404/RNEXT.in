import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, ArrowRight, Award, Calendar, CheckCircle2, 
  ChevronRight, Clock, Crosshair, Heart, MapPin, 
  Microscope, Monitor, Phone, Search, ShieldCheck, 
  Smile, Sparkles, Star, User
} from 'lucide-react';

export const PritiDentalMockup = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#F0FDFB] flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden font-sans">
      
      {/* Browser Window Frame */}
      <div className="w-full max-w-[1400px] h-[800px] bg-white rounded-[24px] border border-slate-200 shadow-[0_30px_80px_-20px_rgba(13,148,136,0.15)] flex flex-col overflow-hidden relative z-10">
        
        {/* Browser Header */}
        <div className="h-12 w-full border-b border-slate-100 bg-slate-50 flex items-center px-6 gap-4 flex-shrink-0 z-50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-amber-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-green-400 transition-colors" />
          </div>
          <div className="flex-1 max-w-xl mx-auto h-7 bg-white border border-slate-200 rounded-md flex items-center px-4 justify-center shadow-sm relative group cursor-pointer">
            <span className="text-xs font-medium text-slate-400 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              pritidentalclinic.com
            </span>
          </div>
        </div>

        {/* Scrollable Website Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white relative scroll-smooth text-slate-900">
          
          {/* Navigation */}
          <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 px-8 py-5 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/20">
                <Microscope size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 tracking-tight leading-none">Priti Dental</span>
                <span className="text-[11px] font-bold text-teal-600 tracking-[0.2em] uppercase">Micro Dentistry</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-700 uppercase tracking-wider">
              <span className="text-teal-600 cursor-pointer">Home</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">About</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">Services</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">Testimonials</span>
              <span className="hover:text-teal-600 transition-colors cursor-pointer">Contact</span>
            </div>
            
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-teal-600/25 relative overflow-hidden group">
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </nav>

          {/* Hero Section */}
          <section className="relative pt-20 pb-28 px-8 lg:px-16 overflow-hidden flex flex-col lg:flex-row items-center gap-16 max-w-[1300px] mx-auto min-h-[650px]">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-b from-teal-50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 flex flex-col gap-8 z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 text-teal-700 text-xs font-bold tracking-widest uppercase border border-teal-100/50">
                <Crosshair size={14} className="text-teal-600" /> Precision Under Magnification
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Advanced<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Micro Dentistry.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
                Elevating dental care with German microscope technology. We deliver 25X magnified precision for flawless diagnoses, painless treatments, and long-lasting results.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-4">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-slate-900/20 hover:bg-teal-600 hover:shadow-teal-600/30 transition-all flex items-center gap-2 group">
                  Book Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-xl font-bold text-slate-700 text-base bg-white border border-slate-200 hover:border-teal-200 hover:bg-teal-50 transition-colors">
                  Explore Treatments
                </button>
              </div>
            </motion.div>
            
            <div className="flex-1 relative w-full h-full min-h-[500px] flex items-center justify-center">
              {/* CSS Medical Illustration (Microscope, Chair, Monitor, Teeth) */}
              <div className="relative w-full max-w-[450px] aspect-square">
                
                {/* Backdrop Circle */}
                <div className="absolute inset-0 bg-teal-50/50 rounded-full border border-white shadow-inner backdrop-blur-sm" />
                
                {/* CSS Dental Chair */}
                <div className="absolute bottom-[10%] left-[25%] w-[180px] h-[100px] z-10">
                  <div className="absolute bottom-0 left-[35%] w-[30%] h-[40px] bg-slate-200 rounded-t-lg" />
                  <div className="absolute top-[40%] left-[10%] w-[80%] h-[15px] bg-teal-100 rounded-full border border-teal-200 shadow-sm rotate-[10deg]" />
                  <div className="absolute top-[0%] left-[-10%] w-[40%] h-[60px] bg-teal-100 rounded-3xl border border-teal-200 rotate-[-40deg] shadow-sm" />
                </div>

                {/* CSS Dental Microscope */}
                <div className="absolute top-[15%] left-[40%] w-[120px] h-[200px] z-20">
                  {/* Stand */}
                  <div className="absolute top-0 left-[80%] w-[15px] h-[100%] bg-slate-300 rounded-full" />
                  {/* Arm */}
                  <div className="absolute top-[20%] left-[20%] w-[80%] h-[15px] bg-slate-200 rounded-full rotate-[15deg] shadow-sm" />
                  {/* Scope Body */}
                  <div className="absolute top-[30%] left-[10%] w-[40px] h-[60px] bg-white border border-slate-200 rounded-xl shadow-lg rotate-[15deg]" />
                  {/* Lenses */}
                  <div className="absolute top-[50%] left-[15%] w-[12px] h-[25px] bg-slate-800 rounded-b-md rotate-[15deg]" />
                  <div className="absolute top-[45%] left-[25%] w-[12px] h-[25px] bg-slate-800 rounded-b-md rotate-[15deg]" />
                  {/* Laser Beam */}
                  <motion.div 
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-[65%] left-[15%] w-[3px] h-[60px] bg-teal-400 blur-[1px] rotate-[15deg]"
                  />
                </div>

                {/* CSS Monitor / UI Panel */}
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-[10%] -right-[5%] bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-[140px] z-30"
                >
                  <div className="w-full h-[80px] bg-slate-900 rounded-xl mb-2 flex items-center justify-center overflow-hidden relative">
                    <Monitor className="text-slate-700" size={32} />
                    {/* Fake Scan Wave */}
                    <motion.div 
                      animate={{ x: [-20, 140, -20] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                      className="absolute top-0 bottom-0 w-[2px] bg-teal-500 shadow-[0_0_10px_#14b8a6]"
                    />
                  </div>
                  <div className="h-[4px] w-full bg-slate-100 rounded-full mb-1"><div className="h-full bg-teal-500 w-[70%] rounded-full" /></div>
                  <div className="text-[10px] font-bold text-slate-500">25X Magnification</div>
                </motion.div>

                {/* Floating Tooth Model */}
                <motion.div 
                  animate={{ y: [8, -8, 8], rotate: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[25%] -left-[10%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center z-30"
                >
                  <div className="w-14 h-16 flex gap-1 pb-2 relative opacity-90 drop-shadow-md">
                    <div className="flex-1 bg-white rounded-t-[20px] rounded-bl-[20px] rounded-br-[5px] border-2 border-teal-100" />
                    <div className="flex-1 bg-white rounded-t-[20px] rounded-br-[20px] rounded-bl-[5px] border-2 border-teal-100" />
                    <div className="absolute top-2 left-2 w-3 h-3 bg-teal-400 rounded-full blur-[2px]" />
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Animated Statistics */}
          <section className="bg-slate-900 py-16 px-8 relative z-20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { number: "11+", label: "Years Experience" },
                { number: "25X", label: "Magnification" },
                { number: "5000+", label: "Happy Patients" },
                { number: "4.8★", label: "Clinic Rating" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                  <span className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                    {stat.number}
                  </span>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Showcase */}
          <section className="py-24 px-8 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Precision First</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Advanced Diagnostic Technology</h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "German Microscope", icon: <Microscope /> },
                { title: "Digital X-Ray", icon: <Monitor /> },
                { title: "Intra Oral Camera", icon: <Search /> },
                { title: "Rotary Endodontics", icon: <Activity /> },
                { title: "Laser Dentistry", icon: <Sparkles /> },
                { title: "3D Diagnosis", icon: <Crosshair /> }
              ].map((tech, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-teal-100/50 text-teal-600 flex items-center justify-center border border-teal-100">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{tech.title}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Workflow */}
          <section className="py-20 px-8 bg-teal-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-3xl -z-10" />
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-3xl font-black mb-12 text-center">The Micro Dentistry Workflow</h2>
              <div className="flex flex-col lg:flex-row justify-between relative">
                <div className="hidden lg:block absolute top-[40px] left-10 right-10 h-0.5 bg-teal-500" />
                {[
                  { step: "01", title: "Consultation", desc: "Detailed discussion of your concerns." },
                  { step: "02", title: "Diagnosis", desc: "High-magnification screening." },
                  { step: "03", title: "Treatment", desc: "Precision micro-procedures." },
                  { step: "04", title: "Recovery", desc: "Rapid, pain-free healing." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative z-10 w-full lg:w-1/4 mb-10 lg:mb-0">
                    <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-teal-600 flex items-center justify-center text-2xl font-black mb-6 shadow-xl">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-teal-100 text-sm max-w-[200px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 px-8 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Why Us</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Priti Dental Advantage</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "25X Precision", desc: "We see what others miss, allowing for ultra-conservative treatments.", icon: <Crosshair /> },
                { title: "Strict Sterilization", desc: "Class B autoclaves and multi-step safety protocols.", icon: <ShieldCheck /> },
                { title: "Pain-Free Care", desc: "Advanced anesthetics and gentle techniques for anxiety-free visits.", icon: <Heart /> },
                { title: "Minimal Invasion", desc: "Preserving maximum natural tooth structure through micro-tools.", icon: <Sparkles /> },
                { title: "Digital Records", desc: "Instant access to your X-Rays and treatment history.", icon: <Monitor /> },
                { title: "Expert Specialists", desc: "Highly trained endodontists and cosmetic dentists.", icon: <Award /> }
              ].map((feature, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-800 flex items-center justify-center mb-6 border border-slate-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Meet the Doctor & Equipment Preview */}
          <section className="py-24 px-8 bg-slate-50 border-y border-slate-200">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Meet The Expert</span>
                  <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">Dr. Priti Sharma</h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                    A pioneer in microscopic dentistry, dedicated to providing ethical, painless, and highly precise dental care to every patient.
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center overflow-hidden shrink-0">
                    <User size={50} className="text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 font-bold text-slate-800 text-sm inline-flex items-center gap-2">
                      <Award className="text-teal-600" size={16} /> Endodontic Specialist
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 font-bold text-slate-800 text-sm inline-flex items-center gap-2">
                      <ShieldCheck className="text-teal-600" size={16} /> 11+ Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment Preview Illustration */}
              <div className="relative w-full h-[400px] bg-slate-900 rounded-[40px] overflow-hidden flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-teal-900/20" />
                
                {/* CSS Scanner Array */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="w-[200px] h-[200px] border-[1px] border-teal-500/30 rounded-full border-dashed flex items-center justify-center z-10"
                >
                  <div className="w-[150px] h-[150px] border-[2px] border-teal-500/20 rounded-full" />
                </motion.div>
                
                <div className="absolute z-20 w-[100px] h-[140px] bg-white rounded-3xl shadow-[0_0_50px_rgba(20,184,166,0.3)] flex flex-col items-center justify-center gap-4">
                  <Microscope className="text-slate-800" size={40} />
                  <div className="w-12 h-2 bg-slate-200 rounded-full" />
                </div>
                
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute z-0 w-[100px] h-[140px] bg-teal-400/20 rounded-3xl blur-xl"
                />
              </div>

            </div>
          </section>

          {/* Treatment Cards */}
          <section className="py-24 px-8 max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center mb-16">Comprehensive Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Root Canal Treatment', 'Smile Design', 'Ceramic Crowns', 'Orthodontics (Braces)', 'Teeth Cleaning', 'Laser Dentistry'].map((service, i) => (
                <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-500 hover:shadow-xl transition-all cursor-pointer flex justify-between items-center">
                  <span className="font-bold text-slate-800 group-hover:text-teal-700 transition-colors">{service}</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                    <ChevronRight className="text-slate-400 group-hover:text-teal-600" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Booking Preview */}
          <section className="py-24 px-8 bg-slate-900 text-white">
            <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl font-black mb-4">Book Your Visit</h2>
                <p className="text-slate-400 font-medium mb-8">Skip the waiting room. Schedule your consultation online.</p>
                <div className="flex flex-col gap-4 bg-slate-800 p-8 rounded-[32px] border border-slate-700">
                  <input type="text" readOnly placeholder="Name" className="w-full h-14 bg-slate-900 rounded-xl px-6 font-medium outline-none border border-slate-700 text-sm" />
                  <input type="text" readOnly placeholder="Phone" className="w-full h-14 bg-slate-900 rounded-xl px-6 font-medium outline-none border border-slate-700 text-sm" />
                  <div className="w-full h-14 bg-slate-900 rounded-xl px-6 font-medium border border-slate-700 text-sm flex items-center text-slate-400">
                    Select Date <Calendar size={16} className="ml-auto" />
                  </div>
                  <button className="w-full h-14 bg-teal-500 text-white rounded-xl font-bold mt-2 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
                    Confirm Appointment
                  </button>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col gap-8">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4 items-center">
                  <Phone className="text-teal-400" size={24} />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Emergency Contact</div>
                    <div className="text-xl font-bold">+1 (555) 300-4000</div>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4 items-center">
                  <Clock className="text-teal-400" size={24} />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Working Hours</div>
                    <div className="text-lg font-bold">Mon - Sat: 9AM - 8PM</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 px-8 max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center mb-16">Patient Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "I was terrified of root canals, but the microscope technology and Dr. Priti's gentle hands made it completely painless.",
                "The level of detail and hygiene maintained here is incredible. Truly the best dental clinic I have visited.",
                "Got my smile designed here. The digital diagnosis showed me exactly what to expect, and the results are perfect."
              ].map((text, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                  <div className="flex text-amber-400 mb-2">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-slate-600 font-medium italic flex-1">"{text}"</p>
                  <div className="mt-4 font-bold text-slate-900">Verified Patient</div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white pt-16 pb-8 px-8 border-t border-slate-200">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-sm font-medium text-slate-500">
              <div className="flex flex-col gap-4">
                <span className="text-xl font-black text-slate-900">Priti Dental</span>
                <p>Advanced Micro Dentistry clinic providing precision care.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-slate-900 font-bold mb-1">Services</h4>
                <span>Root Canal</span>
                <span>Crowns</span>
                <span>Laser Therapy</span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-slate-900 font-bold mb-1">Contact</h4>
                <span>123 Clinic Road, District</span>
                <span>info@pritidental.com</span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-slate-900 font-bold mb-1">Hours</h4>
                <span>Mon-Sat: 09:00 - 20:00</span>
                <span>Sun: Closed</span>
              </div>
            </div>
            <div className="text-center text-xs font-bold text-slate-400 border-t border-slate-100 pt-8">
              © 2026 Priti Dental Clinic. All Rights Reserved.
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};
