import React from 'react';
import { personalInfo } from '../../../data/personalInfo';
import { education } from '../../../data/education';
import './About.scss';

const About = () => (
  <section className="block" id="about">
    <div className="wrap">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">01 · About</div>
          <h2 className="h2">
            Backend depth, cloud fluency, <span className="muted">and a growing edge in applied AI.</span>
          </h2>
        </div>
      </div>

      <div className="about">
        <div className="about__text reveal">
          {personalInfo.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="about__side reveal">
          <div className="about__profile">
            <img src={personalInfo.avatar} alt={personalInfo.name} />
            <div>
              <div className="about__name">{personalInfo.name}</div>
              <div className="about__meta">{personalInfo.location}</div>
              {/* {personalInfo.availability && (
                <div className="about__meta about__meta--accent">● {personalInfo.availability}</div>
              )} */}
            </div>
          </div>

          {education.map((e) => (
            <div className="about__edu" key={e.id}>
              <div className="about__edu-top">
                <span>{e.year.replace('-', ' — ')}</span>
                {e.gpa && <span className="about__gpa">GPA {e.gpa}</span>}
              </div>
              <h4>{e.degree}</h4>
              <p>{e.school}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  </section>
);

export default About;
