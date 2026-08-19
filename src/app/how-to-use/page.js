import Link from 'next/link';

export default function HowToUse() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>How to Work With Me</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '60px' }}>
          A straightforward guide to my development pipeline and how we will collaborate to build your application.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>1. Initial Discovery</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We begin with a brief consultation (via WhatsApp or Google Meet) where you share your vision, requirements, and target audience. No technical jargon required—just tell me what the product needs to do.</p>
          </div>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>2. Architecture & Design</h3>
            <p style={{ color: 'var(--text-secondary)' }}>I will architect the database schema and build high-fidelity Figma prototypes. You review these UI mockups and approve them before any code is written, ensuring we are perfectly aligned on the end result.</p>
          </div>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>3. Agile Development</h3>
            <p style={{ color: 'var(--text-secondary)' }}>I build the frontend and backend iteratively. You will receive access to a staging link (e.g., via Vercel) so you can interact with the app as it is being built and provide immediate feedback.</p>
          </div>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>4. Final Delivery & Deployment</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Once testing is complete, I handle the deployment to production servers (AWS, Vercel, or DigitalOcean), configure your custom domain, and hand over the complete source code.</p>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '16px 32px' }}>Ready? Start Your Project</Link>
        </div>
      </div>
    </div>
  );
}
