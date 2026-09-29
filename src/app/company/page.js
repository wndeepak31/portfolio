import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> / <span style={{ color: '#fff' }}>Company</span>
          </div>

          <div className={styles.aboutGrid}>
            <div>
              <h1 className={styles.aboutTitle}>
                Architecting <span className="text-accent">Enterprise Web Solutions</span> Worldwide.
              </h1>

              <p className={styles.aboutDesc}>
                ApexTech+ was born out of a simple frustration: visionary founders and scaling startups lacked access to the same high-fidelity web architecture, interactive 3D tools, and scalable deployment strategies that tech giants take for granted.
              </p>

              <p className={styles.aboutDesc}>
                We are an elite collective of full-stack engineers, UI/UX systems architects, and 3D rendering specialists dedicated to building the infrastructure required for precise, data-driven applications and premium digital experiences across the globe.
              </p>
            </div>

            <div>
              <div className={styles.valuesCard}>
                <h3 className={styles.valuesTitle}>Our Core Values</h3>

                <div className={styles.valueItem}>
                  <div className={styles.valueDot}></div>
                  <div className={styles.valueContent}>
                    <p><strong>No Black Boxes:</strong> We believe in transparent, verifiable architecture that accounts for real-world performance metrics and scalability.</p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <div className={styles.valueDot}></div>
                  <div className={styles.valueContent}>
                    <p><strong>Engineering First:</strong> We write production-grade React, Next.js, and Node.js code—not fragile script patches or bloated templates.</p>
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

          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Global Projects Shipped</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>Uptime Architected</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Success Rate</div>
            </div>
          </div>

          <div className={styles.methodologySection}>
            <h2 className={styles.methodologyTitle}>The ApexTech+ Methodology</h2>
            <div className={styles.methodologyGrid}>
              <div className={styles.methodCard}>
                <div className={styles.methodStep}>01</div>
                <h3>Discovery & Architecture</h3>
                <p>We don't just write code. We start by architecting the entire system—mapping out the database schemas, API routes, and cloud infrastructure required to scale your product globally.</p>
              </div>
              <div className={styles.methodCard}>
                <div className={styles.methodStep}>02</div>
                <h3>High-Fidelity Engineering</h3>
                <p>Translating elite UI/UX designs into pixel-perfect, highly responsive React and Next.js interfaces. Every micro-animation and state change is meticulously crafted for optimal user experience.</p>
              </div>
              <div className={styles.methodCard}>
                <div className={styles.methodStep}>03</div>
                <h3>Enterprise Deployment</h3>
                <p>Deploying on robust cloud infrastructure (AWS, Vercel) with CI/CD pipelines, automated testing, and comprehensive security protocols out of the box.</p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
