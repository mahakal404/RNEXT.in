import { transitions } from './transitions';
import { easings } from './easings';

// Parent stagger configurations
export const stagger = {
  fast: {
    initial: "initial",
    animate: "animate",
    whileInView: "whileInView",
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
      whileInView: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
    }
  },
  base: {
    initial: "initial",
    animate: "animate",
    whileInView: "whileInView",
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
      whileInView: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
    }
  },
  slow: {
    initial: "initial",
    animate: "animate",
    whileInView: "whileInView",
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
      whileInView: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
    }
  }
};
