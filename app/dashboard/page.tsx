import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const dashboardCards = [
  {
    title: 'Organizations',
    description: 'Keep tenant setup, ownership, and program context organized in one place.',
    action: { href: '/organizations/demo-company', label: 'Open organization preview' },
  },
  {
    title: 'Projects',
    description: 'Review active initiatives, due dates, and collaborating teams from a shared shell.',
    action: { href: '/projects/demo-readiness', label: 'View project placeholder' },
  },
  {
    title: 'Compliance activity',
    description: 'Summaries and evidence pipelines can connect here once live data services are wired.',
    action: { href: '/contact', label: 'Plan an integration' },
  },
] as const;

export default function DashboardPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Dashboard preview</p>
          <h1>Safely preview the post-login product shell.</h1>
          <p className="page-copy">
            This dashboard intentionally uses placeholder content so the route is stable and build-safe while authentication and live queries are
            finalized.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="alert alert-info">
            Product data is coming soon. For now, these pages provide safe navigation targets for demos, QA, and CI validation.
          </div>
          <div className="card-grid">
            {dashboardCards.map((card) => (
              <article key={card.title} className="card">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <Link href={card.action.href} className="btn btn-primary">
                  {card.action.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
