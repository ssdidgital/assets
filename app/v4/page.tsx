import type { Metadata } from 'next';
import { ClosingBand } from '@/components/SiteChrome';
import { V2Build, V2Diagnosis, V2Faq, V2Fit, V2Founder, V2How, V2Proof } from '@/components/v2/sections';
import { HeroLeak } from '@/components/v4/HeroLeak';
import { pageMeta } from '@/lib/meta';

// Homepage direction v4: a Forest hero that leads with the leak itself. Not indexed.
export const metadata: Metadata = pageMeta('home', '/v4', { index: false });

export default function HomeV4() {
  return (
    <>
      <main id="main" className="s-v2 s-v4">
        <HeroLeak />
        <div className="s-frame"><V2Diagnosis n="01" /><V2Build n="02" /></div>
        <V2How n="03" theme="linen" />
        <div className="s-frame"><V2Proof n="04" /><V2Fit n="05" /><V2Founder n="06" /><V2Faq n="07" /></div>
      </main>
      <ClosingBand page="home" />
    </>
  );
}
