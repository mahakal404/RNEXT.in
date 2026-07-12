"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, LayoutTemplate, Layers, Cpu } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeading } from '../ui/SectionHeading';

const services = [
  {
    title: 'Website Development',
    description: 'Bespoke, high-performance websites that tell your brand story and convert visitors into loyal customers.',
    icon: <MonitorSmartphone size={32} className="text-neon-cyan" />
  },
  {
    title: 'Web App Development',
    description: 'Complex, scalable web applications built with modern frameworks to solve real business challenges.',
    icon: <Layers size={32} className="text-purple-accent" />
  },
  {
    title: 'Landing Pages',
    description: 'High-converting, stunning landing pages optimized for performance and targeted marketing campaigns.',
    icon: <LayoutTemplate size={32} className="text-neon-cyan" />
  },
  {
    title: 'Automation & AI',
    description: 'Smart integrations and AI-driven solutions that streamline workflows and create intelligent digital experiences.',
    icon: <Cpu size={32} className="text-purple-accent" />
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="What We Do." 
          subtitle="Comprehensive digital solutions engineered for growth."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full text-center hover:-translate-y-3 transition-transform duration-300">
                <div className="mb-6 inline-flex p-4 rounded-full bg-white/5 border border-white/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
