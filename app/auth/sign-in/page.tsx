import { AuthPreviewForm } from '@/components/auth-preview-form';

export default function SignInPage() {
  return (
    <>
      <p className="eyebrow text-center">Sign in</p>
      <h1>Welcome back to ComplyIQ.</h1>
      <p className="text-center">Use this placeholder sign-in screen as the stable entry point for the current website build.</p>
      <AuthPreviewForm mode="sign-in" />
    </>
  );
}
