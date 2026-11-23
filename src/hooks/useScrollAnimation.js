import { useState, useEffect } from 'react';

/**
 * - Tracks which <section id="..."> is in the middle of the viewport (for nav highlighting).
 * - Adds the "in" class to every `.reveal` element the first time it scrolls into view.
 */
const useScrollAnimation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`;
      revealObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return { activeSection };
};

export default useScrollAnimation;
