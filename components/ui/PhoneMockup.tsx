'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

interface PhoneMockupProps {
  screenshotLabel: string;
  screenshotDesc?: string;
  className?: string;
  tilt?: boolean; // If true, adds the isometric 3D tilt
  imageSrc?: string;
}

export default function PhoneMockup({ 
  screenshotLabel, 
  screenshotDesc = 'Replace with App Screenshot (Aspect 9:19.5)',
  className = '',
  tilt = false,
  imageSrc
}: PhoneMockupProps) {
  
  // Style properties for the 3D phone frame
  const frameStyle: React.CSSProperties = {
    position: 'relative',
    width: '280px',
    aspectRatio: '9 / 19.5',
    backgroundColor: '#1C1C1E',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '40px',
    padding: '12px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)', // The actual physical shadow of the phone
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transformStyle: 'preserve-3d',
    margin: '0 auto',
  };

  // The notch
  const notchStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '25px',
    backgroundColor: '#1C1C1E',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    zIndex: 10,
  };

  // The screen area (placeholder for image)
  const screenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: '#09090B',
    borderRadius: '28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    overflow: 'hidden',
    position: 'relative',
  };

  const tiltProps = tilt ? {
    initial: { rotateY: -12, rotateX: 5 },
    animate: { rotateY: -10, rotateX: 4 },
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 4,
      ease: "easeInOut" as const
    }
  } : {};

  return (
    <div style={{ perspective: '1000px' }} className={className}>
      <motion.div
        style={frameStyle}
        {...tiltProps}
      >
        <div style={notchStyle} />
        
        {/* Screen Content */}
        <div style={screenStyle}>
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt={screenshotLabel}
              fill
              style={{ objectFit: 'cover' }}
              sizes="280px"
              priority
            />
          ) : (
            <div style={{ padding: '24px' }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3 style={{ color: '#FAFAFA', fontSize: 16, fontWeight: 500, marginBottom: 8, fontFamily: 'var(--font-heading)' }}>
                {screenshotLabel}
              </h3>
              <p style={{ color: '#A1A1AA', fontSize: 12, lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
                {screenshotDesc}
              </p>
            </div>
          )}
        </div>
        
        {/* Home Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40%',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '2px',
          zIndex: 10,
        }} />
      </motion.div>
    </div>
  );
}
