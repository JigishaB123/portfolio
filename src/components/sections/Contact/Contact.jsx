import React from 'react';
import { Copy } from 'lucide-react';
import { personalInfo } from '../../../data/personalInfo';
import { copyToClipboard } from '../../../utils/toast';
import './Contact.scss';

const Contact = () => {
  const { email, social, contactHeadline, contactBlurb } = personalInfo;

  return (
    <section className="block" id="contact">
      <div className="wrap">
        <div className="contact reveal">
          <div className="eyebrow contact__eyebrow">05 · Contact</div>
          <h2 className="h2 contact__title">{contactHeadline}</h2>
          <p className="contact__blurb">{contactBlurb}</p>

          <div className="contact__email">
            <a href={`mailto:${email}`}>{email}</a>
            <button onClick={() => copyToClipboard(email, 'Email copied to clipboard')} aria-label="Copy email address">
              <Copy size={14} /> Copy
            </button>
          </div>

          <div className="contact__links">
            {social.github && (
              <a className="btn btn--ghost btn--sm" href={social.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            )}
            {social.linkedin && (
              <a className="btn btn--ghost btn--sm" href={social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
