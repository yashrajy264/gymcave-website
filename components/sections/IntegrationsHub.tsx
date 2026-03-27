'use client';

import { motion } from 'framer-motion';
import styles from './IntegrationsHub.module.css';

interface IntegrationsHubProps {
  integrations: string[];
}

export default function IntegrationsHub({ integrations }: IntegrationsHubProps) {
  return (
    <section className="section">
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

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {integrations.map((int) => (
            <motion.div 
              key={int}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {int}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
