# AI Coding Instructions for nitonabbc-site

This is an Astro-based website for a church with Japanese-first content and modern web patterns.

## Project Architecture

**Tech Stack**: Astro 5, TypeScript, MDX, with vanilla JS for interactivity (Alpine.js on contact form only)

**Content Organization**: Event content lives in `src/content/specials/` organized by year (e.g., `2025/summer-evangelistic/index.md`). Each event has frontmatter with `date`, `title`, `cover` image, and optional `description`/`tags`. Content schema is defined in `src/content/config.ts` using Zod.

**Path Aliases**: Use `@/` prefix to import from `src/` (configured in `tsconfig.json`)

## Key Patterns

### Content Collections
- Events use Astro's Content Collections API with type-safe schemas
- Fetch events with `getCollection("specials")` and sort by date descending
- Dynamic routes use `[...slug].astro` with `getStaticPaths()` returning slug params
- Example: `src/pages/specials/[...slug].astro` and `src/pages/specials/list/[page].astro`

### Theming System
- Uses `data-scroll` attributes on sections to trigger theme changes on scroll
- Themes defined in `src/styles/themes.css` (theme-light, theme-dark, theme-blue, etc.)
- `src/scripts/scroll.ts` implements IntersectionObserver to swap theme classes on `<body>`
- Apply themes to sections: `<section data-scroll="theme-light">`

### Layouts
- `Layout.astro`: Main layout with Header, Nav, Footer
- `SpecialsLayout.astro`: Specialized for event pages with custom styling from `specials.css`
- Both layouts import global styles: `global.css`, `themes.css`

### Components
- Small, reusable Astro components in `src/components/`
- Icons via `astro-icon` with Iconify sets: `<Icon name="mdi:icon-name" />`
- Components like `InputText.astro`, `InputRadio.astro` are form-specific

### Contact Form
- Only page using Alpine.js (loaded inline via CDN)
- State managed with `x-data`, `x-show`, `@submit` directives
- reCAPTCHA integration via `src/scripts/recaptcha.ts` - token retrieved with `getReCaptchaToken()`
- Form endpoint from env: `PUBLIC_CONTACT_ENDPOINT` (see `src/consts.ts`)

## Development Workflow

**Commands**:
- `npm run dev` - Start dev server
- `npm run build` - Type check with `astro check` then build
- `npm run preview` - Preview production build

**Adding Events**:
1. Create directory: `src/content/specials/YYYY/event-slug/`
2. Add `index.md` with required frontmatter (date, title, cover)
3. Include images in same directory (referenced as `./image.webp` in markdown)
4. No rebuild needed for content - Astro regenerates static paths

**Deployment**: Auto-deploys to Cloudflare Pages on `main` branch push

## Environment Variables

Required in production:
- `PUBLIC_CONTACT_ENDPOINT` - Contact form submission endpoint
- `PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA v3 site key

## Code Conventions

- **Language**: User-facing content in Japanese, but all code comments, error messages, commit messages, and developer communication in English
- **Styling**: Keep it simple - scoped `<style>` blocks in `.astro` components, semantic HTML, minimal CSS
- **Best Practices**: Follow Astro, HTML, CSS, and TypeScript best practices rigorously:
  - Use semantic HTML elements (`<nav>`, `<section>`, `<article>`, etc.)
  - Prefer CSS custom properties for theming over hard-coded values
  - Use Astro's built-in features (Image component, ViewTransitions) when appropriate
  - Keep components small and focused on single responsibilities
  - Leverage TypeScript strict mode - no `any` types
- **Images**: Use WebP format, store in `public/img/` for static assets or co-locate with content
- **No Framework JS**: Avoid heavy client-side frameworks - use Astro's partial hydration if needed (Alpine.js is exception for contact form)
