import styles from '../../page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'WebGL & Three.js Development Agency | Custom 3D Product Configurators',
  description: 'Top-rated services offering custom 3D product configurators for e-commerce websites. We specialize in WebGL and Three.js interactive web development.',
  keywords: '3D product configurator web, WebGL web development, three.js interactive website, professional developers specializing in WebGL and Three.js',
};

export default function WebGLConfigurators() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / 
            <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}> Services</Link> / 
            <span style={{ color: '#fff' }}> WebGL & 3D</span>
          </div>

          <div className={styles.serviceSectionHeader}>
            <div className={styles.serviceEyebrow}>INTERACTIVE EXPERIENCES</div>
            <h1 className={styles.serviceTitle} style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              Custom 3D Product Configurators
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', marginTop: '20px', lineHeight: '1.6' }}>
              We are a team of professional developers specializing in WebGL and Three.js. We build breathtaking, interactive 3D product configurators directly in the browser—no plugins required.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ marginTop: '60px' }}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Engagement</span>
              </div>
              <h3>Increase Conversion Rates</h3>
              <p>Allow your customers to spin, zoom, and customize products in real-time. Interactive 3D visualization drastically increases buyer confidence and reduces return rates for high-ticket e-commerce items.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Performance</span>
              </div>
              <h3>Optimized WebGL & Three.js</h3>
              <p>We integrate Three.js seamlessly into modern web development workflows (like Next.js). Our 3D models are heavily optimized for mobile devices, ensuring silky smooth 60FPS performance on any screen.</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className={styles.serviceEyebrow}>3D DEVELOPMENT FAQS</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px' }}>Common 3D Web Questions</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How do you integrate Three.js into a web development workflow?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We utilize modern frameworks like React Three Fiber to seamlessly bridge the gap between Next.js and Three.js. This allows us to maintain a component-driven architecture while leveraging WebGL for rendering, resulting in highly performant, SEO-friendly 3D web applications.</p>
              </div>
              
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How much does it cost to develop a custom 3D product configurator?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>The cost depends heavily on the complexity of the 3D models and the logic of the configurator (e.g., dynamic pricing, material changes). A basic 3D viewer might start around $10,000, while a complex, multi-part interactive automotive or furniture configurator integrated with Shopify can range from $25,000 to $75,000+.</p>
              </div>

              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>Will a WebGL 3D configurator slow down my website?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Not when built correctly. We aggressively optimize geometries, use compressed textures (like KTX2), and implement lazy-loading so the 3D canvas only initializes when required. This ensures your initial page load remains blazing fast for SEO, while still delivering a premium interactive experience.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
