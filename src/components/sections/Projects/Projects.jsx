import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../../data/projects';
import './Projects.scss';

const Projects = ({ isVisible }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  // const cardsPerView = 2;
  const maxIndex = Math.max(0, projects.length - cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };
    
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const nextProjects = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevProjects = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Swipe support for touch devices (mobile)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextProjects();
    } else if (distance < -minSwipeDistance) {
      prevProjects();
    }
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section id="projects" className="projects-modern">
      <div className="projects-modern__container">
        <div className={`projects-modern__content ${isVisible ? 'projects-modern__content--visible' : 'projects-modern__content--hidden'}`}>
          <div className="projects-modern__header">
            <h2 className="projects-modern__title">Featured Projects</h2>
            <p className="projects-modern__subtitle">
            Clean code. Real impact.
            </p>
          </div>
          
          <div className="projects-modern__carousel-wrapper">
            <button 
              onClick={prevProjects} 
              className="projects-modern__nav projects-modern__nav--prev"
              aria-label="Previous projects"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>

            <div
              className="projects-modern__grid"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {visibleProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="projects-modern__card"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="projects-modern__image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="projects-modern__image"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="%239ca3af"%3EProject%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="projects-modern__overlay">
                      <div className="projects-modern__year-badge">
                        <Calendar size={14} />
                        {project.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="projects-modern__card-content">
                    <h3 className="projects-modern__card-title">{project.title}</h3>
                    
                    <p className="projects-modern__description">
                      {project.description[0]}
                    </p>
                    
                    <div className="projects-modern__tech-stack">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="projects-modern__tech-badge">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="projects-modern__tech-badge projects-modern__tech-badge--more">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className={`projects-modern__actions ${hoveredId === project.id ? 'projects-modern__actions--visible' : ''}`}>
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-modern__action-btn projects-modern__action-btn--primary"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-modern__action-btn projects-modern__action-btn--secondary"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={nextProjects} 
              className="projects-modern__nav projects-modern__nav--next"
              aria-label="Next projects"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="projects-modern__dots">
            {Array.from({ length: projects.length - cardsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`projects-modern__dot ${index === currentIndex ? 'projects-modern__dot--active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="projects-modern__footer">
            <a 
              href='https://github.com/JigishaB123'
              target='_blank' 
              rel="noopener noreferrer"
              className='projects-modern__view-all'
            >
              View All Projects
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;