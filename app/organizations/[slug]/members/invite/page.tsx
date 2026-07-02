import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export default function InviteMemberPage({ params }: { params: { slug: string } }) {
  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Invite member</p>
          <h1>Member invitation flow coming soon.</h1>
          <p className="page-copy">
            This route now renders safely as a placeholder so the organization workspace does not link to a missing page.
          </p>
          <Link href={`/organizations/${params.slug}`} className="btn btn-primary">
            Back to organization
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
