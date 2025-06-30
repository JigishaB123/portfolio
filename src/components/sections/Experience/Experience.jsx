import React from 'react';
import { experience } from '../../../data/experience';
import './Experience.scss';

const Experience = ({ isVisible }) => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className={`experience__content ${isVisible ? 'experience__content--visible' : 'experience__content--hidden'}`}>
          <h2 className="experience__title">Work Experience</h2>
          
          <div className="experience__list">
            {experience.map((job) => (
              <div key={job.id} className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__card-title">{job.title}</h3>
                    <p className="experience__company-name">{job.company}</p>
                    <p className="experience__card-location">{job.location}</p>
                  </div>
                  <span className="experience__period">{job.period}</span>
                </div>
                
                <ul className="experience__responsibilities">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="experience__responsibility-item">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                
                <div>
                  <p className="experience__card-label">Technologies Used:</p>
                  <div className="experience__tech-tags">
                    {job.tech.map((tech, index) => (
                      <span key={index} className="experience__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
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