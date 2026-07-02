'use client';

import { useState } from 'react';
import Link from 'next/link';

type AuthPreviewFormProps = {
  mode: 'sign-in' | 'sign-up';
};

export function AuthPreviewForm({ mode }: AuthPreviewFormProps) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isSignUp = mode === 'sign-up';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = String(formData.get('password') || '');
    const confirmPassword = String(formData.get('confirmPassword') || '');

    setError('');
    if (isSignUp && password !== confirmPassword) {
      setMessage('');
      setError('Passwords must match before you continue to the preview.');
      return;
    }

    setMessage(
      'Authentication is not connected in this preview yet. You can continue to the dashboard shell while backend sign-in is finalized.'
    );
  }

  return (
    <>
      {error ? <div className="alert alert-error">{error}</div> : null}
      {message ? <div className="alert alert-info">{message}</div> : null}
      <form onSubmit={handleSubmit}>
        {isSignUp ? (
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Jordan Smith" required />
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="team@company.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={isSignUp ? 'new-password' : 'current-password'}
            placeholder="••••••••"
            required
          />
        </div>
        {isSignUp ? (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              required
            />
          </div>
        ) : null}
        <button type="submit" className="btn btn-primary auth-submit">
          {isSignUp ? 'Create preview account' : 'Open sign-in preview'}
        </button>
      </form>
      <div className="auth-links">
        <Link href="/dashboard" className="btn btn-secondary auth-submit">
          Go to dashboard preview
        </Link>
        <p className="text-small mb-0">
          {isSignUp ? 'Already have an account?' : 'Need to create an account?'}{' '}
          <Link href={isSignUp ? '/auth/sign-in' : '/auth/sign-up'} className="auth-link">
            {isSignUp ? 'Sign in' : 'Sign up'}
          </Link>
        </p>
      </div>
    </>
  );
}
