"use client";
import Link from 'next/link';
import styles from './contact.module.css';

export default function Contact() {
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
                We're not a support ticket queue. We're a small, expert team that responds fast and takes your problem seriously.
              </p>

              <div className={styles.responseBadge}>
                Typical first response: under 2 hours on WhatsApp during market hours.
              </div>
              <br />
              <Link href="#schedule" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', marginBottom: '40px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Book a Schedule Call
              </Link>
            </div>

            <div className={styles.contactFormSection} id="quote-form" style={{ margin: '0', maxWidth: '100%', padding: '40px' }}>
              <h2 className={styles.contactFormTitle} style={{ marginBottom: '24px' }}>Send a Direct Message</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className={styles.formInput} placeholder="John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className={styles.formInput} placeholder="john@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" className={`${styles.formInput} ${styles.formTextarea}`} placeholder="Tell me about your project, timeline, and budget..." required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}>
                  Submit Inquiry &rarr;
                </button>
              </form>
            </div>
          </div>

          <div className={styles.inquirySection}>
            <h2 className={styles.inquiryTitle}>Choose Your Inquiry Type</h2>

            <div className={styles.inquiryGrid}>

              {/* Card 1 */}
              <div className={styles.inquiryCard}>
                <div className={styles.inquiryIcon} style={{ color: '#00b891' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <h3 className={styles.inquiryCardTitle}>Quick Question / Discussion</h3>
                <p className={styles.inquiryCardDesc}>Direct conversation with a senior developer.</p>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Best channel:</span>
                  <span className={styles.inquiryMetaValue}>WhatsApp</span>
                </div>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Response time:</span>
                  <span className={styles.inquiryMetaValue}>Under 2 hours</span>
                </div>
                <Link href="#" className={styles.inquiryLink}>Open WhatsApp Chat &rarr;</Link>
              </div>

              {/* Card 2 */}
              <div className={styles.inquiryCard}>
                <div className={styles.inquiryIcon} style={{ color: '#3b82f6' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h3 className={styles.inquiryCardTitle}>Request Custom Project Quote</h3>
                <p className={styles.inquiryCardDesc}>Project scope, timeline, and pricing sent to your email.</p>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Best channel:</span>
                  <span className={styles.inquiryMetaValue}>Form Below</span>
                </div>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Response time:</span>
                  <span className={styles.inquiryMetaValue}>24-48 hours</span>
                </div>
                <Link href="#quote-form" className={styles.inquiryLink}>Fill Quote Request Form &darr;</Link>
              </div>

              {/* Card 3 */}
              <div className={styles.inquiryCard}>
                <div className={styles.inquiryIcon} style={{ color: '#10b981' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3 className={styles.inquiryCardTitle}>Technical Support</h3>
                <p className={styles.inquiryCardDesc}>Help with architecture setup, server questions, or bugs.</p>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Best channel:</span>
                  <span className={styles.inquiryMetaValue}>Email</span>
                </div>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Response time:</span>
                  <span className={styles.inquiryMetaValue}>Same day</span>
                </div>
                <Link href="mailto:hello@apextech.com" className={styles.inquiryLink}>hello@apextech.com &rarr;</Link>
              </div>

              {/* Card 4 */}
              <div className={styles.inquiryCard}>
                <div className={styles.inquiryIcon} style={{ color: '#f59e0b' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <h3 className={styles.inquiryCardTitle}>Retainer Program</h3>
                <p className={styles.inquiryCardDesc}>Ongoing development support and maintenance.</p>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Best channel:</span>
                  <span className={styles.inquiryMetaValue}>Waitlist Form</span>
                </div>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Response time:</span>
                  <span className={styles.inquiryMetaValue}>Within 48 hours</span>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.inquiryCard}>
                <div className={styles.inquiryIcon} style={{ color: '#8b5cf6' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h3 className={styles.inquiryCardTitle}>Enterprise Inquiry</h3>
                <p className={styles.inquiryCardDesc}>Call with our lead architect and a customized proposal.</p>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Best channel:</span>
                  <span className={styles.inquiryMetaValue}>Email</span>
                </div>
                <div className={styles.inquiryMeta}>
                  <span className={styles.inquiryMetaLabel}>Response time:</span>
                  <span className={styles.inquiryMetaValue}>1 business day</span>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.finalContactCard}>
            <h2 className={styles.finalContactTitle}>Let's Build Your System</h2>
            <p className={styles.finalContactDesc}>
              Whether you need a custom web app, architecture scaling, or ultra-low latency execution infrastructure, we're here to help.
            </p>
            <Link href="#" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Chat on WhatsApp
            </Link>

            <div className={styles.contactInfoGrid}>
              <div className={styles.contactInfoItem}>
                <h4>Email</h4>
                <p>hello@apextech.com</p>
              </div>
              <div className={styles.contactInfoItem} style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h4>Phone / WhatsApp</h4>
                <p>+91 98765 43210</p>
              </div>
              <div className={styles.contactInfoItem} style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h4>Location</h4>
                <p>Kolkata, West Bengal, India</p>
              </div>
              <div className={styles.contactInfoItem} style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h4>Hours</h4>
                <p>Mon-Fri, 9 AM-5 PM IST</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
