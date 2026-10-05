// Founder essays. The sample below is assembled only from copy already on the site, as a layout reference;
// it stays a draft (noindex, out of the sitemap) until replaced with a real essay. Markup: {{gold}}, [[to supply]], **bold**.

export type Block =
  | { p: string; lead?: boolean }
  | { h2: string }
  | { quote: string }
  | { list: string[] }
  | { figure: 'leak-bar' };

export type Article = { slug: string; draft: boolean; title: string; dek: string; date: string; readMins: number; body: Block[] };

export const ARTICLES: Article[] = [
  {
    slug: 'the-not-now-problem',
    draft: true,
    title: 'The {{not-now}} problem',
    dek: 'Most businesses think they need more leads. They’re leaking the ones they have.',
    date: '[[Publish date]]',
    readMins: 4,
    body: [
      { p: 'I’ve watched the same leak from three different seats.', lead: true },
      { p: 'Every month, people raise their hand. They book a call, watch the training, ask about price. Then the timing’s wrong, and they say “not now”. The team moves on to this week’s enquiries, and everyone from last month goes quiet in the CRM.' },
      { p: 'Many of them still buy, eventually. From whoever followed up.' },
      { figure: 'leak-bar' },
      { h2: 'The cause is rarely the sales team' },
      { p: 'So the business spends more to find new strangers, while the people who already know it, trust it and asked about it sit untouched. The cause is rarely the sales team. It’s infrastructure: nothing in the business is built to hold a buyer between “interested” and “ready”.' },
      { quote: 'We measure growth by what a business keeps.' },
      { h2: 'Fix what you have before you buy more' },
      { p: 'The cheapest revenue in any business is the revenue it has already earned and not yet collected. Before we add anything to the front of your business, we look at what’s slipping out of the back. Sometimes the answer is more traffic. Usually it’s somewhere closer to home.' },
      { p: '[[The rest of the essay, in Kyū’s words.]]' }
    ]
  }
];

export const findArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
export const publishedArticles = () => ARTICLES.filter((a) => !a.draft);
