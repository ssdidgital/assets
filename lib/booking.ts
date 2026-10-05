import { readCurrency, withCur } from './currency';
import { readLeak } from './leak';

// The 13 audit-application questions. {cur} = the site currency symbol (follows the calculator toggle). Copy is verbatim from design/design-reference/SiteBook.jsx.txt.

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
    { id: 'sell', label: 'What do you sell, and roughly what does a client pay?', type: 'text', help: 'e.g. “a 6-month coaching programme, {cur}8,000”.' },
    { id: 'revenue', label: 'Roughly what does the business bring in each month?', opts: ['Under {cur}20k', '{cur}20k–{cur}50k', '{cur}50k–{cur}100k', '{cur}100k–{cur}400k', 'Over {cur}400k', 'I’d rather say on the call'] },
    { id: 'buy', label: 'How do clients usually buy from you?', opts: ['After a sales or discovery call', 'Directly online, with no call', 'Through a proposal or quote', 'A mix of these'] },
    { id: 'sales', label: 'Who handles sales today?', opts: ['Just me', 'Me plus a closer or small sales team', "A sales team I don’t personally manage"] }
  ] },
  { title: 'Where things stand', qs: [
    { id: 'losing', label: 'Where do you feel the business is losing the most?', opts: ['Not enough of the right people finding us', "Interest that doesn’t turn into calls", 'Past leads and enquiries we never followed up properly', "Clients who don’t stay, buy again or refer", "I’m honestly not sure"] },
    { id: 'list', label: 'Roughly how many past leads, enquiries or clients are in your CRM or inbox?', opts: ['Under 500', '500–2,000', '2,000–10,000', 'Over 10,000', 'No idea'] },
    { id: 'nownext', label: 'When someone says “not now”, what usually happens next?', opts: ['Nothing, really', 'A few emails', 'A call or two', 'A follow-up sequence that runs for months'] },
    { id: 'why', label: 'What made you reach out now?', long: true, help: 'A sentence or two is plenty.' },
    { id: 'heard', label: 'How did you hear about us?', optional: true, opts: ['Referral', 'LinkedIn', 'Message from Kyū', 'Search', 'Other'] }
  ] }
];

export type Answers = Record<string, string>;

/** Ids of required questions (all except the last) left blank. */
export function missingAnswers(v: Answers): string[] {
  return BOOK_SECTIONS.flatMap((s) => s.qs).filter((q) => !q.optional && !String(v[q.id] || '').trim()).map((q) => q.id);
}

export const APPLICATION_KEY = 'ssd-application';

/**
 * Hand a valid application on. No endpoint exists yet: this keeps the answers for the session so the
 * calendar step can prefill the booking widget. Wire the CRM (e.g. GoHighLevel) POST here.
 */
export async function submitApplication(v: Answers): Promise<void> {
  // Amounts carry the currency symbol in use; the leak-calculator inputs travel with the application, if they used it.
  const cur = readCurrency();
  const resolved = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, withCur(x, cur)]));
  const payload = { ...resolved, currency: cur, leakEstimate: readLeak() };
  try { sessionStorage.setItem(APPLICATION_KEY, JSON.stringify(payload)); } catch { /* storage blocked: nothing to keep */ }
}

export function readApplication(): (Answers & { leakEstimate?: unknown }) | null {
  try { return JSON.parse(sessionStorage.getItem(APPLICATION_KEY) || 'null'); } catch { return null; }
}

export const DRAFT_KEY = 'ssd-application-draft';

/**
 * Keeps an unfinished application for this visit, so a reload or a step back doesn’t lose it.
 * Abandoned-form follow-up hooks in here: once the visitor has given an email (and consent, per your privacy policy),
 * post the partial answers to the CRM so its “pick up where you left off” email can fire (template: emails/abandoned.html).
 */
export function saveDraft(v: Answers) {
  try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify(v)); } catch { /* storage blocked */ }
}

export function readDraft(): Answers {
  try { return JSON.parse(sessionStorage.getItem(DRAFT_KEY) || '{}') || {}; } catch { return {}; }
}

export function clearDraft() {
  try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* storage blocked */ }
}

// Q9 (“Where do you feel the business is losing the most?”) mapped, by option order, to the stage the call starts with.
const STAGE_BY_LOSING: ([stage: string, what: string] | null)[] = [
  ['Acquisition', 'the front end that brings in the right people'],
  ['Conversion', 'the follow-up that turns this week’s enquiries into booked calls'],
  ['Recovery', 'the buyers already sitting in your list'],
  ['Retention', 'the clients who could stay, buy again and send people your way'],
  null
];

export function startingStage(losing?: string) {
  // (answers are saved with the symbol resolved; option order is what maps)
  const q = BOOK_SECTIONS.flatMap((s) => s.qs).find((x) => x.id === 'losing');
  const i = losing && q?.opts ? q.opts.indexOf(losing) : -1;
  return i >= 0 ? STAGE_BY_LOSING[i] : null;
}
