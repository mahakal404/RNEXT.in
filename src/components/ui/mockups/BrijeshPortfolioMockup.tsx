import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Video, PlayCircle, Star, Clock, Shield, ArrowRight, Aperture } from 'lucide-react';

export const BrijeshPortfolioMockup = () => {
  return (
    <div className="relative w-full h-full overflow-y-auto bg-[#0a0a0a] text-zinc-100 font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-600/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-600/10 blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      {/* 1. Transparent Navbar */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500">
              <Aperture size={20} />
            </div>
            <span className="text-xl font-medium tracking-widest uppercase">
              Brijesh<span className="text-yellow-500">.</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-zinc-400">
            <a href="#" className="text-zinc-100 hover:text-yellow-500 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Services</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Portfolio</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-yellow-600 text-black font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-yellow-500 transition-colors"
          >
            Book Session
          </motion.button>
        </div>
      </nav>

      {/* 2. Hero */}
      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 z-10"
          >
            <div className="inline-flex items-center gap-2 self-start border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-yellow-500">Cinematic Storyteller</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight">
              Turning Moments Into <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Memories</span>
            </h1>
            
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg font-light">
              Premium videography and creative direction. We capture the authentic emotion, breathtaking visuals, and untold stories of your special day.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button className="px-8 py-4 bg-yellow-600 text-black font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-yellow-500 transition-colors flex items-center gap-2">
                Book Session <ArrowRight size={16} />
              </button>
              <button className="px-8 py-4 border border-zinc-700 text-zinc-300 font-bold text-sm tracking-wider uppercase rounded-sm hover:border-yellow-500 hover:text-yellow-500 transition-colors flex items-center gap-2">
                <PlayCircle size={16} /> Explore Work
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center z-10 hidden lg:flex"
          >
            {/* Pure CSS Camera/Film Strip Illustration */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* CSS Film Strip background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-48 bg-zinc-900 border-y-8 border-zinc-950 flex gap-4 overflow-hidden -rotate-12 opacity-40">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="min-w-[150px] h-full border-x-4 border-zinc-950 flex flex-col justify-between py-2">
                    {/* Film holes top */}
                    <div className="flex justify-around"><div className="w-3 h-4 bg-black rounded-sm"/><div className="w-3 h-4 bg-black rounded-sm"/><div className="w-3 h-4 bg-black rounded-sm"/></div>
                    {/* Film holes bottom */}
                    <div className="flex justify-around"><div className="w-3 h-4 bg-black rounded-sm"/><div className="w-3 h-4 bg-black rounded-sm"/><div className="w-3 h-4 bg-black rounded-sm"/></div>
                  </div>
                ))}
              </div>

              {/* Main Camera Body (CSS) */}
              <div className="relative z-10 w-72 h-48 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl border border-zinc-700 shadow-2xl p-4 flex flex-col items-center justify-center">
                {/* Camera Top Details */}
                <div className="absolute -top-6 left-12 w-16 h-6 bg-zinc-800 rounded-t-lg border-x border-t border-zinc-700" />
                <div className="absolute -top-4 right-16 w-8 h-4 bg-zinc-700 rounded-t-md" />
                
                {/* Camera Grip */}
                <div className="absolute right-0 top-0 w-16 h-full bg-zinc-950 rounded-r-xl border-l border-zinc-800 opacity-50" />
                
                {/* Lens Mount & Lens */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-40 h-40 rounded-full bg-zinc-950 border-4 border-zinc-800 shadow-2xl flex items-center justify-center z-20"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-zinc-800 to-black border-2 border-zinc-700 flex items-center justify-center relative overflow-hidden">
                    {/* Lens reflections */}
                    <div className="absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-md" />
                    <div className="absolute bottom-2 left-2 w-10 h-10 bg-yellow-500/20 rounded-full blur-sm" />
                    
                    {/* Inner Lens Glass */}
                    <div className="w-16 h-16 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center shadow-inner">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-zinc-700">
                        <div className="w-3 h-3 rounded-full bg-yellow-500/40 ml-1 mt-1 blur-[1px]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Red recording dot */}
                <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Animated Statistics */}
      <section className="py-12 border-y border-zinc-800 bg-zinc-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "4.9★", label: "Average Rating" },
            { value: "Fast", label: "Delivery Time" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <h3 className="text-4xl font-light text-yellow-500">{stat.value}</h3>
              <p className="text-xs tracking-widest uppercase text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-yellow-500 mb-4 block">Expertise</span>
            <h2 className="text-4xl font-light">Creative Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Videography", desc: "Cinematic story-driven videos for weddings, commercials, and events.", icon: <Video className="text-yellow-500" size={32} /> },
              { title: "Photography", desc: "Capturing raw, authentic moments with premium lighting and composition.", icon: <Camera className="text-yellow-500" size={32} /> },
              { title: "Video Editing", desc: "Professional post-production, color grading, and sound design.", icon: <Film className="text-yellow-500" size={32} /> }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 transition-colors group cursor-pointer"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{service.desc}</p>
                <span className="text-xs uppercase tracking-widest text-yellow-500 font-bold group-hover:text-yellow-400 flex items-center gap-2">
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Portfolio Preview */}
      <section className="py-24 px-6 bg-zinc-950 relative z-10 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-yellow-500 mb-4 block">Selected Works</span>
              <h2 className="text-4xl font-light">Portfolio Preview</h2>
            </div>
            <button className="text-sm tracking-widest uppercase text-zinc-400 hover:text-yellow-500 transition-colors pb-1 border-b border-zinc-800 hover:border-yellow-500">
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Royal Wedding", cat: "Videography", color: "from-amber-900/40 to-black" },
              { title: "Urban Fashion", cat: "Commercial", color: "from-blue-900/40 to-black" },
              { title: "Nature's Echo", cat: "Documentary", color: "from-emerald-900/40 to-black" },
              { title: "Neon Nights", cat: "Music Video", color: "from-purple-900/40 to-black" },
              { title: "Culinary Arts", cat: "Photography", color: "from-orange-900/40 to-black" },
              { title: "Automotive Motion", cat: "Commercial", color: "from-red-900/40 to-black" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden cursor-pointer p-2"
              >
                {/* Film Frame Styling */}
                <div className="absolute top-0 bottom-0 left-1 w-2 flex flex-col justify-around opacity-20"><div className="w-1.5 h-2 bg-white"/><div className="w-1.5 h-2 bg-white"/><div className="w-1.5 h-2 bg-white"/><div className="w-1.5 h-2 bg-white"/></div>
                <div className="absolute top-0 bottom-0 right-1 w-2 flex flex-col justify-around opacity-20"><div className="w-1.5 h-2 bg-white"/><div className="w-1.5 h-2 bg-white"/><div className="w-1.5 h-2 bg-white"/><div className="w-1.5 h-2 bg-white"/></div>
                
                {/* Gradient Image Placeholder */}
                <div className={`w-full h-full bg-gradient-to-br ${item.color} relative overflow-hidden flex items-end p-6`}>
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle size={48} className="text-white/80" />
                  </div>
                  
                  <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-xs uppercase tracking-widest text-yellow-500 mb-1 block">{item.cat}</span>
                    <h4 className="text-xl font-medium text-white">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Me */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">Why Work With Me?</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                I don't just record video; I craft stories. With industry-standard equipment and a sharp eye for detail, I ensure your vision is captured flawlessly and delivered on time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Fast Delivery", icon: <Clock size={20} /> },
                  { title: "Premium Quality", icon: <Star size={20} /> },
                  { title: "Creative Editing", icon: <Film size={20} /> },
                  { title: "Friendly Support", icon: <Shield size={20} /> }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-yellow-500">{feature.icon}</div>
                    <span className="font-medium text-sm text-zinc-300">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Minimal abstract visual */}
            <div className="aspect-square bg-zinc-900 border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ca8a04_100%)] animate-[spin_4s_linear_infinite] opacity-10" />
              <div className="absolute inset-2 bg-zinc-950 flex items-center justify-center">
                <Aperture size={100} className="text-zinc-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-32 px-6 bg-yellow-600 text-black text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-medium mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-black/70 mb-10 text-lg">Let's discuss your next project and bring your vision to the screen.</p>
          <button className="px-10 py-4 bg-black text-white font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-zinc-800 transition-colors">
            Book Your Cinematic Session
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-8 px-6 border-t border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-100">
            <Aperture size={20} className="text-yellow-500" />
            <span className="text-lg font-medium tracking-widest uppercase">
              Brijesh<span className="text-yellow-500">.</span>
            </span>
          </div>
          
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-yellow-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Vimeo</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600 uppercase tracking-widest">
          &copy; 2026 Brijesh Videography. All rights reserved.
        </div>
      </footer>

    </div>
  );
};
