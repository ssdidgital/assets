// Builds a portable preview of the static export (out/ → preview/site/) that works under any sub-path:
// asset paths become relative, fonts are inlined, and a small shim maps the app's absolute URLs onto the
// preview's base and turns client-side navigations into full page loads. Used for review hosting only.
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const OUT = 'out', DEST = 'preview/site';
rmSync('preview', { recursive: true, force: true });
// The hub page is kept in scripts/ and copied in, because preview/ is rebuilt from scratch.
mkdirSync(DEST, { recursive: true });

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk(OUT).filter((p) => !/opengraph-image$/.test(p) && !/(robots\.txt|sitemap\.xml)$/.test(p));

const font = (f) => 'data:font/woff2;base64,' + readFileSync(join(OUT, 'fonts', f)).toString('base64');

const shim = (rel) => `<script>(function(){
var B=new URL(${JSON.stringify(rel)},location.href).href;
window.TURBOPACK_CHUNK_BASE_PATH=${JSON.stringify(rel + '_next/')};
function isAbs(u){return typeof u==='string'&&u.charAt(0)==='/'&&u.charAt(1)!=='/';}
function asset(u){return B+u.slice(1);}
function page(u){var h='',q='',i=u.indexOf('#');if(i>=0){h=u.slice(i);u=u.slice(0,i);}i=u.indexOf('?');if(i>=0){q=u.slice(i);u=u.slice(0,i);}
 var p=u==='/'?'index.html':u.slice(1).replace(/\\/$/,'');if(!/\\.[a-z0-9]+$/i.test(p))p+='.html';return B+p+q+h;}
var f=window.fetch;window.fetch=function(i,o){var raw=typeof i==='string'?i:(i instanceof URL)?i.href:(i&&i.url)||'';try{var U=new URL(raw,location.href);if(U.origin===location.origin&&(/[?&]_rsc=/.test(U.search)||/__next[.]/.test(U.pathname)||!/[.][a-z0-9]+$/i.test(U.pathname)))return Promise.resolve(new Response(null,{status:204}));}catch(_){}if(isAbs(i))i=asset(i);else if(i&&i.url&&isAbs(new URL(i.url).pathname)&&new URL(i.url).origin===location.origin&&!i.url.startsWith(B))i=new Request(asset(new URL(i.url).pathname+new URL(i.url).search),i);return f.call(this,i,o);};
function fix(n){if(n&&n.tagName){var a=n.tagName==='SCRIPT'?'src':n.tagName==='LINK'?'href':null;if(a){var v=n.getAttribute(a);if(isAbs(v))n.setAttribute(a,asset(v));}}return n;}
var ap=Node.prototype.appendChild,ib=Node.prototype.insertBefore;
Node.prototype.appendChild=function(n){return ap.call(this,fix(n));};
Node.prototype.insertBefore=function(n,r){return ib.call(this,fix(n),r);};
var ps=history.pushState,rs=history.replaceState;
history.pushState=function(s,t,u){if(isAbs(u)){location.href=page(u);return;}return ps.apply(this,arguments);};
history.replaceState=function(s,t,u){return rs.call(this,s,t,isAbs(u)?location.href:u);};
addEventListener('click',function(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
 var a=e.target.closest&&e.target.closest('a[href]');if(!a||a.target==='_blank')return;var h=a.getAttribute('href');if(!isAbs(h))return;
 e.preventDefault();e.stopImmediatePropagation();location.href=page(h);},true);
window.__PV_HUB__=B+'../index.html';window.__PV_NAV__=function(u){location.href=page(u);};
})();</script><style>.pv-back{position:fixed;left:12px;bottom:12px;z-index:60;display:inline-flex;align-items:center;gap:8px;padding:8px 12px;background:#111a16;color:#f5f3ec!important;font:500 11px/1 "DM Mono",ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;text-decoration:none}.pv-back:hover{background:#11352b}.pv-back:focus-visible{outline:2px solid #8e7230;outline-offset:2px}body:has(.s-cookie) .pv-back{display:none}</style>`;

for (const src of files) {
  const rp = relative(OUT, src), dst = join(DEST, rp);
  mkdirSync(dirname(dst), { recursive: true });
  if (src.endsWith('.html')) {
    const depth = rp.split('/').length - 1, rel = depth ? '../'.repeat(depth) : './';
    let h = readFileSync(src, 'utf8');
    h = h.replace(/(src|href)="\/(_next|fonts|email)\//g, `$1="${rel}$2/`)
         .replace(/(src|href)="\/(logo-wordmark-gold|logo-wordmark-white|mark-gold|icon)\.svg/g, `$1="${rel}$2.svg`).replace(/src="\/kyu\.webp"/g, `src="${rel}kyu.webp"`)
         // Chunk and stylesheet references inside the inline page data must match the rewritten tags exactly.
         .replace(/\\"\/_next\/static\//g, `\\"${rel}_next/static/`)
         .replace('<head>', '<head>' + shim(rel))
         .replace('</body>', `<a class="pv-back" href="${rel}../index.html" onclick="event.stopImmediatePropagation()">← All pages</a></body>`);
    writeFileSync(dst, h);
  } else if (src.endsWith('.css')) {
    let c = readFileSync(src, 'utf8');
    c = c.replace(/url\(["']?\/fonts\/([^"')]+)["']?\)/g, (_, f) => `url("${font(f)}")`);
    writeFileSync(dst, c);
  } else if (src.endsWith('.js')) {
    // Literal U+FFFD (used by React's text decoding) written as its escape, which means the same in JS strings and regexes.
    writeFileSync(dst, readFileSync(src, 'utf8').replace(/\uFFFD/g, '\\uFFFD'));
  } else {
    cpSync(src, dst);
  }
}

// Emails as viewable pages, with the logo pointed at the preview copy.
mkdirSync('preview/emails', { recursive: true });
for (const f of readdirSync('emails').filter((f) => f.endsWith('.html'))) {
  writeFileSync(join('preview/emails', f), readFileSync(join('emails', f), 'utf8').replace(/https:\/\/systemswitch\.digital\/email\//g, '../site/email/'));
}
// Share cards as PNGs for the hub.
mkdirSync('preview/og', { recursive: true });
for (const [name, p] of [['home', ''], ['approach', 'approach/'], ['who', 'who-we-work-with/'], ['about', 'about/'], ['start', 'start/'], ['work', 'work/'], ['case', 'work/example/'], ['digest', 'digest/'], ['article', 'digest/the-not-now-problem/']]) {
  cpSync(join(OUT, p + 'opengraph-image'), join('preview/og', name + '.png'));
}
cpSync('scripts/preview-index.html', 'preview/index.html');
console.log('preview built:', walk('preview').length, 'files');
