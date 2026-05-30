# Frontend Design Checklist — Uhrle Immigration Law

Run this checklist before writing any frontend code for this project, every session, no exceptions.

## Brand Guardrails

- **Primary color (teal):** `#2E7D8C` — headings, nav, UI elements. Never use default Tailwind blue/indigo.
- **Accent color (gold):** `#E8A830` — CTAs, buttons, highlights
- **Background:** `#F9F7F4` or clean off-white
- **Heading font:** Playfair Display (serif) — tight tracking (`-0.03em`) on large headings
- **Body font:** Inter (sans) — generous line-height (`1.7`)
- **Logo:** `Uhrle_Branding_VF (2) (2).png` — always present

## Anti-Generic Rules (Hard Stops)

- No `transition-all` — only animate `transform` and `opacity`
- No flat `shadow-md` — use layered, color-tinted shadows with low opacity
- No same font for headings and body
- Every clickable element needs hover, focus-visible, and active states
- Surfaces must have depth layers (base → elevated → floating)
- Gradients: layer multiple radial gradients; add grain via SVG noise filter
- Images: gradient overlay (`bg-gradient-to-t from-black/60`) + color treatment with `mix-blend-multiply`

## Screenshot Workflow (Required After Every Change)

1. Ensure server is running: `node serve.mjs` (background, port 3000)
2. Screenshot: `node screenshot.mjs http://localhost:3000 <label>`
3. Read the PNG with the Read tool — visually inspect it
4. Compare against reference if one exists: check spacing, colors (exact hex), font sizes, alignment
5. Fix any mismatches and re-screenshot — minimum 2 rounds

**Never screenshot a `file:///` URL. Always use `http://localhost:3000`.**

## Reference Content

- Attorney: María Uhrle, based in Nelson, Nueva Zelanda
- Services in Spanish and English
- Primary audience: Spanish-speaking Latin American professionals and students
- Tagline: "Te ayudo a convertir tu perfil en una oportunidad real en Nueva Zelanda"
