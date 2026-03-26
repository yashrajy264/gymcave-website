'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import styles from './ContactForm.module.css';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  gym: z.string().min(1, 'Gym name is required'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const subjects = ['General Inquiry', 'Demo Request', 'Partnership', 'Technical Support', 'Billing'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.formGrid}>
          {/* Form Side */}
          <motion.div
            className={styles.formSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className={styles.form}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`${styles.field} ${errors.name ? styles.fieldError : ''}`}>
                    <input
                      {...register('name')}
                      id="name"
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                  </div>

                  <div className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                  </div>

                  <div className={`${styles.field} ${errors.gym ? styles.fieldError : ''}`}>
                    <input
                      {...register('gym')}
                      id="gym"
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="gym" className={styles.label}>Gym Name</label>
                    {errors.gym && <span className={styles.error}>{errors.gym.message}</span>}
                  </div>

                  <div className={`${styles.field} ${errors.subject ? styles.fieldError : ''}`}>
                    <select
                      {...register('subject')}
                      id="subject"
                      className={`${styles.input} ${styles.select}`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjects.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <label htmlFor="subject" className={`${styles.label} ${styles.selectLabel}`}>Subject</label>
                    {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
                  </div>

                  <div className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}>
                    <textarea
                      {...register('message')}
                      id="message"
                      placeholder=" "
                      className={`${styles.input} ${styles.textarea}`}
                      rows={4}
                    />
                    <label htmlFor="message" className={styles.label}>Message</label>
                    {errors.message && <span className={styles.error}>{errors.message.message}</span>}
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    fullWidth
                    disabled={isSubmitting}
                    icon={isSubmitting ? <span className={styles.spinner} /> : <span>→</span>}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className={styles.helper}>We respect your privacy. No spam ever.</p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.successIcon}>✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>Send Another</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info Side */}
          <motion.div
            className={styles.infoSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <h3>Get in Touch</h3>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉</span>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoValue}>gymcaveapp@gmail.com</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>Bengaluru, India</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <span className={styles.infoValue}>+91-6261090395</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🕐</span>
                  <div>
                    <span className={styles.infoLabel}>Response Time</span>
                    <span className={styles.infoValue}>Within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className={styles.socialRow}>
                {['𝕏', '◐', 'in', '⌘'].map((icon, i) => (
                  <a key={i} href="#" className={styles.socialBtn} aria-label="Social link">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapPin}>📍</div>
              <span>Bengaluru, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
