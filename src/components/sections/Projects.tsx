"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeading } from '../ui/SectionHeading';

const projects = [
  {
    title: 'FinTrack App',
    description: 'A modern financial dashboard with real-time analytics, dynamic charting, and seamless transactions. Built for high-performance and beautiful data visualization.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: '#',
  },
  {
    title: 'ChatCV App',
    description: 'An AI-powered resume builder and chat interface. Interact with your CV naturally to optimize content for ATS systems with stunning export templates.',
    tags: ['React', 'AI Integration', 'Node.js'],
    demoUrl: '#',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Selected Work." 
          subtitle="A glimpse into our recent digital engineering."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col group">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-purple-accent/10 text-purple-accent border border-purple-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-cyan transition-colors mt-auto"
                >
                  View Live Demo
                  <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
