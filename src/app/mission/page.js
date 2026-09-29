import Link from 'next/link';

export default function Mission() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>Our Mission</h1>
        
        <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
          Our mission is to democratize institutional-grade web architecture, making it accessible to ambitious founders and growing enterprises globally.
        </p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>Elevating the Standard</h3>
        <p style={{ marginBottom: '20px' }}>
          For too long, independent founders have been forced to choose between unreliable templates that don't scale, or expensive agency retainers that burn through capital. We bridge that gap by delivering uncompromising code quality, transparent communication, and performant web applications that treat scalability as a default, not a premium add-on.
        </p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>Engineering over Patchwork</h3>
        <p style={{ marginBottom: '20px' }}>
          We believe in writing real code. Rather than stringing together fragile plugins that slow down your site and create security vulnerabilities, we build robust systems from the ground up using modern frameworks like Next.js, React, Node.js, and Three.js. 
        </p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>Design That Converts</h3>
        <p style={{ marginBottom: '20px' }}>
          Great engineering is invisible if the user interface fails to engage. By meticulously combining UI/UX principles with frontend performance, we ensure that every digital product we deploy is not only technically sound, but visually stunning and optimized for high conversion.
        </p>
      </div>
    </div>
  );
}
