'use client';

import { motion } from 'framer-motion';
import styles from './BrandStory.module.css';

const storyBlocks = [
  {
    year: '2024',
    heading: 'The Problem We Lived',
    body: 'Two gym owners. One shared frustration. Spreadsheets for billing. WhatsApp groups for members. Zero real-time insight. GymCave was born out of this chaos — not out of a pitch deck.',
  },
  {
    year: '2025',
    heading: 'Building in the Trenches',
    body: 'We spent over a year inside real gyms, talking to owners, trainers, and members. Every feature in GymCave exists because someone in a gym asked for it. No guesswork.',
  },
  {
    year: '2026',
    heading: 'The Operating System for Gyms',
    body: "Today GymCave is a complete platform — billing, CRM, workouts, inventory, gamification. And we're just getting started. The gym industry runs on trust, and we're here to earn it.",
  },
];

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Our Story</span>
          <h2 className={styles.heading}>We didn&apos;t set out to build software.<br />We set out to fix a broken industry.</h2>
        </motion.div>

        <div className={styles.timeline}>
          {storyBlocks.map((block, i) => (
            <motion.div
              key={block.year}
              className={styles.block}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={styles.year}>{block.year}</div>
              <div className={styles.blockContent}>
                <h3 className={styles.blockHeading}>{block.heading}</h3>
                <p className={styles.blockBody}>{block.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.blockquote
          className={styles.pullQuote}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          &ldquo;Every great gym runs on relationships. GymCave gives you the tools to nurture them at scale.&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
