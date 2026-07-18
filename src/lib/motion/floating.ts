

// Extremely subtle floating motion for Hero devices and background shapes
export const floating = {
  slow: {
    animate: {
      y: [-2, 2, -2],
    },
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  },
  ultraSlow: {
    animate: {
      y: [-1, 1, -1],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const
    }
  },
  breathingScale: {
    animate: {
      scale: [1, 1.01, 1],
      opacity: [0.9, 1, 0.9]
    },
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};
