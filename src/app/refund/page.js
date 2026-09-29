export default function RefundPolicy() {
  return (
    <div style={{ minHeight: '80vh', padding: '30px 20px 100px 20px' }}>
      <div className="container" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>Refund Policy</h1>
        
        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>As an elite web development agency providing highly customized digital services, refunds are subject to the following structural conditions:</p>
        
        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>Design Phase</h3>
        <p style={{ marginBottom: '20px' }}>If you are unsatisfied during the initial UI/UX wireframing and design phase, you may request a cancellation. A partial refund of the initial deposit (minus the hourly cost of the design work already completed) will be issued.</p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>Development Phase</h3>
        <p style={{ marginBottom: '20px' }}>Once UI/UX prototypes are approved and the coding/development phase has commenced, the initial deposit becomes strictly non-refundable due to the labor-intensive nature of software engineering.</p>

        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px' }}>Retainer & Maintenance</h3>
        <p style={{ marginBottom: '20px' }}>Monthly retainers and maintenance agreements can be canceled at any time with a 30-day written notice. You will be billed for the final 30 days, but no long-term penalties apply.</p>
      </div>
    </div>
  );
}
