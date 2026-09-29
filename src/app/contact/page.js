"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = {
      name: e.target.name.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      _honeypot: e.target._honeypot.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div>
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.heroSplit}>
            <div className={styles.heroContent} style={{ textAlign: 'left' }}>
              <div className={styles.onlineBadge}>
                <div className={styles.onlineDot}></div>
                Online & Ready to Chat
              </div>

              <h1 className={styles.contactTitle} style={{ textAlign: 'left', marginBottom: '20px' }}>Let's Talk</h1>

              <p className={styles.contactDesc} style={{ margin: '0 0 24px 0', maxWidth: '100%' }}>
                We partner with visionary founders and global enterprises to architect scalable, high-performance web systems.
              </p>

              <div className={styles.responseBadge}>
                Typical first response: under 2 hours on WhatsApp during business hours.
              </div>
              <br />
              <a href="https://wa.me/918693864378" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', marginBottom: '60px', textDecoration: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Chat on WhatsApp
              </a>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '40px' }}>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>apextechplus@gmail.com</p>
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>Phone / WhatsApp</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+91 86938 64378</p>
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Mumbai, India</p>
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>Hours</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Mon-Fri, 9 AM-5 PM IST</p>
                </div>
              </div>
            </div>

            <div className={styles.contactFormSection} id="quote-form" style={{ margin: '0', maxWidth: '100%', padding: '40px' }}>
              <h2 className={styles.contactFormTitle} style={{ marginBottom: '24px' }}>Send a Direct Message</h2>

              {status === 'success' ? (
                <div style={{ background: 'rgba(0, 184, 145, 0.1)', border: '1px solid var(--accent-color)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '8px' }}>Inquiry Received</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. Our architecture team will review your project details and get back to you shortly.</p>
                  <button onClick={() => setStatus('idle')} className="btn-primary" style={{ marginTop: '24px', padding: '10px 20px', fontSize: '1rem', border: 'none' }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Anti-Bot Honeypot */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="_honeypot">Please leave this field blank</label>
                    <input type="text" id="_honeypot" name="_honeypot" tabIndex="-1" autoComplete="off" />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" className={styles.formInput} placeholder="John Doe" required />
                    </div>
                    <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                      <label htmlFor="company">Company / Organization (Optional)</label>
                      <input type="text" id="company" className={styles.formInput} placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" className={styles.formInput} placeholder="john@example.com" required />
                    </div>
                    <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                      <label htmlFor="phone">Contact Number</label>
                      <input type="tel" id="phone" className={styles.formInput} placeholder="+1 (555) 000-0000" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Project Details</label>
                    <textarea id="message" className={`${styles.formInput} ${styles.formTextarea}`} placeholder="Tell us about your project, timeline, and budget..." required></textarea>
                  </div>
                  <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
                    {status === 'loading' ? 'Sending...' : 'Submit Inquiry \u2192'}
                  </button>
                  {status === 'error' && (
                    <p style={{ color: '#ef4444', marginTop: '16px', textAlign: 'center' }}>An error occurred. Please try again or use WhatsApp.</p>
                  )}
                </form>
              )}
            </div>
          </div>






        </div>
      </section>
    </div>
  );
}
