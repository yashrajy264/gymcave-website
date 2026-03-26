'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>

        {/* Eyebrow */}
        <motion.p
          className={`overline ${styles.eyebrow}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Gym Management, Reimagined
        </motion.p>

        {/* Headline */}
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          The gym OS that doesn&apos;t<br />
          get in your way.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          One platform for billing, members, analytics, and workouts.
          Built for gym owners who want clarity, not complexity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className={styles.primaryCta}>
            Start Free Trial
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <button className={styles.ghostCta}>Watch a 2-min demo</button>
        </motion.div>

        {/* Mockup */}
        <motion.div
          className={styles.mockupWrap}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: mockupY, opacity: mockupOpacity }}
        >
          <div className={styles.mockupFrame}>
            {/* Top bar dots */}
            <div className={styles.mockupBar}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            {/* Dashboard content */}
            <div className={styles.mockupBody}>
              {/* Sidebar */}
              <div className={styles.sidebar}>
                {['Dashboard', 'Members', 'Billing', 'Analytics', 'Plans'].map((item, i) => (
                  <div key={item} className={`${styles.sideItem} ${i === 0 ? styles.sideItemActive : ''}`}>
                    <span className={styles.sideItemDot} />
                    {item}
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className={styles.mainContent}>
                <div className={styles.statsRow}>
                  {[
                    { label: 'Active Members', value: '1,284' },
                    { label: 'Revenue MTD', value: '₹4.2L' },
                    { label: 'Check-ins Today', value: '312' },
                  ].map((s) => (
                    <div key={s.label} className={styles.statCard}>
                      <span className={styles.statValue}>{s.value}</span>
                      <span className={styles.statLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.chartPlaceholder}>
                  <div className={styles.chartInner}>
                    {[40, 65, 45, 80, 60, 90, 75, 95, 70, 85, 60, 78].map((h, i) => (
                      <div
                        key={i}
                        className={styles.bar}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <span className={styles.chartLabel}>Member check-ins — last 12 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
