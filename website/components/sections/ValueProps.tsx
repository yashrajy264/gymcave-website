import { CheckCircle2, TrendingUp, Clock, Users2 } from 'lucide-react';
import styles from './ValueProps.module.css';

const props = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Increase Revenue',
    description: 'Our automated billing and renewal systems reduce churn by up to 35% in the first 6 months.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Save 10+ Hours/Week',
    description: 'Automate tedious administrative tasks and spend more time on what matters — your members.',
  },
  {
    icon: <Users2 size={24} />,
    title: 'Superior Experience',
    description: 'Give your members a premium mobile app that makes tracking workouts and booking classes a breeze.',
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: 'Scalable Infrastructure',
    description: 'Whether you have one gym or a hundred, our platform scales with you without the complexity.',
  },
];

export default function ValueProps() {
  return (
    <section className="section" style={{ background: 'var(--bg-black)', borderTop: '1px solid var(--border-default)' }}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <span className="overline">Why GymCave</span>
            <h2 className="h2Highlight">The last gym management software you&apos;ll ever need.</h2>
            <p className="body-lg text-secondary">
              We didn&apos;t just build another CRM. We built a growth engine for your fitness business.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15k+</div>
                <div className={styles.statLabel}>Active Members</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>99.9%</div>
                <div className={styles.statLabel}>Uptime SLA</div>
              </div>
            </div>
          </div>

          <div className={styles.propsGrid}>
            {props.map((p) => (
              <div key={p.title} className={styles.propCard}>
                <div className={styles.propIcon}>{p.icon}</div>
                <div className={styles.propContent}>
                  <h3 className={styles.propTitle}>{p.title}</h3>
                  <p className={styles.propDesc}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
