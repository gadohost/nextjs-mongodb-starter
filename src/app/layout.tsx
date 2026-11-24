import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GadoHost Next.js + MongoDB Starter',
  description: 'Production Next.js 15 + MongoDB 7 starter deployed on GadoHost Cloud.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#09090b', color: '#fafafa' }}>
        {children}
      </body>
    </html>
  );
}
