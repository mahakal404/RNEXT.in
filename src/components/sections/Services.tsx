"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Laptop, Smartphone, Briefcase, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useMotionUtilities, variants, stagger, hover, transitions } from '../../lib/motion';

// --- DATA ---

const featuredServices = [
  {
    id: "web",
    title: "Website Development",
    icon: <Globe size={28} />,
    description: "High-performance, beautifully designed business websites that capture attention, build trust, and convert visitors into long-term clients.",
    features: ["Business Websites", "Corporate Websites", "Landing Pages", "Portfolio Websites", "E-Commerce", "SEO Optimized", "Fast Performance"],
    tech: ["Next.js", "React", "TailwindCSS"],
    color: "#00D4FF"
  },
  {
    id: "app",
    title: "Web App Development",
    icon: <Laptop size={28} />,
    description: "Bespoke, secure, and scalable web applications engineered to streamline operations and deliver immersive user experiences.",
    features: ["SaaS Platforms", "CRM Systems", "ERP", "Admin Dashboards", "Booking Systems", "Custom Portals", "Secure Auth"],
    tech: ["TypeScript", "Node.js", "Supabase"],
    color: "#8B5CF6"
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: <Smartphone size={28} />,
    description: "Native and cross-platform mobile experiences that put your brand directly in the hands of your audience with flawless performance.",
    features: ["Android Apps", "iOS Apps", "Cross Platform", "Business Apps", "Customer Apps", "Internal Apps", "API Integration"],
    tech: ["React Native", "Firebase", "Expo"],
    color: "#10B981"
  },
  {
    id: "resume",
    title: "Resume & Portfolio",
    icon: <Briefcase size={28} />,
    description: "Professional ATS-friendly resumes and high-end portfolio websites designed to elevate your personal brand and stand out to top recruiters.",
    features: ["ATS Resumes", "Portfolio Websites", "Personal Portfolios", "Resume Redesign", "LinkedIn Optimization", "Personal Branding", "PDF Generation"],
    tech: ["React", "Next.js", "TailwindCSS"],
    color: "#F43F5E"
  }
];

const serviceChips = [
  "Business Website", "Corporate Website", "Portfolio Website", "Landing Page", "Resume Website", "Resume Design", 
  "E-Commerce", "Booking System", "Business Dashboard", "CRM", "ERP", "Admin Panel", "Client Portal", "Employee Portal", 
  "Inventory", "POS", "Healthcare", "Education", "Restaurant", "Hotel", "Real Estate", "Finance",
  "Next.js", "React", "TypeScript", "Node.js", "Firebase", "Supabase", "API Integration", "Payment Gateway", "Authentication", 
  "Cloud Deployment", "Server Deployment", "Cloud Hosting", "Web Hosting", "Domain Registration", "Domain Setup", "DNS Configuration",
  "SSL Certificate", "Business Email Setup", "Website Migration", "Speed Optimization", "CDN Setup", 
  "Performance Optimization", "Website Monitoring", "Security Updates", "Backup & Restore", "Website Maintenance", "Maintenance", "Technical Support"
];

const workflowSteps = [
  { title: "Discovery", desc: "Understanding your business goals, target audience, and technical requirements." },
  { title: "Strategy", desc: "Defining the architecture, tech stack, and project roadmap." },
  { title: "UI/UX Design", desc: "Crafting wireframes and high-fidelity premium interfaces." },
  { title: "Development", desc: "Writing clean, scalable, and highly performant code." },
  { title: "Testing", desc: "Rigorous QA, security audits, and performance optimization." },
  { title: "Launch", desc: "Seamless deployment to production environments." },
  { title: "Long-Term Support", desc: "Ongoing maintenance, updates, and feature expansions." }
];

// --- SUB-COMPONENTS ---

