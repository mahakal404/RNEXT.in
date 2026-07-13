import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Award, CheckCircle, Globe, Users, Heart, BookOpen, Clock, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export const MuskanMehndiMockup = () => {
  return (
    <div className="relative w-full h-full overflow-y-auto bg-[#0a0f1c] text-amber-50 font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-600/10 blur-[120px]" />
        {/* CSS Mandalas in background */}
        <div className="absolute top-[20%] right-[10%] opacity-[0.03]">
          <div className="w-[600px] h-[600px] rounded-full border-[1px] border-amber-500 flex items-center justify-center animate-[spin_60s_linear_infinite]">

            <div className="w-[500px] h-[500px] rounded-full border-[1px] border-amber-500/50 rotate-45" />
            <div className="w-[500px] h-[500px] rounded-full border-[1px] border-amber-500/50 -rotate-45 absolute" />
            <div className="w-[400px] h-[400px] rounded-full border-[1px] border-amber-500 absolute" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0a0f1c]/80 backdrop-blur-md border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-400 p-[1px]">
              <div className="w-full h-full rounded-full bg-[#0a0f1c] flex items-center justify-center text-amber-500 font-serif text-xl italic">
                M
              </div>
            </div>
            <span className="text-xl font-serif tracking-widest text-amber-50">MUSKAN</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-amber-100/70">
            <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Artist</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Academy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Gallery</a>
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-[#0a0f1c] font-bold text-sm tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transition-shadow"
          >
            Book Now
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 z-10"
          >
            <div className="inline-flex items-center gap-3 self-start border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 rounded-full">
              <Star size={14} className="text-amber-500" />
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400">Luxury Bridal Mehndi Studio</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-amber-50 via-amber-200 to-rose-200">
              Artistry That <br />
              <span className="italic text-amber-500">Transforms</span>
            </h1>
            
            <p className="text-lg text-amber-100/60 leading-relaxed max-w-lg">
              Elevate your bridal journey with bespoke henna designs. Where ancient traditions meet contemporary luxury, creating timeless masterpieces for your special day.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-[#0a0f1c] font-bold text-sm tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] transition-all hover:-translate-y-1">
                Book Artist
              </button>
              <button className="px-8 py-4 border border-amber-500/30 text-amber-400 font-bold text-sm tracking-wider uppercase rounded-full hover:bg-amber-500/10 transition-all">
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center z-10 hidden lg:flex"
          >
            {/* Pure CSS Illustration */}
            <div className="relative w-[400px] h-[500px]">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-[200px] border-[2px] border-amber-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[20px] rounded-[180px] border border-dashed border-rose-400/30 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Decorative Mandalas (CSS) */}
              <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-amber-400/40 flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 rounded-full border border-rose-400/40 rotate-45" />
                <div className="w-16 h-16 rounded-full border border-amber-400/40 absolute -rotate-45" />
              </div>

              {/* Main Silhouette/Figure Base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[400px]">
                {/* Arch background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#151c2e] to-amber-900/20 rounded-t-full border border-amber-500/30 backdrop-blur-sm overflow-hidden flex items-end justify-center">
                  
                  {/* Abstract Bride Silhouette */}
                  <div className="relative w-48 h-72">
                    {/* Head/Veil */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-amber-500/20 to-rose-500/20 rounded-t-[40px] rounded-b-[20px] blur-sm" />
                    {/* Shoulders */}
                    <div className="absolute top-28 left-1/2 -translate-x-1/2 w-36 h-40 bg-gradient-to-b from-amber-600/10 to-transparent rounded-t-[60px]" />
                    
                    {/* Henna Cone (Abstract) */}
                    <div className="absolute top-40 right-4 w-4 h-16 bg-gradient-to-b from-amber-400 to-amber-700 rotate-[30deg] rounded-t-full shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
                    <div className="absolute top-[210px] right-2 w-2 h-2 bg-amber-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(217,119,6,1)]" />

                    {/* CSS Lotus */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-16 flex items-end justify-center">
                      <div className="w-12 h-16 bg-amber-500/30 rounded-t-full absolute" />
                      <div className="w-12 h-12 bg-rose-400/30 rounded-t-full absolute -ml-10 rotate-[-30deg]" />
                      <div className="w-12 h-12 bg-rose-400/30 rounded-t-full absolute ml-10 rotate-[30deg]" />
                      <div className="w-16 h-8 bg-amber-400/20 rounded-full absolute bottom-[-10px] blur-sm" />
                    </div>
                  </div>
                </div>

                {/* Ornate border accents */}
                <div className="absolute -left-4 top-1/2 w-8 h-8 rounded-full border border-amber-500/50" />
                <div className="absolute -right-4 top-1/2 w-8 h-8 rounded-full border border-amber-500/50" />
              </div>

              {/* Floating Paisley CSS shapes */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-0 w-12 h-16 border-2 border-rose-400/40 rounded-b-full rounded-tr-full opacity-60"
              />
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-0 w-10 h-14 border-2 border-amber-500/40 rounded-b-full rounded-tl-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-12 border-y border-amber-500/10 bg-amber-950/10 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Brides Adorned", icon: <Heart className="text-rose-400" /> },
            { value: "1500+", label: "Unique Designs", icon: <CheckCircle className="text-amber-500" /> },
            { value: "4.9★", label: "Client Reviews", icon: <Star className="text-amber-400" /> },
            { value: "Global", label: "Worldwide Bookings", icon: <Globe className="text-rose-400" /> }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-[#151c2e]/50 border border-amber-500/10 hover:border-amber-500/30 transition-colors"
            >
              <div className="mb-2">{stat.icon}</div>
              <h3 className="text-3xl lg:text-4xl font-serif text-amber-50">{stat.value}</h3>
              <p className="text-sm tracking-widest uppercase text-amber-200/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Signature Mehndi Styles */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-4 block">Masterpieces</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-50 to-rose-200">Signature Styles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bridal", desc: "Elaborate, traditional full-arm and leg designs.", color: "from-amber-600/20 to-amber-900/20" },
              { title: "Arabic", desc: "Bold floral patterns with elegant negative space.", color: "from-rose-600/20 to-rose-900/20" },
              { title: "Portrait", desc: "Intricate faces and figures woven into henna.", color: "from-amber-500/20 to-orange-900/20" },
              { title: "Minimal", desc: "Subtle, contemporary designs for the modern bride.", color: "from-yellow-600/20 to-amber-900/20" }
            ].map((style, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-3xl bg-[#151c2e]/60 border border-amber-500/10 overflow-hidden group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* CSS Decorative pattern bg */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-full h-full rounded-full border-[2px] border-amber-500 translate-x-1/2 -translate-y-1/2" />
                  <div className="w-full h-full rounded-full border-[2px] border-amber-500 translate-x-1/3 -translate-y-1/3 absolute top-0" />
                </div>

                <h3 className="text-2xl font-serif text-amber-100 mb-3 relative z-10">{style.title}</h3>
                <p className="text-amber-100/60 text-sm leading-relaxed relative z-10">{style.desc}</p>
                
                <div className="mt-8 flex items-center text-amber-500 text-sm font-bold tracking-wider uppercase relative z-10">
                  Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-6 bg-[#151c2e]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-4 block">Gallery</span>
              <h2 className="text-4xl font-serif text-amber-50">Recent Masterpieces</h2>
            </div>
            <button className="px-6 py-3 border border-amber-500/30 text-amber-400 font-bold text-sm tracking-wider uppercase rounded-full hover:bg-amber-500/10 transition-all">
              View All Works
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#1a233a] to-[#0a0f1c] border border-amber-500/20 p-6 flex items-center justify-center relative overflow-hidden group"
              >
                {/* CSS Ornamental Pattern replacing images */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 flex items-center justify-center">
                  <div className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite]">
                     {Array.from({length: 12}).map((_, i) => (
                       <div key={i} className="absolute top-1/2 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" style={{ transform: `translate(-50%, -50%) rotate(${i * 15}deg)` }} />
                     ))}
                  </div>
                  <div className="absolute w-40 h-40 border-[4px] border-amber-500 rounded-full rotate-45" />
                  <div className="absolute w-32 h-32 border border-amber-400 rounded-full" />
                  <div className="absolute w-24 h-24 border-[2px] border-rose-400 rounded-full rotate-45" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#0a0f1c]/60 p-4 rounded-xl border border-amber-500/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-amber-50 font-serif text-lg">Royal Bridal Motif</h4>
                  <p className="text-amber-200/60 text-sm">Dubai, UAE</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif text-amber-50">The Luxury Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: <Star />, title: "Premium Organic Henna", desc: "100% natural, chemical-free henna sourced directly from Rajasthan for the deepest, darkest stain." },
              { icon: <CheckCircle />, title: "Customized Designs", desc: "Every design is unique, tailored to your love story, outfit, and personal preferences." },
              { icon: <Globe />, title: "Worldwide Travel", desc: "Available for destination weddings across the globe, bringing luxury artistry to your venue." },
              { icon: <BookOpen />, title: "Mehndi Academy", desc: "Professional certification courses from beginner to advanced levels." },
              { icon: <Heart />, title: "Bridal Pampering", desc: "A relaxing, luxurious application process ensuring you are comfortable throughout." },
              { icon: <Award />, title: "Certified Artist", desc: "Internationally recognized and certified bridal henna specialist." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-amber-100 mb-2">{feature.title}</h3>
                  <p className="text-amber-100/50 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Journey & Booking Process (Combined for elegance) */}
      <section className="py-20 px-6 border-y border-amber-500/10 bg-[#151c2e]/40 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Academy */}
          <div className="p-10 rounded-3xl bg-gradient-to-b from-[#0a0f1c] to-[#151c2e] border border-amber-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 blur-[60px] rounded-full" />
            <span className="text-xs uppercase tracking-[0.3em] text-rose-400 mb-2 block relative z-10">Learn from the best</span>
            <h2 className="text-3xl font-serif text-amber-50 mb-8 relative z-10">Muskan Academy</h2>
            
            <div className="space-y-6 relative z-10">
              {["Beginner Foundations", "Intermediate Patterns", "Advanced Bridal Mastery", "Professional Certification"].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-rose-300 font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-amber-100/80">{step}</span>
                </div>
              ))}
            </div>
            <button className="mt-10 px-8 py-3 bg-rose-950 text-rose-200 border border-rose-500/30 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-rose-900 transition-colors w-full relative z-10">
              Enroll Now
            </button>
          </div>

          {/* Booking Process */}
          <div className="p-10 rounded-3xl bg-gradient-to-b from-[#0a0f1c] to-[#151c2e] border border-amber-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[60px] rounded-full" />
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-2 block relative z-10">Your Journey</span>
            <h2 className="text-3xl font-serif text-amber-50 mb-8 relative z-10">Booking Process</h2>
            
            <div className="space-y-6 relative z-10">
              {[
                { icon: <Mail size={18} />, title: "Inquiry & Availability" },
                { icon: <Phone size={18} />, title: "Design Consultation" },
                { icon: <Calendar size={18} />, title: "Secure Your Date" },
                { icon: <Heart size={18} />, title: "The Wedding Day" }
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    {step.icon}
                  </div>
                  <span className="text-amber-100/80">{step.title}</span>
                </div>
              ))}
            </div>
            <button className="mt-10 px-8 py-3 bg-amber-950 text-amber-200 border border-amber-500/30 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-amber-900 transition-colors w-full relative z-10">
              Inquire Now
            </button>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-amber-50">Words of Love</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Priya Sharma", role: "Bride", text: "Muskan made my special day even more magical. The stain was incredibly dark and lasted for weeks. Truly a luxury experience!" },
              { name: "Aisha Khan", role: "Bride", text: "Her attention to detail is unmatched. She incorporated our love story into the design so beautifully. Highly recommended." },
              { name: "Sarah Patel", role: "Destination Bride", text: "Flew her out to Italy for my wedding. Professional, punctual, and an absolute artist. The henna was flawless." }
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#151c2e]/40 border border-amber-500/10 relative">
                <Star className="text-amber-500/20 w-16 h-16 absolute top-4 right-4" />
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-amber-500 fill-amber-500" />)}
                </div>
                <p className="text-amber-100/70 text-sm leading-relaxed mb-8 italic">"{review.text}"</p>
                <div>
                  <h4 className="text-amber-50 font-serif">{review.name}</h4>
                  <p className="text-xs text-amber-500 uppercase tracking-widest mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050811] pt-20 pb-10 px-6 border-t border-amber-500/20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-rose-400 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#050811] flex items-center justify-center text-amber-500 font-serif text-sm italic">
                  M
                </div>
              </div>
              <span className="text-lg font-serif tracking-widest text-amber-50">MUSKAN</span>
            </div>
            <p className="text-amber-100/50 text-sm max-w-sm leading-relaxed mb-6">
              Luxury bridal mehndi artist and educator. Creating timeless, organic henna masterpieces for brides worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#151c2e] border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-[#050811] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#151c2e] border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-[#050811] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#151c2e] border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-[#050811] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-amber-50 font-serif mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-amber-100/60">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Muskan Academy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Bridal Gallery</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-50 font-serif mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-amber-100/60">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-amber-500" /> New Delhi, India</li>
              <li className="flex items-center gap-3"><Globe size={16} className="text-amber-500" /> Available Worldwide</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-amber-500" /> bookings@muskanmehndi.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-amber-500/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-100/40 uppercase tracking-widest">
          <p>&copy; 2026 Muskan Mehndi Art. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
