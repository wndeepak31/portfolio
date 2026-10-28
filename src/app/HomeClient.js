"use client";
import { useRef } from 'react';
import Link from 'next/link';
import styles from "./page.module.css";
import marqueeStyles from "./expertise/marquee.module.css";
import dynamic from 'next/dynamic';

const JewelryConfiguratorShowcase = dynamic(
  () => import('../components/JewelryConfiguratorShowcase'),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: '440px', width: '100%', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', margin: '40px 0' }} />
    ),
  }
);

export default function HomeClient() {
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
  const row1 = [
    { name: "Next.js", icon: "/tech/nextdotjs.svg", type: "Framework" },
    { name: "React", icon: "/tech/react.svg", type: "Frontend" },
    { name: "Shopify Plus", icon: "/tech/shopify.svg", type: "E-commerce" },
    { name: "PostgreSQL", icon: "/tech/postgresql.svg", type: "Database" },
    { name: "Node.js", icon: "/tech/nodedotjs.svg", type: "Backend" },
    { name: "Three.js", icon: "/tech/threedotjs.svg", type: "3D Web" },
    { name: "Python", icon: "/tech/python.svg", type: "AI/Backend" },
    { name: "AI / ML", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PjxyZWN0IHg9IjkiIHk9IjkiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPjwvcmVjdD48bGluZSB4MT0iOSIgeTE9IjEiIHgyPSI5IiB5Mj0iNCI+PC9saW5lPjxsaW5lIHgxPSIxNSIgeTE9IjEiIHgyPSIxNSIgeTI9IjQiPjwvbGluZT48bGluZSB4MT0iOSIgeTE9IjIwIiB4Mj0iOSIgeTI9IjIzIj48L2xpbmU+PGxpbmUgeDE9IjE1IiB5MT0iMjAiIHgyPSIxNSIgeTI9IjIzIj48L2xpbmU+PGxpbmUgeDE9IjIwIiB5MT0iOSIgeDI9IjIzIiB5Mj0iOSI+PC9saW5lPjxsaW5lIHgxPSIyMCIgeTE9IjE0IiB4Mj0iMjMiIHkyPSIxNCI+PC9saW5lPjxsaW5lIHgxPSIxIiB5MT0iOSIgeDI9IjQiIHkyPSI5Ij48L2xpbmU+PGxpbmUgeDE9IjEiIHkxPSIxNCIgeDI9IjQiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==", type: "Innovation" },
  ];

  const row2 = [
    { name: "WebGL", icon: "/tech/webgl.svg", type: "Graphics" },
    { name: "Prisma", icon: "/tech/prisma.svg", type: "ORM" },
    { name: "TypeScript", icon: "/tech/typescript.svg", type: "Language" },
    { name: "AWS", icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTA4LjU5IDI2LjE0OGMtMS44NTIgMC0zLjYyMi4yMTEtNS4zMDUuNzE1LTEuNjg0LjUwNC0zLjExNyAxLjIyMy00LjM3OSAyLjE4OGExMC44MjkgMTAuODI5IDAgMCAwLTMuMDMxIDMuNDUzYy0uNzU3IDEuMzQ4LTEuMTM3IDIuOTA2LTEuMTM3IDQuNjc2IDAgMi4xODcuNzE2IDQuMjUgMi4xMDYgNi4xMDUgMS4zODYgMS44OTUgMy42NiAzLjMyNCA2LjczNCA0LjI5M2w2LjEwNiAxLjg5NWMyLjA2Mi42NzUgMy40OTYgMS4zOTEgNC4yNTQgMi4xOTEuNzU3LjgwMSAxLjEzNiAxLjc2NSAxLjEzNiAyLjk0NSAwIDEuNzI2LS43NTggMy4wNzQtMi4xOTEgNC0xLjQzLjkyNS0zLjQ5MiAxLjM5MS02LjE0NSAxLjM5MS0xLjg4NyAwLTMuMzI4LS4xNjgtNS4wMTEtLjUwNGEyMy4xMDIgMjMuMTAyIDAgMCAxLTQuNjMzLTEuNDc2Yy0uNDIxLS4xNjgtLjgwMS0uMzM2LTEuMzA1LS40MThhMi4zNTcgMi4zNTcgMCAwIDAtLjc1OC0uMTNjLS42MzQgMC0uOTY5LjQyMy0uOTY5IDEuMzA1djIuMTQ5YTIuOTE5IDIuOTE5IDAgMCAwIC4yNTQgMS4xOGMuMTY4LjM4LjYyOS44IDEuMzA1IDEuMTggMS4wOTQuNjI4IDIuNzM0IDEuMTc5IDQuODQgMS42ODMgMi4xMDUuNTA0IDQuMjk3Ljc1OCA2LjQ4NC43NTggMi4xNSAwIDQuMTI5LS4yOTcgNi4wMjQtLjg4MyAxLjgwOC0uNTUxIDMuMzY3LTEuMzA5IDQuNjcyLTIuMzYgMS4zMDQtMS4wMSAyLjMxNi0yLjI3MyAzLjA3NC0zLjcwNy43MTQtMS40MjkgMS4wOTQtMy4wNyAxLjA5NC00Ljg4MiAwLTIuMTg4LS42MzMtNC4xNjgtMS45MzgtNS44OTUtMS4zMDQtMS43MjctMy40OTEtMy4wNzQtNi41MjMtNC4wNDNsLTUuOTgtMS44OTVjLTIuMjMtLjcxMy0zLjc5LTEuNTE2LTQuNjM0LTIuMzE2LS44NC0uNzk3LTEuMjYxLTEuODA4LTEuMjYxLTIuOTg4IDAtMS43MjYuNjcxLTIuOTUgMS45OC0zLjc0NiAxLjMwNS0uODAxIDMuMTk5LTEuMTggNS45OC0xLjE4IDIuOTg4IDAgNS42ODMuNTQ3IDguMDg2IDEuNjQuNzE0LjMzNyAxLjI2MS41MDggMS41OTcuNTA4LjYzMyAwIC45NjktLjQ2My45NjktMS4zNDd2LTEuOThjMC0uNTktLjEyNS0xLjA1MS0uMzc5LTEuMzkxLS4yNS0uMzc4LS42NzItLjcxNS0xLjI2Mi0xLjA1MS0uNDIyLS4yNTQtMS4wMTEtLjUwNC0xLjc3LS43NThhMzIuNTI4IDMyLjUyOCAwIDAgMC0yLjM5OC0uNjc2Yy0uODg2LS4xNjgtMS43NjktLjMzNi0yLjczOC0uNDZhMjEuMzQ3IDIxLjM0NyAwIDAgMC0yLjgyLS4xNjl6bS04Ni44MjIuMDgyYy0yLjMxNiAwLTQuNTA4LjI1NC02LjU3LjgwMS0yLjA2My41MDUtMy44MzEgMS4xMzctNS4zMDMgMS44OTUtLjU5LjI5Ny0uOTcuNTktMS4xOC44ODMtLjIxMS4yOTYtLjI5My44LS4yOTMgMS40NzZ2Mi4wNjNjMCAuODgyLjI5MyAxLjMwNC44ODMgMS4zMDQuMTY4IDAgLjM3OC0uMDQzLjY3NC0uMTI1LjI5My0uMDg2Ljc5Ni0uMjU0IDEuNDcyLS41NDdhMzMuNDE2IDMzLjQxNiAwIDAgMSA0LjU0Ny0xLjQzM0ExOS4xNzYgMTkuMTc2IDAgMCAxIDIwLjU0NyAzMmMzLjI0MiAwIDUuNTEzLjYzMyA2Ljg2MyAxLjkzOCAxLjMwNCAxLjMwMyAxLjk4IDMuNTM0IDEuOTggNi43MzR2My4wNzRjLTEuNjgzLS4zNzktMy4yODMtLjcxNS00Ljg0My0uOTI2LTEuNTU4LS4yMS0zLjAzMS0uMzM2LTQuNDYxLS4zMzYtNC4zNCAwLTcuNzUgMS4wOTQtMTAuMzE2IDMuMjg2LTIuNTcxIDIuMTg3LTMuODMyIDUuMDkzLTMuODMyIDguNjcxIDAgMy4zNjggMS4wNSA2LjA2MyAzLjExMyA4Ljg4NiAyLjA2NiAyLjAyIDQuODg3IDMuMDMyIDguNDIyIDMuMDMyIDQuOTcgMCA5LjA5Ny0xLjkzOCAxMi4zNzktNS44MTNhMzQuMTUzIDM0LjE1MyAwIDAgMCAxLjMwNCAyLjQ4NCAxMy4yOCAxMy4yOCAwIDAgMCAxLjUxNiAxLjk4Yy40MjIuMzguODQ0LjU5IDEuMjY2LjU5LjMzNCAwIC43MTQtLjEyOCAxLjA5My0uMzc4bDIuNjUzLTEuNzdjLjU0Ni0uNDIuOC0uODQzLjgtMS4yNjFhMS44NiAxLjg2IDAgMCAwLS4yOTMtLjk3IDIyLjQ2OSAyMi40NjkgMCAwIDEtMS4zNDctMy4wM2MtLjI5Ny0uOTI1LS40NjUtMi4xOS0uNDY1LTMuNzVoLS4wODZWNDBjMC00LjYzMy0xLjE3Ni04LjA4Ni0zLjQ5Mi0xMC4zNi0yLjM2LTIuMjczLTYuMDI1LTMuNDEtMTEuMDMzLTMuNDF6bTE5LjU4IDEuMDEyYy0uNjc2IDAtMS4wMTIuMzc5LTEuMDEyIDEuMDUxIDAgLjI5Ny4xMjkuODQ0LjM3OSAxLjY4N2w5Ljg5NCAzMi41NDdjLjI1NC44LjU0NyAxLjM4Ny44ODcgMS42NDEuMzM2LjI5Ny44NC40MjIgMS41OTguNDIyaDMuNjJjLjc1OSAwIDEuMzQ3LS4xMjUgMS42ODQtLjQyMi4zNC0uMjkzLjU5MS0uODQuODAxLTEuNjg0bDUuNDg1LTI3LjExNyA2LjUyNyAyNy4xNmMuMTY4Ljg0LjQ2IDEuMzg3LjggMS42ODQuMzM3LjI5Mi44ODMuNDIyIDEuNjg0LjQyMmgzLjYyMWMuNzE1IDAgMS4yNjItLjE2NyAxLjU5OC0uNDIyLjM0LS4yNTMuNjMzLS44Ljg4Ny0xLjY0TDkwLjk0OSAzMC4wMmMuMTY4LS40Ni4yNS0uNzk3LjI5My0xLjA1MS4wNDMtLjI1NC4wODYtLjQ2Ni4wODYtLjc2IDAtLjcxNS0uMzc5LTEuMDUtMS4wNTUtMS4wNUg4Ni4zNmMtLjc1NyAwLTEuMzA4LjE2Ni0xLjY0NC40MjEtLjI5My4yNS0uNTkuOC0uODQgMS42NEw3Ni41OSA1Ny41MTdsLTYuNjUzLTI4LjIxMWMtLjE2Ni0uOC0uNDY0LTEuMzktLjgtMS42NC0uMzM2LS4yOTgtLjg4NC0uNDIzLTEuNjg0LS40MjNoLTMuMzY3Yy0uNzU4IDAtMS4zNDguMTY3LTEuNjg4LjQyMi0uMzM1LjI1LS41ODguOC0uNzk2IDEuNjRsLTYuNTcgMjcuODc2LTcuMDc1LTI3Ljg3NWMtLjI1LS44LS41MDQtMS4zOS0uODQtMS42NC0uMjk3LS4yOTgtLjg0NC0uNDIzLTEuNjQ0LS40MjNoLTQuMTI1ek0yMS42NCA0Ny40OTZhMzEuODE2IDMxLjgxNiAwIDAgMSAzLjk2LjI1IDM0LjQwMSAzNC40MDEgMCAwIDEgMy44NzIuNzE5djEuNzY1YzAgMS40MzUtLjE2OCAyLjY1My0uNDIyIDMuNjY1LS4yNSAxLjAxLS43NTggMS44OTUtMS40MyAyLjY5NS0xLjEzNyAxLjI2Mi0yLjQ4NCAyLjE4Ny00IDIuNjk1LTEuNTE2LjUwNC0yLjk0OS43NTgtNC4zMzYuNzU4LTEuOTM3IDAtMy40MS0uNTA4LTQuNDIyLTEuNTU5LTEuMDU0LTEuMDEtMS41NTgtMi40ODQtMS41NTgtNC40NjQgMC0yLjEwNi42NzUtMy43MDQgMi4wNjItNC44NCAxLjM5MS0xLjEzNyAzLjQ1NC0xLjY4NCA2LjI3NC0xLjY4NHpNMTE4IDczLjM0OGMtNC40MzIuMDYzLTkuNjY0IDEuMDUyLTEzLjYyMSAzLjgzMi0xLjIyMy44ODMtMS4wMTIgMi4wNjIuMzM2IDEuODk0IDQuNTA4LS41NDcgMTQuNDQtMS43MjYgMTYuMjEuNTQ3IDEuNzcgMi4yMy0xLjk3NiAxMS42Mi0zLjY2MyAxNS43OS0uNTA0IDEuMjYuNTkgMS43NjkgMS43MjYuOCA3LjQxLTYuMjMxIDkuMzQ4LTE5LjI0MiA3LjgzMi0yMS4xMzctLjc1Ny0uOTI1LTQuMzg4LTEuNzktOC44Mi0xLjcyNnpNMS42MyA3NS44NTljLS45MjYuMTE2LTEuMzQ3IDEuMjM2LS4zNjggMi4xMjEgMTYuNTA4IDE0LjkwMiAzOC4zNTkgMjMuODcyIDYyLjYxMyAyMy44NzIgMTcuMzA1IDAgMzcuNDMtNS40MyA1MS4yODEtMTUuNjYgMi4yNzMtMS42ODkuMjk4LTQuMjU0LTIuMDItMy4yMDQtMTUuNTMzIDYuNTctMzIuNDIxIDkuNzctNDcuNzg4IDkuNzctMjIuNzc4IDAtNDQuOC02LjI3My02Mi42NTMtMTYuNjMzLS4zOS0uMjMxLS43NTUtLjMwNC0xLjA2NC0uMjY2eiIvPgo8L3N2Zz4=", type: "Cloud Architecture" },
    { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg", type: "Styling" },
    { name: "Figma", icon: "/tech/figma.svg", type: "UI/UX Design" },
    { name: "Android", icon: "/tech/android.svg", type: "Mobile" },
  ];
  
  const doubledRow1 = [...row1, ...row1, ...row1];
  const doubledRow2 = [...row2, ...row2, ...row2];

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

              <h1 className={styles.heroTitle} aria-label="ApexTech+ — Elite Enterprise Web Architecture Agency">
                <span className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>ApexTech+ — </span>
                <span style={{ color: '#ffffff' }}>Design.</span><br />
                <span style={{ color: '#64748b' }}>Build.</span><br />
                <span style={{ color: 'var(--accent-color)' }}>Deploy.</span>
              </h1>

              <p className={styles.heroSubtitle}>
                Stop guessing. Start building. Scalable full-stack web applications, premium Shopify e-commerce, and interactive WebGL 3D configurators.
              </p>

              <div className={styles.heroButtonGroup}>
                <Link href="/contact" className={`btn-primary ${styles.heroBtnPrimary}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s' }}></div>
                  <span>▶</span> Book a Quick Call
                </Link>
                <a href="https://wa.me/918693864378" target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.heroBtnSecondary}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s' }}></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" style={{ color: '#25D366' }}><path d="M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z"></path></svg>
                  WhatsApp Us
                </a>
              </div>

              <div className={styles.heroAvatars}>
                <div className={styles.avatarGroup}>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(/avatars/avatar-1.svg)' }}></div>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(/avatars/avatar-2.svg)' }}></div>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(/avatars/avatar-3.svg)' }}></div>
                  <div className={styles.avatar} style={{ backgroundImage: 'url(/avatars/avatar-4.svg)' }}></div>
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
                  <div className={styles.terminalTitle}>apextech — web_engine</div>
                </div>
                <div className={styles.terminalBody}>
                  <div className={styles.terminalLine}><span className={styles.terminalArrow}>&gt;</span><span>01 Booting Next.js & Node.js architecture...</span></div>
                  <div className={styles.terminalLine}><span className={styles.terminalArrow}>&gt;</span><span>02 Integrating Storefront API & WebGL engine...</span></div>
                  <div className={styles.terminalLine}><span className={styles.terminalArrow}>&gt;</span><span>03 Deploying scalable application... DONE.<span className={styles.terminalCursor}></span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tech Stack Logo Strip */}
      <div style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>TRUSTED TECHNOLOGIES</div>
        <div className={marqueeStyles.marqueeContainer} style={{ marginBottom: '16px' }}>
          <div className={marqueeStyles.marqueeContent}>
            {doubledRow1.map((tech, index) => (
              <div key={`tech1-${index}`} className={marqueeStyles.skillPill}>
                <img src={tech.icon} alt={tech.name} className={marqueeStyles.skillIcon} />
                <div className={marqueeStyles.skillInfo}>
                  <span className={marqueeStyles.skillName}>{tech.name}</span>
                  <span className={marqueeStyles.skillType}>· {tech.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={marqueeStyles.marqueeContainer} style={{ marginBottom: 0 }}>
          <div className={marqueeStyles.marqueeContentReverse}>
            {doubledRow2.map((tech, index) => (
              <div key={`tech2-${index}`} className={marqueeStyles.skillPill}>
                <img src={tech.icon} alt={tech.name} className={marqueeStyles.skillIcon} />
                <div className={marqueeStyles.skillInfo}>
                  <span className={marqueeStyles.skillName}>{tech.name}</span>
                  <span className={marqueeStyles.skillType}>· {tech.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* 3. Why Serious Clients Choose Us */}
        <section className="section">
          <h2 className={styles.sectionTitleLeft}>
            Why Serious Clients Choose<br />
            <span className="text-accent">ApexTech+.</span>
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
                <p>Submit your requirements in plain language. We handle the entire lifecycle—from UI/UX design and coding, to rigorous testing and final deployment across platforms.</p>
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

        {/* 3D WebGL Configurator Showcase (Flagship Proof of Capability) */}
        <JewelryConfiguratorShowcase />


        {/* 6. How My Process Works */}
        <section className="section">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className={styles.timelineSectionTitle}>How Our Development Works</h2>
            <p className={styles.timelineSectionDesc}>5 simple steps from raw idea to full-scale deployment.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Left Column: Mockup/Image */}
            <div className={`${styles.mockupWindow} animate-float`} style={{ minHeight: '450px', maxWidth: '100%', borderRadius: '24px' }}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDot}></div>
                <div className={styles.mockupDot}></div>
                <div className={styles.mockupDot}></div>
              </div>
              {/* Simulated code editor visual */}
              <div style={{ padding: '30px', fontFamily: 'monospace', color: 'var(--accent-color)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                $ apextech init --scale=global<br /><br />
                <span style={{ color: 'var(--text-secondary)' }}>// Architecting high-performance infrastructure...</span><br />
                <span style={{ color: '#ffbd2e' }}>async function</span> <span style={{ color: '#fff' }}>DeploySystem</span>() {'{'}<br />
                &nbsp;&nbsp;<span style={{ color: '#ffbd2e' }}>const</span> architecture = <span style={{ color: '#27c93f' }}>'Enterprise'</span>;<br />
                &nbsp;&nbsp;<span style={{ color: '#ffbd2e' }}>const</span> performance = <span style={{ color: '#27c93f' }}>'Maximum'</span>;<br />
                &nbsp;&nbsp;await launch(architecture, performance);<br />
                &nbsp;&nbsp;return <span style={{ color: '#27c93f' }}>'System Online'</span>;<br />
                {'}'}<br /><br />
                &gt; Provisioning secure cloud... [OK]<br />
                &gt; Routing global CDN... [OK]<br />
                &gt; ApexTech+ Deployment Complete [120ms]<br />
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
                Trusted by Industry Leaders
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '640px', lineHeight: '1.6' }}>
                From iconic luxury watch & jewelry retailers to precision optical web apps and enterprise tech firms — here is what founders and engineering teams say about our work.
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

            {/* Card 1: Little Switzerland (USA / Caribbean) */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "Handling ultra-luxury fine jewelry and certified Swiss timepieces requires absolute speed, zero downtime, and pixel-perfect design. ApexTech+ engineered our high-resolution e-commerce catalog with flawless Shopify synchronization, significantly boosting our online conversion benchmarks."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} style={{ background: 'rgba(0, 184, 145, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(0, 184, 145, 0.3)' }}>LS</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h3>Little Switzerland</h3>
                  <p>Luxury Watches & Fine Jewelry · USA & Caribbean</p>
                </div>
              </div>
            </div>

            {/* Card 2: Prime Lenses (India) */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "ApexTech+ built an advanced custom lens application allowing our customers to input their exact optical prescription specs and view recommendations in real time. The mathematical precision, UI responsiveness, and custom interactive workflow are world-class."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} style={{ background: 'rgba(0, 184, 145, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(0, 184, 145, 0.3)' }}>PL</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h3>Prime Lenses</h3>
                  <p>Precision Optical & Eyewear Technology · India</p>
                </div>
              </div>
            </div>

            {/* Card 3: 3in3 Interior (India) */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "Our contracting and interior architecture showcase needed a high-performance digital presence. ApexTech+ engineered a fast, modern platform that highlights our commercial and residential portfolio seamlessly, driving consistent high-ticket client inquiries."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} style={{ background: 'rgba(0, 184, 145, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(0, 184, 145, 0.3)' }}>3in3</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h3>3in3 Interior</h3>
                  <p>Architecture, Contracting & Interior Design · India</p>
                </div>
              </div>
            </div>

            {/* Card 4: techBharti (India) */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                "Deepak and the ApexTech+ engineering team have been a vital technical partner for our business-first technology solutions. Their expertise in scalable Next.js systems, high-speed API architecture, and reliable delivery makes them an indispensable development partner."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} style={{ background: 'rgba(0, 184, 145, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(0, 184, 145, 0.3)' }}>TB</div>
                <div className={styles.testimonialAuthorInfo}>
                  <h3>techBharti</h3>
                  <p>Enterprise Technology & Digital Transformation · India</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 10. Explore / Discover */}
        <section className="section">
          <div className={styles.exploreEyebrow}>EXPLORE APEXTECH+'S PORTFOLIO</div>
          <h2 className={styles.exploreTitle}>Discover What We Offer</h2>
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
              <p>Describe your data requirements — we'll architect it in Node.js or Python, test it, and deploy it securely to the cloud.</p>
              <div className={styles.exploreLink}>Learn more &rarr;</div>
            </a>

            {/* Card 3 */}
            <a href="#ui-ux" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              </div>
              <h3>UI/UX Prototyping</h3>
              <p>Deploy beautiful, intuitive user interfaces. We use Figma to design high-fidelity mockups before writing a single line of code.</p>
            </a>

            {/* Card 4 */}
            <a href="#3d-configurator" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Interactive 3D Configurators</h3>
              <p>Bring your products to life. We build WebGL & Three.js powered 3D product viewers that allow customers to customize jewelry and products directly in the browser.</p>
            </a>

            {/* Card 5 */}
            <a href="#shopify" className={styles.exploreCard}>
              <div className={styles.exploreIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              </div>
              <h3>Custom Shopify E-commerce</h3>
              <p>Go beyond basic themes. We develop headless Shopify storefronts, custom plugins, and seamless backend integrations tailored for luxury retail and high-volume sales.</p>
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
