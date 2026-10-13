import BreadcrumbSchema from '../../components/BreadcrumbSchema';

export const metadata = {
  title: 'ApexTech+ | Elite Enterprise Web Architecture Agency',
  description: "Discover ApexTech+'s enterprise web architecture expertise, delivering scalable, secure, and high-performance digital solutions tailored to complex business requirements.",
  openGraph: {
    title: 'ApexTech+ | Elite Enterprise Web Architecture Agency',
    description: "Discover ApexTech+'s enterprise web architecture expertise, delivering scalable, secure, and high-performance digital solutions tailored to complex business requirements.",
    url: 'https://www.apextechplus.com/how-to-work-with-us',
    siteName: 'ApexTech+',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexTech+ | Elite Enterprise Web Architecture Agency',
    description: "Discover ApexTech+'s enterprise web architecture expertise, delivering scalable, secure, and high-performance digital solutions tailored to complex business requirements.",
  },
  alternates: {
    canonical: '/how-to-work-with-us',
  },
};

export default function HowToWorkWithUs() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <BreadcrumbSchema items={[{ name: 'How to Work With Us', path: '/how-to-work-with-us' }]} />
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>How to Work With Us</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '60px' }}>
          A straightforward guide to our development pipeline and how we will collaborate to build your application.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>1. Initial Discovery</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We begin with a brief consultation (via WhatsApp or Google Meet) where you share your vision, requirements, and target audience. No technical jargon required—just tell us what the product needs to do.</p>
          </div>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>2. Architecture & Design</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We will architect the database schema and build high-fidelity Figma prototypes. You review these UI mockups and approve them before any code is written, ensuring we are perfectly aligned on the end result.</p>
          </div>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>3. Agile Development</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We build the frontend and backend iteratively. You will receive access to a staging link (e.g., via Vercel) so you can interact with the app as it is being built and provide immediate feedback.</p>
          </div>
          <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>4. Final Delivery & Deployment</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Once testing is complete, we handle the deployment to production servers (AWS, Vercel, or DigitalOcean), configure your custom domain, and hand over the complete source code.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
