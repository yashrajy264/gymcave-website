'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/effects/TextReveal';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGradient} />
      <div className={`container ${styles.heroContent}`}>
        <span className="overline">Contact Us</span>
        <TextReveal className="display" delay={0.2}>
          Let&apos;s Get You Started.
        </TextReveal>
        <motion.p
          className={`body-lg ${styles.heroSub}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Have questions? Want a demo? We&apos;ll get back within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
