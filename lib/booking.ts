// The 12 audit-application questions. Copy is verbatim from design/design-reference/SiteBook.jsx.txt.

export type Question = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  auto?: string;
  help?: string;
  opts?: string[];
  long?: boolean;
  optional?: boolean;
};

export const BOOK_SECTIONS: { title: string; qs: Question[] }[] = [
  { title: 'About you', qs: [
    { id: 'name', label: 'First and last name', type: 'text', auto: 'name' },
    { id: 'email', label: 'Email', type: 'email', auto: 'email' },
    { id: 'phone', label: 'Phone, with country code', type: 'tel', auto: 'tel' },
    { id: 'biz', label: 'Business name and website', type: 'text' }
  ] },
  { title: 'About the business', qs: [
    { id: 'sell', label: 'What do you sell, and roughly what does a client pay?', type: 'text', help: 'e.g. “a 6-month coaching programme, $8,000”.' },
    { id: 'revenue', label: 'Roughly what does the business bring in each month?', opts: ['Under $20k', '$20k–$50k', '$50k–$100k', '$100k–$400k', 'Over $400k', "I’d rather say on the call"] },
    { id: 'buy', label: 'How do clients usually buy from you?', opts: ['After a sales or discovery call', 'Directly online, with no call', 'Through a proposal or quote', 'A mix of these'] },
    { id: 'sales', label: 'Who handles sales today?', opts: ['Just me', 'Me plus a closer or small sales team', "A sales team I don’t personally manage"] }
  ] },
  { title: 'Where things stand', qs: [
    { id: 'losing', label: 'Where do you feel the business is losing the most?', opts: ['Not enough of the right people finding us', "Interest that doesn’t turn into calls", 'Past leads and enquiries we never followed up properly', "Clients who don’t stay, buy again or refer", "I’m honestly not sure"] },
    { id: 'list', label: 'Roughly how many past leads, enquiries or clients are in your CRM or inbox?', opts: ['Under 500', '500–2,000', '2,000–10,000', 'Over 10,000', 'No idea'] },
    { id: 'why', label: 'What made you reach out now?', long: true, help: 'A sentence or two is plenty.' },
    { id: 'heard', label: 'How did you hear about us?', optional: true, opts: ['Referral', 'LinkedIn', 'Message from Kyū', 'Search', 'Other'] }
  ] }
];

export type Answers = Record<string, string>;

/** Ids of required questions (all except Q12) left blank. */
export function missingAnswers(v: Answers): string[] {
  return BOOK_SECTIONS.flatMap((s) => s.qs).filter((q) => !q.optional && !String(v[q.id] || '').trim()).map((q) => q.id);
}

export const APPLICATION_KEY = 'ssd-application';

/**
 * Hand a valid application on. No endpoint exists yet: this keeps the answers for the session so the
 * calendar step can prefill the booking widget. Wire the CRM (e.g. GoHighLevel) POST here.
 */
export async function submitApplication(v: Answers): Promise<void> {
  try { sessionStorage.setItem(APPLICATION_KEY, JSON.stringify(v)); } catch { /* storage blocked: nothing to keep */ }
}
