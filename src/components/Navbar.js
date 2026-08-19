"use client";
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar} style={{ position: 'sticky', top: '20px', zIndex: 100 }}>
      <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>
        Apex<span className="text-accent" style={{ color: 'var(--accent-color)' }}>Tech</span>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/skills" className={styles.navLink}>Skills</Link>
        <Link href="/experience" className={styles.navLink}>Experience</Link>
        <Link href="/services" className={styles.navLink}>Services</Link>
      </div>
      <Link href="/contact" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem', textDecoration: 'none' }}>
        Let's Talk &rarr;
      </Link>
    </nav>
  );
}
