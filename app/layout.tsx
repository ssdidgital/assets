import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { CookieBanner } from '@/components/CookieBanner';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { pageMeta, SITE_URL } from '@/lib/meta';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta('home', '/')
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
          <ScrollReveal />
        </div>
      </body>
    </html>
  );
}
