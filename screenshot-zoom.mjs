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
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000?preview=1', { waitUntil: 'networkidle0', timeout: 30000 });

// 1. Hero bottom half — new H1 + mini trust strip
let n = nextN();
await page.screenshot({ path: join(dir, `screenshot-${n}-hero-headline-trust.png`), clip: { x: 200, y: 340, width: 880, height: 380 } });
console.log('Saved hero headline + trust strip');

// 2. About section pull-quote area
const about = await page.$('#about');
const box = await about.boundingBox();
n = nextN();
await page.screenshot({ path: join(dir, `screenshot-${n}-about-pullquote.png`), clip: { x: box.x + box.width / 2 + 20, y: box.y + 260, width: 580, height: 260 } });
console.log('Saved about pull-quote');

await browser.close();
