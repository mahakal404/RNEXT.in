import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: string = "-30% 0px -55% 0px") {
  const [activeId, setActiveId] = useState<string>(ids[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: offset }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
