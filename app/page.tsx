import { ClosingBand } from '@/components/SiteChrome';
import { HeaderScroll } from '@/components/v2/HeaderScroll';
import { V2Build, V2Diagnosis, V2Faq, V2Fit, V2Founder, V2Hero, V2How, V2Router } from '@/components/v2/sections';

// Homepage. Results (V2Proof) is hidden at launch.
export default function Home() {
  return (
    <>
      <HeaderScroll />
      <main id="main" className="s-v2">
        <div className="s-frame"><V2Hero /><V2Router /><V2Diagnosis /><V2Build diagram={false} /></div>
        <V2How />
        <div className="s-frame"><V2Fit /><V2Founder /><V2Faq /></div>
      </main>
      <ClosingBand page="home" />
    </>
  );
}
