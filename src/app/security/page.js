export default function Security() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>Security Architecture</h1>
        
        <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>We take application security as a fundamental requirement, not an afterthought. Here is our approach to keeping your platforms secure.</p>
        
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '16px' }}>Data Protection</h3>
          <p style={{ marginBottom: '0' }}>All sensitive user data, particularly passwords and tokens, are heavily salted and hashed (using bcrypt/Argon2). We mandate HTTPS/SSL on all endpoints to ensure encryption in transit. Databases are hosted within secure Virtual Private Clouds (VPCs).</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '16px' }}>Authentication & Authorization</h3>
          <p style={{ marginBottom: '0' }}>We implement secure JSON Web Tokens (JWT) or robust session-based architectures depending on the application footprint. Role-Based Access Control (RBAC) is implemented directly at the API route level to prevent unauthorized access.</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '16px' }}>Threat Mitigation</h3>
          <p style={{ marginBottom: '0' }}>Forms and inputs are rigorously validated on both the client (React/Next.js) and server (Node.js/PHP) to prevent SQL injection and XSS attacks. We also implement rate limiting on sensitive API endpoints to mitigate DDoS and brute-force attempts.</p>
        </div>
      </div>
    </div>
  );
}
