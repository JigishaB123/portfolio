import React from 'react';
import { education } from '../../../data/education';
import { experience } from '../../../data/experience';
import { personalInfo } from '../../../data/personalInfo';
import { startYear, formatRange } from '../../../utils/helpers';
import './Trajectory.scss';

// Build one chronological list from education + experience data.
const stops = [
  ...education.map((e) => ({
    key: `edu-${e.id}`,
    year: startYear(e.year),
    range: formatRange(e.year),
    role: e.shortDegree || e.degree,
    org: e.school,
    kind: e.gpa ? `GPA ${e.gpa.split('/')[0]}` : 'Education'
  })),
  ...experience.map((e) => ({
    key: `exp-${e.id}`,
    year: startYear(e.period),
    range: formatRange(e.period),
    role: e.title,
    org: e.company,
    kind: e.focus || e.tech.slice(0, 2).join(' · ')
  }))
].sort((a, b) => a.year - b.year);

const Trajectory = () => {
  const { next } = personalInfo;
  const first = stops[0]?.year;

  return (
    <div className="path">
      <div className="wrap">
        <div className="path__head">
          <span className="eyebrow">Trajectory</span>
          <span className="path__sub">{first} → now</span>
        </div>
        <ol className="path__track reveal">
          {stops.map((s) => (
            <li className="path__stop" key={s.key}>
              <div className="path__dot" />
              <div className="path__yr">{s.range}</div>
              <div className="path__role">{s.role}</div>
              <div className="path__org">{s.org}</div>
              <span className="path__kind">{s.kind}</span>
            </li>
          ))}
          {next && (
            <li className="path__stop path__stop--now">
              <div className="path__dot" />
              <div className="path__yr">{next.year}</div>
              <div className="path__role">{next.role}</div>
              <div className="path__org">{next.org}</div>
              {next.kind && <span className="path__kind">{next.kind}</span>}
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Trajectory;
