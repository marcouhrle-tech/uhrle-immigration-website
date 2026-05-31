# CLAUDE.md — Solar Web Website Rules

## About This Project
- Website for **Solar Web**, a web design studio based in Nelson, New Zealand.
- Tone: Creative, modern, but highly grounded and results-focused. Avoid pretentious tech-jargon; speak directly to local business owners who care about reliability and growth.
- Target audience: Local Nelson businesses, trades, hospitality, retail, professional services, and non-profits looking for a dependable web design partner.
- Goal: Showcase the agency's work, communicate value, build trust, and convert visitors into enquiries.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. 
- **Iteration Limit:** Stop when no visible differences remain, or after a maximum of 3 screenshot iterations. If differences persist after 3 attempts, ask the user for manual guidance to prevent endless looping.

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
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

## Output Defaults
- Single `index.html` file structured as a **single-page scrolling site**.
- Styling: Use Tailwind CSS utility classes directly in the HTML via CDN (`<script src="https://cdn.tailwindcss.com"></script>`). 
- Reserve a `<style>` block in the `<head>` *only* for custom keyframe animations or specific pseudo-elements that Tailwind cannot handle easily.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive.

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Brand Direction
- **Name:** Solar Web
- **Logo:** TBD — check `brand_assets/` folder; use placeholder if none present.
- **Primary color:** TBD — to be defined by client. Do not use default Tailwind blue/indigo.
- **Accent color:** TBD — to be defined by client.
- **Background:** Clean off-white or very light warm gray (e.g. `#F9F7F4`) to establish a clean, approachable, and highly readable baseline.
- **Fonts:** Pair a strong, legible display font for headings with a clean sans-serif for body — specific pairing TBD.
- **Imagery:** Local Nelson scenes, real work samples, team shots, creative process. Add a subtle gradient overlay (`bg-gradient-to-t from-black/60`) for text readability over images.
- **Avoid:** Generic stock photo clichés, overly corporate feel, overly complex "Web3" aesthetics, or anything that feels mass-produced.

## Agency Content

### Location & Language
- Nelson, New Zealand
- Services in **English**

### Tagline / Core Message
- TBD — to be defined with client. Focus on reliability, local presence, and measurable business growth.

### Services
**Website Design & Development**
- Custom website design
- Mobile-first, responsive builds
- Single-page and multi-page sites

**E-commerce**
- Online store setup
- Product catalogue and payment integration

**Branding & Identity**
- Logo design
- Brand guidelines and colour palettes

**Ongoing Support**
- Website maintenance and updates
- Hosting and domain management

### Process
1. Discovery & brief
2. Design concepts
3. Build & review
4. Launch & handover

### Sections (Anchor-linked in the single-page scroll)
Home, About, Services, Portfolio, Process, Contact

### CTA Buttons
- Primary: "Start a project"
- Secondary: "See our work"
- Also: "Get in touch", "View all services"

---

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use neutral, earthy, or trust-building tones until the brand palette is defined.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity for subtle, realistic depth.
- **Typography:** Never use the same font family for headings and body. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body text to maximize readability.
- **Animations:** Keep it grounded. Only animate `transform` and `opacity` for micro-interactions. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states to feel highly functional and responsive. No exceptions.
- **Spacing:** Use intentional, consistent spacing tokens. Give sections plenty of breathing room (generous vertical padding).
- **Depth:** Surfaces should have a clean layering system (background -> slightly elevated card -> floating button).

## Hard Rules
- Do not add sections, features, or content not in the reference/brief.
- Do not "improve" a reference design — match it.
- **Do not exceed 3 screenshot iteration loops.** Ask for human guidance instead.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as a primary color.
