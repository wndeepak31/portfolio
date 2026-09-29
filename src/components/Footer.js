"use client";
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerFinal}>
      <div className="container">
        <div className={styles.footerFinalGrid}>
          <div className={styles.footerFinalBrand}>
            <div className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/apexTechPlus-logo.png" alt="ApexTech Logo" style={{ height: '28px', width: 'auto' }} />
            </div>
            <p>
              A global premier full-stack infrastructure platform. We empower founders with institutional-grade web architecture, custom algorithmic backend development, and ultra-fast application deployment.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:apextechplus@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                apextechplus@gmail.com
              </a>
              <a href="https://wa.me/918693864378" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#25D366'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 86938 64378
              </a>
            </div>
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
              <li><Link href="/company">Company</Link></li>

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
            Disclaimer: ApexTech+ is an elite collective of full-stack engineers and UI/UX architects. Any project timelines, performance metrics, and server capacities discussed are estimates based on past projects and may vary depending on individual requirements.
          </p>
          <p style={{ color: '#4b5563', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} ApexTech+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
