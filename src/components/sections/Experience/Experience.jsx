import React from 'react';
import { experience } from '../../../data/experience';
import './Experience.scss';

const Experience = ({ isVisible }) => {
  return (
    <section id="experience" className="experience-modern">
      <div className="experience-modern__container">
        <div className={`experience-modern__content ${isVisible ? 'experience-modern__content--visible' : 'experience-modern__content--hidden'}`}>
          <h2 className="experience-modern__title">Professional Experience</h2>
          
          <div className="experience-modern__list">
            {experience.map((job) => (
              <div key={job.id} className="experience-modern__card">
                <div className="experience-modern__left">
                  <span className="experience-modern__period">{job.period}</span>
                  <h3 className="experience-modern__company">{job.company}</h3>
                  <p className="experience-modern__title-role">{job.title}</p>
                </div>
                
                <div className="experience-modern__divider"></div>
                
                <div className="experience-modern__right">
                  <ul className="experience-modern__responsibilities">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="experience-modern__responsibility-item">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;