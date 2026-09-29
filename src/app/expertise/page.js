import styles from '../page.module.css';
import Link from 'next/link';
import marqueeStyles from './marquee.module.css';

export default function Skills() {
  const row1 = [
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", type: "Framework" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", type: "Frontend" },
    { name: "Shopify Plus", icon: "https://cdn.simpleicons.org/shopify/95BF47", type: "E-commerce" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", type: "Database" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", type: "Backend" },
    { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/white", type: "3D Web" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", type: "AI/Backend" },
    { name: "AI / ML", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PjxyZWN0IHg9IjkiIHk9IjkiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPjwvcmVjdD48bGluZSB4MT0iOSIgeTE9IjEiIHgyPSI5IiB5Mj0iNCI+PC9saW5lPjxsaW5lIHgxPSIxNSIgeTE9IjEiIHgyPSIxNSIgeTI9IjQiPjwvbGluZT48bGluZSB4MT0iOSIgeTE9IjIwIiB4Mj0iOSIgeTI9IjIzIj48L2xpbmU+PGxpbmUgeDE9IjE1IiB5MT0iMjAiIHgyPSIxNSIgeTI9IjIzIj48L2xpbmU+PGxpbmUgeDE9IjIwIiB5MT0iOSIgeDI9IjIzIiB5Mj0iOSI+PC9saW5lPjxsaW5lIHgxPSIyMCIgeTE9IjE0IiB4Mj0iMjMiIHkyPSIxNCI+PC9saW5lPjxsaW5lIHgxPSIxIiB5MT0iOSIgeDI9IjQiIHkyPSI5Ij48L2xpbmU+PGxpbmUgeDE9IjEiIHkxPSIxNCIgeDI9IjQiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==", type: "Innovation" },
  ];

  const row2 = [
    { name: "WebGL", icon: "https://cdn.simpleicons.org/webgl/white", type: "Graphics" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white", type: "ORM" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", type: "Language" },
    { name: "AWS", icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTA4LjU5IDI2LjE0OGMtMS44NTIgMC0zLjYyMi4yMTEtNS4zMDUuNzE1LTEuNjg0LjUwNC0zLjExNyAxLjIyMy00LjM3OSAyLjE4OGExMC44MjkgMTAuODI5IDAgMCAwLTMuMDMxIDMuNDUzYy0uNzU3IDEuMzQ4LTEuMTM3IDIuOTA2LTEuMTM3IDQuNjc2IDAgMi4xODcuNzE2IDQuMjUgMi4xMDYgNi4xMDUgMS4zODYgMS44OTUgMy42NiAzLjMyNCA2LjczNCA0LjI5M2w2LjEwNiAxLjg5NWMyLjA2Mi42NzUgMy40OTYgMS4zOTEgNC4yNTQgMi4xOTEuNzU3LjgwMSAxLjEzNiAxLjc2NSAxLjEzNiAyLjk0NSAwIDEuNzI2LS43NTggMy4wNzQtMi4xOTEgNC0xLjQzLjkyNS0zLjQ5MiAxLjM5MS02LjE0NSAxLjM5MS0xLjg4NyAwLTMuMzI4LS4xNjgtNS4wMTEtLjUwNGEyMy4xMDIgMjMuMTAyIDAgMCAxLTQuNjMzLTEuNDc2Yy0uNDIxLS4xNjgtLjgwMS0uMzM2LTEuMzA1LS40MThhMi4zNTcgMi4zNTcgMCAwIDAtLjc1OC0uMTNjLS42MzQgMC0uOTY5LjQyMy0uOTY5IDEuMzA1djIuMTQ5YTIuOTE5IDIuOTE5IDAgMCAwIC4yNTQgMS4xOGMuMTY4LjM4LjYyOS44IDEuMzA1IDEuMTggMS4wOTQuNjI4IDIuNzM0IDEuMTc5IDQuODQgMS42ODMgMi4xMDUuNTA0IDQuMjk3Ljc1OCA2LjQ4NC43NTggMi4xNSAwIDQuMTI5LS4yOTcgNi4wMjQtLjg4MyAxLjgwOC0uNTUxIDMuMzY3LTEuMzA5IDQuNjcyLTIuMzYgMS4zMDQtMS4wMSAyLjMxNi0yLjI3MyAzLjA3NC0zLjcwNy43MTQtMS40MjkgMS4wOTQtMy4wNyAxLjA5NC00Ljg4MiAwLTIuMTg4LS42MzMtNC4xNjgtMS45MzgtNS44OTUtMS4zMDQtMS43MjctMy40OTEtMy4wNzQtNi41MjMtNC4wNDNsLTUuOTgtMS44OTVjLTIuMjMtLjcxMy0zLjc5LTEuNTE2LTQuNjM0LTIuMzE2LS44NC0uNzk3LTEuMjYxLTEuODA4LTEuMjYxLTIuOTg4IDAtMS43MjYuNjcxLTIuOTUgMS45OC0zLjc0NiAxLjMwNS0uODAxIDMuMTk5LTEuMTggNS45OC0xLjE4IDIuOTg4IDAgNS42ODMuNTQ3IDguMDg2IDEuNjQuNzE0LjMzNyAxLjI2MS41MDggMS41OTcuNTA4LjYzMyAwIC45NjktLjQ2My45NjktMS4zNDd2LTEuOThjMC0uNTktLjEyNS0xLjA1MS0uMzc5LTEuMzkxLS4yNS0uMzc4LS42NzItLjcxNS0xLjI2Mi0xLjA1MS0uNDIyLS4yNTQtMS4wMTEtLjUwNC0xLjc3LS43NThhMzIuNTI4IDMyLjUyOCAwIDAgMC0yLjM5OC0uNjc2Yy0uODg2LS4xNjgtMS43NjktLjMzNi0yLjczOC0uNDZhMjEuMzQ3IDIxLjM0NyAwIDAgMC0yLjgyLS4xNjl6bS04Ni44MjIuMDgyYy0yLjMxNiAwLTQuNTA4LjI1NC02LjU3LjgwMS0yLjA2My41MDUtMy44MzEgMS4xMzctNS4zMDMgMS44OTUtLjU5LjI5Ny0uOTcuNTktMS4xOC44ODMtLjIxMS4yOTYtLjI5My44LS4yOTMgMS40NzZ2Mi4wNjNjMCAuODgyLjI5MyAxLjMwNC44ODMgMS4zMDQuMTY4IDAgLjM3OC0uMDQzLjY3NC0uMTI1LjI5My0uMDg2Ljc5Ni0uMjU0IDEuNDcyLS41NDdhMzMuNDE2IDMzLjQxNiAwIDAgMSA0LjU0Ny0xLjQzM0ExOS4xNzYgMTkuMTc2IDAgMCAxIDIwLjU0NyAzMmMzLjI0MiAwIDUuNTEzLjYzMyA2Ljg2MyAxLjkzOCAxLjMwNCAxLjMwMyAxLjk4IDMuNTM0IDEuOTggNi43MzR2My4wNzRjLTEuNjgzLS4zNzktMy4yODMtLjcxNS00Ljg0My0uOTI2LTEuNTU4LS4yMS0zLjAzMS0uMzM2LTQuNDYxLS4zMzYtNC4zNCAwLTcuNzUgMS4wOTQtMTAuMzE2IDMuMjg2LTIuNTcxIDIuMTg3LTMuODMyIDUuMDkzLTMuODMyIDguNjcxIDAgMy4zNjggMS4wNSA2LjA2MyAzLjExMyA4Ljg4NiAyLjA2NiAyLjAyIDQuODg3IDMuMDMyIDguNDIyIDMuMDMyIDQuOTcgMCA5LjA5Ny0xLjkzOCAxMi4zNzktNS44MTNhMzQuMTUzIDM0LjE1MyAwIDAgMCAxLjMwNCAyLjQ4NCAxMy4yOCAxMy4yOCAwIDAgMCAxLjUxNiAxLjk4Yy40MjIuMzguODQ0LjU5IDEuMjY2LjU5LjMzNCAwIC43MTQtLjEyOCAxLjA5My0uMzc4bDIuNjUzLTEuNzdjLjU0Ni0uNDIuOC0uODQzLjgtMS4yNjFhMS44NiAxLjg2IDAgMCAwLS4yOTMtLjk3IDIyLjQ2OSAyMi40NjkgMCAwIDEtMS4zNDctMy4wM2MtLjI5Ny0uOTI1LS40NjUtMi4xOS0uNDY1LTMuNzVoLS4wODZWNDBjMC00LjYzMy0xLjE3Ni04LjA4Ni0zLjQ5Mi0xMC4zNi0yLjM2LTIuMjczLTYuMDI1LTMuNDEtMTEuMDMzLTMuNDF6bTE5LjU4IDEuMDEyYy0uNjc2IDAtMS4wMTIuMzc5LTEuMDEyIDEuMDUxIDAgLjI5Ny4xMjkuODQ0LjM3OSAxLjY4N2w5Ljg5NCAzMi41NDdjLjI1NC44LjU0NyAxLjM4Ny44ODcgMS42NDEuMzM2LjI5Ny44NC40MjIgMS41OTguNDIyaDMuNjJjLjc1OSAwIDEuMzQ3LS4xMjUgMS42ODQtLjQyMi4zNC0uMjkzLjU5MS0uODQuODAxLTEuNjg0bDUuNDg1LTI3LjExNyA2LjUyNyAyNy4xNmMuMTY4Ljg0LjQ2IDEuMzg3LjggMS42ODQuMzM3LjI5Mi44ODMuNDIyIDEuNjg0LjQyMmgzLjYyMWMuNzE1IDAgMS4yNjItLjE2NyAxLjU5OC0uNDIyLjM0LS4yNTMuNjMzLS44Ljg4Ny0xLjY0TDkwLjk0OSAzMC4wMmMuMTY4LS40Ni4yNS0uNzk3LjI5My0xLjA1MS4wNDMtLjI1NC4wODYtLjQ2Ni4wODYtLjc2IDAtLjcxNS0uMzc5LTEuMDUtMS4wNTUtMS4wNUg4Ni4zNmMtLjc1NyAwLTEuMzA4LjE2Ni0xLjY0NC40MjEtLjI5My4yNS0uNTkuOC0uODQgMS42NEw3Ni41OSA1Ny41MTdsLTYuNjUzLTI4LjIxMWMtLjE2Ni0uOC0uNDY0LTEuMzktLjgtMS42NC0uMzM2LS4yOTgtLjg4NC0uNDIzLTEuNjg0LS40MjNoLTMuMzY3Yy0uNzU4IDAtMS4zNDguMTY3LTEuNjg4LjQyMi0uMzM1LjI1LS41ODguOC0uNzk2IDEuNjRsLTYuNTcgMjcuODc2LTcuMDc1LTI3Ljg3NWMtLjI1LS44LS41MDQtMS4zOS0uODQtMS42NC0uMjk3LS4yOTgtLjg0NC0uNDIzLTEuNjQ0LS40MjNoLTQuMTI1ek0yMS42NCA0Ny40OTZhMzEuODE2IDMxLjgxNiAwIDAgMSAzLjk2LjI1IDM0LjQwMSAzNC40MDEgMCAwIDEgMy44NzIuNzE5djEuNzY1YzAgMS40MzUtLjE2OCAyLjY1My0uNDIyIDMuNjY1LS4yNSAxLjAxLS43NTggMS44OTUtMS40MyAyLjY5NS0xLjEzNyAxLjI2Mi0yLjQ4NCAyLjE4Ny00IDIuNjk1LTEuNTE2LjUwNC0yLjk0OS43NTgtNC4zMzYuNzU4LTEuOTM3IDAtMy40MS0uNTA4LTQuNDIyLTEuNTU5LTEuMDU0LTEuMDEtMS41NTgtMi40ODQtMS41NTgtNC40NjQgMC0yLjEwNi42NzUtMy43MDQgMi4wNjItNC44NCAxLjM5MS0xLjEzNyAzLjQ1NC0xLjY4NCA2LjI3NC0xLjY4NHpNMTE4IDczLjM0OGMtNC40MzIuMDYzLTkuNjY0IDEuMDUyLTEzLjYyMSAzLjgzMi0xLjIyMy44ODMtMS4wMTIgMi4wNjIuMzM2IDEuODk0IDQuNTA4LS41NDcgMTQuNDQtMS43MjYgMTYuMjEuNTQ3IDEuNzcgMi4yMy0xLjk3NiAxMS42Mi0zLjY2MyAxNS43OS0uNTA0IDEuMjYuNTkgMS43NjkgMS43MjYuOCA3LjQxLTYuMjMxIDkuMzQ4LTE5LjI0MiA3LjgzMi0yMS4xMzctLjc1Ny0uOTI1LTQuMzg4LTEuNzktOC44Mi0xLjcyNnpNMS42MyA3NS44NTljLS45MjYuMTE2LTEuMzQ3IDEuMjM2LS4zNjggMi4xMjEgMTYuNTA4IDE0LjkwMiAzOC4zNTkgMjMuODcyIDYyLjYxMyAyMy44NzIgMTcuMzA1IDAgMzcuNDMtNS40MyA1MS4yODEtMTUuNjYgMi4yNzMtMS42ODkuMjk4LTQuMjU0LTIuMDItMy4yMDQtMTUuNTMzIDYuNTctMzIuNDIxIDkuNzctNDcuNzg4IDkuNzctMjIuNzc4IDAtNDQuOC02LjI3My02Mi42NTMtMTYuNjMzLS4zOS0uMjMxLS43NTUtLjMwNC0xLjA2NC0uMjY2eiIvPgo8L3N2Zz4=", type: "Cloud Architecture" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", type: "Styling" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", type: "UI/UX Design" },
    { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84", type: "Mobile" },
  ];

  // Duplicate arrays to create the infinite loop effect seamlessly
  const doubledRow1 = [...row1, ...row1];
  const doubledRow2 = [...row2, ...row2];

  return (
    <div style={{ minHeight: '80vh' }}>
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link> / <span style={{ color: '#fff' }}>Expertise</span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(0, 184, 145, 0.1)', color: 'var(--accent-color)', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Technology Ecosystem</span>
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '24px' }}>The Technologies <span className="text-accent">We Utilize</span></h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px', fontSize: '1.2rem' }}>
            The foundational technologies we use to build robust, scalable applications.
          </p>

          <div className={marqueeStyles.marqueeContainer}>
            <div className={marqueeStyles.marqueeContent}>
              {doubledRow1.map((skill, index) => (
                <div key={`r1-${index}`} className={marqueeStyles.skillPill}>
                  <img src={skill.icon} alt={skill.name} className={marqueeStyles.skillIcon} />
                  <div className={marqueeStyles.skillInfo}>
                    <span className={marqueeStyles.skillName}>{skill.name}</span>
                    <span className={marqueeStyles.skillType}>· {skill.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={marqueeStyles.marqueeContainer}>
            <div className={marqueeStyles.marqueeContentReverse}>
              {doubledRow2.map((skill, index) => (
                <div key={`r2-${index}`} className={marqueeStyles.skillPill}>
                  <img src={skill.icon} alt={skill.name} className={marqueeStyles.skillIcon} />
                  <div className={marqueeStyles.skillInfo}>
                    <span className={marqueeStyles.skillName}>{skill.name}</span>
                    <span className={marqueeStyles.skillType}>· {skill.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
