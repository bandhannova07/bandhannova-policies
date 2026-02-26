import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BandhanNova — Legal & Policies",
    template: "%s | BandhanNova",
  },
  description: "Terms of Service, Privacy Policy, and legal information for BandhanNova and its products.",
  keywords: ["BandhanNova", "terms of service", "privacy policy", "legal", "policies"],
  authors: [{ name: "BandhanNova", url: "https://bandhannova.in" }],
  metadataBase: new URL("https://policies.bandhannova.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BandhanNova Policies",
    title: "BandhanNova — Legal & Policies",
    description: "Terms of Service and Privacy Policy for BandhanNova ecosystem.",
    images: [
      {
        url: "https://policies.bandhannova.in/bandhannova-logo-final.svg",
        width: 1200,
        height: 630,
        alt: "BandhanNova Policies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BandhanNova — Legal & Policies",
    description: "Terms of Service and Privacy Policy for BandhanNova ecosystem.",
    images: ["https://policies.bandhannova.in/bandhannova-logo-final.svg"],
    creator: "@bandhannova",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fafbfc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Header */}
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/">
              <Image
                src="/bandhannova-logo-final.svg"
                alt="BandhanNova"
                width={200}
                height={45}
                priority
              />
            </Link>
            <nav className="site-nav">
              <Link href="/terms" className="nav-pill">
                Terms
              </Link>
              <Link href="/privacy" className="nav-pill">
                Privacy
              </Link>
              <Link href="/faq" className="nav-pill">
                FAQs
              </Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} BandhanNova Platforms. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
