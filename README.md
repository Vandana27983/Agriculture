# Verdant Fields 🌱

**Modern Agriculture & Farm Supplies Website** — a fully responsive, static Next.js marketing site with an admin dashboard.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Routes & Pages](#routes--pages)
4. [Development Process (Step-by-Step)](#development-process-step-by-step)
5. [How to Run Locally](#how-to-run-locally)
6. [How to Share / Run on Another Device](#how-to-share--run-on-another-device)
7. [Deploy to Vercel](#deploy-to-vercel)
8. [Design System](#design-system)
9. [Data Architecture](#data-architecture)

---

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | **Next.js** (App Router, Turbopack) | 16.2.6 |
| Language | **TypeScript** | 5.7.3 |
| UI Library | **React** | 19.2.4 |
| Styling | **Tailwind CSS** | 4.2.0 |
| Components | **shadcn/ui v4** (@base-ui/react) | 1.5.0 |
| Animations | **Framer Motion** | 12.40.0 |
| Icons | **Lucide React** | 1.17.0 |
| Forms | **Sonner** (toast notifications) | 2.0.7 |
| Analytics | **@vercel/analytics** | 1.6.1 |
| Package Manager | **pnpm** | 9.x |
| Runtime | **Node.js** | ≥ 18 |

---

## Project Structure

```
modern-agriculture-website/
├── app/
│   ├── layout.tsx                  # Root layout (fonts, metadata, analytics)
│   ├── not-found.tsx               # Custom 404 page
│   ├── globals.css                 # Tailwind + shadcn theme (green agriculture palette)
│   │
│   ├── (site)/                     # Public site (route group)
│   │   ├── layout.tsx              # Site layout (header + footer)
│   │   ├── page.tsx                # Home page (hero, stats, categories, CTA)
│   │   ├── about/page.tsx          # About page (story, mission, team, stats)
│   │   ├── products/
│   │   │   ├── page.tsx            # Server wrapper (Suspense boundary)
│   │   │   ├── products-client.tsx # Interactive listing (search, filter, sort)
│   │   │   └── [slug]/page.tsx     # Product detail (SSG)
│   │   ├── services/
│   │   │   ├── page.tsx            # Services listing (overview + detailed sections)
│   │   │   └── [slug]/page.tsx     # Service detail (SSG)
│   │   ├── gallery/page.tsx        # Gallery grid
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing (search, filter)
│   │   │   └── [slug]/page.tsx     # Blog post detail (SSG)
│   │   └── contact/page.tsx        # Contact page (info cards + form)
│   │
│   ├── admin/                      # Admin panel
│   │   ├── layout.tsx              # Admin layout (sidebar + mobile sheet)
│   │   ├── page.tsx                # Dashboard (stats, recent inquiries, quick links)
│   │   ├── products/page.tsx       # Products table
│   │   ├── services/page.tsx       # Services table
│   │   ├── blog/page.tsx           # Blog table
│   │   ├── gallery/page.tsx        # Gallery image grid
│   │   ├── inquiries/page.tsx      # Inquiries table
│   │   └── settings/page.tsx       # Settings forms
│   │
│   └── api/                        # API routes (read-only)
│       ├── products/route.ts       # GET /api/products (?slug, ?search, ?category)
│       ├── services/route.ts       # GET /api/services (?slug)
│       ├── blog/route.ts           # GET /api/blog (?slug, ?search, ?category)
│       └── inquiries/route.ts      # POST /api/inquiries (contact form)
│
├── components/
│   ├── home/
│   │   └── hero.tsx                # Animated hero banner
│   ├── site/                       # Reusable site components (22 files)
│   │   ├── site-header.tsx         # Sticky header with mobile nav
│   │   ├── site-footer.tsx         # Footer with links and contact
│   │   ├── page-hero.tsx           # Page hero banner
│   │   ├── section-container.tsx   # Layout wrapper (muted/default bg)
│   │   ├── section-heading.tsx     # Eyebrow + title + description
│   │   ├── reveal.tsx              # Scroll-triggered fade-in animation
│   │   ├── cta-section.tsx         # Call-to-action banner
│   │   ├── product-card.tsx        # Product card (image, title, price)
│   │   ├── service-card.tsx        # Service card (icon, title, summary)
│   │   ├── blog-card.tsx           # Blog post card
│   │   ├── gallery-grid.tsx        # Gallery image grid
│   │   ├── contact-form.tsx        # Contact form with validation
│   │   ├── search-input.tsx        # Search input with icon
│   │   ├── filter-bar.tsx          # Filter button group
│   │   ├── sort-select.tsx         # Sort dropdown
│   │   ├── empty-state.tsx         # Empty results placeholder
│   │   ├── error-state.tsx         # Error state placeholder
│   │   ├── loading-state.tsx       # Loading skeleton
│   │   ├── form-field.tsx          # Form field wrapper
│   │   ├── status-badge.tsx        # Status indicator
│   │   ├── related-products.tsx    # Related products section
│   │   └── related-posts.tsx       # Related posts section
│   └── ui/                         # shadcn UI primitives (16 files)
│       ├── button.tsx, input.tsx, card.tsx, badge.tsx
│       ├── select.tsx, table.tsx, dialog.tsx, sheet.tsx
│       ├── accordion.tsx, tabs.tsx, dropdown-menu.tsx
│       ├── separator.tsx, label.tsx, textarea.tsx, sonner.tsx
│
├── lib/
│   ├── data.ts                     # Seed data + helper functions (658 lines)
│   ├── nav.ts                      # Navigation link definitions
│   └── utils.ts                    # cn() utility (clsx + tailwind-merge)
│
├── public/images/                  # Placeholder images (27 files)
│   ├── hero-fields.png, about-farm.png, cta-field.png
│   ├── product-*.png, service-*.png
│   ├── gallery-*.png, blog-*.png
│   └── team-*.png
│
├── next.config.mjs                 # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
├── pnpm-lock.yaml                  # Lockfile
├── postcss.config.mjs              # PostCSS (Tailwind v4)
└── components.json                 # shadcn/ui configuration
```

---

## Routes & Pages

### Public Site (35 routes total)

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home page (hero, stats, why-us, categories, products, services, testimonials, CTA) |
| `/about` | Static | Company story, mission, stats, team members |
| `/products` | Static+CSR | Product listing (search, category filter, stock filter, sort) |
| `/products/[slug]` | SSG | Product detail (image, specs, features, related products) |
| `/services` | Static | Services overview + detailed sections per service |
| `/services/[slug]` | SSG | Service detail (image, benefits, related services) |
| `/gallery` | Static | Gallery grid of farm images |
| `/blog` | Static+CSR | Blog listing (search, category filter) |
| `/blog/[slug]` | SSG | Blog post (author, date, read time, content, tags) |
| `/contact` | Static | Contact info cards + validated form |
| `/not-found` | Static | Custom 404 page |

### Admin Panel

| Route | Type | Description |
|-------|------|-------------|
| `/admin` | Static | Dashboard (stat cards, recent inquiries, quick actions) |
| `/admin/products` | Static | Products table management |
| `/admin/services` | Static | Services table management |
| `/admin/blog` | Static | Blog posts table management |
| `/admin/gallery` | Static | Gallery image grid management |
| `/admin/inquiries` | Static | Inquiries table with status badges |
| `/admin/settings` | Static | Site identity + SEO settings forms |

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/products` | GET | Filter products (?search, ?category, ?stock, ?sort) |
| `/api/products?slug=` | GET | Single product lookup |
| `/api/services` | GET | All services or single (?slug=) |
| `/api/blog` | GET | Filter posts (?search, ?category) or single (?slug=) |
| `/api/inquiries` | POST | Submit contact form (validated JSON) |

---

## Development Process (Step-by-Step)

### Phase 1: Foundation Audit & Fixes

1. **Audited the existing project** — reviewed all files, configs, and identified issues
2. **Removed `ignoreBuildErrors`** from `next.config.mjs` — the old config had it set to `true`, suppressing real errors
3. **Enhanced `lib/data.ts`** — added 10+ helper functions:
   - `getProductBySlug()`, `getServiceBySlug()`, `getBlogPostBySlug()`
   - `filterProducts()`, `filterBlogPosts()` (with search, category, stock filters)
   - `getRelatedProducts()`, `getRelatedServices()`, `getRelatedPosts()`
   - `formatDate()` for human-readable dates
4. **Defined TypeScript interfaces** for all data types (Product, Service, BlogPost, Inquiry, etc.)
5. **Created reusable component library** (see [Components](#project-structure))

### Phase 2: Component Architecture

Built a library of **22 reusable site components** following these principles:

- **Separation of concerns** — data layer (`lib/data.ts`) → presentational components → pages
- **Composition over repetition** — components like `SectionContainer`, `SectionHeading`, `PageHero` used across all pages
- **Animation consistency** — `Reveal` component wraps content with scroll-triggered fade-in using Framer Motion
- **Empty/error states** — every data-driven view has `EmptyState` and `ErrorState` fallbacks

### Phase 3: Site Pages

Built every page following a consistent pattern:

1. **Server Components** by default — most pages are server-rendered for performance
2. **Client Components** only where needed — products listing (search/filter), blog listing, contact form
3. **Static Generation** — product/service/blog detail pages use `generateStaticParams()` + `generateMetadata()`
4. **Suspense Boundaries** — pages using `useSearchParams()` are wrapped in `<Suspense>` to satisfy Next.js 16 SSG requirements

### Phase 4: Admin Panel

1. **Admin layout** — client component with desktop sidebar (sticky, 64px wide) + mobile `Sheet` drawer
2. **Active link highlighting** — `usePathname()` detects the current admin route
3. **Dashboard** — stat cards (products, services, blog, gallery, inquiries) + recent inquiries + quick actions
4. **CRUD placeholder tables** — edit/delete buttons (UI placeholders, awaiting database integration)

### Phase 5: API Routes

1. **Read-only GET endpoints** for products, services, blog with query parameter filtering
2. **Single-item lookup** via `?slug=` parameter
3. **POST `/api/inquiries`** with JSON validation (field-level errors, email regex)
4. **404 handling** for missing slugs

### Phase 6: shadcn v4 Migration Fixes

1. **`asChild` → `render` prop** — shadcn v4 uses `@base-ui/react` which replaced `asChild` with the `render` prop pattern:
   ```tsx
   // Before (shadcn v3)
   <Button asChild><Link href="/x">Label</Link></Button>
   // After (shadcn v4)
   <Button render={<Link href="/x" />}>Label</Button>
   ```
2. **Select `onValueChange`** — base-ui Select callback receives `string | null`, not just `string`
3. **Server/Client boundary** — removed event handlers from server components (replaced interactive `SearchInput` with static `Input` in admin)

### Phase 7: Configuration Cleanup

1. **Fixed `next.config.mjs`** — removed duplicate `nextConfig` declaration
2. **Verified TypeScript compiles** without errors
3. **Verified full production build** — all 35 routes generate successfully

---

## How to Run Locally

### Prerequisites

- **Node.js** ≥ 18 (install from [nodejs.org](https://nodejs.org/))
- **pnpm** (install via `npm install -g pnpm` or use `corepack enable pnpm`)

### Setup

```bash
# 1. Clone or copy the project
git clone <repo-url> verdant-fields
cd verdant-fields

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server (hot reload) |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## How to Share / Run on Another Device

This project has **no database, no environment variables, no external services**. It's fully self-contained.

### Option A: Git & GitHub (Recommended)

```bash
# On your current machine
cd verdant-fields
git remote add origin https://github.com/YOUR-USERNAME/verdant-fields.git
git push -u origin master

# On the other device
git clone https://github.com/YOUR-USERNAME/verdant-fields.git
cd verdant-fields
pnpm install
pnpm dev
```

### Option B: Zip & Copy

1. Delete `node_modules/` and `.next/` folders (they're regenerated on install)
2. Zip the project folder
3. Copy the zip to the other device
4. Extract, then run `pnpm install` and `pnpm dev`

---

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Connect your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app` in ~30 seconds.

---

## Design System

### Color Palette

The site uses a **green agriculture theme** built with OKLCH colors:

| Token | Role |
|-------|------|
| `--primary` | Forest green (`oklch(0.5 0.11 148)`) — buttons, links, accents |
| `--secondary` | Light leaf green — cards, sections |
| `--accent` | Warm amber — stars, highlights |
| `--background` | Near-white warm tone |
| `--foreground` | Dark olive text |
| `--sidebar` | Deep forest — admin sidebar + footer |

### Typography

- **Headings**: [Fraunces](https://github.com/undercasetype/Fraunces) (serif, variable weight)
- **Body**: [Geist Sans](https://vercel.com/font) (sans-serif)
- CSS class: `font-heading` for headings, `font-sans` for body

### Responsive Breakpoints

- **Mobile**: default
- **Tablet**: `sm:` (640px), `md:` (768px)
- **Desktop**: `lg:` (1024px)

---

## Data Architecture

### Seed Data (`lib/data.ts`)

All content is stored as TypeScript arrays and objects:

- **Products**: 8 items (seeds, fertilizers, pesticides, equipment)
- **Services**: 4 items (consulting, soil testing, crop management, irrigation)
- **Blog Posts**: 3 articles
- **Gallery Images**: 6 images
- **Testimonials**: 3 quotes
- **Team Members**: 3 profiles
- **Inquiries**: 3 sample messages

### Data Helpers

```ts
// Lookup by slug
getProductBySlug(slug)    // → Product | undefined
getServiceBySlug(slug)    // → Service | undefined
getBlogPostBySlug(slug)   // → BlogPost | undefined

// Filter with multiple criteria
filterProducts({ search, category, stock, sort })  // → Product[]
filterBlogPosts({ search, category })              // → BlogPost[]

// Related content
getRelatedProducts(product, limit)  // → Product[]
getRelatedServices(service, limit)  // → Service[]
getRelatedPosts(post, limit)        // → BlogPost[]

// Utilities
formatDate("2025-03-12")  // → "March 12, 2025"
```

> **To connect a real database**: Replace the array lookups in `lib/data.ts` with database queries. The component interfaces remain unchanged.

---

## License

This project is for demonstration purposes. All placeholder images are generated assets.
