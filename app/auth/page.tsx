import Link from 'next/link';

export default function AuthEntryPage() {
  return (
    <>
      <p className="eyebrow text-center">Authentication</p>
      <h1>Choose how you want to continue.</h1>
      <p className="text-center">
        Use the preview entry points below while full authentication wiring is still being completed.
      </p>
      <div className="auth-links">
        <Link href="/auth/sign-in" className="btn btn-primary auth-submit">
          Sign in
        </Link>
        <Link href="/auth/sign-up" className="btn btn-secondary auth-submit">
          Create account
        </Link>
      </div>
    </>
  );
}
