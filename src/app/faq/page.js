import Link from 'next/link';

export default function FAQ() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Frequently Asked Questions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '60px', maxWidth: '700px' }}>
          Details regarding our engineering process, client partnerships, and technical capabilities. If you require a custom architecture review, please book a technical consultation.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>Who is ApexTech+ a good fit for?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We partner with visionary founders, funded startups, and enterprise businesses that require robust, highly scalable web architecture. We are an elite engineering firm and are not a fit for businesses looking for generic templates or budget freelancer work.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>How long does an enterprise project take?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Custom SaaS platforms and Headless Shopify architectures typically require 6 to 12 weeks of intense engineering. For specialized 3D WebGL configurators or custom AI automation pipelines, timelines are strictly scoped during our initial architecture audit.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>What is your core technology stack?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We specialize exclusively in high-performance stacks. For the frontend, we use React and Next.js deployed on Vercel Edge. For backend architecture, we utilize Node.js and PostgreSQL. We also integrate specialized technologies like Three.js/WebGL for 3D experiences, and OpenAI/Anthropic APIs for business automation.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#fff' }}>Do you offer post-launch SLAs and maintenance?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Absolutely. We do not abandon our clients after deployment. We offer structured monthly retainers for our enterprise partners that guarantee specific Service Level Agreements (SLAs), server maintenance, priority hotfixes, and continuous feature development.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
