import { AuthPreviewForm } from '@/components/auth-preview-form';

export default function SignUpPage() {
  return (
    <>
      <p className="eyebrow text-center">Create account</p>
      <h1>Start your ComplyIQ preview.</h1>
      <p className="text-center">Set up a placeholder account flow now and connect live authentication later.</p>
      <AuthPreviewForm mode="sign-up" />
    </>
  );
}
