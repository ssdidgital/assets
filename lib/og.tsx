import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// Share cards (Open Graph / social previews), rendered at build time in the brand system.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const file = (p: string) => readFile(join(process.cwd(), p));

/** `title` uses the content markup: {{gold phrase}}. */
export async function ogImage(eyebrow: string, title: string) {
  const [o600, mono, logo] = await Promise.all([
    file('assets/og-fonts/Outfit-600.ttf'), file('assets/og-fonts/DMMono-500.ttf'), file('public/logo-wordmark-gold.svg')
  ]);
  // The renderer wraps each child as a block, so split into words to let the gold phrase flow mid-line.
  const words = title.split(/(\{\{.+?\}\})/g).filter(Boolean).flatMap((p) => {
    const gold = p.startsWith('{{');
    return (gold ? p.slice(2, -2) : p).split(/\s+/).filter(Boolean).map((w) => ({ w, gold }));
  });
  const long = title.replace(/\{\{|\}\}/g, '').length > 60;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f5f3ec', fontFamily: 'Outfit' }}>
        <div style={{ display: 'flex', flex: 1, margin: '0 64px', padding: '56px 56px 0', borderLeft: '1px solid #ddd9cd', borderRight: '1px solid #ddd9cd', flexDirection: 'column' }}>
          <img src={'data:image/svg+xml;base64,' + logo.toString('base64')} height={40} width={263} alt="" />
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 56, fontFamily: 'DM Mono', fontSize: 20, letterSpacing: 3.6, textTransform: 'uppercase', color: '#5c6660' }}>
            <div style={{ display: 'flex', width: 27, height: 9, background: '#a7c0b4', marginRight: 16 }}><div style={{ width: 13, height: 9, marginLeft: 14, background: '#c9a24e' }} /></div>
            {eyebrow}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 24, fontSize: long ? 58 : 72, lineHeight: 1.04, letterSpacing: long ? -2.3 : -2.9, fontWeight: 600, color: '#111a16', maxWidth: 1000 }}>
            {words.map(({ w, gold }, i) => <span key={i} style={{ color: gold ? '#7a5f20' : '#111a16', marginRight: '0.24em' }}>{w}</span>)}
          </div>
        </div>
        <div style={{ display: 'flex', height: 88, background: '#11352b', alignItems: 'center', justifyContent: 'space-between', padding: '0 120px', fontFamily: 'DM Mono', fontSize: 20, letterSpacing: 2.4, textTransform: 'uppercase', color: '#a7c0b4' }}>
          <span>Book a systems audit</span>
          <span style={{ color: '#e8c99a' }}>systemswitch.digital</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Outfit', data: o600, weight: 600, style: 'normal' }, { name: 'DM Mono', data: mono, weight: 500, style: 'normal' }] }
  );
}
