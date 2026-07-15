"use client";

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { Globe, Laptop, Smartphone, Briefcase, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useGlobalNavigation } from '../../hooks/useGlobalNavigation';
import { SectionHeader } from '../ui/SectionHeader';

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

function FeaturedCard({ service, index, shouldReduceMotion }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-500"
    >
      {/* Mouse Follow Glow */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                ${service.color}15,
                transparent 80%
              )
            `,
          }}
        />
      )}
      
      {/* Ambient Breathing Background Glow */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000"
        style={{ backgroundColor: service.color, transform: 'translate(30%, -30%)' }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-5 mb-6">
          <div 
            className="w-16 h-16 rounded-2xl bg-bg-elevated border flex items-center justify-center transition-all duration-500 shadow-lg group-hover:scale-110"
            style={{ borderColor: `${service.color}30`, color: service.color, boxShadow: `0 0 20px ${service.color}10` }}
          >
            {service.icon}
          </div>
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
              <span className="text-sm md:text-base text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex items-center gap-3 pt-6 border-t border-white/5">
          <span className="text-xs uppercase tracking-wider text-text-muted font-semibold mr-2">Core Tech</span>
          {service.tech.map((tech: string, idx: number) => (
            <span key={idx} className="text-xs md:text-sm text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/5">
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
  const shouldReduceMotion = useReducedMotion();
  const { getHref, handleNavClick } = useGlobalNavigation();
  const containerRef = useRef(null);

  // Workflow Timeline Scroll Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 relative z-20 bg-bg-primary overflow-hidden">
      
      {/* --- Premium Background System --- */}
      {/* Faint CSS Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      />
      {/* Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
          <SectionHeader number="03" label="SERVICES" alignment="center" />
          <motion.h2 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-display-md md:text-display-lg text-white font-semibold leading-tight mb-6"
          >
            We build digital products that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">dominate the market.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-body-lg text-text-secondary"
          >
            From high-converting websites to complex AI-driven SaaS applications, we possess the engineering depth to execute at the highest level.
          </motion.p>
        </div>

        {/* LAYER 01: Featured Services */}
        <div className="mb-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
             {featuredServices.map((service, index) => (
               <FeaturedCard key={service.id} service={service} index={index} shouldReduceMotion={shouldReduceMotion} />
             ))}
           </div>
        </div>

        {/* LAYER 02: Everything We Build (Animated Chips) */}
        <div className="mb-32 relative z-10">
           <div className="text-center mb-16">
             <h3 className="text-heading-md text-white font-bold mb-4">Everything We Build</h3>
             <p className="text-text-secondary max-w-xl mx-auto">A comprehensive ecosystem of technologies and solutions we deploy to solve complex business problems.</p>
           </div>
           
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
             variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
             className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
           >
             {serviceChips.map((chip, i) => (
               <motion.div
                 key={chip}
                 variants={{
                   hidden: { opacity: 0, y: 15, scale: 0.95 },
                   visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
                 }}
                 whileHover={{ scale: 1.05, y: -2 }}
                 className="px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white/80 text-sm md:text-base cursor-default hover:text-white hover:border-brand-primary/50 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300 backdrop-blur-sm"
               >
                 {chip}
               </motion.div>
             ))}
           </motion.div>
        </div>

        {/* LAYER 03: Development Workflow */}
        <div className="max-w-4xl mx-auto relative z-10 mb-32">
           <div className="text-center mb-20">
             <h3 className="text-heading-md text-white font-bold mb-4">How We Build</h3>
             <p className="text-text-secondary max-w-xl mx-auto">Our battle-tested engineering process guarantees quality, speed, and scalability from day one.</p>
           </div>

           <div className="relative pl-8 md:pl-16">
             {/* Timeline Track */}
             <div className="absolute left-[15px] md:left-[31px] top-4 bottom-0 w-px bg-white/10" />
             
             {/* Animated Timeline Fill */}
             <motion.div 
               className="absolute left-[14px] md:left-[30px] top-4 bottom-0 w-[3px] bg-gradient-to-b from-brand-primary via-brand-accent to-brand-primary origin-top blur-[1px]"
               style={{ scaleY: timelineHeight }}
             />
             <motion.div 
               className="absolute left-[15px] md:left-[31px] top-4 bottom-0 w-px bg-white origin-top"
               style={{ scaleY: timelineHeight }}
             />

             {/* Steps */}
             <div className="flex flex-col gap-12">
               {workflowSteps.map((step, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                   transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                   className="relative"
                 >
                   {/* Node */}
                   <div className="absolute left-[-39px] md:left-[-55px] top-1.5 w-6 h-6 rounded-full bg-bg-primary border-2 border-white/20 flex items-center justify-center z-10">
                     <div className="w-2 h-2 rounded-full bg-white/50" />
                   </div>
                   
                   <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors duration-300">
                     <h4 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-4">
                       <span className="text-brand-primary text-sm font-mono opacity-60">0{i + 1}</span>
                       {step.title}
                     </h4>
                     <p className="text-text-secondary md:text-lg">{step.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center relative z-10"
        >
          <Link 
            href={getHref('Contact', '/#contact')}
            onClick={(e) => handleNavClick(e, 'Contact')}
            className="group relative flex items-center gap-4 px-10 py-5 rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] active:scale-[0.98]"
          >
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.15)_0%,transparent_70%)]" />
             <span className="relative z-10 text-body-lg font-semibold text-white transition-colors duration-500 group-hover:text-brand-primary">Discuss Your Project</span>
             <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white text-bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <ArrowRight size={18} />
             </div>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
