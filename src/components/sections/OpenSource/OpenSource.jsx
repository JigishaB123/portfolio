import React from 'react';
import { Github } from 'lucide-react';
import { openSourceContributions } from '../../../data/openSource';
import './OpenSource.scss';

const OpenSource = ({ isVisible }) => {
  return (
    <section id="opensource" className="opensource">
      <div className="opensource__container">
        <div className={`opensource__content ${isVisible ? 'opensource__content--visible' : 'opensource__content--hidden'}`}>
          <h2 className="opensource__title">Publications</h2>
          
          <div className="opensource__list">
            {openSourceContributions.map((project) => (
              <div key={project.id} className="opensource__card">
                <div className="opensource__image">
                  {/* <Code size={48} /> */}
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="opensource__card-header">
                  <div className="opensource__title-section">
                    <div className="opensource__title-container">
                      <h3 className="opensource__card-title">{project.name}</h3>
                      <span className="opensource__role-tag">{project.role}</span>
                    </div>
                    <p className="opensource__card-description">{project.description}</p>
                  </div>
                  
                  {/* <div className="opensource__stats"> */}
                    {/* <div className="opensource__stat">
                      <div className="opensource__stat-value">{project.stats.downloads}</div>
                      <div className="opensource__stat-label">Downloads</div>
                    </div> */}
                    {/* <div className="opensource__stat">
                      <div className="opensource__stat-value">{project.stats.stars}</div>
                      <div className="opensource__stat-label">Stars</div>
                    </div> */}
                    {/* <div className="opensource__stat">
                      <div className="opensource__stat-value">{project.stats.version}</div>
                      <div className="opensource__stat-label">Version</div>
                    </div> */}
                  {/* </div> */}
                </div>
                
                {/* <ul className="opensource__contributions">
                  {project.contributions.map((contribution, index) => (
                    <li key={index} className="opensource__contribution-item">
                      {contribution}
                    </li>
                  ))}
                </ul> */}
                
                <div className="opensource__footer">
                  <div className="opensource__tech-tags">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="opensource__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="opensource__links">
                    <a target="_blank" href={project.url} className="opensource__link">
                      <span className="opensource__npm-dot"></span>
                      Link
                    </a>
                    {/* <a target="_blank" href={project.githubUrl} className="opensource__link">
                      <Github size={16} />
                      GitHub
                    </a> */}
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

export default OpenSource;