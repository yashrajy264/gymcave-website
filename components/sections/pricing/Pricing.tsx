'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <span className="overline">Simple, Transparent Pricing</span>
          <h1 className={styles.title}>Invest in Your Gym&apos;s Future</h1>
          <p className={styles.subtitle}>
            Choose the model that aligns with your capital structure. Premium features included in both plans.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Plan 1 */}
          <div className={styles.card}>
            <div className={styles.popularBadge}>Most Cost-Effective</div>
            <h3 className={styles.planName}>Hybrid License Plan</h3>
            <p className={styles.planDesc}>Best for established gyms looking to minimize long-term overhead.</p>
            
            <div className={styles.priceDisplay}>
               <span className={styles.currency}>₹</span>
               <span className={styles.amount}>1,000</span>
               <span className={styles.period}>/month</span>
               <span className={styles.oneTime}>+ ₹15,000 one-time setup fee</span>
            </div>

            <ul className={styles.features}>
              <li className={styles.feature}><Check className={styles.icon} size={20} strokeWidth={1} /> Perpetual software license</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} strokeWidth={1} /> Comprehensive white-glove onboarding</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} strokeWidth={1} /> Custom branded native app</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} strokeWidth={1} /> Priority 24/7 dedicated support</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} strokeWidth={1} /> Unlimited staff and member accounts</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} strokeWidth={1} /> Free regular maintenance and server costs</li>
            </ul>

            <button className={`${styles.cta} ${styles.ctaPrimary}`}>Get Dedicated License</button>
          </div>

          {/* Plan 2 */}
          <div className={styles.card}>
            <h3 className={styles.planName}>Subscription Plan</h3>
            <p className={styles.planDesc}>Perfect for new or expanding gyms wanting zero upfront software capital expenditure.</p>
            
            <div className={styles.priceDisplay}>
               <span className={styles.currency}>₹</span>
               <span className={styles.amount}>3,500</span>
               <span className={styles.period}>/month</span>
               <span className={styles.oneTime}>Zero setup fees. Cancel anytime.</span>
            </div>

            <ul className={styles.features}>
              <li className={styles.feature}><Check className={styles.icon} size={20} /> Full access to all GymCave OS features</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} /> Self-service setup and automated migration</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} /> GymCave branded native app integration</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} /> Standard email and chat support</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} /> Core reporting and analytics dashboard</li>
              <li className={styles.feature}><Check className={styles.icon} size={20} /> Automatic feature updates</li>
            </ul>

            <button className={`${styles.cta} ${styles.ctaSecondary}`}>Start Monthly Subscription</button>
          </div>
        </div>
      </div>
    </section>
  );
}
