import { useTransform, MotionValue } from 'framer-motion';

/**
 * Creates a slow, premium parallax effect. 
 * Ensure the background moves slower than the foreground.
 */
export const usePremiumParallax = (
  scrollY: MotionValue<number>, 
  inputRange: number[], 
  outputRange: number[]
) => {
  // Reduces the intensity of the parallax (as per user request: "reduce parallax intensity")
  const dampenedOutput = outputRange.map(val => val * 0.4); 
  return useTransform(scrollY, inputRange, dampenedOutput);
};
