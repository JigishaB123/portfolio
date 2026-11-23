export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(new Date(date));
  };
  
  export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

// Matches metric-like phrases: 10,000+  80%  5M+  70–85%  sub-millisecond  zero-downtime
const METRIC_RE = /(\d[\d,.]*(?:[MK]\+|\+|%|–\d+%)|sub-millisecond|zero-downtime)/g;

/** Splits text into plain/metric parts so metrics can be emphasised. */
export const splitMetrics = (text) =>
  text.split(METRIC_RE).map((part, i) => ({ text: part, isMetric: i % 2 === 1 }));

/** Splits "**bold** text" into parts with an isBold flag. */
export const splitBold = (text) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) => ({ text: part, isBold: i % 2 === 1 }));

/** "Aug 2020 - Aug 2023" or "2016-2020" -> 2020 / 2016 */
export const startYear = (period) => parseInt((period.match(/\d{4}/) || ['0'])[0], 10);

/**
 * Compact duration label for the timeline:
 *   "2024-2026"            -> "2024 – 2026"
 *   "Aug 2020 - Aug 2023"  -> "2020 – 2023"
 *   "Sep 2025 - Dec 2025"  -> "Sep – Dec 2025"
 *   "Jan 2024 - Present"   -> "2024 – Now"
 */
export const formatRange = (period) => {
  const [start = '', end = ''] = period.split(/\s*[-–—]\s*/);
  const startY = (start.match(/\d{4}/) || [])[0];
  const endY = (end.match(/\d{4}/) || [])[0];
  if (!startY) return period;
  if (!end) return startY;
  if (!endY) return `${startY} – Now`; // "Present", "Current", etc.
  if (startY !== endY) return `${startY} – ${endY}`;
  const startM = start.replace(startY, '').trim();
  const endM = end.replace(endY, '').trim();
  return startM && endM && startM !== endM ? `${startM} – ${endM} ${endY}` : endY;
};

/** "#5eead4", 0.4 -> "rgba(94, 234, 212, 0.4)" */
export const hexToRgba = (hex, alpha) => {
  const n = parseInt(hex.replace('#', ''), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
