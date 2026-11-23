import React from 'react';
import { skills } from '../../../data/skills';
import './Skills.scss';

// Display names for the keys in data/skills.js (unknown keys fall back to the key itself)
const LABELS = {
  programming: 'Languages',
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Data',
  cloud: 'Cloud & DevOps',
  ai: 'AI & LLM',
  tools: 'Testing & Build'
};

const Skills = () => (
  <section className="block" id="stack">
    <div className="wrap">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">04 · Skills & Tools</div>
          <h2 className="h2">
            Tools I reach for <span className="muted">in production.</span>
          </h2>
        </div>
      </div>

      <div className="stack reveal">
        {Object.entries(skills).map(([key, items], i) => (
          <div className="stack__cell" key={key}>
            <h4>
              {LABELS[key] || key}
              <span>{String(i + 1).padStart(2, '0')}</span>
            </h4>
            <div className="stack__items">
              {items.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
