"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { getHeroAnimations } from '../../lib/animations';

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const animations = getHeroAnimations(shouldReduceMotion);

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <motion.div 
        className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]"
        initial="initial"
        whileInView="whileInView"
        viewport={animations.aboutReveal.viewport}
        variants={animations.aboutReveal}
      >
        
        {/* Block 1 & 2: Storytelling Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 md:mb-32">
          
          {/* Block 1: Left Column (Heading) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            <div className="text-brand-primary text-caption font-bold uppercase tracking-widest mb-6">
              Why RNEXT
            </div>
            <h2 className="text-display-md md:text-display-lg text-white font-semibold leading-tight">
              We don&apos;t just build websites.<br />
              <span className="text-text-muted">We create digital experiences that people remember.</span>
            </h2>
          </div>

          {/* Block 2: Right Column (Story) */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-6 text-body-lg text-text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <p>
              We started RNEXT because we noticed a gap in the digital landscape. Too many businesses settle for generic templates and uninspired software that fails to capture their true value.
            </p>
            <p>
              Our mission is to help ambitious brands stand out. We don&apos;t just write code; we solve complex business problems through thoughtful design and robust engineering.
            </p>
            <p>
              We believe that a great digital product should feel effortless. Every interaction is carefully crafted to build trust and elevate your brand above the noise.
            </p>
          </motion.div>

        </div>

        {/* Block 3: Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-32">
          {[
            { 
              title: "Quality", 
              description: "Every detail matters."
            },
            { 
              title: "Performance", 
              description: "Fast experiences create trust."
            },
            { 
              title: "Partnership", 
              description: "We build long-term relationships instead of one-time projects."
            }
          ].map((principle, i) => (
            <motion.div 
              key={principle.title}
              className="card-standard p-8 md:p-10 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
            >
              <h3 className="text-heading-sm text-white font-medium">{principle.title}</h3>
              <p className="text-body-base text-text-muted">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Block 4: Closing Statement */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-display-sm md:text-display-md text-white font-medium leading-tight">
            Great products are never built by accident.
            <br className="hidden md:block" />
            <span className="text-text-muted">They are carefully designed, engineered, and refined.</span>
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
