import { ReactNode, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
  className?: string;
  delay?: number;
}

export default function Card({ icon, title, description, image, className = '', delay = 0 }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.card} ${className} ${image ? styles.hasImage : ''}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div
        className={styles.glow}
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(200,255,0,0.08), transparent 70%)`,
        }}
      />
      
      <div className={styles.content}>
        {icon && (
          <div className={styles.iconWrap}>
            <span className={styles.icon}>{icon}</span>
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {image && (
          <div className={styles.imageContainer}>
            <Image 
              src={image} 
              alt={title} 
              fill 
              className={styles.cardImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <span className={styles.learnMore}>
          Explore Feature <span className={styles.arrow}>→</span>
        </span>
      </div>
    </motion.div>
  );
}
