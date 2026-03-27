import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — GymCave',
  description: 'Read the Terms of Service for using the GymCave gym management platform.',
};

const sections = [
  { id: 'agreement', title: 'Agreement to Terms' },
  { id: 'services', title: 'Our Services' },
  { id: 'account', title: 'Your Account' },
  { id: 'payments', title: 'Payments & Billing' },
  { id: 'acceptable-use', title: 'Acceptable Use' },
  { id: 'ip', title: 'Intellectual Property' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'termination', title: 'Termination' },
  { id: 'governing-law', title: 'Governing Law' },
];

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <span className="overline">Legal</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: March 27, 2026</p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.toc}>
          <p className={styles.tocTitle}>On This Page</p>
          <ul>
            {sections.map(s => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={styles.tocLink}>{s.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        <article className={styles.content}>
          <section id="agreement">
            <h2>Agreement to Terms</h2>
            <p>By accessing or using the GymCave platform ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part, you may not access the Service. These terms apply to all visitors, users, and others who access or use the Service.</p>
          </section>

          <section id="services">
            <h2>Our Services</h2>
            <p>GymCave provides a gym management platform including member management, payment processing, workout tracking, inventory management, and analytics. We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.</p>
          </section>

          <section id="account">
            <h2>Your Account</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use at <a href="mailto:gymcaveapp@gmail.com">gymcaveapp@gmail.com</a>.</p>
            <p>You must provide accurate and complete information during registration and keep it up to date. Accounts found to be using false information may be terminated.</p>
          </section>

          <section id="payments">
            <h2>Payments & Billing</h2>
            <p>Some features of GymCave require a paid subscription. By selecting a paid plan, you agree to pay all applicable fees as described on our Pricing page. Fees are charged in advance on a monthly or annual basis and are non-refundable except as required by law. We reserve the right to change pricing with 30 days' notice.</p>
          </section>

          <section id="acceptable-use">
            <h2>Acceptable Use</h2>
            <p>You agree not to use GymCave to:</p>
            <ul>
              <li>Violate any law or regulation.</li>
              <li>Upload or transmit viruses, malware, or other harmful code.</li>
              <li>Collect or harvest user data without consent.</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
              <li>Use the Service to send unsolicited messages or spam.</li>
              <li>Reverse-engineer, decompile, or attempt to extract our source code.</li>
            </ul>
          </section>

          <section id="ip">
            <h2>Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of GymCave and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.</p>
            <p>Your data remains your property. By using the Service, you grant us a limited license to use your data solely for operating and improving the platform.</p>
          </section>

          <section id="liability">
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, GymCave shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of the Service.</p>
            <p>Our total liability to you for any claim arising out of or related to these Terms shall not exceed the amount you paid us in the twelve months prior to the event giving rise to the claim.</p>
          </section>

          <section id="termination">
            <h2>Termination</h2>
            <p>We may suspend or terminate your account at our discretion if we believe you have violated these Terms or engaged in fraudulent, abusive, or harmful behavior. Upon termination, your right to use the Service immediately ceases. You may export your data before termination upon request.</p>
          </section>

          <section id="governing-law">
            <h2>Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict-of-law provisions. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.</p>
          </section>

          <div className={styles.backRow}>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
