'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { XCircle, CheckCircle } from 'lucide-react';
import styles from './ComparisonSplit.module.css';

const comparisons = [
  {
    category: 'Gym Operations',
    old: 'Manual entries, chaotic spreadsheets, disconnected apps',
    new: 'End-to-end management directly from the unified admin app',
  },
  {
    category: 'Inventory & Billing',
    old: 'Disorganized stock tracking, messy payments, lost revenue',
    new: 'Automated inventory alerts, seamless billing, transparent tracking',
  },
  {
    category: 'Member Experience',
    old: 'No dedicated portal, generic workout plans, zero insights',
    new: 'Premium native member app with 1-tap bookings and personalized dashboards',
  },
  {
    category: 'Health Tracking',
    old: 'Members guess their progress or use scattered notebook logs',
    new: 'Detailed, actionable health and cardio reports synced to the app',
  },
  {
    category: 'Lead Generation & CRM',
    old: 'Lost DMs, forgotten follow-ups, messy sales pipelines',
    new: 'Automated lead funnels, targeted campaigns, seamless conversion',
  },
  {
    category: 'Staff Management',
    old: 'Uncoordinated rotas, WhatsApp groups, missed shifts',
    new: 'Built-in scheduling, role-based access, automated payroll prep',
  },
  {
    category: 'Access Control',
    old: 'Prone-to-cheat physical cards, manual desk check-ins',
    new: 'Secure biometric or dynamic QR code fast-pass integration',
  },
  {
    category: 'Nutrition Planning',
    old: 'Generic PDF printouts, untracked macros',
    new: 'In-app custom meal planning and macro tracking synced with workouts',
  },
  {
    category: 'Class Scheduling',
    old: 'Back-and-forth messaging, overbooked slots, chaotic waitlists',
    new: '1-click in-app bookings with automated capacity and waitlist management',
  },
  {
    category: 'Community Engagement',
    old: 'Zero interaction outside the physical gym floor',
    new: 'In-app leaderboards, challenges, and a thriving digital community',
  }
];

export default function ComparisonSplit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const rows = containerRef.current.querySelectorAll(`.${styles.row}`);
    
    rows.forEach((row, i) => {
      gsap.fromTo(row,
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">The difference is night and day.</h2>
          <p className="body-lg text-muted">Why the top 1% of gyms are migrating to GymCave.</p>
        </div>

        <div className={styles.table}>
          <div className={`${styles.row} ${styles.headerRow}`}>
            <div className={styles.cell}></div>
            <div className={`${styles.cell} ${styles.oldHeader}`}>The Old Way</div>
            <div className={`${styles.cell} ${styles.newHeader}`}>The GymCave Way</div>
          </div>

          {comparisons.map((item, i) => (
            <div key={i} className={styles.row}>
              <div className={`${styles.cell} ${styles.categoryCell}`}>
                {item.category}
              </div>
              <div className={`${styles.cell} ${styles.oldCell}`}>
                <XCircle size={18} className={styles.iconOld} />
                <span>{item.old}</span>
              </div>
              <div className={`${styles.cell} ${styles.newCell}`}>
                <CheckCircle size={18} className={styles.iconNew} />
                <span>{item.new}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
