import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

function formatSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectName = formatSlug(params.slug);

  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Project preview</p>
          <h1>{projectName || 'Project'} placeholder</h1>
          <p className="page-copy">
            Use this stable route to preview how project detail pages will fit into the broader dashboard once live data is connected.
          </p>
          <div className="actions">
            <Link href="/dashboard" className="btn btn-primary">
              Back to dashboard
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Discuss rollout
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
