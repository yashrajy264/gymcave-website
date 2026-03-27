'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FeatureDeepDive.module.css';

interface FeatureData {
  title: string;
  desc: string;
  features: string[];
  image: string;
}

interface FeatureDeepDiveProps {
  activeTab: string;
  data: FeatureData;
  isMobileCard?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function FeatureDeepDive({ activeTab, data, isMobileCard, onPrev, onNext }: FeatureDeepDiveProps) {
  return (
    <section className={isMobileCard ? styles.mobileCardSection : "section"}>
      <div className={isMobileCard ? "" : "container"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={isMobileCard ? styles.mobileDeepDive : styles.deepDive}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.deepDiveMockup} style={{ position: 'relative', width: '100%', maxWidth: '280px', margin: '0 auto' }}>
              
              {onPrev && (
                <button 
                  onClick={onPrev}
                  className="mobile-prev-btn"
                  style={{ 
                    position: 'absolute', 
                    left: '-40px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    zIndex: 20, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--primary)', 
                    color: 'var(--bg)', 
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                    cursor: 'pointer'
                  }}
                  aria-label="Previous Feature"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '-2px' }}><path d="m15 18-6-6 6-6"/></svg>
                </button>
              )}

              {onNext && (
                <button 
                  onClick={onNext}
                  className="mobile-next-btn"
                  style={{ 
                    position: 'absolute', 
                    right: '-40px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    zIndex: 20, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--primary)', 
                    color: 'var(--bg)', 
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                    cursor: 'pointer'
                  }}
                  aria-label="Next Feature"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '-2px' }}><path d="m9 18 6-6-6-6"/></svg>
                </button>
              )}

              <div className={isMobileCard ? styles.mobileImageWrap : styles.deepDiveImageWrap} style={{ width: '100%' }}>
                <Image 
                  src={data.image}
                  alt={`${data.title} Interface`}
                  width={280}
                  height={600}
                  className={styles.deepDiveImg}
                />
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
                <Button variant="primary" icon={<span style={{ fontWeight: 300 }}>→</span>} href="/contact">Try It Free</Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
