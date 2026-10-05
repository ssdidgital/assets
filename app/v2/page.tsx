import type { Metadata } from 'next';
import { ClosingBand } from '@/components/SiteChrome';
import { HeaderScroll } from '@/components/v2/HeaderScroll';
import { V2Build, V2Diagnosis, V2Faq, V2Fit, V2Founder, V2Hero, V2How, V2Router } from '@/components/v2/sections';
import { pageMeta } from '@/lib/meta';

// Design exploration for comparison with "/". Not indexed.
export const metadata: Metadata = pageMeta('home', '/v2', { index: false });

export default function HomeV2() {
  return (
    <>
      <HeaderScroll />
      <main id="main" className="s-v2">
        <div className="s-frame"><V2Hero /><V2Router /><V2Diagnosis /><V2Build /></div>
        <V2How />
        <div className="s-frame"><V2Fit /><V2Founder /><V2Faq /></div>
      </main>
      <ClosingBand page="home" />
    </>
  );
}
