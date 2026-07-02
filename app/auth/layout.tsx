import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-layout">
      <div className="auth-card">
        <Link href="/" className="auth-home-link">
          ← Back to ComplyIQ
        </Link>
        {children}
      </div>
    </div>
  );
}