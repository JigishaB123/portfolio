import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { projects } from '../../../data/projects';
import './Projects.scss';

const Projects = ({ isVisible }) => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className={`projects__content ${isVisible ? 'projects__content--visible' : 'projects__content--hidden'}`}>
          <h2 className="projects__title">Featured Projects</h2>
          
          <div className="projects__grid">
            {projects.map((project) => (
              <div key={project.id} className="projects__card">
                <div className="projects__image">
                  {/* <Code size={48} /> */}
                  <img src={project.image} alt={project.title} style={{ width: '300px', height: '180px', objectFit: 'contain' }} />
                </div>
                
                <div className="projects__card-content">
                  <h3 className="projects__card-title">{project.title}</h3>
                  {/* <p className="projects__card-description">{project.description}</p> */}
                  {project.description.map((paragraph, index) => (
                    <p key={index} className="projects__card-description">
                      {paragraph}
                    </p>
                  ))}
                  
                  <div className="projects__tech-tags">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="projects__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="projects__links">
                    <a href={project.github} className="projects__link">
                      <Github size={16} />
                      Code
                    </a>
                    {/* <a href={project.demo} className="projects__link">
                      <ExternalLink size={16} />
                      Demo
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a className='projects__link' target='_blank' href='https://github.com/JigishaB123' style={{ paddingTop:'12px', color: '#3b82f6', textDecoration: 'underline' , fontSize: '18px'}}>
          Know more...</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;