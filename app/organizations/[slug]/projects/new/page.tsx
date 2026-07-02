import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export default function NewProjectPage({ params }: { params: { slug: string } }) {
  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Project setup</p>
          <h1>Project creation is ready for future wiring.</h1>
          <p className="page-copy">
            This placeholder route confirms navigation works today and can be replaced with a real project creation flow later.
          </p>
          <Link href={`/organizations/${params.slug}`} className="btn btn-primary">
            Back to organization
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
