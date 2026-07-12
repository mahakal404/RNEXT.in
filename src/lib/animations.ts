import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const getHeroAnimations = (shouldReduceMotion: boolean | null) => {
  const getInitial = (props: any) => (shouldReduceMotion ? { opacity: 0 } : props);
  const getAnimate = (props: any) => (shouldReduceMotion ? { opacity: 1 } : props);

  return {
    background: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut", delay: 0 },
    },
    navbar: {
      initial: getInitial({ opacity: 0, y: -20 }),
      animate: getAnimate({ opacity: 1, y: 0 }),
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    },
    badge: {
      initial: getInitial({ opacity: 0, y: 10, filter: "blur(4px)" }),
      animate: getAnimate({ opacity: 1, y: 0, filter: "blur(0px)" }),
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
    headingLine: (lineIndex: number) => ({
      initial: getInitial({ opacity: 0, y: 30, filter: "blur(12px)" }),
      animate: getAnimate({ opacity: 1, y: 0, filter: "blur(0px)" }),
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 + lineIndex * 0.12 },
    }),
    description: {
      initial: getInitial({ opacity: 0, y: 20, filter: "blur(8px)" }),
      animate: getAnimate({ opacity: 1, y: 0, filter: "blur(0px)" }),
      transition: { duration: 0.6, ease: "easeOut", delay: 0.69 },
    },
    buttons: {
      initial: getInitial({ opacity: 0, y: 20, scale: 0.96 }),
      animate: getAnimate({ opacity: 1, y: 0, scale: 1 }),
      transition: { duration: 0.5, ease: "easeOut", delay: 0.9 },
    },
    deviceShowcase: {
      initial: getInitial({ opacity: 0, y: 40, scale: 0.9 }),
      animate: getAnimate({ opacity: 1, y: 0, scale: 1 }),
      transition: { duration: 0.9, ease: "easeOut", delay: 1.2 },
    },
    scrollIndicator: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut", delay: 2.4 },
    },
    aboutReveal: {
      initial: getInitial({ opacity: 0, y: 40, filter: "blur(8px)" }),
      whileInView: getAnimate({ opacity: 1, y: 0, filter: "blur(0px)" }),
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
};

export const useCinematicScroll = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [windowHeight, setWindowHeight] = useState(800);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollRange = [0, windowHeight * 0.4];

  // Base values adjusted for responsiveness
  const textYTarget = isMobile ? -10 : isTablet ? -15 : -20;
  const textScaleTarget = isMobile ? 0.98 : isTablet ? 0.97 : 0.96;
  const deviceYTarget = isMobile ? -5 : isTablet ? -8 : -10;
  const deviceScaleTarget = isMobile ? 0.99 : 0.98;

  const rawHeroOpacity = useTransform(scrollY, scrollRange, [1, 0.9]);
  const rawHeroScale = useTransform(scrollY, scrollRange, [1, textScaleTarget]);
  const rawHeroY = useTransform(scrollY, scrollRange, [0, textYTarget]);
  
  const rawDeviceScale = useTransform(scrollY, scrollRange, [1, deviceScaleTarget]);
  const rawDeviceY = useTransform(scrollY, scrollRange, [0, deviceYTarget]);

  return {
    textOpacity: rawHeroOpacity,
    textScale: shouldReduceMotion ? 1 : rawHeroScale,
    textY: shouldReduceMotion ? 0 : rawHeroY,
    deviceScale: shouldReduceMotion ? 1 : rawDeviceScale,
    deviceY: shouldReduceMotion ? 0 : rawDeviceY
  };
};
