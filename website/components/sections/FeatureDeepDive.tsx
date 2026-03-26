'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './FeatureDeepDive.module.css';

interface FeatureData {
  title: string;
  desc: string;
  features: string[];
  mockupItems: string[];
}

interface FeatureDeepDiveProps {
  activeTab: string;
  data: FeatureData;
}

export default function FeatureDeepDive({ activeTab, data }: FeatureDeepDiveProps) {
  return (
    <section className="section">
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.deepDive}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.deepDiveMockup}>
              <div className={styles.mockupContainer}>
                {activeTab === 'Workouts' || activeTab === 'CRM & Members' || activeTab === 'Notifications' ? (
                  <div className={styles.imageMockupWrap}>
                    <Image 
                      src="/images/gym_mobile_mockup.png" 
                      alt={`${activeTab} Mockup`}
                      width={420}
                      height={840}
                      className={styles.mockupImage}
                      priority
                    />
                    <div className={styles.mockupOverlay} />
                  </div>
                ) : (
                  <div className={styles.miniMockup}>
                    <div className={styles.miniHeader}>
                      <span className={styles.miniDot} />
                      <span className={styles.miniDot} />
                      <span className={styles.miniDot} />
                    </div>
                    <div className={styles.miniBody}>
                      {data.mockupItems.map((item, i) => (
                        <div key={i} className={styles.miniRow}>
                          <span className={styles.miniLabel}>{item.split(':')[0]}</span>
                          <span className={styles.miniValue}>{item.split(':')[1]}</span>
                        </div>
                      ))}
                      <div className={styles.miniChart}>
                        {[60, 75, 45, 90, 65, 80].map((h, i) => (
                          <div key={i} className={styles.miniBar} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.deepDiveContent}>
              <h2>{data.title}</h2>
              <p className="body-lg" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
                {data.desc}
              </p>
              <ul className={styles.featureList}>
                {data.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className={styles.checkIcon}>✓</span>
                    {f}
                  </motion.li>
                ))}
              </ul>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <Button variant="primary" icon={<span>→</span>}>Try It Free</Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
