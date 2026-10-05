import type { Metadata } from 'next';

/** Production origin for canonical URLs, Open Graph and the sitemap. Override with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://systemswitch.digital';

// Titles and descriptions verbatim from META in design/design-reference/Site.html.
const META = {
  home: ['System Switch — Growth infrastructure for founder-led businesses', "We engineer the systems that win clients, and win back the buyers you’ve already paid for. For coaches, consultants and service providers."],
  approach: ['Our approach — System Switch', 'Everything we recommend, we install. How we diagnose, build and hand over growth systems that you own.'],
  who: ['Who we work with — System Switch', 'Established coaches, consultants and service providers whose growth still runs through the founder.'],
  about: ['About — System Switch', 'Built by a closer. Why System Switch starts with the revenue a business has already earned.'],
  start: ['Book a systems audit — System Switch', "Tell us about your business. If we can help, we’ll show you where we’d start."],
  // New pages (draft copy, not from the prototype).
  work: ['Work — System Switch', 'What we built for founder-led businesses, and what it collected.'],
  sample: ['Sample systems audit — System Switch', 'A redacted example of the write-up that follows a systems audit.'],
  digest: ['Digest — System Switch', 'Notes from the closer’s seat on follow-up, recovery and growth infrastructure.'],
  privacy: ['Privacy policy — System Switch', 'How System Switch Digital collects and uses personal data.'],
  terms: ['Terms and conditions — System Switch', 'The terms for using this website and booking a systems audit.'],
  company: ['System Switch — company details', 'Registered company details for System Switch Digital.']
} as const;

export function pageMeta(page: keyof typeof META, path: string, opts: { index?: boolean } = {}): Metadata {
  const [title, description] = META[page];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: 'System Switch', type: 'website', locale: 'en_GB' },
    twitter: { card: 'summary_large_image', title, description },
    ...(opts.index === false ? { robots: { index: false, follow: true } } : {})
  };
}
