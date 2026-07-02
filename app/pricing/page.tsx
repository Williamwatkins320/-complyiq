import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const tiers = [
  {
    name: 'Starter',
    price: '$99',
    description: 'For early-stage teams organizing their first repeatable compliance workflow.',
    features: ['Up to 3 internal stakeholders', 'Core dashboard views', 'Shared audit preparation workspace'],
  },
  {
    name: 'Growth',
    price: '$249',
    description: 'For teams scaling customer trust work across multiple projects and owners.',
    features: ['Expanded project coordination', 'Organization-level visibility', 'Priority onboarding support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For mature programs that need tailored rollout planning and operational support.',
    features: ['Custom implementation planning', 'Security review support', 'Flexible deployment discussions'],
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Flexible plans for compliance programs at every stage.</h1>
          <p className="page-copy">
            Use these placeholder plans as production-ready structure until final commercial packaging and billing integrations are connected.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="container card-grid">
          {tiers.map((tier) => (
            <article key={tier.name} className="card pricing-card">
              <p className="eyebrow">{tier.name}</p>
              <h2>{tier.price}</h2>
              <p>{tier.description}</p>
              <ul className="checklist">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band section-band-muted">
        <div className="container callout-card">
          <div>
            <h2>Want a tailored plan?</h2>
            <p className="mb-0">Reach out through the contact page to adapt these placeholders to your final go-to-market model.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Contact sales
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
