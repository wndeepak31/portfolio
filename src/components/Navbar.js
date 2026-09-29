"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar} style={{ position: 'sticky', top: '20px', zIndex: 100 }}>
      <Link href="/" className={styles.logo} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="/apexTechPlus-logo.png" alt="ApexTech Logo" style={{ height: '30px', width: 'auto' }} />
      </Link>
      <div className={`${styles.navLinks} ${isOpen ? styles.navLinksMobile : ''}`}>
        <Link href="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/expertise" className={styles.navLink} onClick={() => setIsOpen(false)}>Expertise</Link>
        <Link href="/track-record" className={styles.navLink} onClick={() => setIsOpen(false)}>Track Record</Link>
        <Link href="/company" className={styles.navLink} onClick={() => setIsOpen(false)}>Company</Link>
        <div className={styles.mobileOnlyMenu} style={{ marginTop: '30px', width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Get in Touch</p>
          <a href="mailto:apextechplus@gmail.com" style={{ display: 'block', color: '#fff', fontSize: '0.9rem', marginBottom: '8px', textDecoration: 'none' }}>apextechplus@gmail.com</a>
          <a href="tel:+918693864378" style={{ display: 'block', color: '#fff', fontSize: '0.9rem', marginBottom: '20px', textDecoration: 'none' }}>+91 86938 64378</a>
          <Link href="/contact" className={`btn-primary ${styles.mobileOnlyBtn}`} onClick={() => setIsOpen(false)} style={{ width: '100%', textAlign: 'center' }}>Let's Talk &rarr;</Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link href="/contact" className={`btn-primary ${styles.desktopBtn}`} style={{ padding: '8px 16px', fontSize: '0.85rem', textDecoration: 'none' }}>
          Let's Talk &rarr;
        </Link>
        <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
