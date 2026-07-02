import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

function formatSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function OrganizationDetailPage({ params }: { params: { slug: string } }) {
  const organizationName = formatSlug(params.slug);

  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Organization preview</p>
          <h1>{organizationName || 'Organization'} workspace</h1>
          <p className="page-copy">
            This safe placeholder keeps the route reachable while live organization, membership, and project data are still being connected.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="container card-grid">
          <article className="card">
            <h2>Members</h2>
            <p>Invite teammates and assign program roles once the authentication and membership APIs are enabled.</p>
            <Link href={`/organizations/${params.slug}/members/invite`} className="btn btn-primary">
              Invite member
            </Link>
          </article>
          <article className="card">
            <h2>Projects</h2>
            <p>Use project placeholders to plan how evidence collection and control tracking will appear in the product.</p>
            <div className="card-actions">
              <Link href={`/organizations/${params.slug}/projects/new`} className="btn btn-primary">
                New project
              </Link>
              <Link href="/projects/demo-readiness" className="btn btn-secondary">
                View sample project
              </Link>
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
