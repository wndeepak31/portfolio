import Link from 'next/link';

export default function FAQ() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Frequently Asked Questions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '60px' }}>
          Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>How long does a typical project take?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>A standard landing page takes 1-2 weeks. Full-stack applications and SaaS platforms usually take between 4 to 8 weeks depending on the complexity of the backend architecture.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>Do you provide design services?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Yes. We handle both UI/UX prototyping (in Figma) and the final technical implementation, ensuring nothing gets lost in translation between design and development.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>What technologies do you use?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Our core stack is React, Next.js, Node.js, and PostgreSQL. For custom e-commerce and 3D product rendering, we utilize Shopify, Three.js, WebGL, and Blender.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>Do you offer ongoing maintenance?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Absolutely. We offer monthly retainers for enterprise clients that require ongoing development, server maintenance, and priority bug fixes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
