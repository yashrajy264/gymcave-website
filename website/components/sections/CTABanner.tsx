'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.title}>Ready to run your gym differently?</h2>
          <p className={styles.sub}>
            Join 10,000+ gym owners already on GymCave.
          </p>
          <button className={styles.cta}>
            Start Free — No Card Required
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
