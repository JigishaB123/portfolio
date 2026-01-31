import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { personalInfo } from '../../../data/personalInfo';
import './Contact.scss';

const Contact = ({ isVisible }) => {
  return (
    <section id="contact" className="contact-minimal">
      <div className="contact-minimal__container">
        <div className={`contact-minimal__content ${isVisible ? 'contact-minimal__content--visible' : 'contact-minimal__content--hidden'}`}>
          <h2 className="contact-minimal__title">Let's Connect</h2>
          <p className="contact-minimal__subtitle">
            Open to Full Stack Engineer and Cloud computing opportunities.
          </p>
          
          <div className="contact-minimal__card">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="contact-minimal__email-btn"
            >
              <Mail size={20} />
              {personalInfo.email}
            </a>
            
            <div className="contact-minimal__divider">
              <span>or find me on</span>
            </div>
            
            <div className="contact-minimal__social-buttons">
              <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-minimal__social-btn"
              >
                <Github size={18} />
                GitHub
              </a>
              
              <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-minimal__social-btn"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
            
            <div className="contact-minimal__location">
              <MapPin size={16} />
              {personalInfo.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;