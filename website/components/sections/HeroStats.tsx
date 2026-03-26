'use client';

import { motion } from 'framer-motion';
import styles from './HeroStats.module.css';

const stats = [
  { number: '10,000+', label: 'Gyms worldwide' },
  { number: '1.2M', label: 'Athletes on platform' },
  { number: '99.9%', label: 'Uptime guaranteed' },
];

export default function HeroStats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.number}>{s.number}</span>
              <span className={styles.label}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
