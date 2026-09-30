import styles from '../../page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Elite Front-End Development Agency | Next.js & React',
  description: 'Pixel-perfect, high-performance frontend development. We specialize in enterprise React, Next.js, and complex interactive UI/UX engineering.',
  keywords: 'enterprise front-end development agency, hire next.js developers, custom react ui ux, responsive web application design, high-performance web development',
};

export default function FrontendExcellence() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / 
            <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}> Services</Link> / 
            <span style={{ color: '#fff' }}> Front-End Excellence</span>
          </div>

          <div className={styles.serviceSectionHeader}>
            <div className={styles.serviceEyebrow}>UI/UX ENGINEERING</div>
            <h1 className={styles.serviceTitle} style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              Front-End Excellence
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', marginTop: '20px', lineHeight: '1.6' }}>
              We transform complex business requirements into intuitive, blazing-fast, and pixel-perfect user interfaces using modern JavaScript frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ marginTop: '60px' }}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Engineering</span>
              </div>
              <h3>React & Next.js Mastery</h3>
              <p>We build component-driven, scalable frontends that are easy to maintain and inherently SEO-friendly through server-side rendering and static generation.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Aesthetics</span>
              </div>
              <h3>Pixel-Perfect Implementation</h3>
              <p>We bridge the gap between design and engineering. From complex Framer Motion animations to responsive Tailwind CSS layouts, we ensure your brand looks flawless on every device.</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className={styles.serviceEyebrow}>FRONT-END FAQS</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px' }}>Common UI/UX Engineering Questions</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Why choose Next.js over traditional React?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Traditional React applications suffer from poor SEO and slow initial load times because the browser has to download heavy JavaScript before showing the page. Next.js pre-renders pages on the server, resulting in instant load times, perfect Core Web Vitals, and excellent Google rankings.</p>
              </div>
              
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How do you handle responsive design for complex dashboards?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We utilize modern CSS Grid and Flexbox architectures, often paired with utility-first frameworks like Tailwind CSS. For highly complex data tables or SaaS dashboards, we design specific mobile layouts (like card-based views) rather than just shrinking desktop elements, ensuring a flawless mobile experience.</p>
              </div>

              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Can you integrate with our existing backend API?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Absolutely. We specialize in decoupling frontends. We can build a lightning-fast React/Next.js frontend that consumes data securely from your existing REST, GraphQL, or legacy PHP/Java backend APIs.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
