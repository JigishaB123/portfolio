import React from 'react';
import { skills } from '../../../data/skills';
import './Skills.scss';
import './Skills.scss';

const Skills = ({ isVisible }) => {

      // Category titles
      const categoryTitles = {
        programming: 'Programming Languages',
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        databases: 'Databases',
        cloud: 'Cloud & DevOps',
        tools: 'Testing & Tools',
      };

      // Default icon for skills without specific icons
  const DefaultIcon = ({ skill }) => (
    <div className="skills-row__skill-default-icon">
      {skill.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
    </div>
  );
  
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