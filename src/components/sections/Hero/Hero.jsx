import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { FaDownload } from 'react-icons/fa';
import { scrollToSection } from '../../../utils/scrollToSection';
import { personalInfo } from '../../../data/personalInfo';
import './Hero.scss';

const Hero = ({ isVisible }) => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className={`hero__text ${isVisible ? 'hero__text--visible' : 'hero__text--hidden'}`}>
          <h1 className="hero__title">{personalInfo.name}</h1>
          <p className="hero__subtitle">{personalInfo.subtitle}</p>
          
          <div className="hero__social-links">
            <a href={personalInfo.social.github} className="hero__social-link">
              <Github size={24} />
            </a>
            <a href={personalInfo.social.linkedin} className="hero__social-link">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link">
              <Mail size={24} />
            </a>
          </div>

          <a
            href="/SoftwareResume.pdf" download
            className="hero__cta-button"
          >
            <FaDownload style={{ marginRight: '8px' }}/> Download Resume
          </a>
          <br></br>
          <br></br>
          <button
            onClick={() => scrollToSection('projects')}
            className="hero__cta-button"
          >
            View My Work
          </button>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;