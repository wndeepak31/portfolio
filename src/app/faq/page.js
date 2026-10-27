import Link from 'next/link';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import FAQSchema from '../../components/FAQSchema';
import FAQClient from './FAQClient';

export const metadata = {
  title: 'Frequently Asked Questions | Engineering, SaaS, 3D & Shopify | ApexTech+',
  description: 'Everything you need to know about ApexTech+ technical services: Headless Shopify, WebGL 3D configurators, custom SaaS architectures, AI workflows, and cloud engineering.',
  openGraph: {
    title: 'Frequently Asked Questions | Engineering, SaaS, 3D & Shopify | ApexTech+',
    description: 'Everything you need to know about ApexTech+ technical services: Headless Shopify, WebGL 3D configurators, custom SaaS architectures, AI workflows, and cloud engineering.',
    url: 'https://www.apextechplus.com/faq',
    siteName: 'ApexTech+',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Engineering, SaaS, 3D & Shopify | ApexTech+',
    description: 'Everything you need to know about ApexTech+ technical services: Headless Shopify, WebGL 3D configurators, custom SaaS architectures, AI workflows, and cloud engineering.',
  },
  alternates: {
    canonical: '/faq',
  },
};

const allFaqs = [
  // 1. Headless Shopify
  {
    category: 'shopify',
    categoryLabel: 'Headless Shopify',
    question: 'What does a Headless Shopify architecture provide over traditional themes?',
    answer: 'Headless Shopify decouples the frontend (Next.js/React) from Shopify backend via the Storefront API. This delivers sub-second page loads, 95+ Core Web Vitals, infinite design customization, and eliminates third-party app script bloat that slows down checkout conversion.',
  },
  {
    category: 'shopify',
    categoryLabel: 'Headless Shopify',
    question: 'Can we keep our existing Shopify admin, apps, and inventory management?',
    answer: 'Yes, 100%. Your Shopify admin, fulfillment, payment gateways, customer database, and inventory remain completely intact. Only the customer-facing storefront is upgraded to a high-speed Next.js frontend.',
  },
  {
    category: 'shopify',
    categoryLabel: 'Headless Shopify',
    question: 'How long does an enterprise headless Shopify migration take?',
    answer: 'A typical enterprise Headless Shopify build or migration takes between 6 to 10 weeks, including custom design, API integration, data migration, and thorough SEO 301 redirects.',
  },

  // 2. 3D & WebGL
  {
    category: '3d',
    categoryLabel: '3D WebGL & Configurator',
    question: 'How does an interactive 3D WebGL configurator boost luxury & jewelry sales?',
    answer: 'Interactive 3D configurators allow buyers to rotate rings 360°, inspect real-time diamond refractions, change metals (Yellow, White, Rose Gold), and swap gemstone cuts in real time. This builds deep buyer trust, increases conversion rates by up to 40%, and significantly reduces return rates.',
  },
  {
    category: '3d',
    categoryLabel: '3D WebGL & Configurator',
    question: 'Will 3D WebGL configurators work smoothly on mobile phones?',
    answer: 'Yes. We use advanced Draco geometry compression, KTX2 textures, and WebGL shader optimization so that 3D models load in under 1.2 seconds and run at silky-smooth 60 FPS across both iOS and Android mobile browsers without draining battery.',
  },
  {
    category: '3d',
    categoryLabel: '3D WebGL & Configurator',
    question: 'Do customers need to download any apps or plugins to view the 3D models?',
    answer: 'No downloads or plugins required. Everything runs natively inside standard modern web browsers (Chrome, Safari, Edge) on desktop, tablet, and mobile devices.',
  },

  // 3. Custom SaaS
  {
    category: 'saas',
    categoryLabel: 'Custom SaaS & Web Apps',
    question: 'How much does it cost to develop a custom web application or SaaS platform?',
    answer: 'The cost to build a custom web app depends on architecture and scope. A production-ready MVP typically starts around $15,000, while a fully scalable enterprise SaaS platform with complex multi-tenant databases and AI integrations can range from $40,000 to $120,000+. We engineer lean architecture to maximize ROI.',
  },
  {
    category: 'saas',
    categoryLabel: 'Custom SaaS & Web Apps',
    question: 'Why build a SaaS on Next.js instead of traditional vanilla React?',
    answer: 'Vanilla React is purely client-side rendered, which often harms SEO and causes slow initial load times on heavy apps. Next.js provides hybrid Server-Side Rendering (SSR) and Server Components on top of React, delivering instant first-contentful paint, top Google rankings, and bank-grade data security.',
  },
  {
    category: 'saas',
    categoryLabel: 'Custom SaaS & Web Apps',
    question: 'Is Node.js and PostgreSQL scalable for high-concurrency enterprise apps?',
    answer: 'Yes. Node.js non-blocking, event-driven architecture paired with PostgreSQL handles millions of concurrent requests seamlessly. Deployed on modern cloud infrastructure with connection pooling and Redis caching, it powers the world largest SaaS platforms.',
  },

  // 4. AI & Automation
  {
    category: 'ai',
    categoryLabel: 'AI & Automation',
    question: 'How secure is our proprietary company data when integrating AI?',
    answer: 'We prioritize zero-retention enterprise security. When building custom Retrieval-Augmented Generation (RAG) pipelines or workflow bots, your data resides inside your encrypted private database and is sent exclusively to enterprise endpoints that never train public AI models on your intellectual property.',
  },
  {
    category: 'ai',
    categoryLabel: 'AI & Automation',
    question: 'What business processes can we realistically automate with custom AI?',
    answer: 'We automate high-friction operational bottlenecks: 24/7 intelligent customer support triaging, automated invoice parsing, cross-platform CRM data synchronization, automated lead qualification, and dynamic personalized marketing generation.',
  },
  {
    category: 'ai',
    categoryLabel: 'AI & Automation',
    question: 'How long does it take to deploy a custom AI agent or workflow pipeline?',
    answer: 'Targeted workflow automations and API integrations typically launch within 2 to 4 weeks. Full enterprise RAG knowledge bases and multi-agent systems require 4 to 8 weeks, including security audits and model fine-tuning.',
  },

  // 5. Cloud Architecture & DevOps
  {
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    question: 'Should our company deploy on AWS, Vercel, or Google Cloud?',
    answer: 'We recommend a modern hybrid architecture: deploying customer-facing Next.js frontends on Vercel Edge for global sub-50ms latency, while running heavy databases, background queues, and microservices on AWS (ECS, RDS, S3). This gives you the best developer velocity and lowest hosting bill.',
  },
  {
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    question: 'How do you fix slow database queries and high latency?',
    answer: 'Slow databases usually stem from unindexed foreign keys, unoptimized schemas, or N+1 query patterns. We audit database execution plans, implement composite indexes, optimize queries, and introduce a Redis caching layer to handle up to 90% of repeat read traffic.',
  },
  {
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    question: 'Can you migrate legacy monolithic applications to the cloud without downtime?',
    answer: 'Yes. We specialize in zero-downtime migrations. We containerize legacy services using Docker, establish automated CI/CD deployment pipelines, set up dual-write database replication, and cut traffic over smoothly with zero customer disruption.',
  },
];

export default function FAQ() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <BreadcrumbSchema items={[{ name: 'FAQ', path: '/faq' }]} />
      <FAQSchema items={allFaqs} />

      <div className="container">
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '30px' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / 
          <span style={{ color: '#fff' }}> FAQ</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent-color)',
            marginBottom: '14px',
            background: 'var(--accent-glow)',
            padding: '6px 14px',
            borderRadius: '999px',
            border: '1px solid rgba(0, 184, 145, 0.3)'
          }}>
            KNOWLEDGE BASE & ARCHITECTURE
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto', lineHeight: '1.6' }}>
            Everything you need to know about our engineering process, Headless Shopify builds, 3D WebGL configurators, custom SaaS architectures, AI workflows, and cloud engineering.
          </p>
        </div>

        {/* Client interactive filter pills & smooth accordions */}
        <FAQClient faqs={allFaqs} />
      </div>
    </div>
  );
}
