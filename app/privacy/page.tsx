import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta('privacy', '/privacy', { index: false });

export default function Privacy() {
  return <LegalPage eyebrow="Legal" title="Privacy policy" sections={[
    'Who we are', 'What we collect', 'How we use it', 'Lawful basis', 'Cookies and analytics', 'Who we share it with',
    'How long we keep it', 'Your rights', 'International transfers', 'Contact and complaints'
  ]} />;
}
