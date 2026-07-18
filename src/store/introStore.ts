"use client";

import { useSyncExternalStore } from 'react';

// Intro States:
// PENDING: Initial state, intro has not started.
// PLAYING: Intro is currently playing.
// TRANSITIONING: Logo is flying to the navbar.
// REVEALING_HERO: Hero content begins fading in (overlaps with transition).
// COMPLETED: Intro is entirely finished.
export type IntroState = 'PENDING' | 'PLAYING' | 'TRANSITIONING' | 'REVEALING_HERO' | 'COMPLETED';

let currentState: IntroState = 'PENDING';
const listeners = new Set<() => void>();

// In-memory runtime flag to prevent accidental replays on fast refresh/hydration
let hasPlayedInMemory = false;

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const introStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot() {
    return currentState;
  },
  setState(newState: IntroState) {
    if (currentState === newState) return;
    currentState = newState;
    emitChange();
  },
  // Call this on app mount to check if it should skip
  initialize() {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('rnext_intro_played');
      
      // If it already played in this session, or in-memory flag is true, skip.
      if (stored === 'true' || hasPlayedInMemory) {
        this.setState('COMPLETED');
      } else {
        this.setState('PENDING');
      }
    }
  },
  markAsPlayed() {
    hasPlayedInMemory = true;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('rnext_intro_played', 'true');
    }
    this.setState('COMPLETED');
  }
};

// React hook to use the store
export function useIntroStore() {
  return useSyncExternalStore(introStore.subscribe, introStore.getSnapshot, introStore.getSnapshot);
}
