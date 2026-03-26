'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socials = [
  { label: 'Twitter', icon: <Twitter size={18} />, href: '#' },
  { label: 'Instagram', icon: <Instagram size={18} />, href: '#' },
  { label: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' },
  { label: 'GitHub', icon: <Github size={18} />, href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="/images/Group 3.svg" alt="GymCave" className={styles.logoImg} />
          </div>
          <p className={styles.tagline}>
            The operating system for modern gyms.
          </p>
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.label} href={s.href} className={styles.socialIcon} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className={styles.column}>
            <h4 className={styles.columnTitle}>{category}</h4>
            <ul>
              {links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>© 2026 GymCave. All rights reserved.</p>
      </div>
    </footer>
  );
}
