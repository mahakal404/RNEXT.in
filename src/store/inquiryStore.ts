type Listener = () => void;

let currentInquiry: string | null = null;
const listeners: Set<Listener> = new Set();

export const inquiryStore = {
  getSnapshot: () => currentInquiry,
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  setInquiry: (inquiry: string) => {
    currentInquiry = inquiry;
    listeners.forEach((l) => l());
  },
  clearInquiry: () => {
    currentInquiry = null;
    listeners.forEach((l) => l());
  }
};
