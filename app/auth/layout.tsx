export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-layout">
      <style>{`
        .auth-layout {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: var(--spacing-lg);
        }
        .auth-card {
          width: 100%;
          max-width: 420px;
          background: white;
          border-radius: var(--radius-xl);
          padding: var(--spacing-2xl);
          box-shadow: var(--shadow-lg);
        }
        .auth-card h1 {
          text-align: center;
          margin-bottom: var(--spacing-xl);
          color: var(--color-primary);
        }
      `}</style>
      <div className="auth-card">
        {children}
      </div>
    </div>
  );
}