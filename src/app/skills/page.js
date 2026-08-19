import styles from '../page.module.css';
import Link from 'next/link';

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: "▲" },
    { name: "React.js", icon: "⚛️" },
    { name: "Shopify", icon: "🛍️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "PHP", icon: "🐘" },
    { name: "Three.js", icon: "🔺" },
    { name: "WordPress", icon: "W" },
    { name: "3ds Max", icon: "🧊" },
    { name: "Blender", icon: "🎨" },
    { name: "Vectary", icon: "V" },
    { name: "Front-end Design", icon: "🎨" },
    { name: "HTML Emails", icon: "📧" },
    { name: "Front-end Coding", icon: "💻" },
    { name: "Adobe Photoshop", icon: "Ps" },
    { name: "Figma", icon: "🎨" },
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / <span style={{ color: '#fff' }}>Skills</span>
          </div>

          <h1 style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '24px' }}>Core <span className="text-accent">Skills</span></h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px', fontSize: '1.2rem' }}>
            The foundational technologies I use to build robust, scalable applications.
          </p>

          <div className={styles.skillsContainer} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto', padding: '40px 0' }}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillPill} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 32px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', fontWeight: '600', color: '#fff' }}>
                <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
