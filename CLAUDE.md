# CLAUDE.md — Uhrle Immigration Law Website Rules

## About This Project
- Law firm website for **Uhrle Immigration Law**
- Tone: professional, trustworthy, warm, and approachable
- Target audience: immigrants seeking legal help in the US
- Goal: build confidence and trust; encourage visitors to contact the firm

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/marco/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/marco/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Brand Direction
- **Name:** Uhrle Immigration Law
- **Logo:** `Uhrle_Branding_VF (2) (2).png` — always use this logo on the site
- **Primary color (teal):** `#2E7D8C` — used for text, headings, nav, and main UI elements
- **Accent color (gold):** `#E8A830` — used for highlights, CTAs, buttons, and decorative accents
- **Background:** Clean off-white or very light warm gray (e.g. `#F9F7F4`)
- **Fonts:** Pair a serif display font (e.g. Playfair Display) for headings with a clean sans (e.g. Inter) for body
- **Imagery:** Diverse people, families, hopeful and professional settings
- **Avoid:** Generic stock photo clichés, overly corporate feel, anything that feels cold or intimidating

## Firm Content

### Attorney
- **Name:** María Uhrle
- **Origin:** Salta, Argentina — now based in Nelson, New Zealand
- **Experience:** Abogada at Nelson Bays Community Law; community involvement with Nelson Red Cross and Multicultural Nelson Tasman
- **Personal note:** María immigrated herself and went through the professional title recognition process — she understands the legal and emotional challenges firsthand

### Location & Language
- Nelson, Nueva Zelanda
- Services in **Spanish and English**
- Primary target audience: Spanish-speaking professionals and students from Latin America

### Tagline / Core Message
- "Te ayudo a convertir tu perfil en una oportunidad real en Nueva Zelanda, con una estrategia legal clara desde el inicio."

### CTA Buttons (use these exact phrases)
- Primary: "Evaluá tus opciones migratorias"
- Secondary: "Agenda tu consulta gratuita de 15 minutos"
- Also used: "Agenda tu evaluación legal", "Ver todos los servicios", "Ver todos los recursos"

### Services
**Trabajar en Nueva Zelanda**
- AEWV, cambios de empleador, condiciones de visa
- Estrategia profesional y planificación legal

**Estudiar y migrar**
- Visas de estudiante y trabajo post-estudio
- Estrategia de migración completa, incluyendo planes a largo plazo

**Camino a la residencia**
- Residencia para profesionales
- Ciudadanía
- Estrategia legal personalizada y casos complejos

**Visas familiares y de pareja**
- Visas de pareja (relaciones genuinas y estables)
- Reunificación familiar

**Casos especiales**
- Sección 61 (solicitudes discrecionales para personas sin visa válida)
- Cartas PPI (respuestas estratégicas ante comunicaciones de INZ)
- Representación ante INZ

### Process (4 steps)
1. Consulta inicial gratuita (15 minutos)
2. Evaluación detallada y definición de estrategia (paga)
3. Preparación y presentación de la solicitud
4. Seguimiento continuo hasta el resultado

### Key Notes from Client
- Free 15-min consultation is just to understand situation and objectives; deeper paid evaluation follows
- No guaranteed results, but serious legal representation
- Transparent pricing: fixed or hourly fees depending on visa type and complexity
- External costs separate: INZ fees, translations, certificates
- Regulated by NZ Law Society

### Pages
Home, Sobre el Estudio, Sobre María Uhrle, Servicios, Cómo Trabajamos, FAQ, Costos, Contacto

### FAQ Topics
¿Necesito abogado o immigration adviser?, ¿Puedo aplicar desde fuera de NZ?, ¿Qué pasa si ya me rechazaron una visa?, ¿Cuánto demora un proceso migratorio?, ¿Los resultados están garantizados?, ¿Cuánto cuesta el servicio?, ¿Puedo incluir a mi pareja o familia?, ¿Ofrecen atención en español?, ¿Qué es una carta PPI?, ¿Qué sucede después de enviar la solicitud?

---

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use the brand palette: teal `#2E7D8C` as primary, gold `#E8A830` as accent.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
