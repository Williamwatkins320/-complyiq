import { ContactForm } from '@/components/contact-form';
import { SiteShell } from '@/components/site-shell';

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Talk with the ComplyIQ team about your program goals.</h1>
          <p className="page-copy">
            Share your timeline, audit scope, or operational priorities and use this page as the starting point for future CRM integration.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="container contact-grid">
          <div className="card contact-details">
            <h2>How we can help</h2>
            <p>Use the preview contact form for layout and content validation, then connect it to your preferred support or sales workflow later.</p>
            <dl className="detail-list">
              <div>
                <dt>Email</dt>
                <dd>hello@complyiq.example</dd>
              </div>
              <div>
                <dt>Response time</dt>
                <dd>Within 1 business day</dd>
              </div>
              <div>
                <dt>Focus areas</dt>
                <dd>Audit readiness, customer trust workflows, cross-functional coordination</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
