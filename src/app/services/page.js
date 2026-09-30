import styles from '../page.module.css';
import Link from 'next/link';

export default function Services() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / <span style={{ color: '#fff' }}>Services</span>
          </div>

          <div className={styles.serviceSectionHeader}>
            <div className={styles.serviceEyebrow}>OUR SERVICES</div>
            <h1 className={styles.serviceTitle} style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              Everything you need to build digitally
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Core</span>
              </div>
              <h3>Front-End Excellence</h3>
              <p>Pixel-perfect designs brought to life with modern frameworks. Fast, responsive, and accessible interfaces that delight users.</p>
              <ul className={styles.serviceList}>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  React & Next.js mastery
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Tailwind CSS & SCSS
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Framer Motion animations
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Fully responsive design
                </li>
              </ul>
              <Link href="/services/frontend-excellence" className={styles.serviceButton}>View Frontend Details &rarr;</Link>
            </div>

            {/* Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Core</span>
              </div>
              <h3>Robust Back-End APIs</h3>
              <p>Scalable server-side logic and secure integrations. Build a foundation that can handle millions of requests without breaking a sweat.</p>
              <ul className={styles.serviceList}>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Node.js & PHP Backends
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  RESTful & GraphQL APIs
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  JWT Authentication systems
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Serverless Edge Functions
                </li>
              </ul>
              <Link href="/services/custom-saas" className={styles.serviceButton}>View SaaS Architecture &rarr;</Link>
            </div>

            {/* Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Data</span>
                <span className={styles.serviceBadgeRed}>Limited Availability</span>
              </div>
              <h3>Data & Cloud Architecture</h3>
              <p>Efficient storage, caching, and retrieval of complex relational data. Deploy seamlessly to modern cloud infrastructure like Vercel and AWS.</p>
              <ul className={styles.serviceList}>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  PostgreSQL & Prisma ORM
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Redis caching layers
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Database Schema Design
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Automated CI/CD pipelines
                </li>
              </ul>
              <Link href="/services/cloud-architecture" className={styles.serviceButton}>Discuss Architecture &rarr;</Link>
            </div>

            {/* Card 4 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Innovation</span>
                <span className={styles.serviceBadgeRed}>Beta</span>
              </div>
              <h3>AI & Automation</h3>
              <p>Integrate powerful machine learning models and automated workflows to supercharge your business efficiency and decision making.</p>
              <ul className={styles.serviceList}>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  OpenAI & Anthropic APIs
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Custom RAG Pipelines
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Automated Data Scraping
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Zapier & Workflow Automation
                </li>
              </ul>
              <Link href="/services/ai-automation" className={styles.serviceButton}>Explore AI Solutions &rarr;</Link>
            </div>

            {/* Card 5 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Creative</span>
              </div>
              <h3>3D Product Rendering</h3>
              <p>Bring your products to life with high-quality 3D models and interactive web experiences using industry-standard tools.</p>
              <ul className={styles.serviceList}>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  3ds Max & Blender modeling
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Three.js interactive web 3D
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Vectary 3D integration
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Photorealistic texturing
                </li>
              </ul>
              <Link href="/services/webgl-3d-configurators" className={styles.serviceButton}>View 3D Portfolio &rarr;</Link>
            </div>
            {/* Card 6 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Commerce</span>
              </div>
              <h3>Custom Shopify E-commerce</h3>
              <p>Go beyond basic themes. We develop headless Shopify storefronts, custom plugins, and seamless backend integrations tailored for luxury retail.</p>
              <ul className={styles.serviceList}>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Headless Shopify (Next.js)
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Custom Theme Development
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Shopify API Integrations
                </li>
                <li>
                  <svg className={styles.serviceListIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  High-converting checkouts
                </li>
              </ul>
              <Link href="/services/headless-shopify" className={styles.serviceButton}>Learn More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
