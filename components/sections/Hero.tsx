'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './Hero.module.css';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import LightRays from '../ui/LightRays';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll over the 300vh section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Text fades out early in the scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  return (
    <section ref={sectionRef} className={styles.heroWrapper}>
      <div className={styles.heroSticky}>
        
        {/* LightRays WebGL Background */}
        <div className={styles.lightRaysLayer} aria-hidden="true">
          <LightRays
            raysColor="#C8FF00"
            raysOrigin="top-center"
            raysSpeed={0.35}
            lightSpread={1.4}
            rayLength={1.8}
            fadeDistance={0.85}
            saturation={0.6}
            followMouse={true}
            mouseInfluence={0.08}
            pulsating={false}
          />
        </div>

        <motion.div 
          className={`container ${styles.heroContent}`}
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Eyebrow */}
          <motion.p
            className={`overline ${styles.eyebrow}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Gym Management, Reimagined
          </motion.p>

          {/* Headline — Cycling TextGenerateEffect */}
          <TextGenerateEffect className={styles.headline} />

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
            <Link href="/contact" className={styles.primaryCta}>
              Start Free Trial
              <ArrowRight size={16} strokeWidth={1} />
            </Link>
            <a
              href="https://platform.gymcave.fit/login"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accentCta}
            >
              Get Started
              <ArrowRight size={16} strokeWidth={1} />
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
