"use client";
import { useRef } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 444; // Card width (420) + gap (24)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const skills = [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "WordPress", icon: "W" },
    { name: "Front-end Design", icon: "🎨" },
    { name: "HTML Emails", icon: "📧" },
    { name: "Front-end Coding", icon: "💻" },
    { name: "Adobe Photoshop", icon: "Ps" },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className="container" style={{ width: '100%' }}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDotWrapper}>
                  <span className={styles.heroBadgeDotPing}></span>
                  <span className={styles.heroBadgeDot}></span>
                </span>
                AVAILABLE FOR PROJECTS
              </div>

              <h1 className={styles.heroTitle}>
                <span style={{ color: '#ffffff' }}>Design.</span><br />
                <span style={{ color: '#64748b' }}>Build.</span><br />
                <span style={{ color: 'var(--accent-color)' }}>Deploy.</span>
              </h1>

              <p className={styles.heroSubtitle}>
                Stop guessing. Start building. India's most precise web development meets professional full-stack architecture. From raw idea to live deployment.
              </p>

              <div className="flex gap-4">
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 32px' }}>
                  <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s' }}></div>
                  <span>▶</span> Book a Quick Call
                </button>
                <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', borderColor: 'rgba(255,255,255,0.1)', padding: '12px 24px' }}>
                  <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s' }}></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" style={{ color: '#25D366' }}><path d="M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z"></path></svg>
                  WhatsApp Us
                </button>
              </div>

              <div className={styles.heroAvatars}>
                <div className={styles.avatarGroup}>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=11)' }}></div>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=12)' }}></div>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=13)' }}></div>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=14)' }}></div>
                </div>
                <div className={styles.avatarStats}>
                  <span><strong>50+</strong> Projects</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></span>
                  <span><strong>20+</strong> Clients</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></span>
                  <span><strong>100%</strong> Success Rate</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisualWrapper}>
              <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDots}>
                    <div className={styles.mockupDot} style={{ background: '#ff5f56' }}></div>
                    <div className={styles.mockupDot} style={{ background: '#ffbd2e' }}></div>
                    <div className={styles.mockupDot} style={{ background: '#27c93f' }}></div>
                  </div>
                  <div className={styles.terminalTitle}>deepak_nishad — web_engine</div>
                </div>
                <div className={styles.terminalBody}>
                  <div className={styles.terminalLine}><span className={styles.terminalArrow}>&gt;</span><span>01 Initializing Portfolio Engine...</span></div>
                  <div className={styles.terminalLine}><span className={styles.terminalArrow}>&gt;</span><span>02 Loading Frameworks: Next.js & React</span></div>
                  <div className={styles.terminalLine}><span className={styles.terminalArrow}>&gt;</span><span>03 Applying Custom Styles<span className={styles.terminalCursor}></span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tech Stack Logo Strip */}
      <div className={styles.logoStripWrapper}>
        <div className={styles.logoStripTitle}>TRUSTED TECHNOLOGIES</div>
        <div className={styles.logoStrip}>
          <div className={styles.logoItem}>⚛️ React.js</div>
          <div className={styles.logoItem}>▲ Next.js</div>
          <div className={styles.logoItem}>🐘 PostgreSQL</div>
          <div className={styles.logoItem} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#21759b">
              <path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.763-7.57zM3.008 12c0 3.56 1.83 6.69 4.614 8.273L4.908 12.42c-.44-1.282-.676-2.62-.676-3.95 0-.256.012-.51.037-.76.01.127.017.258.02.392zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.665c-1.122 0-2.19-.214-3.175-.597l3.056-8.868 2.656 7.42c-.085.034-.173.064-.263.093l-.427 1.18c-.58.188-1.196.31-1.835.37-1.186.113-2.424-.047-3.553-.456l2.97-8.625h1.365l3.527 9.87c.732-.236 1.417-.556 2.046-.948l-2.64-7.464 2.875-8.232c-.524-.132-1.063-.223-1.616-.27l-3.235 9.387c-.63 1.826-1.572 2.37-2.607 2.37-.584 0-1.12-.178-1.536-.505-.504-.396-.75-.986-.75-1.748 0-1.42.714-3.79 1.636-6.104.093-.23.18-.46.26-.69.043-.12.083-.236.12-.35-.785.12-1.537.33-2.247.616L9.46 12.787zM20.655 8.167c-.208.6-.523 1.258-.938 1.954l-3.25 5.437c-.1.168-.204.338-.31.512l3.435 9.176C21.05 22.84 22 20.033 22 17c0-3.555-1.827-6.685-4.608-8.267.067-.282.102-.576.102-.876 0-1.144-.325-2.203-.896-3.11-.137.26-.275.52-.416.78z"></path>
            </svg>
            WordPress
          </div>
          <div className={styles.logoItem}>🛍️ Shopify</div>
          <div className={styles.logoItem}>🎨 Figma</div>
        </div>
      </div>

      <div className="container">
        {/* 3. Why Serious Clients Choose Us */}
        <section className="section">
          <h2 className={styles.sectionTitleLeft}>
            Why Serious Clients Choose<br />
            <span className="text-accent">Apex Tech.</span>
          </h2>

          <div className={styles.bentoContainer}>
            {/* Top Row */}
            <div className={styles.bentoGridRow1}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIconBox}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                </div>
                <h3>Custom Web Solutions</h3>
                <p>Tailor-made web applications designed for scalability and performance. Say goodbye to cookie-cutter templates. Every project is built from the ground up to match your exact business requirements.</p>
              </div>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIconBox}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <h3>100% Reliable & Secure</h3>
                <p>Enterprise-grade security standards applied to every layer of your application. Your data and user information remain completely protected and confidential.</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className={styles.bentoGridRow2}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIconBox}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                </div>
                <h3>From Idea to Live Deployment</h3>
                <p>Submit your requirements in plain language. I handle the entire lifecycle—from UI/UX design and coding, to rigorous testing and final deployment across platforms.</p>
              </div>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIconBox}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </div>
                <h3>Full-Stack Architecture</h3>
                <p>Seamless integration between intuitive front-end interfaces and robust, scalable back-end databases. Built on modern stacks like Next.js, React, and PostgreSQL for maximum performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Built for Every Level */}
        <section className="section">
          <div className={styles.splitSection}>
            <div className={styles.splitSectionLeft}>
              <h2 className={styles.splitSectionTitle}>
                Built for Every Level of<br />
                <span className="text-secondary" style={{ color: '#94a3b8' }}>Web Development</span>
              </h2>
              <p className={styles.splitSectionDesc}>
                From small businesses launching their first landing page to enterprises requiring complex, secure architecture across multiple databases.
              </p>
            </div>

            <div className={styles.splitSectionRight}>
              <div className={styles.listCard}>
                <h3>Small Businesses & Creators</h3>
                <p>Establish your digital footprint with a stunning, conversion-optimized landing page. No technical knowledge required. We build and deploy everything so you can focus on your business.</p>
                <a href="#contact" className={styles.listCardLink}>&rarr; Start with a Free Consultation</a>
              </div>
              <div className={styles.listCard}>
                <h3>Startups & SaaS Founders</h3>
                <p>Rapid prototyping and scalable MVPs built with React and Next.js. Create a robust architecture that scales effortlessly as your user base grows. Pixel-perfect, high-performance UI.</p>
                <a href="#contact" className={styles.listCardLink}>&rarr; See Startup Solutions</a>
              </div>
              <div className={styles.listCard}>
                <h3>Enterprises & Agencies</h3>
                <p>Complex database architecture, API integrations, and robust security measures. Custom development for complex multi-page applications, dashboards, and scalable infrastructure.</p>
                <a href="#contact" className={styles.listCardLink}>&rarr; Talk to Our Dev Team</a>
              </div>
            </div>
          </div>
        </section>


        {/* 6. How My Process Works */}
        <section className="section">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className={styles.timelineSectionTitle}>How My Development Works</h2>
            <p className={styles.timelineSectionDesc}>5 simple steps from raw idea to full-scale deployment.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Left Column: Mockup/Image */}
            <div className={`${styles.mockupWindow} animate-float`} style={{ height: '450px', maxWidth: '100%', borderRadius: '24px' }}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDot}></div>
                <div className={styles.mockupDot}></div>
                <div className={styles.mockupDot}></div>
              </div>
              {/* Simulated code editor visual */}
              <div style={{ padding: '30px', fontFamily: 'monospace', color: 'var(--accent-color)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                $ npx create-next-app@latest portfolio<br /><br />
                <span style={{ color: 'var(--text-secondary)' }}>// Initializing development environment...</span><br />
                <span style={{ color: '#ffbd2e' }}>function</span> <span style={{ color: '#fff' }}>Deploy</span>() {'{'}<br />
                &nbsp;&nbsp;<span style={{ color: '#ffbd2e' }}>const</span> architecture = <span style={{ color: '#27c93f' }}>'Robust'</span>;<br />
                &nbsp;&nbsp;<span style={{ color: '#ffbd2e' }}>const</span> performance = <span style={{ color: '#27c93f' }}>'Optimized'</span>;<br />
                &nbsp;&nbsp;return success;<br />
                {'}'}<br /><br />
                &gt; Analyzing metrics... [OK]<br />
                &gt; Compiling assets... [OK]<br />
                &gt; Deployment Complete [245ms]<br />
                <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>100%</div>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className={styles.timelineContainer}>
              <div className={styles.timelineStep}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineStepNumber}>Step #1</div>
                <h3>Define Your Strategy</h3>
                <p>Tell us your goals, target audience, and feature requirements using plain English. Our team helps translate your vision into a concrete technical roadmap.</p>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineStepNumber}>Step #2</div>
                <h3>Select Tech Stack</h3>
                <p>Choose the right tools for the job (React, Next.js, Node, PostgreSQL). We select the optimal framework and database architecture for scalable performance.</p>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineStepNumber}>Step #3</div>
                <h3>UI/UX Prototyping</h3>
                <p>Set design systems, typography, and interactive components. We create high-fidelity prototypes so you see exactly what your users will experience.</p>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineStepNumber}>Step #4</div>
                <h3>Develop & Review</h3>
                <p>Get results in weeks, not months. We build both the front-end and back-end in tandem, providing regular staging links for you to review and test.</p>
              </div>

              <div className={styles.timelineStep}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineStepNumber}>Step #5</div>
                <h3>Optimise & Deploy</h3>
                <p>Performance optimization, SEO setup, and rigorous bug testing. Finally, we deploy to a live production server with continuous integration configured.</p>
              </div>
            </div>
          </div>
        </section>


        {/* 8. What Our Clients Say */}
        <section className="section" style={{ overflow: 'hidden' }}>
          <div className={styles.testimonialHeader}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                What Our Clients Say
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '600px', lineHeight: '1.6' }}>
                Don't just take our word for it. Here's what founders and engineering leaders across the globe think about our development platform.
              </p>
            </div>
            <div className={styles.testimonialNav}>
              <button className={styles.testimonialNavBtn} aria-label="Previous" onClick={() => scroll('left')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className={styles.testimonialNavBtn} aria-label="Next" onClick={() => scroll('right')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

          <div className={styles.testimonialScrollContainer} ref={scrollRef}>

            {/* Card 1 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "I had a complex requirement that 'worked' on free tools. Deepak's robust architecture showed me how scalable real apps can be. That saved me from a live disaster. Worth every rupee."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>SJ</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h4>Sarah Jenkins</h4>
                  <p>Tech Startup CEO · San Francisco</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "Managing infrastructure for 30+ clients was becoming unmanageable. The multi-account deployment feature is exactly what our agency needed. My clients get consistent results."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>MC</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h4>Marcus Chen</h4>
                  <p>E-commerce Director · Singapore</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "I gave him a rough idea on a WhatsApp voice note. Within 6 days I had a fully coded, optimized backend running smoothly on Vercel. The communication was crisp."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>AB</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h4>Aman B.</h4>
                  <p>Product Manager · Delhi</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "The custom development was a game changer. I run all my workflows through the centralized dashboard now — all synchronized flawlessly. Highly recommended."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>VP</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h4>Venkatesh P.</h4>
                  <p>Startup Founder · Bengaluru</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 10. Explore / Discover */}
        <section className="section">
          <div className={styles.exploreEyebrow}>EXPLORE DEEPAK'S PORTFOLIO</div>
          <h2 className={styles.exploreTitle}>Discover What I Offer</h2>
          <p className={styles.exploreDesc}>
            From designing your first wireframe to deploying a full-scale web application — everything is handled under one roof.
          </p>

          <div className={styles.exploreGrid}>
            {/* Explore Cards Grid */}
            {/* Card 1 */}
            <a href="#custom-dev" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Custom Web Development</h3>
              <p>Build any web application from scratch using React, Next.js, and modern CSS. Fast, accessible, and perfectly tailored to your needs.</p>
            </a>

            {/* Card 2 */}
            <a href="#api-dev" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              </div>
              <h3>API & Backend Architecture</h3>
              <p>Describe your data requirements — I'll architect it in Node.js or Python, test it, and deploy it securely to the cloud.</p>
              <div className={styles.exploreLink}>Learn more &rarr;</div>
            </a>

            {/* Card 3 */}
            <a href="#ui-ux" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              </div>
              <h3>UI/UX Prototyping</h3>
              <p>Deploy beautiful, intuitive user interfaces. I use Figma to design high-fidelity mockups before writing a single line of code.</p>
            </a>

            {/* Card 4 */}
            <a href="#pricing" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Pricing & Packages</h3>
              <p>Transparent pricing for landing pages, custom full-stack development, and enterprise retainer solutions.</p>
            </a>

            {/* Card 5 */}
            <a href="#services" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3>All Services Overview</h3>
              <p>Compare my front-end, back-end, database, and cloud deployment offerings side by side.</p>
            </a>

            {/* Card 6 */}
            <a href="#blog" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3>Blog & Dev Research</h3>
              <p>Deep dives into modern web architecture, state management design, and performance engineering.</p>
            </a>
          </div>
        </section>


      </div>

    </>
  );
}
