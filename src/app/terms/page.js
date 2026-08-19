export default function TermsConditions() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>Terms & Conditions</h1>
        
        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>1. Project Scope & Revisions</h3>
        <p style={{ marginBottom: '20px' }}>Project scope is defined strictly by the initial agreement or statement of work. Major deviations or feature additions will require a revised quote. Most standard packages include up to two rounds of UI/UX revisions during the design phase.</p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>2. Payment Terms</h3>
        <p style={{ marginBottom: '20px' }}>Standard development projects require a 50% upfront deposit before work begins, and the remaining 50% upon successful deployment and handover. All payments are non-refundable once the coding phase has commenced.</p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>3. Intellectual Property</h3>
        <p style={{ marginBottom: '20px' }}>Upon final payment clearance, all custom code, assets, and database architecture become the exclusive property of the client. I retain the right to showcase non-confidential elements of the final product in my portfolio.</p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>4. Liability</h3>
        <p style={{ marginBottom: '20px' }}>While I build systems adhering to the latest security standards, I cannot be held liable for third-party server outages, software vulnerabilities discovered post-deployment, or malicious attacks against the deployed application.</p>
      </div>
    </div>
  );
}
