import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbSchema from '../../../components/BreadcrumbSchema';
import { blogPosts, getBlogPostBySlug } from '../../../data/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found - ApexTech+' };
  }

  const url = `https://www.apextechplus.com/blog/${post.slug}`;

  return {
    title: `${post.title} | ApexTech+`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ApexTech+`,
      description: post.excerpt,
      url,
      siteName: 'ApexTech+',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.isoDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ApexTech+`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    author: {
      '@type': 'Organization',
      name: 'ApexTech+',
      url: 'https://www.apextechplus.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ApexTech+',
      url: 'https://www.apextechplus.com',
    },
    mainEntityOfPage: `https://www.apextechplus.com/blog/${post.slug}`,
  };

  return (
    <article style={{ minHeight: '80vh', padding: '40px 20px 100px 20px' }}>
      <BreadcrumbSchema
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container" style={{ maxWidth: '820px' }}>
        <Link
          href="/blog"
          style={{
            display: 'inline-block',
            color: 'var(--accent-color)',
            fontSize: '0.95rem',
            fontWeight: '600',
            marginBottom: '28px',
            textDecoration: 'none',
          }}
        >
          &larr; Back to Engineering Blog
        </Link>

        <div
          style={{
            color: 'var(--accent-color)',
            fontSize: '0.85rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '14px',
          }}
        >
          {post.category} &nbsp;•&nbsp; {post.date} &nbsp;•&nbsp; {post.readTime}
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            lineHeight: '1.15',
            marginBottom: '20px',
            color: '#fff',
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.15rem',
            lineHeight: '1.7',
            marginBottom: '48px',
            paddingBottom: '32px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {post.excerpt}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2
                style={{
                  fontSize: '1.55rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                {section.heading}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.05rem',
                      lineHeight: '1.8',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul
                  style={{
                    marginTop: '16px',
                    paddingLeft: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    color: 'var(--text-secondary)',
                    fontSize: '1.02rem',
                    lineHeight: '1.7',
                  }}
                >
                  {section.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div
          style={{
            marginTop: '60px',
            padding: '32px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '1.15rem', marginBottom: '6px' }}>
              Need help with {post.relatedService.label}?
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
              Explore our architecture approach or talk directly with our engineering team.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href={post.relatedService.href} className="btn-secondary">
              Explore {post.relatedService.label}
            </Link>
            <Link href="/contact" className="btn-primary">
              Let&apos;s Talk &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
