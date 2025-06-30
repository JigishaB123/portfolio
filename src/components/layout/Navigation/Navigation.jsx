import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../../../utils/scrollToSection';
import useResponsive from '../../../hooks/useResponsive';
import { classNames } from '../../../utils/helpers';
import './Navigation.scss';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'opensource', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__content">
          <div className="navigation__logo"></div>
          
          {!isMobile && (
            <div className="navigation__desktop-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={classNames(
                    'navigation__nav-button',
                    activeSection === item.id && 'navigation__nav-button--active'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {isMobile && (
            <button
              className={classNames(
                'navigation__mobile-button',
                isMenuOpen && 'navigation__mobile-button--active'
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className="navigation__mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="navigation__mobile-nav-button"
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