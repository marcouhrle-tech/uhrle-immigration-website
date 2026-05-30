import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('index.html', 'utf8');

const fixes = [
  // 3-char sequences first
  ['â€”', '—'],   // em dash —
  ['â†’', '→'],   // right arrow →
  // Lowercase accented vowels/consonants
  ['Ã¡', 'á'],   // á (C3 A1) -- note: ¡ is U+00A1
  ['Ã©', 'é'],   // é (C3 A9)
  ['Ã­', 'í'],   // í (C3 AD) -- soft hyphen U+00AD
  ['Ã³', 'ó'],   // ó (C3 B3)
  ['Ãº', 'ú'],   // ú (C3 BA)
  ['Ã¼', 'ü'],   // ü (C3 BC)
  ['Ã±', 'ñ'],   // ñ (C3 B1)
  ['Ã ', 'à'],   // à (C3 A0)
  // Uppercase accented
  ['Ã‰', 'É'],    // É (C3 89 -- 0x89 in cp1252 = ‰ U+2030)
  ['Ãš', 'Ú'],    // Ú (C3 9A -- 0x9A in cp1252 = š U+0161)
  ['Ã“', 'Ó'],    // Ó (C3 93 -- 0x93 in cp1252 = " U+201C)
  ['Ã‘', 'Ñ'],    // Ñ (C3 91 -- 0x91 in cp1252 = ' U+2018)
  // Punctuation
  ['Â¿', '¿'],    // ¿ (C2 BF)
  ['Â¡', '¡'],    // ¡ (C2 A1)
  ['Â©', '©'],    // © (C2 A9)
  ['Â·', '·'],    // · (C2 B7)
  ['Â°', '°'],    // ° (C2 B0)
  ['Â ', ' '],    // nbsp -> regular space (C2 A0)
];

let totalCount = 0;
for (const [bad, good] of fixes) {
  const count = content.split(bad).length - 1;
  if (count > 0) {
    console.log(`  "${bad}" -> "${good}": ${count} replacements`);
    totalCount += count;
  }
  content = content.split(bad).join(good);
}

writeFileSync('index.html', content, 'utf8');
console.log(`\nTotal: ${totalCount} fixes applied.`);
