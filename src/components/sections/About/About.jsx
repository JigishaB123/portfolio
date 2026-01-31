import React from 'react';
import { personalInfo } from '../../../data/personalInfo';
import './About.scss';

const About = ({ isVisible }) => {

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className={`about__content ${isVisible ? 'about__content--visible' : 'about__content--hidden'}`}>
          <h2 className="about__title">About Me</h2>
          
          <div className="about__grid">
            <div className="about__text">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="about__paragraph">
                  {paragraph}
                </p>
              ))}
            </div> 
            
          <div className="about__highlights">
            <div className="about__highlight-card">
              <div className="about__highlight-badge about__highlight-badge--education">
                🎓 EDUCATION
              </div>
              <h3 className="about__highlight-title">MS in Software Engineering Systems</h3>
              <p className="about__highlight-subtitle">Northeastern University • 2024-2026</p>
            </div>

            <div className="about__highlight-card">
              <div className="about__highlight-badge about__highlight-badge--opensource">
                🌱 OPEN SOURCE CONTRIBUTION
              </div>
              <h3 className="about__highlight-title">NPM Package</h3>
              <a href="https://www.npmjs.com/package/cards-key-point-indicator" className="about__highlight-subtitle">
                cards-key-point-indicator
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;