"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar} style={{ position: 'sticky', top: '20px', zIndex: 100 }}>
      <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>
        Apex<span className="text-accent" style={{ color: 'var(--accent-color)' }}>Tech</span>
      </Link>
      <div className={`${styles.navLinks} ${isOpen ? styles.navLinksMobile : ''}`}>
        <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/skills" className={styles.navLink} onClick={() => setIsOpen(false)}>Skills</Link>
        <Link href="/experience" className={styles.navLink} onClick={() => setIsOpen(false)}>Experience</Link>
        <Link href="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
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
