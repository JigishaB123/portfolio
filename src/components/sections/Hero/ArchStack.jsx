import React, { useEffect, useRef } from 'react';
import { architecture } from '../../../data/architecture';
import { hexToRgba, prefersReducedMotion } from '../../../utils/helpers';

// Decorative geometry (percent positions on each plate)
const NODE_SPOTS = [[40, 25], [78, 17], [64, 40], [30, 44], [84, 34]];
const BEAMS = [[22, 22], [70, 40], [44, 64]];
const PACKETS = [[22, 22, 0], [70, 40, 1.1], [44, 64, 2.2], [22, 22, 1.7], [70, 40, 2.8]];

/**
 * Isometric CSS-3D stack of system layers with "request packets"
 * falling through them. Tilts with the pointer; expands on hover.
 */
const ArchStack = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let frame;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = stackRef.current;
        if (!el) return;
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty('--rz', `${-42 + x * 16}deg`);
        el.style.setProperty('--rx', `${58 - y * 10}deg`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const topIndex = architecture.length - 1;

  return (
    <div className="arch" aria-label="Layers of the stack I work across" role="img">
      <div className="arch__stack" ref={stackRef} style={{ '--layers': topIndex }}>
        {BEAMS.map(([x, y]) => (
          <div key={`b${x}${y}`} className="arch__beam" style={{ left: `${x}%`, top: `${y}%` }} />
        ))}

        {architecture.map((layer, i) => (
          <div
            key={layer.id}
            className="arch__layer"
            style={{ '--i': i, '--c': layer.color, '--glow': hexToRgba(layer.color, 0.45) }}
          >
            {NODE_SPOTS.slice(0, 2 + (i % 3)).map(([x, y]) => (
              <span key={`${x}${y}`} className="arch__node" style={{ left: `${x}%`, top: `${y}%` }} />
            ))}
            <span className="arch__badge">{layer.id}</span>
            <div className="arch__label">
              <div>
                <div className="arch__idx">
                  {layer.id} · {layer.label}
                </div>
                <div className="arch__name">{layer.name}</div>
                <div className="arch__tags">{layer.tags.join(' · ')}</div>
              </div>
            </div>
          </div>
        ))}

        {PACKETS.map(([x, y, delay], i) => (
          <div
            key={`p${i}`}
            className="arch__packet"
            style={{ left: `${x}%`, top: `${y}%`, '--delay': `${delay}s`, '--d': `${3 + (delay % 1)}s` }}
          />
        ))}
      </div>
      {/* <div className="arch__caption">hover to expand the stack</div> */}
    </div>
  );
};

export default ArchStack;
