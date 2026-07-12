"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <SectionHeading 
            title="A Boutique Digital Lab with Sharp Opinions." 
            centered 
          />
          
          <div className="mt-8 space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              At <strong className="text-white">RNEXT.in</strong>, we don't just build websites; we engineer digital experiences that leave a lasting impact. Born from a passion for innovation and aesthetics, we blend cutting-edge technology with premium design.
            </p>
            <p>
              Our philosophy is simple: technology should be invisible, and design should be unforgettable. We focus on performance, scalability, and micro-interactions that wow your users from the first click.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '10+', label: 'Projects Delivered' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Innovation Driven' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="glass p-6 rounded-[20px]"
              >
                <div className="text-4xl font-bold text-neon-cyan mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
