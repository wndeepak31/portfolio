import styles from '../../page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Custom SaaS Architecture & Web App Development Agency',
  description: 'Expert custom SaaS architecture and web application development. We specialize in scaling Node.js applications, building enterprise React/Next.js platforms, and optimizing costs.',
  keywords: 'custom saas architecture, scale node js application, cost to build custom web app, react vs nextjs for web app, enterprise web application development',
};

export default function CustomSaaS() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / 
            <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}> Services</Link> / 
            <span style={{ color: '#fff' }}> Custom SaaS Architecture</span>
          </div>

          <div className={styles.serviceSectionHeader}>
            <div className={styles.serviceEyebrow}>ENTERPRISE SOFTWARE</div>
            <h1 className={styles.serviceTitle} style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              Custom SaaS Architecture
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', marginTop: '20px', lineHeight: '1.6' }}>
              We architect, build, and scale complex web applications for visionary founders. From high-performance React/Next.js frontends to heavily scalable Node.js backend systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ marginTop: '60px' }}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Frontend</span>
              </div>
              <h3>Next.js & React Ecosystem</h3>
              <p>We leverage Server-Side Rendering (SSR) and edge network deployment to ensure your SaaS application is blazing fast, SEO-optimized, and highly responsive across all devices.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Backend</span>
              </div>
              <h3>Scalable Node.js Infrastructure</h3>
              <p>We build robust microservices and monolithic architectures using Node.js and PostgreSQL that can handle thousands of concurrent users without breaking a sweat.</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className={styles.serviceEyebrow}>SaaS DEVELOPMENT FAQS</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px' }}>Architecture & Scaling Questions</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How much does it cost to develop a custom web app?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>The cost to build a custom web app depends entirely on the architecture and complexity. A simple MVP might start around $15,000, while a fully scalable enterprise SaaS platform with complex databases and AI integrations can range from $50,000 to over $150,000. We prioritize lean architecture to maximize your ROI.</p>
              </div>
              
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>React vs Next.js: Is React overkill for a website?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Vanilla React is a client-side library, which can sometimes be bad for SEO. Next.js solves this by providing server-side rendering (SSR) on top of React. For a simple brochure site, React might be overkill, but for a dynamic SaaS platform, a custom portal, or an e-commerce site, Next.js is the absolute gold standard used by companies like Netflix and TikTok.</p>
              </div>

              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Is Node.js still relevant in 2026?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Node.js is more relevant than ever for backend architecture. Its non-blocking, event-driven model makes it perfect for building highly scalable, real-time web applications. When paired with React on the frontend, it allows us to use JavaScript across the entire stack, drastically speeding up development time.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
