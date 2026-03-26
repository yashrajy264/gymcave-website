import styles from './LogoStrip.module.css';

const partners = [
  'FitZone Elite', 'IronWorks', 'PeakFit', 'Titan Gym', 'ProFit Labs',
  'StrongBase', 'AptaClub', 'PulseGym', 'MoveWell', 'CoreForce',
];

export default function LogoStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.topBorder} />
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>Trusted by 10,000+ fitness businesses worldwide</p>
      </div>
      <div className={styles.marqueeWrap} aria-hidden>
        <div className={styles.marquee}>
          {[...partners, ...partners].map((name, i) => (
            <span key={i} className={styles.partner}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
