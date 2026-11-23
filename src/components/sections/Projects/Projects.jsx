import React, { useCallback } from 'react';
import { projects } from '../../../data/projects';
import { personalInfo } from '../../../data/personalInfo';
import { prefersReducedMotion } from '../../../utils/helpers';
import './Projects.scss';

const ProjectCard = ({ project }) => {
  const onMove = useCallback((e) => {
    if (prefersReducedMotion()) return;
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.transform = `rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 8}deg)`;
    card.style.setProperty('--mx', `${x * 100}%`);
    card.style.setProperty('--my', `${y * 100}%`);
  }, []);

  const onLeave = useCallback((e) => {
    e.currentTarget.style.transform = '';
  }, []);

  return (
    <article className="proj reveal">
      <div className="proj__card" onMouseMove={onMove} onMouseLeave={onLeave}>
        {project.image && (
          <div className="proj__img">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
        )}
        <div className="proj__body">
          <div className="proj__top">
            <span>{project.year}</span>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                source ↗
              </a>
            )}
          </div>
          <h3>{project.title}</h3>
          {project.description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
          <div className="chips">
            {project.tech.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => (
  <section className="block" id="projects">
    <div className="wrap">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">03 · Selected work</div>
          <h2 className="h2">
            Things I've designed <span className="muted">and shipped end-to-end.</span>
          </h2>
        </div>
        <a className="btn btn--ghost btn--sm" href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
          All repositories ↗
        </a>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
