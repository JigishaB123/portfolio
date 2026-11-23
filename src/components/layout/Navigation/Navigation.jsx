import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../../data/personalInfo';
import './Navigation.scss';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Skills & Tools' },
  { id: 'contact', label: 'Contact' }
];

const initials = personalInfo.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .toUpperCase();

const Navigation = ({ activeSection, onOpenPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

  return (
    <header className={`nav ${scrolled || menuOpen ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#home" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <span className="nav__mark">{initials}</span>
        </a>

        <ul className="nav__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'is-active' : ''}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__right">
          <button className="nav__search" onClick={onOpenPalette} aria-label="Open command palette">
            <span className="nav__search-label">Search</span>
            <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
          </button>
          <a className="btn btn--primary btn--sm" href={personalInfo.resume} download>
            Resume
          </a>
          <button
            className="nav__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="nav__mobile">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navigation;
