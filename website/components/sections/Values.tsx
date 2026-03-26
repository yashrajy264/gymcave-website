'use client';

import { motion } from 'framer-motion';
import styles from './Values.module.css';

const values = [
  { icon: '🎯', title: 'Simplify Complexity', desc: 'We distill gym operations into intuitive workflows that anyone can master in minutes.' },
  { icon: '💡', title: 'Innovate Daily', desc: 'AI-powered tools that get smarter with your gym — from barcode scanning to predictive analytics.' },
  { icon: '🤝', title: 'Empower Fitness', desc: 'Bridging the gap between gym owners and members with seamless communication.' },
];

export default function Values() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">Our Values</span>
          <h2>What Drives Us</h2>
        </motion.div>

        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
