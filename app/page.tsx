import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="hero">
        <h1>ComplyIQ</h1>
        <p>Launch a secure, multi-tenant SaaS for compliance workflows.</p>
        <div className="actions">
          <Link href="/auth/signup">Get started</Link>
          <Link href="/auth/signin" className="secondary">Sign in</Link>
        </div>
      </div>
      <section className="features">
        <article>
          <h2>Multi-tenant architecture</h2>
          <p>Keep customer data isolated with organization-based models.</p>
        </article>
        <article>
          <h2>Prisma database layer</h2>
          <p>Use Prisma with PostgreSQL for reliable production data access.</p>
        </article>
        <article>
          <h2>Production-ready deployments</h2>
          <p>Deploy with Docker and environment-driven configuration.</p>
        </article>
      </section>
    </main>
  );
}