function FeaturedCard({ service }: { service: any }) {
  const { withReducedMotion } = useMotionUtilities();

  return (
    <motion.div
      {...withReducedMotion(variants.blueprintCard)}
      {...hover.card}
      className="group relative flex flex-col p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden transition-colors duration-500 hover:border-white/10"
    >
      {/* Ambient Breathing Background Glow */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"
        style={{ backgroundColor: service.color, transform: 'translate(30%, -30%)' }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-5 mb-6">
          <motion.div 
            className="w-16 h-16 rounded-2xl bg-bg-elevated border flex items-center justify-center transition-shadow duration-500 shadow-lg"
            style={{ borderColor: `${service.color}30`, color: service.color }}
            whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${service.color}20` }}
            transition={transitions.springStiff}
          >
            {service.icon}
          </motion.div>
          <h3 className="text-heading-sm md:text-heading-md text-white font-bold">{service.title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-body-lg text-text-secondary leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-500">
          {service.description}
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-2 gap-3 mb-10 flex-1">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-1 flex-shrink-0" style={{ color: service.color }} />
              <span className="text-sm md:text-base text-text-secondary group-hover:text-white/80 transition-colors duration-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex items-center gap-3 pt-6 border-t border-white/5">
          <span className="text-xs uppercase tracking-wider text-text-muted font-semibold mr-2">Core Tech</span>
          {service.tech.map((tech: string, idx: number) => (
            <span key={idx} className="text-xs md:text-sm text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/20 transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// --- MAIN COMPONENT ---

export function Services() {
  const containerRef = useRef(null);
  const { withReducedMotion } = useMotionUtilities();

  // Workflow Timeline Scroll Animation (Tween)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 relative z-20 bg-bg-primary overflow-hidden">
      
      {/* --- Premium Background System --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      />
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div className="overflow-hidden" {...withReducedMotion(variants.maskReveal)}>
            <SectionHeader number="03" label="SERVICES" alignment="center" />
          </motion.div>
          <motion.h2 
            className="text-display-md md:text-display-lg text-white font-semibold leading-tight mb-6 overflow-hidden"
            {...withReducedMotion(variants.maskReveal)}
            transition={{ ...variants.maskReveal.transition, delay: 0.1 }}
          >
            We build digital products that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">dominate the market.</span>
          </motion.h2>
          <motion.p
            className="text-body-xl text-text-secondary leading-relaxed font-medium overflow-hidden"
            {...withReducedMotion(variants.maskReveal)}
            transition={{ ...variants.maskReveal.transition, delay: 0.2 }}
          >
            From stunning business websites to complex AI-powered software, our engineering stack is built for scale, speed, and uncompromising quality.
          </motion.p>
        </div>

        {/* Featured Services Grid - "Engineering Blueprint" */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-24 relative z-10"
          {...withReducedMotion(stagger.base)}
        >
          {featuredServices.map((service) => (
            <FeaturedCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Services Chip Cloud */}
        <div className="mb-24 relative z-10">
          <motion.h3 
            className="text-xl font-bold text-white mb-8 text-center"
            {...withReducedMotion(variants.fade)}
          >
            Full Capabilities
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {serviceChips.map((chip, idx) => (
              <motion.span 
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-text-secondary hover:text-white hover:bg-brand-primary/10 hover:border-brand-primary/30 transition-colors duration-300"
                initial={idx < 6 ? { opacity: 0, scale: 0.95 } : undefined}
                whileInView={idx < 6 ? { opacity: 1, scale: 1 } : undefined}
                viewport={{ once: true }}
                transition={idx < 6 ? { duration: 0.4, delay: idx * 0.08 } : undefined}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* How We Work - The RNEXT Process */}
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h3 
            className="text-display-sm text-white font-bold mb-16 text-center overflow-hidden"
            {...withReducedMotion(variants.maskReveal)}
          >
            The RNEXT Engineering Process
          </motion.h3>
          
          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line (Animated Tween) */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-primary via-brand-accent to-transparent"
                style={{ height: timelineHeight }}
              />
            </div>

            {/* Timeline Steps */}
            {workflowSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, ease: transitions.swift.ease }}
              >
                <div className={`w-full md:w-1/2 flex flex-col ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <span className="text-brand-primary font-mono text-sm mb-2">Phase 0{idx + 1}</span>
                  <h4 className="text-2xl text-white font-bold mb-3">{step.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
                
                {/* Center Node */}
                <div className="absolute left-[-37px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-bg-primary border-4 border-white/20 flex items-center justify-center z-10">
                  <motion.div 
                    className="w-full h-full rounded-full bg-brand-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={transitions.springStiff}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
