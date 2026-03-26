'use client';

import { motion } from 'framer-motion';
import styles from './ComparisonTable.module.css';

interface Comparison {
  feature: string;
  gymcave: boolean | string;
  compA: boolean | string;
  compB: boolean | string;
}

interface ComparisonTableProps {
  comparisons: Comparison[];
}

export default function ComparisonTable({ comparisons }: ComparisonTableProps) {
  const renderStatus = (val: boolean | string) => {
    if (val === true) return <span className={styles.check}>✓</span>;
    if (val === 'partial') return <span className={styles.partial}>◐</span>;
    return <span className={styles.cross}>✕</span>;
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">Comparison</span>
          <h2>See How We Compare</h2>
        </motion.div>

        <motion.div
          className={styles.tableWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={styles.highlight}>GymCave</th>
                <th>Competitor A</th>
                <th>Competitor B</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((c, i) => (
                <tr key={i}>
                  <td>{c.feature}</td>
                  <td className={styles.highlight}>{renderStatus(c.gymcave)}</td>
                  <td>{renderStatus(c.compA)}</td>
                  <td>{renderStatus(c.compB)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
