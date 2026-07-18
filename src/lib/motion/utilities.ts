import { useReducedMotion } from 'framer-motion';

// Utilities to simplify motion application
export const useMotionUtilities = () => {
  const shouldReduceMotion = useReducedMotion();

  /**
   * Applies the variant only if reduced motion is disabled.
   * If reduced motion is enabled, it returns a simple instant-opacity fade.
   */
  const withReducedMotion = (variant: Record<string, unknown>) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.1 }
      };
    }
    return variant;
  };

  return { shouldReduceMotion, withReducedMotion };
};
