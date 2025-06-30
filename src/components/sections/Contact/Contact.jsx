import React from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { personalInfo } from '../../../data/personalInfo';
import './Contact.scss';

const Contact = ({ isVisible }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className={`contact__content ${isVisible ? 'contact__content--visible' : 'contact__content--hidden'}`}>
          <h2 className="contact__title">Let's Work Together</h2>
          <p className="contact__description">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="contact__grid">
            <div className="contact__card">
              <Mail className="contact__icon" size={32} />
              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-text">{personalInfo.email}</p>
            </div>
            
            <div className="contact__card">
              <Linkedin className="contact__icon" size={32} />
              <h3 className="contact__card-title">LinkedIn</h3>
              <p className="contact__card-text">linkedin.com/in/jigishabhole</p>
            </div>
            
            <div className="contact__card">
              <Github className="contact__icon" size={32} />
              <h3 className="contact__card-title">GitHub</h3>
              <p className="contact__card-text">github.com/jigishaB123</p>
            </div>
          </div>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="contact__button"
          >
            <MessageCircle size={20} />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;