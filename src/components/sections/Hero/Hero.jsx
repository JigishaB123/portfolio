import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../../data/personalInfo';
import { splitBold, prefersReducedMotion } from '../../../utils/helpers';
import ArchStack from './ArchStack';
import './Hero.scss';

/** Types each command, pauses, deletes it, then moves to the next. */
const useTypedCommands = (commands) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!commands?.length) return undefined;
    if (prefersReducedMotion()) {
      setText(commands[0]);
      return undefined;
    }

    let cmd = 0;
    let char = 0;
    let deleting = false;
    let timer;

    const step = () => {
      const current = commands[cmd % commands.length];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(step, 1800);
          return;
        }
        timer = setTimeout(step, 55);
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          cmd += 1;
        }
        timer = setTimeout(step, 25);
      }
    };

    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [commands]);

  return text;
};

const Hero = () => {
  const typed = useTypedCommands(personalInfo.terminalCommands);
  const { name, title, headline, intro, social, email } = personalInfo;

  return (
    <section className="hero" id="home">
      <div className="wrap hero__grid">
        <div className="hero__content">
          <div className="hero__status">
            <span className="hero__dot" aria-hidden="true" />
            {title}
          </div>

          <h1 className="hero__title">
            {name}
            <br />
            <span className="hero__grad">{headline}</span>
          </h1>

          <p className="hero__lead">
            {splitBold(intro).map((part, i) =>
              part.isBold ? <b key={i}>{part.text}</b> : <React.Fragment key={i}>{part.text}</React.Fragment>
            )}
          </p>

          <div className="hero__terminal" aria-hidden="true">
            <span className="hero__prompt">~/{name.split(' ')[0].toLowerCase()} $</span>
            <span className="hero__typed">{typed}</span>
            <span className="hero__caret" />
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View selected work <ArrowRight />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <div className="hero__socials">
            {social.github && (
              <a className="icon-link" href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            )}
            {social.linkedin && (
              <a className="icon-link" href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            )}
            {email && (
              <a className="icon-link" href={`mailto:${email}`} aria-label="Email">
                <Mail />
              </a>
            )}
          </div>
        </div>

        <ArchStack />
      </div>

      <div className="hero__scroll" aria-hidden="true">
        SCROLL<span />
      </div>
    </section>
  );
};

export default Hero;
