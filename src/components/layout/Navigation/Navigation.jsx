import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../../../utils/scrollToSection';
import './Navigation.scss';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    // Scroll to section
    scrollToSection(sectionId);
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__content">
          {!isMobile && (
            <ul className="navigation__desktop-nav">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`navigation__nav-button ${
                      activeSection === item.id ? 'navigation__nav-button--active' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {isMobile && (
            <>
              <div className="navigation__logo">
                {navItems.find(item => item.id === activeSection)?.label || 'Menu'}
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`navigation__mobile-button ${
                  isMenuOpen ? 'navigation__mobile-button--active' : ''
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className="navigation__mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`navigation__mobile-nav-button ${
                activeSection === item.id ? 'navigation__mobile-nav-button--active' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;