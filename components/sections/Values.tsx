'use client';

import { motion } from 'framer-motion';
import styles from './Values.module.css';
import { Target, Lightbulb, Handshake } from 'lucide-react';

const values = [
  { icon: <Target className={styles.valueIcon} size={28} strokeWidth={1} />, title: 'Simplify Complexity', desc: 'We distill gym operations into intuitive workflows that anyone can master in minutes.' },
  { icon: <Lightbulb className={styles.valueIcon} size={28} strokeWidth={1} />, title: 'Innovate Daily', desc: 'AI-powered tools that get smarter with your gym — from barcode scanning to predictive analytics.' },
  { icon: <Handshake className={styles.valueIcon} size={28} strokeWidth={1} />, title: 'Empower Fitness', desc: 'Bridging the gap between gym owners and members with seamless communication.' },
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
              <div className={styles.valueIconWrap}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
