import React from 'react';
import { skills } from '../../../data/skills';
import './Skills.scss';
import './Skills.scss';

const Skills = ({ isVisible }) => {

      // Category titles
      const categoryTitles = {
        programming: 'Languages',
        backend: 'Backend Development',
        frontend: 'Frontend Development',
        databases: 'Databases',
        cloud: 'Cloud & DevOps',
        ai: 'AI / Developer Tools',
        tools: 'Testing & Tools',
      };
  
  return (
        <section id="skills" className="skills-minimal">
          <div className="skills-minimal__container">
            <div className={`skills-minimal__content ${isVisible ? 'skills-minimal__content--visible' : 'skills-minimal__content--hidden'}`}>
              <h2 className="skills-minimal__title">Technical Skills</h2>
              
              <div className="skills-minimal__grid">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="skills-minimal__category">
                    <h3 className="skills-minimal__category-title">
                      {categoryTitles[category] || category}
                    </h3>
                    <div className="skills-minimal__pills">
                      {skillList.map((skill) => (
                        <span key={skill} className="skills-minimal__pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

  };
  
  export default Skills;