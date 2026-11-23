import React, { useEffect, useMemo, useRef, useState } from 'react';
import { personalInfo } from '../../../data/personalInfo';
import { projects } from '../../../data/projects';
import { copyToClipboard } from '../../../utils/toast';
import './CommandPalette.scss';

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
const openUrl = (url) => window.open(url, '_blank', 'noopener,noreferrer');

const buildActions = () => [
  { group: 'Navigate', label: 'Go to About', hint: '#about', run: () => goTo('about') },
  { group: 'Navigate', label: 'Go to Experience', hint: '#experience', run: () => goTo('experience') },
  { group: 'Navigate', label: 'Go to Projects', hint: '#projects', run: () => goTo('projects') },
  { group: 'Navigate', label: 'Go to Skills & Tools', hint: '#stack', run: () => goTo('stack') },
  { group: 'Navigate', label: 'Go to Contact', hint: '#contact', run: () => goTo('contact') },
  { group: 'Actions', label: 'Copy email address', hint: 'clipboard', run: () => copyToClipboard(personalInfo.email, 'Email copied to clipboard') },
  { group: 'Actions', label: 'Download résumé', hint: 'PDF', run: () => openUrl(personalInfo.resume) },
  { group: 'Links', label: 'Open GitHub', hint: '↗', run: () => openUrl(personalInfo.social.github) },
  { group: 'Links', label: 'Open LinkedIn', hint: '↗', run: () => openUrl(personalInfo.social.linkedin) },
  ...projects.map((p) => ({
    group: 'Projects',
    label: p.title,
    hint: p.year,
    run: () => (p.github ? openUrl(p.github) : goTo('projects'))
  }))
];

const CommandPalette = ({ open, onClose }) => {
  const actions = useMemo(buildActions, []);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? actions.filter((a) => `${a.label} ${a.group} ${a.hint}`.toLowerCase().includes(q)) : actions;
  }, [actions, query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setSelected(0);
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  if (!open) return null;

  const run = (action) => {
    if (!action) return;
    onClose();
    action.run();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter') {
      run(filtered[selected]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  let lastGroup = '';

  return (
    <div
      className="cmdk-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="cmdk">
        <input
          ref={inputRef}
          className="cmdk__input"
          placeholder="Type a command or search…"
          autoComplete="off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(0);
          }}
          onKeyDown={onKeyDown}
          aria-controls="cmdk-list"
        />
        <ul className="cmdk__list" id="cmdk-list" role="listbox" ref={listRef}>
          {filtered.length === 0 && <li className="cmdk__group">No results</li>}
          {filtered.map((a, i) => {
            const header = a.group !== lastGroup ? a.group : null;
            lastGroup = a.group;
            return (
              <React.Fragment key={`${a.group}-${a.label}`}>
                {header && <li className="cmdk__group" role="presentation">{header}</li>}
                <li
                  role="option"
                  aria-selected={i === selected}
                  className={`cmdk__item ${i === selected ? 'cmdk__item--selected' : ''}`}
                  onMouseEnter={() => setSelected(i)}
                  onClick={() => run(a)}
                >
                  <span>{a.label}</span>
                  <span className="cmdk__hint">{a.hint}</span>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className="cmdk__foot">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
