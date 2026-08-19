import styles from '../page.module.css';
import Link from 'next/link';

export default function Experience() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / <span style={{ color: '#fff' }}>Experience</span>
          </div>

          <h1 style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '24px' }}>Professional <span className="text-accent">Experience</span></h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 80px', fontSize: '1.2rem' }}>
            My journey through web development and design.
          </p>

          <div className={styles.experienceContainer} style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '20px', width: '2px', background: 'linear-gradient(180deg, rgba(0, 184, 145, 0.1) 0%, rgba(0, 184, 145, 0.5) 50%, rgba(0, 184, 145, 0.1) 100%)' }}></div>

            <div style={{ position: 'relative', paddingLeft: '60px', marginBottom: '80px' }}>
              <div style={{ position: 'absolute', left: '15px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-color)', boxShadow: '0 0 10px rgba(0, 184, 145, 0.5)' }}></div>
              <div style={{ fontSize: '1rem', color: 'var(--accent-color)', fontFamily: 'monospace', marginBottom: '12px' }}>2024 — Present</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Senior Freelance Web Developer</h3>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Self-Employed · Remote</div>
              <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8' }}>
                Architecting and building full-stack web applications for global clients. Specializing in Next.js, PostgreSQL, and custom API integrations to deliver high-performance solutions.
              </p>
            </div>

            <div style={{ position: 'relative', paddingLeft: '60px', marginBottom: '80px' }}>
              <div style={{ position: 'absolute', left: '15px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-color)', boxShadow: '0 0 10px rgba(0, 184, 145, 0.5)' }}></div>
              <div style={{ fontSize: '1rem', color: 'var(--accent-color)', fontFamily: 'monospace', marginBottom: '12px' }}>2022 — 2024</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>UI/UX Designer & Front-End Developer</h3>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Tech Solutions Inc. · Hybrid</div>
              <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8' }}>
                Led the redesign of core enterprise products using Figma. Translated high-fidelity designs into pixel-perfect React components, significantly improving user retention.
              </p>
            </div>

            <div style={{ position: 'relative', paddingLeft: '60px' }}>
              <div style={{ position: 'absolute', left: '15px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-color)', boxShadow: '0 0 10px rgba(0, 184, 145, 0.5)' }}></div>
              <div style={{ fontSize: '1rem', color: 'var(--accent-color)', fontFamily: 'monospace', marginBottom: '12px' }}>2018 — 2022</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Junior Web Developer</h3>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Digital Agency · Remote</div>
              <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8' }}>
                Developed custom WordPress themes and e-commerce Shopify sites. Handled front-end coding (HTML, CSS, JS) and server maintenance for over 20 concurrent client projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
