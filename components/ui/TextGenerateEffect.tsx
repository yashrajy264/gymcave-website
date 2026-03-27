'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './TextGenerateEffect.module.css';

const HEADLINES = [
  ['The gym OS', "that doesn't", 'get in your way.'],
  ['Run your gym.', 'Not your spreadsheet.', ''],
  ['Members. Billing.', 'Analytics.', 'All in one place.'],
  ['Built for owners', 'who want clarity,', 'not complexity.'],
];

const CYCLE_DELAY = 3000; // ms per headline

interface Props {
  className?: string;
}

export function TextGenerateEffect({ className }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhase(p => (p + 1) % HEADLINES.length);
    }, CYCLE_DELAY);
    return () => clearInterval(id);
  }, []);

  const lines = HEADLINES[phase];

  return (
    <div className={`${styles.wrap} ${className ?? ''}`} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          className={styles.block}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {lines.map((line, i) =>
            line ? (
              <span key={i} className={styles.line}>
                {line}
              </span>
            ) : null
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
