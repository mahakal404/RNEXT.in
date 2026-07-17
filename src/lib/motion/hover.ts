import { transitions } from './transitions';

// Standardized hover/tap interactions based on the "Mix of Spring and Tween" philosophy

export const hover = {
  // Buttons: Spring for scale/lift, fast tween for shadows/colors
  button: {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98, y: 0 },
    transition: transitions.springStiff
  },
  
  // Cards: Spring for translation/elevation, no aggressive scale
  card: {
    whileHover: { y: -4 },
    transition: transitions.springSmooth
  },
  
  // Links: Snappy translation
  link: {
    whileHover: { x: 4 },
    transition: transitions.springStiff
  },
  
  // Subtle glow tweens (to be used alongside spring scales)
  glow: {
    whileHover: { opacity: 1, filter: "brightness(1.2)" },
    transition: transitions.color
  }
};
