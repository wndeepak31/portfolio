import Link from 'next/link';

export default function Blog() {
  const posts = [
    { title: "Building Scalable Architecture with Next.js & Postgres", date: "August 12, 2026", category: "Engineering" },
    { title: "Why Micro-Animations Matter in UI/UX Design", date: "July 28, 2026", category: "Design" },
    { title: "Integrating 3ds Max Models into Web with Three.js", date: "June 15, 2026", category: "3D Web" },
    { title: "The Truth About Node.js Performance in 2026", date: "May 04, 2026", category: "Backend" },
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Engineering Blog</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '60px' }}>
          Deep dives into modern web architecture, state management, and performance engineering.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {posts.map((post, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '32px', borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer' }} className="hover:border-[var(--accent-color)]">
              <div style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '12px' }}>{post.category} &nbsp;•&nbsp; {post.date}</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#fff' }}>{post.title}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Read more about the intricacies of {post.category.toLowerCase()} and how I approach these problems in enterprise-scale applications.</p>
              <div style={{ marginTop: '20px', color: 'var(--accent-color)', fontWeight: 'bold' }}>Read Article &rarr;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
