import { easings } from './easings';
import { durations } from './durations';

// Pre-configured transitions for consistency across the app

export const transitions = {
  // Premium tween transitions
  lux: { duration: durations.slow, ease: easings.lux },
  swift: { duration: durations.base, ease: easings.swift },
  snappy: { duration: durations.fast, ease: easings.snappy },
  color: { duration: durations.fast, ease: "linear" }, // Colors and opacity often look best linear or simple ease
  
  // Spring configurations (Use for scale, translate, physical movement)
  springStiff: { type: "spring" as const, stiffness: 400, damping: 25 },
  springBouncy: { type: "spring" as const, stiffness: 300, damping: 20 },
  springSmooth: { type: "spring" as const, stiffness: 100, damping: 20, mass: 1 },
  springFloating: { type: "spring" as const, stiffness: 50, damping: 10, mass: 1.5 },
};
