'use client';

import { motion } from 'framer-motion';
import styles from './MetricsDisplay.module.css';

const metrics = [
  { value: '35%', label: 'Average Churn Reduction' },
  { value: '10hrs', label: 'Saved Admin Time / Week' },
  { value: '2.5x', label: 'More Class Bookings' },
  { value: '$0', label: 'Hidden Fees' },
];

export default function MetricsDisplay() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="overline">The ROI</span>
            <h2 className="h2" style={{ margin: 'var(--space-2) 0' }}>Measurable impact from day one.</h2>
            <p className="body-lg text-secondary">
              Replacing fragmented systems with GymCave doesn&apos;t just make life easier—it actively drives revenue and retention.
            </p>
          </div>
          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <motion.div 
                key={i} 
                className={styles.metricCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'var(--accent-lime)' }}
              >
                <div className={styles.value}>{m.value}</div>
                <div className={styles.label}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
