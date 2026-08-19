"use client";
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerFinal}>
      <div className="container">
        <div className={styles.footerFinalGrid}>
          <div className={styles.footerFinalBrand}>
            <div className={styles.logo}>Apex<span className="text-accent" style={{ color: 'var(--accent-color)' }}>Tech</span></div>
            <p>
              India's premier full-stack infrastructure platform. We empower founders with institutional-grade web architecture, custom algorithmic backend development, and ultra-fast application deployment.
            </p>
          </div>
          <div className={styles.footerFinalLinks}>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/mission">Our Mission</Link></li>
            </ul>
          </div>
          <div className={styles.footerFinalLinks}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/pricing">Pricing & Plans</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/blog">Blog & Research</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
            <div className={styles.footerFinalSocials} style={{ marginTop: '24px' }}>
              <a href="#" aria-label="X (Twitter)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z"></path><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"></path></svg></a>
              <a href="#" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
          </div>
          <div className={styles.footerFinalLinks}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerFinalBottom} style={{ textAlign: 'center', display: 'block', borderTop: 'none', paddingTop: '0' }}>
          <p style={{ color: '#4b5563', fontSize: '0.75rem', maxWidth: '900px', margin: '0 auto 10px', lineHeight: '1.6' }}>
            Disclaimer: Apex Tech is a full-stack web developer and UI/UX designer. Any project timelines, performance metrics, and server capacities discussed are estimates based on past projects and may vary depending on individual requirements.
          </p>
          <p style={{ color: '#4b5563', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} Apex Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
