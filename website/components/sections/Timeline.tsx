import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Timeline.module.css';

const timeline = [
  { year: '2024', title: 'Idea Born', desc: 'Started from a local gym\'s frustration with spreadsheets and manual tracking.' },
  { year: 'Early 2025', title: 'First Beta', desc: '50 gyms onboarded in the first wave. Real feedback, real improvements.' },
  { year: 'Mid 2025', title: 'AI Integration', desc: 'Barcode scanning, smart analytics, and predictive insights shipped.' },
  { year: '2026', title: '500+ Gyms', desc: 'Growing the fitness tech revolution across India and beyond.' },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate the line drawing
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        }
      }
    );

    // Staggered reveal for timeline items
    const items = containerRef.current.querySelectorAll(`.${styles.timelineItem}`);
    items.forEach((item) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section className="section" ref={containerRef}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">Our Journey</span>
          <h2>From Local Gym to Global Platform</h2>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} ref={lineRef} />
          {timeline.map((t, i) => (
            <div
              key={t.year}
              className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <span className={styles.timelineYear}>{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
