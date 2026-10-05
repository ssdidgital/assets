import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { CookieBanner } from '@/components/CookieBanner';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';
import './globals.css';

export const metadata: Metadata = {
  title: 'System Switch — Growth infrastructure for founder-led businesses',
  description: "We engineer the systems that win clients, and win back the buyers you've already paid for. For coaches, consultants and service providers."
};

export const viewport: Viewport = { themeColor: '#f5f3ec' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preload" href="/fonts/Outfit.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/DMMono-500.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <div className="s">
          <a className="s-skip" href="#main">Skip to content</a>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
