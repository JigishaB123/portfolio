import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../utils/helpers';
import './SkillBadge.scss';

const SkillBadge = ({ skill, variant = 'primary' }) => {
  return (
    <span className={classNames('skill-badge', `skill-badge--${variant}`)}>
      {skill}
    </span>
  );
};

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};

export default SkillBadge;