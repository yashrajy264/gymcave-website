'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={`${styles.inner} noise-overlay`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.title}>Ready to run your gym differently?</h2>
          <p className={styles.sub}>
            Join gym owners already scaling with GymCave.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.cta}>
              Start Free Trial
              <ArrowRight size={16} strokeWidth={1} />
            </Link>
            <a
              href="https://platform.gymcave.fit/login"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaAccent}
            >
              Get Started
              <ArrowRight size={16} strokeWidth={1} />
            </a>
          </div>
          
          {/* Coming Soon Badges */}
          <div className={styles.comingSoonWrap}>
            <p className={styles.comingSoonLabel}>Coming soon to</p>
            <div className={styles.storeRow}>
              {/* App Store */}
              <div className={styles.storeBadge}>
                 <img src="/images/NicePng_app-store-logo-png_2356693.png" alt="App Store" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} className={styles.storeImg} />
              </div>

              {/* Google Play */}
              <div className={styles.storeBadge}>
                <img src="/images/5a902dbf7f96951c82922875.png" alt="Google Play" style={{ height: '60px', width: 'auto', objectFit: 'contain', margin: '-9px 0' }} className={styles.storeImg} />
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
