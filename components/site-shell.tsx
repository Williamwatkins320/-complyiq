import Link from 'next/link';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="navbar-brand">
            ComplyIQ
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-actions">
            <Link href="/auth/sign-in" className="btn btn-ghost btn-sm">
              Sign in
            </Link>
            <Link href="/auth/sign-up" className="btn btn-primary btn-sm">
              Get started
            </Link>
          </div>
        </div>
      </header>
      <main id="main-content" className="site-main">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <div>
            <p className="footer-title">ComplyIQ</p>
            <p className="mb-0">Security and compliance workflows for growing SaaS teams.</p>
          </div>
          <div className="footer-links" aria-label="Footer navigation">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dashboard">Dashboard preview</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
