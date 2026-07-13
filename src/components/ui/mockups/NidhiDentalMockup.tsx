import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, CheckCircle2, ChevronRight, Clock, MapPin, 
  Phone, Star, Activity, Heart, Smile, User, 
  ChevronDown, ArrowRight, ShieldCheck, Stethoscope 
} from 'lucide-react';

export const NidhiDentalMockup = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#F1F5F9] flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden font-sans">
      
      {/* Browser Window Frame */}
      <div className="w-full max-w-[1400px] h-[800px] bg-white rounded-[24px] border border-slate-200 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.15)] flex flex-col overflow-hidden relative z-10">
        
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
              nidhidentalclinic.com
            </span>
            <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-md transition-colors" />
          </div>
        </div>

        {/* Scrollable Website Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white relative scroll-smooth">
          
          {/* Navigation */}
          <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Smile size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">Nidhi</span>
                <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">Dental Clinic</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
              <span className="text-blue-600 cursor-pointer">Home</span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1">Services <ChevronDown size={14} /></span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer">Gallery</span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer">About</span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer">Contact</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-slate-600 font-bold text-sm hover:text-blue-600 transition-colors">
                <Phone size={16} className="text-blue-600" />
                Call Now
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 relative overflow-hidden group">
                <span className="relative z-10">Book Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative pt-16 pb-24 px-6 lg:px-12 overflow-hidden flex flex-col lg:flex-row items-center gap-16 max-w-[1200px] mx-auto min-h-[600px]">
            {/* Soft Blue Gradient Background */}
            <div className="absolute top-0 right-0 w-full h-[80%] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
            <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide w-fit border border-blue-100 uppercase">
                <ShieldCheck size={14} /> Comprehensive Family Dentistry
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Healthy Smiles<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">For Your Family.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-md leading-relaxed font-medium">
                Experience gentle, specialized care from highly qualified professionals. We ensure a comfortable and pain-free visit every time.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all flex items-center gap-2 relative overflow-hidden group">
                  <span className="relative z-10">Book Appointment</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-blue-900 text-base bg-blue-50 hover:bg-blue-100 transition-colors">
                  Explore Services
                </button>
              </div>
            </motion.div>
            
            <div className="flex-1 relative w-full h-full min-h-[400px] flex items-center justify-center">
              {/* CSS Medical Illustration Group */}
              <div className="relative w-[380px] h-[380px]">
                
                {/* Main Abstract Tooth Shape */}
                <div className="absolute inset-0 bg-blue-50 rounded-[40px] rotate-3 border border-blue-100/50 shadow-inner overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-transparent" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-40 h-48 flex gap-3 pb-8 relative drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)]">
                    <div className="flex-1 bg-white rounded-t-[50px] rounded-bl-[50px] rounded-br-[15px] border border-blue-50 overflow-hidden relative">
                       <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-bl from-blue-50/50 to-transparent" />
                    </div>
                    <div className="flex-1 bg-white rounded-t-[50px] rounded-br-[50px] rounded-bl-[15px] border border-blue-50 overflow-hidden relative">
                       <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-50/50 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Floating Rating Badge */}
                <motion.div 
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-[10%] -left-[15%] bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                    <Star className="text-amber-400" size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-slate-800 leading-none">4.9/5</div>
                    <div className="text-xs font-bold text-slate-500 mt-1">Google Reviews</div>
                  </div>
                </motion.div>

                {/* Floating Appointment Badge */}
                <motion.div 
                  animate={{ y: [6, -6, 6] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[10%] -right-[10%] bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Calendar className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-800 leading-none mb-1">Available Today</div>
                    <div className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-block">Book Now</div>
                  </div>
                </motion.div>
                
                {/* Small decorative floaters */}
                <motion.div animate={{ y: [-4, 4, -4], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[5%] right-[10%] text-blue-300 z-0">
                  <Activity size={32} />
                </motion.div>
                <motion.div animate={{ y: [4, -4, 4], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }} className="absolute bottom-[5%] left-[5%] text-blue-200 z-0">
                  <Heart size={28} />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trust Statistics */}
          <section className="bg-slate-900 py-16 px-6 relative z-20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "12+", label: "Years Experience" },
                { number: "3000+", label: "Happy Patients" },
                { number: "20+", label: "Treatments" },
                { number: "5 Star", label: "Patient Rating" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                  <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">{stat.number}</span>
                  <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-24 px-6 max-w-[1200px] mx-auto bg-slate-50/50">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-blue-600" /> Services <div className="w-8 h-[2px] bg-blue-600" />
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Our Specialties</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Dental Consultation", desc: "Comprehensive checkups and personalized treatment plans.", icon: <Stethoscope /> },
                { title: "Root Canal", desc: "Painless root canal treatments using advanced rotary endodontics.", icon: <Activity /> },
                { title: "Kids Dentistry", desc: "Specialized, gentle care to keep your child's smile bright.", icon: <Smile /> },
                { title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth.", icon: <Heart /> },
                { title: "Invisible Aligners", desc: "Clear, comfortable alternative to traditional metal braces.", icon: <Star /> },
                { title: "Teeth Whitening", desc: "Professional whitening treatments for a radiant smile.", icon: <User /> }
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">{service.desc}</p>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                    Know More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Appointment Booking & Why Choose Us */}
          <section className="py-24 px-6 bg-white border-y border-slate-100">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
              
              {/* Why Choose Us & Clinic Mgmt Preview */}
              <div className="flex-1 flex flex-col gap-10">
                <div>
                  <span className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">Why Choose Us</span>
                  <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">Expert Care in a Relaxing Environment</h2>
                  <p className="text-lg text-slate-600 font-medium">
                    We combine years of experience with state-of-the-art technology to provide the best possible dental care for you and your family.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Sterilized Equipment",
                    "Experienced Dentist",
                    "Pain Free Care",
                    "Kid Friendly",
                    "Emergency Support",
                    "Affordable Pricing"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className="text-slate-800 font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Clinic Management Preview Widget (Simple) */}
                <div className="mt-4 bg-slate-900 rounded-2xl p-6 relative overflow-hidden shadow-xl shadow-slate-900/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full" />
                  <div className="relative z-10">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Calendar size={18} className="text-blue-400" /> Today's Appointments
                    </h4>
                    <div className="flex gap-4">
                      <div className="bg-white/10 rounded-xl p-3 flex-1 border border-white/10">
                        <div className="text-xs text-slate-400 font-bold mb-1 uppercase">Completed</div>
                        <div className="text-2xl font-extrabold text-white">12</div>
                      </div>
                      <div className="bg-blue-600 rounded-xl p-3 flex-1 border border-blue-500">
                        <div className="text-xs text-blue-200 font-bold mb-1 uppercase">Upcoming</div>
                        <div className="text-2xl font-extrabold text-white">4</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 flex-1 border border-white/10">
                        <div className="text-xs text-slate-400 font-bold mb-1 uppercase">Available</div>
                        <div className="text-2xl font-extrabold text-emerald-400">2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Booking Form Preview */}
              <div className="flex-1 w-full max-w-lg lg:ml-auto">
                <div className="bg-white rounded-[32px] border border-slate-200 shadow-2xl shadow-slate-200/50 p-8 md:p-10">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Book Your Visit</h3>
                  <p className="text-slate-500 font-medium text-sm mb-8">Fill out the form below and we'll get back to you immediately.</p>
                  
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Full Name</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" readOnly placeholder="John Doe" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Phone Number</label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" readOnly placeholder="+1 (555) 000-0000" className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Date</label>
                        <div className="relative">
                          <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <div className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 flex items-center text-sm font-medium text-slate-500 cursor-pointer hover:border-blue-500 transition-colors">Select</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Time</label>
                        <div className="relative">
                          <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <div className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 flex items-center text-sm font-medium text-slate-500 cursor-pointer hover:border-blue-500 transition-colors">10:00 AM</div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full h-14 bg-blue-600 text-white rounded-xl font-bold mt-4 shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      Confirm Booking <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-blue-600 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">Testimonials</span>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Smiles We've Restored</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Rahul Verma", text: "Dr. Nidhi is fantastic. She explained the procedure thoroughly and made sure I was comfortable throughout. Highly recommend!" },
                { name: "Priya Sharma", text: "Very clean clinic and professional staff. My kids actually look forward to their dental checkups now." },
                { name: "Amit Patel", text: "Got my invisible aligners from here. The process was smooth and the results are amazing. Great service!" }
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6 hover:shadow-lg transition-shadow">
                  <div className="flex text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed italic flex-1">"{review.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="font-bold text-slate-900">{review.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Preview */}
          <footer className="bg-slate-900 pt-20 pb-10 px-6 border-t-[8px] border-blue-600">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-slate-400 text-sm font-medium">
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Smile size={18} strokeWidth={3} />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight">Nidhi Dental</span>
                  </div>
                  <p className="leading-relaxed">Providing world-class family dentistry with a gentle touch and state-of-the-art technology.</p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg mb-2">Quick Links</h4>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Home</span>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">About Us</span>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Gallery</span>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Book Appointment</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg mb-2">Services</h4>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Root Canal</span>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Dental Implants</span>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Kids Dentistry</span>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Teeth Whitening</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg mb-2">Contact</h4>
                  <span className="flex items-start gap-3"><MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" /> 45 Medical Hub, Green City, State 12345</span>
                  <span className="flex items-center gap-3"><Phone size={18} className="text-blue-500 shrink-0" /> +1 (555) 987-6543</span>
                  <span className="flex items-center gap-3"><Clock size={18} className="text-blue-500 shrink-0" /> Mon-Sat: 10am - 8pm</span>
                </div>
                
              </div>
              <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs font-bold">
                © 2026 Nidhi Dental Clinic. All Rights Reserved.
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};
