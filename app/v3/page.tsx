import type { Metadata } from 'next';
import { ClosingBand } from '@/components/SiteChrome';
import { HeaderScroll } from '@/components/v2/HeaderScroll';
import { V2Build, V2Diagnosis, V2Faq, V2Fit, V2Founder, V2How, V2Proof, V2Router } from '@/components/v2/sections';
import { HeroBoard } from '@/components/v3/HeroBoard';
import { pageMeta } from '@/lib/meta';

// Homepage direction v3: the system board in the hero. Not indexed.
export const metadata: Metadata = pageMeta('home', '/v3', { index: false });

export default function HomeV3() {
  return (
    <>
      <HeaderScroll />
      <main id="main" className="s-v2 s-v3">
        <div className="s-frame"><HeroBoard /><V2Router /><V2Diagnosis /><V2Build /></div>
        <V2How />
        <div className="s-frame"><V2Proof /><V2Fit /><V2Founder /><V2Faq /></div>
      </main>
      <ClosingBand page="home" />
    </>
  );
}
