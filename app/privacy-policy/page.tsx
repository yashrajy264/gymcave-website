import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — GymCave',
  description: 'Learn how GymCave collects, uses, and protects your data.',
};

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'data-collected', title: 'Data We Collect' },
  { id: 'how-we-use', title: 'How We Use It' },
  { id: 'data-sharing', title: 'Data Sharing' },
  { id: 'security', title: 'Security' },
  { id: 'rights', title: 'Your Rights' },
  { id: 'contact', title: 'Contact Us' },
  { id: 'updates', title: 'Updates to This Policy' },
];

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <span className="overline">Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
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
          <section id="intro">
            <h2>Introduction</h2>
            <p>GymCave ("we", "our", or "us") operates the GymCave gym management platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, or mobile application.</p>
            <p>By using GymCave, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our services.</p>
          </section>

          <section id="data-collected">
            <h2>Data We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul>
              <li><strong>Account information:</strong> Name, email address, phone number, and gym name when you register.</li>
              <li><strong>Member data:</strong> Information about your gym members that you input into the platform (names, memberships, payment history).</li>
              <li><strong>Usage data:</strong> Log files, device identifiers, IP address, browser type, and pages visited to improve our service.</li>
              <li><strong>Payment information:</strong> Processed through third-party payment processors. We do not store raw card details.</li>
              <li><strong>Communications:</strong> Messages you send to our support team.</li>
            </ul>
          </section>

          <section id="how-we-use">
            <h2>How We Use It</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide, operate, and improve the GymCave platform.</li>
              <li>Send transactional emails and product updates (you can opt out).</li>
              <li>Analyze usage trends to enhance the user experience.</li>
              <li>Investigate and prevent fraud, abuse, or security incidents.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section id="data-sharing">
            <h2>Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li><strong>Service providers:</strong> Trusted third-party vendors who help us operate the platform (e.g., cloud hosting, email delivery, payment processing).</li>
              <li><strong>Legal requirements:</strong> If required by law or in response to valid legal processes.</li>
              <li><strong>Business transfers:</strong> In connection with any merger, acquisition, or sale of assets, with prior notice to you.</li>
            </ul>
          </section>

          <section id="security">
            <h2>Security</h2>
            <p>We implement industry-standard security measures including data encryption in transit (TLS) and at rest. Access to user data within our team is restricted on a need-to-know basis. While we strive to protect your data, no transmission over the internet is 100% secure. We encourage you to use a strong password and keep your credentials confidential.</p>
          </section>

          <section id="rights">
            <h2>Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data ("right to be forgotten").</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Data portability — receive your data in a machine-readable format.</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:gymcaveapp@gmail.com">gymcaveapp@gmail.com</a>.</p>
          </section>

          <section id="contact">
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please reach out:</p>
            <ul>
              <li>Email: <a href="mailto:gymcaveapp@gmail.com">gymcaveapp@gmail.com</a></li>
              <li>Location: Bengaluru, India</li>
            </ul>
          </section>

          <section id="updates">
            <h2>Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice in the app. Your continued use of GymCave after changes constitutes your acceptance of the updated policy.</p>
          </section>

          <div className={styles.backRow}>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
