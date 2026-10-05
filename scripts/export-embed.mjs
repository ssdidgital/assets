// Builds a copy-paste version of the homepage for other web builders:
//   export/system-switch.css      the full stylesheet (fonts from Google Fonts)
//   export/homepage-embed.html    one custom HTML block: page markup + plain-JS behaviour
// Run after `npx next build`:  node scripts/export-embed.mjs
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const SITE = 'https://systemswitch.digital';
const ASSETS = 'https://raw.githubusercontent.com/ssdidgital/assets/main/public';

const html = readFileSync('out/index.html', 'utf8');
const cssHref = html.match(/<link rel="stylesheet" href="([^"]+\.css)"/)[1];

// ---- CSS ----
let css = readFileSync('out' + cssHref, 'utf8').replace(/@font-face\{[^}]*\}/g, '');
css = `/* System Switch — site stylesheet. Paste into the builder's custom CSS (or a <style> tag in the page head). */
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600&display=swap");
${css}`;

// ---- HTML ----
let b = html.slice(html.indexOf('<body>') + 6, html.indexOf('</body>'));
b = b.replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<div hidden="">[\s\S]*?<\/div>/, '')
  .replace(/<!--\s*\/?\$?\s*-->/g, '');

// Hooks for the script.
b = b.replace(/(Roughly <span class="ss-emphasis-inline">)([^<]+)( a month)/, '$1<span data-ss="monthly">$2</span>$3')
  .replace(/(That’s )([£$][\d,]+)( a year)/, '$1<span data-ss="yearly">$2</span>$3')
  .replace(/(<p class="v2-calc-keep">[\s\S]*?<strong)>/, '$1 data-ss="keep">')
  .replace(/\[\[([£$])/g, '[[<span data-ss="cur">$1</span>');

// Booking buttons get a data-book hook; the script sets their link.
b = b.replace(/href="\/start"/g, 'href="#book" data-book=""');
// Images from the GitHub repo; internal pages on the live domain.
b = b.replace(/src="\/([^"]+)"/g, `src="${ASSETS}/$1"`)
  .replace(/href="\/([^"#]*)"/g, (_, p) => `href="${SITE}/${p}"`);

const js = readFileSync('scripts/embed-runtime.js', 'utf8');
const out = `<!-- System Switch homepage. Paste as one custom HTML block. Needs system-switch.css on the page. -->
${b}
<script>
${js}
</script>
`;

mkdirSync('export', { recursive: true });
writeFileSync('export/system-switch.css', css);
writeFileSync('export/homepage-embed.html', out);
console.log('css', css.length, 'html', out.length);
