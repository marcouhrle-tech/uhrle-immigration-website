import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = './temporary screenshots';
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

function nextN() {
  const existing = readdirSync(dir).filter(f => f.endsWith('.png'));
  const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n) && n > 0);
  return nums.length ? Math.max(...nums) + 1 : 1;
}

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000?preview=1', { waitUntil: 'networkidle0', timeout: 30000 });

const sections = [
  { sel: '.hero', label: 'mobile-hero' },
  { sel: '#about', label: 'mobile-about' },
  { sel: '#services', label: 'mobile-services' },
];

for (const { sel, label } of sections) {
  const el = await page.$(sel);
  if (el) {
    const n = nextN();
    const out = join(dir, `screenshot-${n}-${label}.png`);
    await el.screenshot({ path: out });
    console.log(`Saved: ${out}`);
  }
}

await browser.close();
