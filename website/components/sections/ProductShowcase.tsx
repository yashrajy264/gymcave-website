'use client';

import { motion } from 'framer-motion';
import { BarChart2, Users, CreditCard } from 'lucide-react';
import styles from './ProductShowcase.module.css';

const EASE = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: BarChart2,
    eyebrow: 'Real-time Analytics',
    title: 'Know exactly how your gym is performing.',
    body: 'Live dashboards with member check-in trends, revenue breakdowns, retention rates, and peak-hour heatmaps. Every number you need — in one view.',
    visual: 'analytics',
    flip: false,
  },
  {
    icon: CreditCard,
    eyebrow: 'Smart Billing',
    title: 'Automate revenue. Eliminate chasing payments.',
    body: 'Auto-renewing memberships, smart invoice triggers, and failed-payment retries — so every rupee reaches your account without manual effort.',
    visual: 'billing',
    flip: true,
  },
  {
    icon: Users,
    eyebrow: 'Member CRM',
    title: 'Every member, fully visible.',
    body: "Profiles, attendance history, plan details, notes, and communication logs — all in one place. Know who's at risk of leaving before they do.",
    visual: 'crm',
    flip: false,
  },
];

function VisualCard({ type }: { type: string }) {
  if (type === 'analytics') {
    const bars = [55, 70, 45, 90, 65, 80, 75, 95, 60, 85];
    return (
      <div className={styles.visual}>
        <div className={styles.visualHeader}>
          <span className={styles.visualTitle}>Check-ins — last 10 weeks</span>
          <span className={styles.badge}>Live</span>
        </div>
        <div className={styles.barChart}>
          {bars.map((h, idx) => (
            <div key={idx} className={styles.chartCol}>
              <div className={styles.chartBar} style={{ height: `${h}%` }} />
              <span className={styles.chartWeek}>W{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'billing') {
    const rows = [
      { name: 'Rohan Mehta', plan: 'Monthly Elite', status: 'Paid', amount: '₹2,499' },
      { name: 'Priya Singh', plan: 'Quarterly', status: 'Paid', amount: '₹5,999' },
      { name: 'Arjun Das', plan: 'Monthly Basic', status: 'Overdue', amount: '₹1,299' },
      { name: 'Neha Kapoor', plan: 'Annual', status: 'Paid', amount: '₹17,999' },
    ];
    return (
      <div className={styles.visual}>
        <div className={styles.visualHeader}>
          <span className={styles.visualTitle}>Billing Overview</span>
          <span className={styles.badge}>Auto-renewing</span>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Member</th><th>Plan</th><th>Status</th><th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.plan}</td>
                <td><span className={`${styles.status} ${r.status === 'Overdue' ? styles.overdue : styles.paid}`}>{r.status}</span></td>
                <td>{r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  const members = [
    { name: 'Sanya Rawat', since: 'Jan 2023', checkins: 143, risk: false },
    { name: 'Kabir Nair', since: 'Mar 2024', checkins: 12, risk: true },
    { name: 'Meera Joshi', since: 'Aug 2022', checkins: 289, risk: false },
  ];
  return (
    <div className={styles.visual}>
      <div className={styles.visualHeader}>
        <span className={styles.visualTitle}>Member Profiles</span>
      </div>
      <div className={styles.memberList}>
        {members.map(m => (
          <div key={m.name} className={styles.memberRow}>
            <div className={styles.memberAvatar}>{m.name[0]}</div>
            <div className={styles.memberInfo}>
              <span className={styles.memberName}>{m.name}</span>
              <span className={styles.memberMeta}>Member since {m.since} · {m.checkins} check-ins</span>
            </div>
            {m.risk && <span className={styles.riskTag}>At risk</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline">How it works</p>
          <h2 className={styles.sectionTitle}>
            Every tool your gym needs.<br />Nothing it doesn&apos;t.
          </h2>
        </motion.div>

        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.visual}
              className={`${styles.row} ${f.flip ? styles.flip : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
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
                <VisualCard type={f.visual} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
