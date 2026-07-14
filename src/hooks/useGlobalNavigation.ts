import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect } from 'react';

export function useGlobalNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  // Handle cross-page smooth scroll on mount
  useEffect(() => {
    if (pathname === '/') {
      const pendingScroll = sessionStorage.getItem('pendingScroll');
      if (pendingScroll) {
        sessionStorage.removeItem('pendingScroll');
        
        // Wait slightly for DOM to render before scrolling
        requestAnimationFrame(() => {
          setTimeout(() => {
            const element = document.querySelector(pendingScroll);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        });
      }
    }
  }, [pathname]);

  const getHref = (name: string, fallbackHref?: string) => {
    if (name === 'Home') return '/';
    if ((name === 'Projects' || name === 'Work') && pathname && pathname.startsWith('/projects')) {
      return '/projects';
    }
    if (name === 'Work') return '/#projects';
    if (fallbackHref) {
      // Convert `#hash` to `/#hash` if needed for consistency across pages
      if (fallbackHref.startsWith('#')) return `/${fallbackHref}`;
      return fallbackHref;
    }
    return `/#${name.toLowerCase()}`;
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, name: string, fallbackHref?: string) => {
    const href = getHref(name, fallbackHref);

    // 1. Projects page -> Projects link (stay and scroll to top)
    if (pathname && pathname.startsWith('/projects') && (name === 'Projects' || name === 'Work')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 2. Home page -> Home link (stay and scroll to top)
    if (pathname === '/' && name === 'Home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }

    // 3. Same page hash navigation
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.querySelector(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      return;
    }

    // 4. Cross page hash navigation
    if (pathname && pathname.startsWith('/projects') && href.startsWith('/#')) {
      e.preventDefault();
      sessionStorage.setItem('pendingScroll', href.substring(1));
      router.push('/');
      return;
    }
  };

  return { getHref, handleNavClick };
}
