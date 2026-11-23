import React from 'react';
import { personalInfo } from '../../../data/personalInfo';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer__inner">
      <span>© {new Date().getFullYear()} {personalInfo.name}</span>
      {/* <span>
        Built with React · CSS 3D — press <kbd>⌘K</kbd> to navigate
      </span> */}
    </div>
  </footer>
);

export default Footer;
