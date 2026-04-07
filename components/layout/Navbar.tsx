'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/impact', label: 'Impact' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      setScrolled(currentY > 60);

      if (currentY < 80) {
        // Always show near the top
        setHidden(false);
      } else if (delta > 4) {
        // Scrolling down — hide
        setHidden(true);
      } else if (delta < -4) {
        // Scrolling up — show
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.inset = '0';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.inset = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.inset = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── Desktop / Tablet Pill Navbar ─── */}
      <motion.nav
        className={styles.navbar}
        initial={{ y: -100, opacity: 0 }}
        animate={hidden ? { y: -90, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: hidden ? 0.3 : 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`${styles.pill} ${scrolled ? styles.pillScrolled : ''}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <img src="/images/Group 3.svg" alt="GymCave" className={styles.logoImg} />
          </Link>

          {/* Nav links */}
          <div className={styles.links}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Get Started CTA */}
          <a
            href="https://platform.gymcave.fit/login"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.loginBtn}
          >
            Get Started
          </a>

          {/* Hamburger — mobile only */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header row */}
            <div className={styles.mobileHeader}>
              <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                <img src="/images/Group 3.svg" alt="GymCave" className={styles.logoImg} />
              </Link>
              <button
                className={styles.closeBtn}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className={styles.mobileNav}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                  className={styles.mobileLinkWrap}
                >
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA buttons — pinned to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={styles.mobileCtas}
            >
              <a
                href="https://platform.gymcave.fit/login"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileLoginBtn}
              >
                Get Started
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <Link href="/contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
                Start Free Trial
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
