import React from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Star, Calendar, Volume2, Mic2, Users, MapPin, Phone, Mail, Heart, ArrowRight } from 'lucide-react';

export const DJBrothersMockup = () => {
  return (
    <div className="relative w-full h-full overflow-y-auto bg-[#050505] text-zinc-50 font-sans">
      
      {/* Dynamic Concert Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[150px]" />
        
        {/* CSS Stage Lights */}
        <div className="absolute top-[-50px] left-[10%] w-[100px] h-[800px] bg-gradient-to-b from-orange-500/30 to-transparent rotate-[-20deg] blur-md origin-top animate-pulse" />
        <div className="absolute top-[-50px] right-[10%] w-[100px] h-[800px] bg-gradient-to-b from-red-500/30 to-transparent rotate-[20deg] blur-md origin-top animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Sound Waves Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center transform -skew-x-12">
              <Music size={20} className="text-white transform skew-x-12" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              DJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Brothers</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-400">
            <a href="#" className="text-white hover:text-orange-500 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Events</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Gallery</a>
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-sm tracking-wider uppercase rounded shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] transition-all skew-x-[-10deg]"
          >
            <span className="inline-block skew-x-[10deg]">Book Now</span>
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 z-10"
          >
            <div className="inline-flex items-center gap-2 self-start border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-bold">Live The Vibe</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
              Turn Up <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600">The Heat</span>
            </h1>
            
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg border-l-2 border-orange-500 pl-4">
              Premium event and entertainment DJ service. We bring the energy, the bass, and the unforgettable moments to your special occasions.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button className="px-8 py-4 bg-white text-black font-black text-sm tracking-widest uppercase rounded shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-zinc-200 transition-all flex items-center gap-2 skew-x-[-10deg]">
                <span className="inline-flex items-center skew-x-[10deg] gap-2">Get A Quote <ArrowRight size={18} /></span>
              </button>
              <button className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 hover:border-orange-500 transition-all group">
                <Play className="text-zinc-400 group-hover:text-orange-500 ml-1" size={24} />
              </button>
            </div>
          </motion.div>

          {/* Pure CSS Speaker & Audio Visualizer Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center z-10 hidden lg:flex"
          >
            <div className="relative w-[320px] h-[450px] bg-gradient-to-b from-zinc-800 to-black rounded-3xl border-2 border-zinc-700 shadow-2xl p-6 flex flex-col items-center justify-between overflow-hidden">
              {/* Speaker Cabinet Texture */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,transparent_0,#000_100%),repeating-linear-gradient(45deg,#000_0,#000_2px,transparent_2px,transparent_4px)]" />
              
              {/* Top Tweeter */}
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-800 shadow-inner flex items-center justify-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-black border border-zinc-600 shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 shadow-xl" />
                </div>
              </div>

              {/* Main Woofer (Animated) */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1, 1.08, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 rounded-full bg-zinc-900 border-8 border-zinc-800 shadow-inner flex items-center justify-center relative z-10"
              >
                {/* Glowing ring behind woofer cone */}
                <div className="absolute inset-[-10px] rounded-full border border-orange-500/30 animate-pulse shadow-[0_0_30px_rgba(234,88,12,0.5)]" />
                
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-zinc-800 to-black border-2 border-zinc-700 shadow-[inset_0_20px_40px_rgba(0,0,0,0.9)] flex items-center justify-center">
                  {/* Woofer center cap */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-xl border border-zinc-600 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-black/50 blur-[2px]" />
                  </div>
                </div>
              </motion.div>

              {/* Audio visualizer bars (CSS) */}
              <div className="w-full flex justify-center items-end gap-1.5 h-16 relative z-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['20%', '80%', '30%', '100%', '40%'][i % 5] }}
                    transition={{ duration: 0.3 + (i * 0.05), repeat: Infinity, repeatType: 'reverse' }}
                    className="w-3 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm shadow-[0_0_10px_rgba(234,88,12,0.8)]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-12 border-y border-zinc-800 bg-zinc-900/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100+", label: "Successful Events", icon: <Calendar className="text-orange-500" /> },
            { value: "5+", label: "Years Experience", icon: <Star className="text-red-500" /> },
            { value: "4.9", label: "Average Rating", icon: <Star className="text-yellow-500 fill-yellow-500" /> },
            { value: "10k+", label: "Watts of Power", icon: <Volume2 className="text-purple-500" /> }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-black/40 border border-zinc-800 hover:border-orange-500/50 transition-colors"
            >
              <div className="mb-2 bg-zinc-900 p-4 rounded-full border border-zinc-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">{stat.icon}</div>
              <h3 className="text-4xl font-black text-white">{stat.value}</h3>
              <p className="text-xs tracking-widest uppercase text-zinc-400 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Weddings", desc: "Creating the perfect romantic yet energetic atmosphere for your big day.", icon: <Heart size={32} /> },
              { title: "Garba Nights", desc: "Traditional beats mixed with modern energy for unforgettable navratri events.", icon: <Users size={32} /> },
              { title: "Club DJ", desc: "High-bpm sets, seamless mixing, and crowd control for elite clubs.", icon: <Music size={32} /> },
              { title: "Road Shows", desc: "Mobile DJ setups with massive sound systems for parades and rallies.", icon: <Mic2 size={32} /> }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-8 bg-zinc-900 border border-zinc-800 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 relative z-10">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{service.desc}</p>
                
                <div className="mt-8 flex items-center text-orange-500 text-sm font-bold tracking-wider uppercase relative z-10">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
                
                {/* CSS corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Gallery Preview (No photos, gradient abstract cards) */}
      <section className="py-20 px-6 bg-black relative z-10 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Latest Gigs</h2>
            </div>
            <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-bold text-sm tracking-wider uppercase hover:bg-orange-500 hover:text-black transition-all skew-x-[-10deg]">
              <span className="inline-block skew-x-[10deg]">View Gallery</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Ultra Wedding", loc: "Mumbai", color: "from-orange-900 to-black" },
              { title: "Neon Garba", loc: "Ahmedabad", color: "from-red-900 to-black" },
              { title: "Sunset Beach Party", loc: "Goa", color: "from-purple-900 to-black" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className={`aspect-video bg-gradient-to-br ${item.color} border border-zinc-800 p-6 flex items-end relative overflow-hidden group`}
              >
                {/* Abstract light beam */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -left-[100%] top-0 w-[50%] h-full bg-white/20 skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_ease-out]" style={{ filter: 'blur(20px)' }} />
                
                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-2xl font-black uppercase">{item.title}</h4>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm mt-1">
                    <MapPin size={14} className="text-orange-500" /> {item.loc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020202] pt-24 pb-12 px-6 border-t border-zinc-800/50 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center transform -skew-x-12">
                <Music size={20} className="text-white transform skew-x-12" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                DJ Brothers
              </span>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-8 font-medium">
              Elevating events with premium sound, spectacular lighting, and unmatched energy. Book us for a night you'll never forget.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-tight mb-6 text-lg">Links</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Packages</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Equipment</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Bookings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-tight mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-orange-500" /> Gujarat, India</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-orange-500" /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-orange-500" /> mix@djbrothers.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 uppercase tracking-widest font-bold">
          <p>&copy; 2026 DJ Brothers. All Rights Reserved.</p>
        </div>
      </footer>
      
      <style>{`
        @keyframes shimmer {
          100% {
            left: 200%;
          }
        }
      `}</style>
    </div>
  );
};
