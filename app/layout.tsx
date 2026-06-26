import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComplyIQ",
  description: "Multi-tenant compliance SaaS platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
