import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta('terms', '/terms', { index: false });

export default function Terms() {
  return <LegalPage eyebrow="Legal" title="Terms" sections={[
    'About these terms', 'Using this website', 'Booking a systems audit', 'Intellectual property', 'Liability', 'Changes to these terms', 'Governing law', 'Contact'
  ]} />;
}
