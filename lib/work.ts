// Case studies. Real results go here; until then the entry is a template full of [[placeholders]] and stays a draft
// (noindex, out of the sitemap). Markup: {{gold phrase}}, [[to supply]], **bold**. See components/Rich.tsx.

export type Stat = { value: string; label: string };
export type Quote = { text: string; name: string; role: string; photo?: string };
export type CaseStudy = {
  slug: string;
  draft: boolean;
  client: string;
  sector: 'Coach' | 'Consultant' | 'Service provider';
  headline: string;
  summary: string;
  stats: Stat[];
  leaking: string[];
  stages: ('Acquisition' | 'Conversion' | 'Recovery' | 'Retention')[];
  built: string[];
  changed: string[];
  quote?: Quote;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'example',
    draft: true,
    client: '[[Client name]]',
    sector: 'Coach',
    headline: '[[£X]] collected from {{a list they’d already paid to build.}}',
    summary: '[[One or two sentences: who the client is, what they sell and what a client pays.]]',
    stats: [
      { value: '[[£X]]', label: 'Recovered in [[90]] days' },
      { value: '[[X]]', label: 'Past enquiries brought back to a call' },
      { value: '[[X%]]', label: 'Of revenue from buyers who’d said “not now”' }
    ],
    leaking: [
      '[[What was happening before: where enquiries came from, what happened to the ones who didn’t buy straight away, and how follow-up worked.]]',
      '[[The constraint the audit found, in one or two sentences.]]'
    ],
    stages: ['Recovery', 'Conversion'],
    built: ['[[What we built, item one]]', '[[Item two]]', '[[Item three]]'],
    changed: ['[[The result in money and time, with the before and after.]]', '[[What the team runs now, without us.]]'],
    quote: { text: '[[A sentence from the client, in their words, about the result.]]', name: '[[Full name]]', role: '[[Role, Business]]' }
  }
];

export const published = (xs: CaseStudy[]) => xs.filter((x) => !x.draft);
export const findCase = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
