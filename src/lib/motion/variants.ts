import { transitions } from './transitions';

export const variants = {
  // Hero Text Reveals (Blur to Sharp)
  blurReveal: {
    initial: { opacity: 0, filter: "blur(12px)", y: 10 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    transition: transitions.lux
  },
  
  // Line / Mask Reveal
  maskReveal: {
    initial: { y: "100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    whileInView: { y: "0%", opacity: 1 },
    transition: transitions.swift
  },

  // Standard Fade (Text / Paragraphs)
  fade: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: transitions.swift
  },

  // Services Blueprint (No rotation, translate/scale only)
  blueprintCard: {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: transitions.swift
  },

  // Cinematic Scale Down (For Project Images)
  scaleDownImage: {
    initial: { scale: 1.05, opacity: 0.8 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { ...transitions.lux, duration: 1.2 }
  },
  
  // Section Header Reveal
  sectionHeader: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: transitions.swift
  }
};
