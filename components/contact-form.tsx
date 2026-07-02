'use client';

import { useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      {submitted ? (
        <div className="alert alert-info">
          Thanks for your interest. This preview form is not connected yet, but the layout is ready for CRM or email integration.
        </div>
      ) : null}
      <form className="card contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Alex Morgan" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="ComplyIQ customer" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-message">How can we help?</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell us about your compliance workflow, reporting needs, or onboarding timeline."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send request
        </button>
      </form>
    </>
  );
}
