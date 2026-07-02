import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const highlights = [
  {
    title: 'Evidence tracking',
    description: 'Collect requests, monitor owners, and keep audit evidence organized in one workspace.',
  },
  {
    title: 'Program visibility',
    description: 'Give leadership a clear view of control status, deadlines, and remediation work.',
  },
  {
    title: 'Team workflows',
    description: 'Coordinate compliance across security, engineering, operations, and customer teams.',
  },
];

const workflowSteps = [
  'Standardize control owners and due dates',
  'Review project and organization activity in a shared dashboard',
  'Prepare customer-ready responses with fewer manual handoffs',
];

export default function Home() {
  return (
    <SiteShell>
      <section className="hero hero-marketing">
        <div className="container hero-content">
          <p className="eyebrow">Compliance operations for modern SaaS teams</p>
          <h1>Launch a cleaner security and compliance experience with ComplyIQ.</h1>
          <p className="hero-copy">
            Centralize audit preparation, evidence requests, and program tracking in a secure workspace built for growing organizations.
          </p>
          <div className="actions">
            <Link href="/auth/sign-up" className="btn btn-primary btn-lg">
              Start preview
            </Link>
            <Link href="/dashboard" className="btn btn-secondary btn-lg">
              View dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why teams choose ComplyIQ</p>
            <h2>Built for structured programs, clear ownership, and faster customer trust.</h2>
          </div>
          <div className="features">
            {highlights.map((highlight) => (
              <article key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Starter workflow</p>
            <h2>Use the current preview to validate navigation, page structure, and content.</h2>
            <p>
              The current build includes polished public pages, safe auth entry points, and placeholder dashboard surfaces so the website can ship
              while deeper product integrations continue.
            </p>
          </div>
          <ol className="checklist">
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
