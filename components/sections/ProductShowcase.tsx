'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { BarChart2, Users, CreditCard, Dumbbell, Bell, Activity } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from './ProductShowcase.module.css';

const EASE = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: BarChart2,
    eyebrow: 'Real-time Analytics',
    title: 'Know exactly how your gym is performing.',
    body: 'Live dashboards with member check-in trends, revenue breakdowns, retention rates, and peak-hour heatmaps. Every number you need — in one view.',
    image: '/images/Screenshot_20260327_141730.png',
  },
  {
    icon: Users,
    eyebrow: 'Member CRM',
    title: 'Every member, fully visible.',
    body: "Profiles, attendance history, plan details, notes, and communication logs — all in one place. Know who's at risk of leaving before they do.",
    image: '/images/Screenshot_20260327_141859.png',
  },
  {
    icon: Activity,
    eyebrow: 'Attendance Tracking',
    title: 'Automated check-in, zero friction.',
    body: 'QR-based entry, attendance logs, and real-time occupancy tracking. Always know who\'s in your gym, right now.',
    image: '/images/Screenshot_20260327_141919.png',
  },
  {
    icon: CreditCard,
    eyebrow: 'Smart Billing',
    title: 'Automate revenue. Eliminate chasing payments.',
    body: 'Auto-renewing memberships, smart invoice triggers, and failed-payment retries — so every rupee reaches your account without manual effort.',
    image: '/images/Screenshot_20260327_141957.png',
  },
  {
    icon: Dumbbell,
    eyebrow: 'Workout Plans',
    title: 'Personalized plans at scale.',
    body: 'Build and assign workout plans to individual members or groups. Track progress and adjust routines without back-and-forth messages.',
    image: '/images/Screenshot_20260327_142058.png',
  },
  {
    icon: Bell,
    eyebrow: 'Smart Notifications',
    title: 'Stay ahead of every renewal.',
    body: 'Automated reminders for expiring memberships, payment failures, and check-in anomalies — so nothing slips through.',
    image: '/images/Screenshot_20260327_142216.png',
  },
];

export default function ProductShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="overline">How it works</p>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            Every tool your gym needs.
            <br />Nothing it doesn&apos;t.
          </motion.h2>
        </motion.div>

        <div className={styles.rows}>
          {features.map((f, i) => {
            const Icon = f.icon;
            const flip = i % 2 !== 0; // Alternate layout every row
            
            return (
              <motion.div
                key={f.eyebrow}
                className={`${styles.row} ${flip ? styles.flip : ''}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              >
                <div className={styles.textCol}>
                  <div className={styles.iconWrap}>
                    <Icon size={20} strokeWidth={1.75} className={styles.icon} />
                  </div>
                  <p className={`overline ${styles.featureEyebrow}`}>{f.eyebrow}</p>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureBody}>{f.body}</p>
                </div>
                
                <div className={styles.visualCol}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={f.image}
                      alt={f.eyebrow}
                      width={800}
                      height={600}
                      className={styles.screenshotImg}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

