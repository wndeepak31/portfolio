import styles from '../../page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Data & Cloud Architecture Migration Services | ApexTech+',
  description: 'Enterprise cloud architecture and database design. We specialize in AWS/Vercel deployment, PostgreSQL modeling, and high-availability caching systems.',
  keywords: 'aws cloud migration services, enterprise database architecture, scalable cloud infrastructure, postgresql database design, redis caching implementation',
};

export default function CloudArchitecture() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / 
            <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}> Services</Link> / 
            <span style={{ color: '#fff' }}> Data & Cloud Architecture</span>
          </div>

          <div className={styles.serviceSectionHeader}>
            <div className={styles.serviceEyebrow}>SCALABLE INFRASTRUCTURE</div>
            <h1 className={styles.serviceTitle} style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              Data & Cloud Architecture
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', marginTop: '20px', lineHeight: '1.6' }}>
              We design and implement highly resilient cloud infrastructure and complex relational databases that can handle millions of requests globally with zero downtime.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ marginTop: '60px' }}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Storage</span>
              </div>
              <h3>Database Engineering</h3>
              <p>We architect flawless relational (PostgreSQL) and NoSQL databases. Proper schema design ensures lightning-fast queries, data integrity, and effortless scaling as your user base grows.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Infrastructure</span>
              </div>
              <h3>Global Edge Cloud</h3>
              <p>Deploy your applications seamlessly. We manage migrations and implementations across AWS, Vercel, and Google Cloud, utilizing Edge computing and Redis caching for sub-ms latency.</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className={styles.serviceEyebrow}>CLOUD INFRASTRUCTURE FAQS</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px' }}>Common Cloud Architecture Questions</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Should I use AWS, Vercel, or Google Cloud?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>It depends entirely on your stack and team size. Vercel is the absolute best for Next.js applications and rapid frontend deployment. AWS provides unmatched control for complex microservices and heavy background processing. We often use a hybrid approach—deploying the frontend on Vercel Edge and the backend on AWS.</p>
              </div>
              
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Why is my database querying so slow?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Slow databases are usually the result of poor schema design, lack of proper indexing, or the N+1 query problem. We resolve this by restructuring your schema, adding precise indexes, and implementing a Redis caching layer to absorb heavy read traffic.</p>
              </div>

              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Can you migrate our legacy app to the cloud?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes. We specialize in zero-downtime cloud migrations. We map your current infrastructure, containerize the application using Docker, set up automated CI/CD pipelines, and securely transfer your data to modern managed databases.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
