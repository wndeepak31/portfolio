import styles from '../page.module.css';
import Link from 'next/link';

export default function Experience() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / <span style={{ color: '#fff' }}>Track Record</span>
          </div>

          <h1 style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '24px' }}>Proven <span className="text-accent">Track Record</span></h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 80px', fontSize: '1.2rem' }}>
            The technical foundation and evolution of our agency.
          </p>

          <div className={styles.experienceContainer} style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '20px', width: '2px', background: 'linear-gradient(180deg, rgba(0, 184, 145, 0.1) 0%, rgba(0, 184, 145, 0.5) 50%, rgba(0, 184, 145, 0.1) 100%)' }}></div>

            <div style={{ position: 'relative', paddingLeft: '60px', marginBottom: '80px' }}>
              <div style={{ position: 'absolute', left: '15px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-color)', boxShadow: '0 0 10px rgba(0, 184, 145, 0.5)' }}></div>
              <div style={{ fontSize: '1rem', color: 'var(--accent-color)', fontFamily: 'monospace', marginBottom: '12px' }}>2024 — Present</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Founders & Lead Architects</h3>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>ApexTech+ · Global</div>
              <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8' }}>
                Architecting headless Shopify infrastructures, custom WebGL 3D configurators, and enterprise-grade full-stack applications. Specializing in Next.js, PostgreSQL, and seamless custom API integrations.
              </p>
            </div>

            <div style={{ position: 'relative', paddingLeft: '60px', marginBottom: '80px' }}>
              <div style={{ position: 'absolute', left: '15px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-color)', boxShadow: '0 0 10px rgba(0, 184, 145, 0.5)' }}></div>
              <div style={{ fontSize: '1rem', color: 'var(--accent-color)', fontFamily: 'monospace', marginBottom: '12px' }}>2022 — 2024</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Senior UI/UX & Front-End Engineers</h3>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Enterprise Tech Solutions</div>
              <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8' }}>
                Engineered scalable React architectures and led UI/UX design systems for high-volume SaaS platforms, ensuring pixel-perfect implementations and low-latency performance.
              </p>
            </div>

            <div style={{ position: 'relative', paddingLeft: '60px' }}>
              <div style={{ position: 'absolute', left: '15px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-color)', boxShadow: '0 0 10px rgba(0, 184, 145, 0.5)' }}></div>
              <div style={{ fontSize: '1rem', color: 'var(--accent-color)', fontFamily: 'monospace', marginBottom: '12px' }}>2018 — 2022</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>E-commerce & Web Developers</h3>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Various Digital Agencies</div>
              <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8' }}>
                Developed complex custom e-commerce stores and optimized Shopify architectures. Mastered fundamental web technologies, database management, and robust server deployments for diverse global clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
