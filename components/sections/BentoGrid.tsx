'use client';

import { motion } from 'framer-motion';
import { CreditCard, Users, BarChart2, Dumbbell, ShieldCheck, Smartphone } from 'lucide-react';
import styles from './BentoGrid.module.css';

const features = [
  { icon: CreditCard, title: 'Automated Billing', desc: 'Auto-renewing plans, smart invoices, and payment retries.' },
  { icon: Users, title: 'Member CRM', desc: 'Full profiles, attendance history, and churn signals.' },
  { icon: BarChart2, title: 'Live Analytics', desc: 'Revenue, retention, and check-in trends at a glance.' },
  { icon: Dumbbell, title: 'Workout Builder', desc: 'Create and assign plans with a drag-and-drop editor.' },
  { icon: ShieldCheck, title: 'Access Control', desc: 'QR-based entry with time-slot and plan enforcement.' },
  { icon: Smartphone, title: 'Member App', desc: 'iOS & Android app for check-ins, workouts, and payments.' },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function BentoGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="overline">Platform</p>
          <h2 className={styles.title}>Everything in one place.</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} className={styles.card} variants={item}>
                <div className={styles.iconBox}>
                  <Icon size={18} strokeWidth={1} className={styles.icon} />
                </div>
                <h4 className={styles.cardTitle}>{f.title}</h4>
                <p className={styles.cardDesc}>{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
