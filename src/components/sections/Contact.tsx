"use client";

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    window.location.href = `mailto:hello@rnext.in?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  const inputClasses = "w-full bg-bg-primary border border-border-primary rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-primary focus:ring-[4px] focus:ring-brand-primary/15 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-text-muted placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-30";

  return (
    <section id="contact" className="py-24 md:py-32 relative z-20">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-28 max-w-2xl mx-auto flex flex-col items-center text-center">
          <SectionHeader number="06" label="CONTACT" alignment="center" />
          <motion.h2 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-display-sm md:text-display-md text-white font-semibold leading-tight"
          >
            Ready to transform your digital presence?<br />
            <span className="text-text-muted">Get in touch with us.</span>
          </motion.h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
            transition={{ duration: 0.8, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h3 className="text-heading-md text-white font-medium mb-6">Start a Conversation</h3>
            <p className="text-body-lg text-text-secondary mb-12">
              Whether you have a fully formed project in mind or just the seed of an idea, we&apos;re here to help you bring it to life with precision and style.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:hello@rnext.in" className="flex items-center gap-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl">
                <div className="p-4 rounded-full bg-bg-elevated border border-border-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(0,212,255,0.15)]">
                  <Mail className="text-brand-primary transition-transform duration-300 group-hover:scale-110" size={24} />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">Email Us</div>
                  <div className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-brand-primary">hello@rnext.in</div>
                </div>
              </a>
              
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl">
                <div className="p-4 rounded-full bg-bg-elevated border border-border-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(124,58,237,0.15)]">
                  <MessageCircle className="text-brand-accent transition-transform duration-300 group-hover:scale-110" size={24} />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">WhatsApp</div>
                  <div className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-brand-accent">+91 12345 67890</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="card-standard relative overflow-hidden bg-bg-elevated border-border-primary">
              {/* Form background decorative gradient */}
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={inputClasses}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={inputClasses}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <button type="submit" className="btn-base btn-primary w-full h-[56px] text-btn group mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated">
                  Send Message
                  <Send size={18} className="ml-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
