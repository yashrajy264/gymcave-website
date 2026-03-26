'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/effects/TextReveal';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGradient} />
      <div className={`container ${styles.heroContent}`}>
        <span className="overline">Our Mission</span>
        <TextReveal className="display" delay={0.2}>
          We&apos;re building the operating system for modern gyms.
        </TextReveal>
        <motion.p
          className={`body-lg ${styles.heroSub}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Born from the frustration of spreadsheets and sticky notes.
          Built for the future of fitness management.
        </motion.p>
      </div>
    </section>
  );
}
