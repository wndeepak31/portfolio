import styles from '../../page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise AI & Business Automation Agency | ApexTech+',
  description: 'Custom AI solutions, RAG pipelines, and intelligent workflow automation to drastically scale business efficiency.',
  keywords: 'enterprise ai automation, custom ai agents, openai api integration services, rag pipeline development, automated business workflows',
};

export default function AiAutomation() {
  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / 
            <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}> Services</Link> / 
            <span style={{ color: '#fff' }}> AI & Automation</span>
          </div>

          <div className={styles.serviceSectionHeader}>
            <div className={styles.serviceEyebrow}>INTELLIGENT SYSTEMS</div>
            <h1 className={styles.serviceTitle} style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              Enterprise AI & Automation
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', marginTop: '20px', lineHeight: '1.6' }}>
              We integrate powerful Large Language Models (LLMs) and custom automated workflows into your existing systems to supercharge efficiency and eliminate repetitive tasks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8" style={{ marginTop: '60px' }}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Intelligence</span>
              </div>
              <h3>Custom RAG & LLM Integration</h3>
              <p>We build secure, private AI agents that understand your proprietary business data using Retrieval-Augmented Generation (RAG) and the latest OpenAI/Anthropic models.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceBadgeContainer}>
                <span className={styles.serviceBadge}>Efficiency</span>
              </div>
              <h3>Workflow Automation</h3>
              <p>Stop wasting human capital on data entry. We connect your entire tech stack (CRM, ERP, Slack, Email) using custom serverless functions and webhooks to automate your daily operations.</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className={styles.serviceEyebrow}>AI & AUTOMATION FAQS</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px' }}>Common Questions on AI Integration</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How secure is my company data if we use AI?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We prioritize enterprise-grade security. When building custom RAG (Retrieval-Augmented Generation) pipelines, your data remains in your private database and is only sent to secure, zero-retention API endpoints (like OpenAI Enterprise), ensuring your proprietary data is never used to train public models.</p>
              </div>
              
              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>What kind of tasks can we actually automate?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Almost any repetitive digital task can be automated. We frequently automate customer support triaging, invoice processing, cross-platform data syncing, personalized cold outreach, and dynamic content generation.</p>
              </div>

              <div style={{ padding: '24px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>How much does a custom AI integration cost?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Pricing varies based on complexity. Simple workflow automations connecting existing tools can start around $5,000, while custom-built AI applications with proprietary RAG architectures typically range from $20,000 to $60,000+. We scope the exact ROI before writing a single line of code.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
