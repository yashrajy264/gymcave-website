'use client';

import { motion } from 'framer-motion';
import styles from './TechStack.module.css';

const techStack = ['Flutter', 'Firebase', 'Next.js', 'TypeScript', 'Riverpod', 'Dart'];

export default function TechStack() {
  return (
    <section className="section-sm">
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">Technology</span>
          <h2>Built with Modern Tech</h2>
        </motion.div>

        <div className={styles.techRow}>
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              className={styles.techBadge}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
