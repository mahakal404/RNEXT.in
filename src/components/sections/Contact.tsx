"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, this would send to an API. 
    // For now, we'll just log and maybe open mailto
    console.log("Form submitted", formData);
    window.location.href = `mailto:hello@rnext.in?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Let's Build Together." 
          subtitle="Ready to transform your digital presence? Get in touch with us."
          centered
        />
        
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Start a Conversation</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Whether you have a fully formed project in mind or just the seed of an idea, we're here to help you bring it to life with precision and style.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@rnext.in" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-neon-cyan/20 transition-colors">
                  <Mail className="text-neon-cyan" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Email Us</div>
                  <div className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">hello@rnext.in</div>
                </div>
              </a>
              
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-purple-accent/20 transition-colors">
                  <MessageCircle className="text-purple-accent" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">WhatsApp</div>
                  <div className="text-lg font-semibold text-white group-hover:text-purple-accent transition-colors">+91 12345 67890</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card glow={false} className="border border-white/10 relative overflow-hidden">
              {/* Form background decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 blur-[80px] rounded-full pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-midnight-indigo/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-midnight-indigo/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-midnight-indigo/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button type="submit" variant="primary" className="w-full group">
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
