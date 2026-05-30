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
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

// Nav area
let n = nextN();
await page.screenshot({ path: join(dir, `screenshot-${n}-nav-mobile.png`), clip: { x: 0, y: 0, width: 390, height: 80 } });
console.log(`Saved nav (${n})`);

// Pricing section
const pricingEl = await page.$('section#pricing');
const box = await pricingEl.boundingBox();
n = nextN();
await page.screenshot({ path: join(dir, `screenshot-${n}-pricing-mobile.png`), clip: { x: 0, y: box.y, width: 390, height: 360 } });
console.log(`Saved pricing (${n})`);

// Open hamburger menu
await page.click('.hamburger');
await new Promise(r => setTimeout(r, 300));
n = nextN();
await page.screenshot({ path: join(dir, `screenshot-${n}-hamburger-open.png`), clip: { x: 0, y: 0, width: 390, height: 520 } });
console.log(`Saved hamburger open (${n})`);

await browser.close();
