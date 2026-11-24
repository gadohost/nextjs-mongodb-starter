export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: 560, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>GadoHost Next.js + MongoDB Starter</h1>
        <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
          Deployed on GadoHost Cloud with Node.js PM2 clustering, automatic SSL, and managed MongoDB 7.
        </p>
        <p style={{ marginTop: '1.5rem' }}>
          <a href="/api/health" style={{ color: '#a78bfa', textDecoration: 'underline' }}>
            Check /api/health &rarr;
          </a>
        </p>
      </div>
    </main>
  );
}
