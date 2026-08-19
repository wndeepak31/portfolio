import Link from 'next/link';

export default function Pricing() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Transparent Pricing</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            No hidden fees or unexpected costs. Choose the tier that matches the scale of your project. 
            All plans include premium architecture and deployment.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Tier 1 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Starter Edge</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Perfect for high-conversion landing pages and portfolios.</p>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px' }}>$1,200<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/project</span></div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>✓ Next.js & React Frontend</li>
              <li>✓ Custom UI/UX Design (Figma)</li>
              <li>✓ Responsive & Mobile First</li>
              <li>✓ SEO Optimization</li>
              <li>✓ Vercel Deployment</li>
            </ul>
            <Link href="/contact" className="btn-secondary" style={{ display: 'block', textAlign: 'center', padding: '16px' }}>Book Now</Link>
          </div>

          {/* Tier 2 */}
          <div style={{ background: 'linear-gradient(180deg, rgba(var(--accent-color-rgb), 0.1) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid var(--accent-color)', borderRadius: '24px', padding: '40px', transform: 'scale(1.05)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-15px', right: '40px', background: 'var(--accent-color)', color: '#000', padding: '4px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Full-Stack App</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>For scalable SaaS products, dashboards, and complex logic.</p>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px' }}>$3,500<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/project</span></div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>✓ Everything in Starter</li>
              <li>✓ Node.js / PHP Backend API</li>
              <li>✓ PostgreSQL Database Architecture</li>
              <li>✓ User Authentication (JWT)</li>
              <li>✓ Admin Dashboard Integration</li>
            </ul>
            <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '16px' }}>Start Building</Link>
          </div>

          {/* Tier 3 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Enterprise Retainer</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Ongoing development, scaling, and architectural support.</p>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px' }}>$2,500<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/month</span></div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>✓ Dedicated Monthly Hours</li>
              <li>✓ Priority Support & Fixes</li>
              <li>✓ Server & DB Maintenance</li>
              <li>✓ Continuous Feature Rollouts</li>
              <li>✓ Code Review & Auditing</li>
            </ul>
            <Link href="/contact" className="btn-secondary" style={{ display: 'block', textAlign: 'center', padding: '16px' }}>Contact Sales</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
