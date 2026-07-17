import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

  const rawHeroOpacity = useTransform(scrollY, scrollRange, [1, 0.8]);
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
