import React, { useState } from 'react';
import { experience } from '../../../data/experience';
import { splitMetrics } from '../../../utils/helpers';
import './Experience.scss';

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = experience[active];

  const onKeyDown = (e) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
    const next = (active + dir + experience.length) % experience.length;
    setActive(next);
    document.getElementById(`exp-tab-${next}`)?.focus();
  };

  return (
    <section className="block" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">02 · Experience</div>
            <h2 className="h2">
              Production systems, <span className="muted">real throughput.</span>
            </h2>
          </div>
        </div>

        <div className="exp reveal">
          <div className="exp__tabs" role="tablist" aria-label="Companies" onKeyDown={onKeyDown}>
            {experience.map((e, i) => (
              <button
                key={e.id}
                id={`exp-tab-${i}`}
                role="tab"
                aria-selected={i === active}
                aria-controls="exp-panel"
                tabIndex={i === active ? 0 : -1}
                className={`exp__tab ${i === active ? 'exp__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="exp__co">{e.company}</span>
                <span className="exp__yr">{e.period.split(' - ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="exp__panel" id="exp-panel" role="tabpanel" aria-labelledby={`exp-tab-${active}`} key={job.id}>
            <h3 className="exp__title">
              {job.title} <span>@ {job.company}</span>
            </h3>
            <div className="exp__meta">
              <span>{job.period.replace(' - ', ' — ')}</span>
              <span>{job.location}</span>
            </div>
            <ul className="exp__list">
              {job.responsibilities.map((r, i) => (
                <li key={i}>
                  {splitMetrics(r).map((part, j) =>
                    part.isMetric ? (
                      <span className="num" key={j}>{part.text}</span>
                    ) : (
                      <React.Fragment key={j}>{part.text}</React.Fragment>
                    )
                  )}
                </li>
              ))}
            </ul>
            <div className="chips">
              {job.tech.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
