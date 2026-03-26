'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/effects/TextReveal';
import styles from './FeaturesHero.module.css';

interface FeaturesHeroProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function FeaturesHero({ tabs, activeTab, setActiveTab }: FeaturesHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGradient} />
      <div className={`container ${styles.heroContent}`}>
        <span className="overline">Features</span>
        <TextReveal className="display" delay={0.2}>
          Everything Your Gym Needs. Nothing It Doesn&apos;t.
        </TextReveal>

        {/* Pill Tabs */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
