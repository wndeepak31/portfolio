import Link from 'next/link';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import { blogPosts } from '../../data/blogPosts';

export const metadata = {
  title: 'Read About Software & Web Development Articles - ApexTech+',
  description: 'Explore the ApexTech+ blog for insights, guides, and updates on software development, web technologies, application development, and digital innovation.',
  openGraph: {
    title: 'Read About Software & Web Development Articles - ApexTech+',
    description: 'Explore the ApexTech+ blog for insights, guides, and updates on software development, web technologies, application development, and digital innovation.',
    url: 'https://www.apextechplus.com/blog',
    siteName: 'ApexTech+',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Read About Software & Web Development Articles - ApexTech+',
    description: 'Explore the ApexTech+ blog for insights, guides, and updates on software development, web technologies, application development, and digital innovation.',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function Blog() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }]} />
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Engineering Blog</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '60px' }}>
          Deep dives into modern web architecture, state management, and performance engineering.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '32px',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
              }}
              className="hover:border-[var(--accent-color)]"
            >
              <div style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '12px' }}>
                {post.category} &nbsp;•&nbsp; {post.date} &nbsp;•&nbsp; {post.readTime}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#fff' }}>{post.title}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
              <div style={{ marginTop: '20px', color: 'var(--accent-color)', fontWeight: 'bold' }}>Read Article &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
