"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Zap, CheckCircle2, Calendar, X, ChevronDown, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useMotionUtilities, variants, stagger, hover, transitions } from '../../lib/motion';
import { useSyncExternalStore } from 'react';
import { inquiryStore } from '../../store/inquiryStore';

const WhatsAppIcon = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const projectTypes = ["Digital Presence", "Custom Platform Development", "E-Commerce Development", "AI Automation", "UI/UX Design", "Other"];
const budgetRanges = ["Below ₹20K", "₹20K–50K", "₹50K–1L", "₹1L+"];
const timelines = ["Immediately", "Within 1 Month", "2–3 Months", "Flexible"];

function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

export function Contact() {
  const { withReducedMotion } = useMotionUtilities();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    sameAsMobile: true,
    whatsapp: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'preparing' | 'opening'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [highlightInquiry, setHighlightInquiry] = useState(false);
  
  const selectedInquiry = useSyncExternalStore(inquiryStore.subscribe, inquiryStore.getSnapshot, inquiryStore.getSnapshot);
  const inquiryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedInquiry) {
      setFormData(prev => ({ ...prev, projectType: selectedInquiry }));
      
      const timer = setTimeout(() => {
        setHighlightInquiry(true);
        if (inquiryRef.current) {
          // Move keyboard focus to dropdown trigger for accessibility
          inquiryRef.current.focus();
        }
        
        setTimeout(() => {
          setHighlightInquiry(false);
        }, 1500);
      }, 800); 

      return () => clearTimeout(timer);
    }
  }, [selectedInquiry]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile Number is required';
    if (!formData.sameAsMobile && !formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp Number is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid Email Address is required';
    if (!formData.description.trim()) newErrors.description = 'Project Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setSubmitState('preparing');
    
    setTimeout(() => {
      setSubmitState('opening');
      
      setTimeout(() => {
        const waNumber = formData.sameAsMobile ? formData.mobile : formData.whatsapp;
        const text = `Hello RNEXT 👋\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nWhatsApp: ${waNumber}\nEmail: ${formData.email}\nProject Type: ${formData.projectType || 'Not specified'}\nBudget: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}\n\nProject Details:\n${formData.description}\n\nThank you.`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/918347725447?text=${encodedText}`, '_blank');
        
        setSubmitState('idle');
      }, 1000);
    }, 1500);
  };

  const InputField = ({ label, id, error, required, ...props }: any) => (
    <div className="flex flex-col group">
      <label htmlFor={id} className={`text-sm font-medium mb-2 transition-colors duration-300 ${error ? 'text-red-400' : 'text-text-secondary group-focus-within:text-white'}`}>
        {label} {required && <span className="text-brand-primary">*</span>}
      </label>
      <div className="relative">
        {props.type === 'textarea' ? (
          <textarea
            id={id}
            className={`w-full bg-bg-primary border ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/15' : 'border-border-primary focus:border-brand-primary focus:ring-brand-primary/15'} rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-[4px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-text-muted/40 resize-none`}
            {...props}
          />
        ) : (
          <input 
            id={id} 
            className={`w-full bg-bg-primary border ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/15' : 'border-border-primary focus:border-brand-primary focus:ring-brand-primary/15'} rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-[4px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-text-muted/40`}
            {...props} 
          />
        )}
      </div>
      <AnimatePresence>
        {error && (
          <motion.span 
            initial={{ opacity: 0, height: 0, y: -5 }} 
            animate={{ opacity: 1, height: 'auto', y: 0 }} 
            exit={{ opacity: 0, height: 0, y: -5 }} 
            className="text-red-400 text-xs mt-2 block"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );

  const DropdownField = ({ label, id, options, value, onChange, highlight, containerRef }: any) => {
    const isOpen = activeDropdown === id;
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => {
      if (isOpen) setActiveDropdown(null);
    });

    return (
      <div className="flex flex-col relative group" ref={ref}>
        <label className="text-sm font-medium text-text-secondary group-focus-within:text-white mb-2 transition-colors duration-300">{label}</label>
        <div 
          ref={containerRef}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveDropdown(isOpen ? null : id);
            }
          }}
          onClick={() => setActiveDropdown(isOpen ? null : id)}
          className={`w-full flex items-center justify-between bg-bg-primary border ${isOpen ? 'border-brand-primary ring-[4px] ring-brand-primary/15' : 'border-border-primary'} ${highlight ? 'border-brand-primary/80 ring-[4px] ring-brand-primary/20 shadow-[0_0_15px_rgba(0,212,255,0.3)]' : ''} rounded-xl px-4 py-4 cursor-pointer transition-all duration-500 focus-visible:outline-none focus-visible:border-brand-primary`}
        >
          <span className={value ? 'text-white' : 'text-text-muted/40'}>{value || `Select ${label}`}</span>
          <ChevronDown size={18} className={`text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 top-[calc(100%+8px)] left-0 w-full bg-bg-elevated border border-border-primary rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className="max-h-60 overflow-y-auto py-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-primary [&::-webkit-scrollbar-track]:bg-transparent">
                {options.map((opt: string) => (
                  <div 
                    key={opt}
                    onClick={() => { onChange(opt); setActiveDropdown(null); }}
                    className={`px-4 py-3 text-sm cursor-pointer transition-colors ${value === opt ? 'text-brand-primary bg-brand-primary/10' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const infoItems = [
    { icon: Mail, label: 'Email', value: 'hello.rnext@gmail.com', href: 'mailto:hello.rnext@gmail.com' },
    { icon: WhatsAppIcon, label: 'WhatsApp', value: '+91 8347725447', href: 'https://wa.me/918347725447' },
    { icon: MapPin, label: 'Location', value: 'Gujarat, India', href: null },
    { icon: Clock, label: 'Availability', value: 'Mon–Sat\n10:00 AM – 8:00 PM IST', href: null, multiline: true },
    { icon: Zap, label: 'Average Response Time', value: 'Within 30 Minutes', href: null },
  ];

  const trustBadges = [
    'Free Consultation',
    'No Obligation',
    'Fast Response',
    'After-launch Support'
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative z-20">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-24 max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div className="overflow-hidden" {...withReducedMotion(variants.maskReveal)}>
            <SectionHeader number="06" label="CONTACT" alignment="center" />
          </motion.div>
          <motion.h2 
            className="text-display-sm md:text-display-md text-white font-semibold leading-tight mb-6 uppercase overflow-hidden"
            {...withReducedMotion(variants.maskReveal)}
            transition={{ ...variants.maskReveal.transition, delay: 0.1 }}
          >
            LET&apos;S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">EXCEPTIONAL</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-text-secondary max-w-2xl mx-auto overflow-hidden"
            {...withReducedMotion(variants.maskReveal)}
            transition={{ ...variants.maskReveal.transition, delay: 0.2 }}
          >
            Have an idea? Need a Website, Web App, Mobile App or AI Solution? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Contact Info (Left Card) */}
          <motion.div
            {...withReducedMotion(variants.fade)}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="bg-bg-elevated border border-border-primary rounded-2xl p-8 lg:p-10 sticky top-32">
              <h3 className="text-2xl text-white font-semibold mb-8">Contact Information</h3>
              
              <motion.div className="space-y-8 mb-12" {...withReducedMotion(stagger.fast)}>
                {infoItems.map((item, idx) => {
                  const content = (
                    <>
                      <div className="p-3 rounded-full bg-bg-primary border border-border-primary transition-all duration-300 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 group-hover:shadow-[0_8px_20px_rgba(0,212,255,0.15)] flex-shrink-0">
                        <item.icon className="text-text-muted transition-all duration-300 group-hover:text-brand-primary group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted font-medium mb-1 uppercase tracking-wider">{item.label}</div>
                        {item.multiline ? (
                          <div className="text-base font-medium text-white whitespace-pre-line leading-snug">{item.value}</div>
                        ) : (
                          <div className="text-base font-medium text-white transition-colors duration-300 group-hover:text-brand-primary">{item.value}</div>
                        )}
                      </div>
                    </>
                  );

                  return (
                    <motion.div
                      key={idx}
                      variants={variants.sectionHeader}
                    >
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl">
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-5 group cursor-default">
                          {content}
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>
              
              {/* Trust Badges */}
              <div className="pt-8 border-t border-border-primary">
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" {...withReducedMotion(stagger.fast)}>
                  {trustBadges.map((badge, i) => (
                    <motion.div 
                      key={i}
                      variants={variants.fade}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} className="text-brand-primary" />
                      <span className="text-sm text-text-secondary">{badge}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div
            {...withReducedMotion(stagger.fast)}
            className="lg:col-span-7"
          >
            <div className="card-standard relative overflow-hidden bg-bg-elevated border-border-primary p-6 md:p-10">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                
                <motion.div variants={variants.fade} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Full Name" id="name" placeholder="John Doe" required value={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} error={errors.name} />
                  <InputField label="Mobile Number" id="mobile" placeholder="+91 98765 43210" type="tel" required value={formData.mobile} onChange={(e: any) => setFormData({...formData, mobile: e.target.value})} error={errors.mobile} />
                </motion.div>

                <motion.div variants={variants.fade} className="flex items-center gap-3">
                  <button type="button" onClick={() => setFormData({...formData, sameAsMobile: !formData.sameAsMobile})} className="flex-shrink-0 w-5 h-5 rounded border border-border-primary bg-bg-primary flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary" aria-label="WhatsApp number is same as Mobile Number">
                    {formData.sameAsMobile && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 bg-brand-primary rounded-[2px]" />}
                  </button>
                  <span className="text-sm text-text-secondary cursor-pointer select-none" onClick={() => setFormData({...formData, sameAsMobile: !formData.sameAsMobile})}>WhatsApp number is same as Mobile Number</span>
                </motion.div>

                <AnimatePresence>
                  {!formData.sameAsMobile && (
                    <motion.div initial={{ opacity: 0, height: 0, overflow: 'hidden' }} animate={{ opacity: 1, height: 'auto', overflow: 'visible' }} exit={{ opacity: 0, height: 0, overflow: 'hidden' }} transition={{ duration: 0.3 }}>
                      <InputField label="WhatsApp Number" id="whatsapp" placeholder="+91 98765 43210" type="tel" required value={formData.whatsapp} onChange={(e: any) => setFormData({...formData, whatsapp: e.target.value})} error={errors.whatsapp} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div variants={variants.fade}>
                  <InputField label="Email Address" id="email" placeholder="john@example.com" type="email" required value={formData.email} onChange={(e: any) => setFormData({...formData, email: e.target.value})} error={errors.email} />
                </motion.div>

                <motion.div variants={variants.fade} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DropdownField label="Project Type" id="projectType" options={projectTypes} value={formData.projectType} onChange={(val: string) => setFormData({...formData, projectType: val})} highlight={highlightInquiry} containerRef={inquiryRef} />
                  <DropdownField label="Estimated Budget" id="budget" options={budgetRanges} value={formData.budget} onChange={(val: string) => setFormData({...formData, budget: val})} />
                </motion.div>

                <motion.div variants={variants.fade}>
                  <DropdownField label="Timeline" id="timeline" options={timelines} value={formData.timeline} onChange={(val: string) => setFormData({...formData, timeline: val})} />
                </motion.div>

                <motion.div variants={variants.fade}>
                  <InputField label="Project Description" id="description" placeholder="Tell us about what you want to build..." type="textarea" rows={4} required value={formData.description} onChange={(e: any) => setFormData({...formData, description: e.target.value})} error={errors.description} />
                </motion.div>
                
                <motion.div variants={variants.fade} className="mt-4 flex flex-col gap-4">
                  <motion.div {...hover.button}>
                    <button type="submit" disabled={submitState !== 'idle'} className="relative w-full h-[56px] flex items-center justify-center rounded-full bg-[#25D366] text-white font-medium text-lg overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated transition-transform disabled:opacity-80 disabled:hover:scale-100">
                      <div className="absolute inset-0 bg-black/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <span className="relative flex items-center gap-3">
                        {submitState === 'idle' ? (
                          <><WhatsAppIcon className="w-6 h-6" />Send on WhatsApp</>
                        ) : submitState === 'preparing' ? (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            Preparing message...
                          </motion.span>
                        ) : (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Opening WhatsApp...</motion.span>
                        )}
                      </span>
                    </button>
                  </motion.div>
                  
                  <div className="text-center text-xs text-text-muted flex items-center justify-center gap-2 group cursor-default">
                    <ShieldCheck size={16} className="text-brand-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] group-hover:scale-110" />
                    <span>Your information is never shared with anyone.</span>
                  </div>
                </motion.div>

                <motion.div variants={variants.fade} className="mt-2 pt-6 border-t border-border-primary flex flex-col items-center">
                  <p className="text-sm text-text-secondary mb-4">Or prefer to speak directly?</p>
                  <motion.div {...hover.button}>
                    <button type="button" onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 text-white border border-border-primary bg-bg-primary hover:bg-white/5 hover:border-brand-primary/50 px-6 py-3 rounded-full font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                      <Calendar size={18} className="text-brand-primary" />
                      Book a Free Discovery Call
                    </button>
                  </motion.div>
                </motion.div>

              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-0">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={transitions.springStiff} className="relative w-full max-w-lg bg-bg-elevated border border-border-primary rounded-2xl p-8 shadow-2xl z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none" />
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 text-text-muted hover:text-white bg-bg-primary rounded-full border border-border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"><X size={16} /></button>
              <div className="w-16 h-16 bg-bg-primary border border-border-primary rounded-2xl flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(0,212,255,0.1)]"><Calendar className="text-brand-primary" size={28} /></div>
              <h3 className="text-2xl font-semibold text-white mb-4">Book a Free Discovery Call</h3>
              <p className="text-text-secondary leading-relaxed mb-8 text-base">We&apos;re preparing an online scheduling experience where you can seamlessly book a free 15-minute strategy call with the RNEXT team.<br/><br/>For now, please contact us directly through WhatsApp and we&apos;ll schedule a time that works for you.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918347725447" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-3 px-6 rounded-xl font-medium transition-colors"><WhatsAppIcon className="w-5 h-5" />Contact on WhatsApp</a>
                <button onClick={() => setIsModalOpen(false)} className="sm:w-auto w-full flex items-center justify-center border border-border-primary text-white hover:bg-bg-primary py-3 px-6 rounded-xl font-medium transition-colors">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
