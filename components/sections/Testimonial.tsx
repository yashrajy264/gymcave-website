'use client';

import { motion } from 'framer-motion';
import styles from './Testimonial.module.css';

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.block}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.quoteMarkWrap} aria-hidden>
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
              <path d="M0 28V17.6C0 7.47 5.78 1.87 17.33 0L18.67 2.8C12.89 4.2 10 7.23 10 11.9V14H18V28H0ZM18 28V17.6C18 7.47 23.78 1.87 35.33 0L36.67 2.8C30.89 4.2 28 7.23 28 11.9V14H36V28H18Z" fill="currentColor"/>
            </svg>
          </div>
          <blockquote className={styles.quote}>
            GymCave made running my gym feel like a clean machine. Billing stopped being a headache,
            members stopped asking basic questions, and I stopped living in WhatsApp groups at midnight.
            It just works.
          </blockquote>
          <footer className={styles.attribution}>
            <span className={styles.name}>Vikram Choudhary</span>
            <span className={styles.role}>Owner, FitZone Elite · Pune</span>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
