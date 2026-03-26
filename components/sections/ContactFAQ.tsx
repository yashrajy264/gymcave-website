'use client';

import { motion } from 'framer-motion';
import Accordion from '@/components/ui/Accordion';
import styles from './ContactFAQ.module.css';

const faqItems = [
  { 
    question: 'How much does GymCave cost?', 
    answer: 'GymCave offers a free starter plan for small gyms with up to 50 members. Our Pro plan starts at ₹1,999/month for unlimited members, and our Enterprise plan is custom-priced for multi-location gyms.' 
  },
  { 
    question: 'Is my data secure?', 
    answer: 'Absolutely. All data is encrypted in transit and at rest using enterprise-grade Firebase infrastructure. We perform regular security audits and comply with industry-standard data protection practices.' 
  },
  { 
    question: 'Can I migrate from another platform?', 
    answer: 'Yes! We provide free migration assistance for all Pro and Enterprise customers. Our team will help you transfer member data, payment history, and all records seamlessly.' 
  },
  { 
    question: 'Do you offer training and onboarding?', 
    answer: 'Every plan includes access to our comprehensive knowledge base and video tutorials. Pro and Enterprise customers get personalized onboarding sessions with our success team.' 
  },
  { 
    question: 'What payment methods do you support?', 
    answer: 'We support UPI, credit/debit cards, net banking, and wallet payments through Razorpay integration. International payments are supported via Stripe.' 
  },
];

export default function ContactFAQ() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </motion.div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
