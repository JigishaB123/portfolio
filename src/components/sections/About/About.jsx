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
              
              {/* <div className="about__skills">
                <h3 className="about__skills-title">Technologies & Skills</h3>
                
                {/* Tab Navigation 
                <div className="about__tabs">
                  <div className="about__tab-nav">
                    {tabData.map((tab) => (
                      <button
                        key={tab.id}
                        className={`about__tab-button ${activeTab === tab.id ? 'about__tab-button--active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  
                  {/* Tab Content 
                  <div className="about__tab-content">
                    {tabData.map((tab) => (
                      <div
                        key={tab.id}
                        className={`about__tab-panel ${activeTab === tab.id ? 'about__tab-panel--active' : ''}`}
                      >
                        <div className="about__skill-grid">
                          {tab.skills.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} variant={tab.variant} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div> 
            
            <div className="about__image">
              <div className="about__profile-image">
                <img src="images/profile.webp" alt="profile"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;