'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/effects/TextReveal';
import styles from './ImpactHero.module.css';

export default function ImpactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGradient} />
      <div className={`container ${styles.heroContent}`}>
        <motion.span
          className="overline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          The Impact
        </motion.span>

        <TextReveal className="display" delay={0.2}>
          The True Cost of Legacy Systems.
        </TextReveal>

        <motion.p
          className={`body-lg ${styles.heroSub}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Stop patching together 5 different tools just to run your gym. 
          See how GymCave’s unified platform transforms friction into growth.
        </motion.p>
      </div>
    </section>
  );
}
