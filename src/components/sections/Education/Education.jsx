import React from 'react';
import { education } from '../../../data/education';
import './Education.scss';

const Education = ({ isVisible }) => {
  return (
    <section id="education" className="education">
      <div className="education__container">
        <div className={`education__content ${isVisible ? 'education__content--visible' : 'education__content--hidden'}`}>
          <h2 className="education__title">Education</h2>
          
          <div className="education__grid">
            {education.map((edu) => (
              <div key={edu.id} className="education__card">
                <div className="education__card-header">
                  <div>
                    <h3 className="education__card-title">{edu.degree}</h3>
                    <p className="education__card-subtitle">{edu.school}</p>
                  </div>
                  <span className="education__card-year">{edu.year}</span>
                </div>
                
                <p className="education__card-text">GPA: {edu.gpa}</p>
                
                <div>
                  <p className="education__card-label">Relevant Coursework:</p>
                  <div className="education__tags">
                    {edu.relevant.map((course, index) => (
                      <span key={index} className="education__tag">
                        {course}
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

export default Education;