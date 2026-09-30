import styles from '../../page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Headless Shopify Development Agency | ApexTech+',
  description: 'Elite headless Shopify development services. We build custom, blazing-fast decoupled e-commerce storefronts using Next.js and the Shopify Storefront API.',
  keywords: 'headless shopify development agency, headless shopify development company, headless shopify development services, headless shopify development expert',
};

export default function HeadlessShopify() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / 
            <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}> Services</Link> / 
            <span style={{ color: '#fff' }}> Headless Shopify</span>
          </div>

          <div className={styles.serviceSectionHeader}>
            <div className={styles.serviceEyebrow}>E-COMMERCE EXCELLENCE</div>
            <h1 className={styles.serviceTitle} style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              Headless Shopify Development Agency
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', marginTop: '20px', lineHeight: '1.6' }}>
              Go beyond the limitations of standard Shopify themes. As a premium headless Shopify development company, we decouple your storefront to deliver sub-second load times, infinite customization, and higher conversion rates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ marginTop: '60px' }}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Performance</span>
              </div>
              <h3>Blazing Fast Storefronts</h3>
              <p>By migrating to a Next.js headless architecture, we eliminate bloated theme code. This guarantees near-instant page loads, drastically improving your Core Web Vitals and SEO rankings.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Customization</span>
              </div>
              <h3>Infinite Flexibility</h3>
              <p>Unlike liquid templates, a decoupled architecture means we can build absolutely any user interface you can imagine, integrating interactive WebGL or complex product configurators seamlessly.</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className={styles.serviceEyebrow}>FREQUENTLY ASKED QUESTIONS</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px' }}>Common Headless Shopify Questions</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How can I increase the page load speed on Shopify?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>The most effective way to drastically improve Shopify page loading speed is by migrating to a headless architecture using the Storefront API and a modern framework like Next.js. This eliminates heavy liquid theme code and third-party app bloat.</p>
              </div>
              
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Is headless Shopify worth it?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>For enterprise brands generating significant revenue, absolutely. The sub-second load times lead to significantly higher conversion rates, and the decoupled frontend allows for infinite customization that standard Shopify templates cannot support.</p>
              </div>

              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How much does Shopify headless cost?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Headless development is a premium service requiring custom front-end architecture (usually React/Next.js) and API integration. While the initial investment is higher than buying a basic theme, the ROI from increased conversions often pays for itself rapidly for high-volume stores.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
