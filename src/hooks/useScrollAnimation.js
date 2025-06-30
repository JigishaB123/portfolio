import { useState, useEffect } from 'react';

const useScrollAnimation = (threshold = 0.3) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ 
              ...prev, 
              [entry.target.id]: true 
            }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [threshold]);

  return { activeSection, isVisible };
};

export default useScrollAnimation;