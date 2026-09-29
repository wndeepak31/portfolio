"use client";
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function CTA() {
  return (
    <section id="contact" className={styles.ctaFinalSection}>
      <div className="container">
        <h2 className={styles.ctaFinalTitle}>Ready to <span className="text-accent">Build Smarter?</span></h2>
        <p className={styles.ctaFinalDesc}>
          Your product deserves better than a template. Get institutional-grade full-stack architecture, bespoke Shopify integrations, and stunning WebGL 3D configurators — all under one roof.
        </p>
        <div className={styles.ctaFinalButtons}>
          <Link href="/contact" className={styles.ctaFinalBtnPrimary}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            Book a Quick Call
          </Link>
          <a href="https://wa.me/918693864378" target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtnSecondary} style={{ textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WhatsApp Us
          </a>
        </div>
        <p className={styles.ctaFinalNote}>*No spam. No sales calls. Just fast, expert help.*</p>
      </div>
    </section>
  );
}
