import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const featureGroups = [
  {
    title: 'Organization oversight',
    description: 'Track entities, owners, and compliance milestones across every customer-facing program.',
  },
  {
    title: 'Project coordination',
    description: 'Keep engineering, security, and operations aligned with shared project context and priorities.',
  },
  {
    title: 'Audit readiness',
    description: 'Prepare evidence, maintain audit trails, and reduce scramble during reviews and renewals.',
  },
  {
    title: 'Role-based access',
    description: 'Support multi-tenant teams with clear ownership boundaries and secure data separation.',
  },
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Features</p>
          <h1>Everything you need to organize a scalable compliance program.</h1>
          <p className="page-copy">
            ComplyIQ is structured for SaaS teams that need customer trust artifacts, internal accountability, and room to grow.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="features">
            {featureGroups.map((feature) => (
              <article key={feature.title}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted">
        <div className="container callout-card">
          <div>
            <h2>Need a guided walkthrough?</h2>
            <p className="mb-0">Use the dashboard preview to review the starter shell for organizations, projects, and compliance activity.</p>
          </div>
          <Link href="/dashboard" className="btn btn-primary">
            Explore dashboard
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
