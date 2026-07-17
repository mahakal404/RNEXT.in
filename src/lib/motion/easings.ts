// Premium Custom Easings
// Used for tweens (colors, opacity, borders, slow structural reveals)

export const easings = {
  // Luxurious, slow tail. Good for large elements, hero reveals.
  lux: [0.16, 1, 0.3, 1] as const,
  
  // Fast entrance, smooth deceleration. Good for UI reveals, cards.
  swift: [0.22, 1, 0.36, 1] as const,
  
  // Immediate responsiveness. Good for small interactions or snaps.
  snappy: [0.4, 0, 0.2, 1] as const,
  
  // Smooth symmetric easing for continuous ambient motion (glows, slow pulses).
  ambient: [0.45, 0, 0.55, 1] as const,
  
  // Easing out slightly faster, good for exits.
  exit: [0.32, 0, 0.67, 0] as const,
  
  // Completely linear, usually reserved for constant rotation or tracking.
  linear: [0, 0, 1, 1] as const,
};
