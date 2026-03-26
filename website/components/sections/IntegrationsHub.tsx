import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import styles from './IntegrationsHub.module.css';

interface IntegrationsHubProps {
  integrations: string[];
}

export default function IntegrationsHub({ integrations }: IntegrationsHubProps) {
  const hubRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hubRef.current || !ringRef.current) return;

    // Continuous rotation for the ring
    const rotation = gsap.to(ringRef.current, {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: 'none',
    });

    // Pulse effect for the center
    gsap.to(`.${styles.hubPulse}`, {
      scale: 1.3,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 0.5,
    });

    return () => {
      rotation.kill();
    };
  }, []);

  return (
    <section className="section" ref={hubRef}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">Integrations</span>
          <h2>Connects With Your Stack</h2>
        </motion.div>

        <div className={styles.integrationsHub}>
          <div className={styles.hubCenter}>
            <span>GYMCAVE</span>
            <div className={styles.hubPulse} />
            <div className={styles.hubPulse} />
          </div>
          <div className={styles.hubRing} ref={ringRef}>
            {integrations.map((int, i) => {
              const angle = i * (360 / integrations.length);
              return (
                <div
                  key={int}
                  className={styles.hubNode}
                  style={{
                    transform: `rotate(${angle}deg) translate(clamp(110px, 15vw, 150px)) rotate(-${angle}deg)`,
                  }}
                >
                  <div className={styles.nodeInner}>
                    {int}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
