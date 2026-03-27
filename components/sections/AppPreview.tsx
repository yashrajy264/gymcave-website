import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart3, LineChart, PieChart } from 'lucide-react';
import styles from './AppPreview.module.css';

export default function AppPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <PieChart size={14} strokeWidth={1} />
            <span>Advanced Analytics</span>
          </div>
          <h2 className="h2">Decisions backed by data.</h2>
          <p className="body-lg text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Get a birds-eye view of your entire business. Track member retention, 
            revenue trends, and facility usage with our lightning-fast analytics engine.
          </p>
        </div>

        <motion.div 
          className={styles.browserWrapper}
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.browserHeader}>
            <div className={styles.browserDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.browserAddress}>
              gymcave.io/analytics/dashboard
            </div>
          </div>
          <div className={styles.browserContent}>
            <Image 
              src="/images/7.png" 
              alt="GymCave Analytics Dashboard" 
              width={1200}
              height={800}
              className={styles.dashboardImage}
              priority
            />
          </div>
          
          <div className={styles.floatingStats}>
            <div className={styles.statCard}>
              <BarChart3 className={styles.statIcon} strokeWidth={1} />
              <div className={styles.statValue}>+24%</div>
              <div className={styles.statLabel}>Monthly Growth</div>
            </div>
            <div className={styles.statCard}>
              <LineChart className={styles.statIcon} strokeWidth={1} />
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>Retention Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
