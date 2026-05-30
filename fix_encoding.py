with open('index.html', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # 3-char sequences first
    ('â€”', '—'),   # em dash
    ('â†’', '→'),   # right arrow
    # Lowercase accented vowels/consonants
    ('Ã¡', 'á'),   # a with acute
    ('Ã©', 'é'),   # e with acute
    ('Ã­', 'í'),   # i with acute
    ('Ã³', 'ó'),   # o with acute
    ('Ãº', 'ú'),   # u with acute
    ('Ã¼', 'ü'),   # u with diaeresis
    ('Ã±', 'ñ'),   # n with tilde
    ('Ã ', 'à'),   # a with grave
    # Uppercase accented
    ('Ã‰', 'É'),   # E with acute (0x89=permille sign)
    ('Ãš', 'Ú'),   # U with acute (0x9a=s with caron)
    ('Ã“', 'Ó'),   # O with acute (0x93=left double quote)
    ('Ã‘', 'Ñ'),   # N with tilde (0x91=left single quote)
    # Punctuation
    ('Â¿', '¿'),   # inverted question mark
    ('Â¡', '¡'),   # inverted exclamation
    ('Â©', '©'),   # copyright
    ('Â·', '·'),   # middle dot
    ('Â°', '°'),   # degree sign
    ('Â ', ' '),   # non-breaking space
]

count = 0
for bad, good in fixes:
    n = content.count(bad)
    if n:
        print(f"  {repr(bad)} -> {repr(good)}: {n} replacements")
        count += n
    content = content.replace(bad, good)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nTotal: {count} fixes applied.")
