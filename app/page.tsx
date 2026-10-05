import { SitePage } from '@/components/SiteChrome';
import { HBuild, HDiagnosis, HFaq, HFit, HFounder, HHero, HHow, HRouter } from '@/components/home/sections';

export default function Home() {
  return (
    <SitePage band="home">
      <HHero /><HRouter /><HDiagnosis /><HBuild /><HHow /><HFit /><HFounder /><HFaq />
    </SitePage>
  );
}
