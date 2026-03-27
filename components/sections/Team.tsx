'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Team.module.css';
import Image from 'next/image';

const team = [
  { 
    id: 'yashraj',
    name: 'Yashraj Singh Yadav', 
    role: 'Founder & CEO', 
    image: '/images/yashraj singh yadav.png',
    bio: 'Product development and design visionary. Leads the strategic direction of GymCave, focusing on building user-centric solutions that simplify gym management.'
  },
  { 
    id: 'adarsh',
    name: 'Adarsh Jain', 
    role: 'Founder & Operations Head', 
    image: '/images/Adarsh Jain.png',
    bio: 'Chief of Operations with a robust background in health studies and pharmaceuticals. Drives the technical architecture and operational efficiency of the platform.'
  },
  { 
    id: 'prateek',
    name: 'Prateek Gupta', 
    role: 'Chief of Customer Relations', 
    image: '/images/Prateek gupta.png',
    bio: 'Pharmaceutical professional with an extensive background in health and cardio studies. Ensures GymCave members receive unparalleled health insights and support.'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Team() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="overline">Our Team</span>
          <h2>The People Behind GymCave</h2>
        </motion.div>

        <motion.div 
          className={styles.teamGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {team.map((member) => (
            <motion.div
              layout
              key={member.id}
              variants={cardVariants}
              className={`${styles.teamCard} ${expandedId === member.id ? styles.expanded : ''}`}
              onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div layout className={styles.teamAvatar}>
                <Image src={member.image} alt={member.name} fill className={styles.teamImage} sizes="140px" />
              </motion.div>
              <div className={styles.teamInfo}>
                <motion.h4 layout className={styles.teamName}>{member.name}</motion.h4>
                <motion.span layout className={styles.teamRole}>{member.role}</motion.span>
                
                <AnimatePresence>
                  {expandedId === member.id && (
                    <motion.div 
                      className={styles.teamBio}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{member.bio}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div layout className={styles.expandIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expandedId === member.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
