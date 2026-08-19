import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> / <span style={{ color: '#fff' }}>About Us</span>
          </div>

          <div className={styles.aboutGrid}>
            <div>
              <h1 className={styles.aboutTitle}>
                Democratizing <span className="text-accent">Enterprise Web Architecture</span> in India.
              </h1>

              <p className={styles.aboutDesc}>
                My practice was born out of a simple frustration: independent founders and startups in India lacked access to the same high-fidelity web architecture and scalable deployment tools that large tech giants take for granted.
              </p>

              <p className={styles.aboutDesc}>
                I am an independent full-stack developer, UI/UX systems engineer, and performance enthusiast dedicated to building the infrastructure required for precise, data-driven applications across modern cloud providers.
              </p>
            </div>

            <div>
              <div className={styles.valuesCard}>
                <h3 className={styles.valuesTitle}>Our Core Values</h3>

                <div className={styles.valueItem}>
                  <div className={styles.valueDot}></div>
                  <div className={styles.valueContent}>
                    <p><strong>No Black Boxes:</strong> I believe in transparent, verifiable architecture that accounts for real-world performance metrics and scalability.</p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <div className={styles.valueDot}></div>
                  <div className={styles.valueContent}>
                    <p><strong>Engineering First:</strong> I write production-grade React and Node.js code, not fragile script patches or bloated templates.</p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <div className={styles.valueDot}></div>
                  <div className={styles.valueContent}>
                    <p><strong>Platform Agnostic:</strong> Your digital product should run blazingly fast wherever you get the best infrastructure edge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
