# GymCave Website — Complete UI Redesign Plan

> **Version:** 2.0  
> **Date:** March 27, 2026  
> **Design Philosophy:** Minimal, Scroll-Driven, 3D Mockup-Centric  
> **Inspiration:** Linear.app, Raycast, Vercel, Arc Browser, Craft.do

---

## Table of Contents

1. [Design Philosophy & Principles](#1-design-philosophy--principles)
2. [Design System Overhaul](#2-design-system-overhaul)
3. [Global Components](#3-global-components)
4. [Page 1: Landing Page (Home)](#4-page-1-landing-page-home)
5. [Page 2: Features Page](#5-page-2-features-page)
6. [Page 3: Pricing Page](#6-page-3-pricing-page)
7. [Page 4: About Page](#7-page-4-about-page)
8. [Page 5: Impact Page](#8-page-5-impact-page)
9. [Page 6: Contact Page](#9-page-6-contact-page)
10. [Animation Architecture](#10-animation-architecture)
11. [3D Mobile Mockup System](#11-3d-mobile-mockup-system)
12. [Stitch Prompts — Page by Page](#12-stitch-prompts--page-by-page)
13. [Implementation Roadmap](#13-implementation-roadmap)

---

## 1. Design Philosophy & Principles

### What We're Removing (Anti-Patterns)

The current website suffers from several design issues that must be completely eliminated:

- **Gradient Text** — All instances of `background-clip: text` gradient effects on headings. These look dated and clash with the minimal aesthetic we want. Every heading will use solid, flat white (`#FFFFFF`) or muted gray (`#A0A0B8`) text only.
- **Drop Shadows** — All `box-shadow` on cards, buttons, and containers. The current `--shadow-card`, `--shadow-elevated`, and `--shadow-glow-lime` variables are retired. Cards will be differentiated through subtle 1px borders and background-color contrast only.
- **Glow Effects** — The `--gradient-glow`, `--shadow-glow-lime`, and `--accent-lime-glow` effects are removed. No element should emit a halo or glow. The accent color (`#C8FF00`) appears as solid flat fills only.
- **Heavy Gradients on Backgrounds** — The `--gradient-hero` with three-point gradients is removed. Backgrounds use flat solid colors with subtle, barely-perceptible noise textures at most.
- **Simulated/Fake UI Mockups** — The current Hero has a hand-coded "dashboard" mockup using divs. This is replaced entirely with real app screenshots placed inside 3D mobile device frames.
- **Overly Decorative Ornaments** — Mesh gradients, floating orbs, glow circles behind elements — all removed.

### What We're Adding (Design Principles)

| Principle | Description |
|---|---|
| **Flat Minimalism** | Solid colors only. No gradients on text. No box-shadows. 1px borders for separation. |
| **Scroll-Driven Storytelling** | Every section reveals through scroll. The page is a narrative — each scroll tick pushes the story forward. |
| **3D Device Mockups** | Real app screenshots inside CSS 3D-transformed phone frames that rotate, tilt, and swap images on scroll. |
| **Generous Whitespace** | Sections breathe. Min 120px vertical padding between major sections. Content never feels cramped. |
| **Monochromatic + One Accent** | Backgrounds: `#09090B` → `#111113` → `#18181B`. Accent: `#C8FF00` (lime) used sparingly for CTAs, overlines, and active states only. |
| **Kinetic Typography** | Headings animate in word-by-word or character-by-character using GSAP SplitText or CSS clip-path reveals. No bouncy springs. Smooth, eased reveals. |
| **Micro-interactions** | Buttons scale subtly on hover (1.02). Nav links have underline wipe animations. Cards lift slightly (translateY -2px) on hover with no shadow — just border-color change. |
| **Noise Texture Overlay** | A 2-4% opacity SVG noise texture overlaid on background sections to add depth without gradients. |
| **Sticky Scroll Sections** | Feature showcase uses a sticky-scroll pattern (like Linear's features page) where the left column stays pinned and the right column scrolls through mockups. |

### Typography System

| Element | Font | Weight | Size | Tracking |
|---|---|---|---|---|
| Display / Hero H1 | Outfit | 700 | clamp(48px, 7vw, 88px) | -0.03em |
| Section H2 | Outfit | 600 | clamp(32px, 4vw, 52px) | -0.02em |
| Card H3 | Outfit | 500 | 22px | -0.01em |
| Body | Inter | 400 | 16px | 0 |
| Body Large | Inter | 400 | 18px | 0 |
| Overline/Label | Inter | 500 | 13px | 0.08em |
| Mono/Code | JetBrains Mono | 500 | 14px | 0 |

### Color Tokens (Revised)

```css
/* Backgrounds — flat, no gradients */
--bg-primary: #09090B;      /* Page background, deepest */
--bg-secondary: #111113;    /* Section alternation */
--bg-elevated: #18181B;     /* Cards, elevated surfaces */
--bg-subtle: #1F1F23;       /* Hover states, subtle fills */

/* Accent */
--accent: #C8FF00;           /* Lime — buttons, overlines, active indicators */
--accent-soft: rgba(200, 255, 0, 0.08);  /* Hover fills only */

/* Text */
--text-primary: #FAFAFA;    /* Headings, primary content */
--text-secondary: #A1A1AA;  /* Body text, descriptions */
--text-muted: #52525B;      /* Labels, placeholders, meta */

/* Borders */
--border: rgba(255, 255, 255, 0.06);     /* Default card/section borders */
--border-hover: rgba(255, 255, 255, 0.12); /* Hover state borders */
--border-accent: rgba(200, 255, 0, 0.15);  /* Accent borders (rare) */

/* NO shadows. NO glows. NO gradients on text. */
```

### Spacing Scale

All spacing follows an 8px base grid:
- `4px` → micro gaps (icon-to-text)
- `8px` → tight spacing
- `12px` → compact
- `16px` → default inner
- `24px` → breathing room
- `32px` → section inner padding
- `48px` → card spacing
- `64px` → section separator (small)  
- `96px` → section separator (medium)
- `128px` → section separator (large)
- `160px` → hero-level spacing

---

## 2. Design System Overhaul

### Border-Only Cards

Cards throughout the site use this pattern:
- Background: `var(--bg-elevated)`
- Border: `1px solid var(--border)`
- Border-radius: `12px`
- Padding: `24px` or `32px`
- Hover: `border-color: var(--border-hover)` + `translateY(-2px)` transition 300ms
- **No shadow. No glow. No gradient fill.**

### Button Styles

**Primary CTA Button:**
- Background: `var(--accent)` — solid lime fill
- Color: `#09090B` (black text on lime)
- Font: Inter 500, 14px
- Padding: `12px 24px`
- Border-radius: `8px`
- Hover: `scale(1.02)` transform, slightly darker lime (`#B8E600`)
- Transition: `transform 200ms ease, background 200ms ease`
- **No shadow. No glow.**

**Secondary/Ghost Button:**
- Background: `transparent`
- Border: `1px solid var(--border)`
- Color: `var(--text-primary)`
- Hover: `background: var(--bg-subtle)`, border lightens
- Same border-radius and padding as primary

### Noise Texture Overlay

A subtle SVG noise is applied to section backgrounds as a `::after` pseudo-element:
```css
.section::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/noise.svg');
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
}
```

### Dot Grid Background

For hero sections, a subtle dot-grid pattern replaces all gradient backgrounds:
```css
.dotGrid {
  background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

---

## 3. Global Components

### 3.1 Navbar

**Design:**
- Position: `fixed`, full width, `z-index: 999`
- Height: `56px`
- Background: `transparent` initially → on scroll becomes `rgba(9, 9, 11, 0.8)` with `backdrop-filter: blur(12px) saturate(180%)`
- Border-bottom: on scroll → `1px solid var(--border)`
- Layout: `Logo (left) | Nav Links (center) | CTA (right)`
- Logo: SVG mark, 24px height
- Links: Inter 400, 14px, `var(--text-secondary)`, hover → `var(--text-primary)` with underline wipe animation (width 0→100% from left)
- Active link: `var(--text-primary)` with a 2px bottom indicator in `var(--accent)`
- CTA button: compact primary style "Get Started" with arrow icon
- Mobile: hamburger → full-screen overlay with staggered link reveals (0.05s delay per link)

### 3.2 Footer

**Design:**
- Background: `var(--bg-secondary)` with top border `1px solid var(--border)`
- Layout: 4-column grid on desktop → stacked on mobile
- Columns: Product (links to pages), Company (about, careers, blog), Resources (docs, changelog), Legal (privacy, terms)
- Bottom bar: Logo + Copyright left, Social icons right (minimal outline icons)
- All text in `var(--text-muted)`, hover → `var(--text-secondary)`
- No decorative elements. Clean, Vercel-footer-style.

---

## 4. Page 1: Landing Page (Home)

The landing page is the most critical page. It must feel like visiting Linear.app or Raycast.com for the first time — immediate wow factor through restraint, motion, and precision.

### Section 1: Hero

**Layout:**
- Full viewport height (`100vh`)
- Content centered vertically and horizontally
- Dot-grid background with noise overlay
- Text stack: Overline → Headline → Subheadline → CTA buttons → floating mockup below

**Content:**
- Overline: "GYM MANAGEMENT, REIMAGINED" — Inter 500, 13px, `var(--accent)`, letter-spacing 0.08em
- Headline: `"The gym OS that doesn't get in your way."` — Outfit 700, clamp(48px, 7vw, 88px), `var(--text-primary)`, solid white (NO gradient)
- Subheadline: `"One platform for billing, members, analytics, and workouts. Built for gym owners who want clarity, not complexity."` — Inter 400, 18px, `var(--text-secondary)`, max-width 560px, centered
- CTA Row: [Start Free Trial →] (primary) + [Watch Demo] (ghost)

**Mockup:**
- Below the text stack, a **3D-perspective mobile phone mockup** floats
- The phone is slightly rotated in 3D space (`rotateY(-8deg) rotateX(4deg)`)
- Inside the phone frame, the first app screenshot (e.g., dashboard) is displayed
- On scroll, the phone animates to a straight-on view (`rotateY(0) rotateX(0)`) and the screenshot crossfades to the next screen
- The phone frame is a CSS-drawn device with rounded corners, notch, and a thin bezel in `var(--bg-elevated)`

**Animation Sequence (on load):**
1. `0ms` — Overline fades up (opacity 0→1, y: 16→0, 600ms ease-out-expo)
2. `100ms` — Headline reveals word-by-word via clip-path or GSAP SplitText (each word: opacity 0→1, y: 12→0, 500ms stagger 50ms)
3. `200ms` — Subheadline fades up (opacity 0→1, y: 16→0, 600ms)
4. `350ms` — CTA buttons fade up together (opacity 0→1, y: 12→0, 500ms)
5. `500ms` — Phone mockup slides up from below viewport (y: 100→0, opacity 0→1, 1000ms ease-out-expo) and settles into its 3D rotation

**Scroll Behavior:**
- As user scrolls past 40vh, the phone parallax-translates upward slightly and the hero text fades to opacity 0
- The phone begins rotating toward the user (reducing rotateY and rotateX values)

### Section 2: Logo Strip / Social Proof

**Layout:**
- Slim horizontal bar, `64px` height
- Background: `var(--bg-secondary)`, top and bottom `1px solid var(--border)`
- Content: "Trusted by 500+ gym owners" label on left, horizontally auto-scrolling logo row on right
- Logos are monochrome (white, 50% opacity), auto-scroll with CSS marquee animation

**Animation:**
- Reveal on scroll: entire strip slides up (y: 24→0, opacity 0→1, 500ms)
- Logos use infinite horizontal scroll animation (`translateX: 0% → -50%`, looping)

### Section 3: Feature Showcase — Sticky Scroll System

This is the core section of the homepage. It uses the **sticky scroll pattern** (like Linear, Loom, or Notion's feature pages).

**Layout:**
- Container: `100%` width, tall enough that it spans `300vh` (or `100vh × number of features`)
- Left column (40% width): **Sticky positioned** text content that stays pinned while scrolling
- Right column (60% width): **3D phone mockup** that changes screenshots based on scroll position

**How It Works:**

The section contains 4-5 feature blocks. As the user scrolls:
1. The left text column pins (position: sticky, top: 50%)
2. The current feature's title, description, and bullet points are shown
3. As scroll progress reaches thresholds (0%, 25%, 50%, 75%, 100%), the left content crossfades to the next feature
4. Simultaneously, the phone mockup on the right crossfades its screenshot to match the current feature
5. The phone also subtly rotates/tilts as the screenshot changes

**Features to showcase (4 blocks):**

**Feature Block 1: Member Management**
- Overline: "CRM & MEMBERS"
- Title: "Every member, fully visible."
- Body: "Profiles, attendance history, plan details, notes, and communication logs — all in one place. Know who's at risk of leaving before they do."
- Bullet points: "Smart member profiles" · "Attendance tracking" · "Risk identification" · "Custom segmentation"
- Phone screenshot: App's member list / member profile screen

**Feature Block 2: Smart Billing**
- Overline: "PAYMENTS & BILLING"
- Title: "Revenue on autopilot."
- Body: "Auto-renewing memberships, smart invoice triggers, and payment tracking — so every rupee reaches your account without manual effort."
- Bullet points: "Auto-renewals" · "Payment reminders" · "Financial reports" · "Multi-plan support"
- Phone screenshot: App's billing / transactions screen

**Feature Block 3: Real-Time Analytics**
- Overline: "ANALYTICS & INSIGHTS"
- Title: "Know exactly where you stand."
- Body: "Live dashboards with member check-in trends, revenue breakdowns, retention rates, and peak-hour insights. Every number you need — in one view."
- Bullet points: "Live dashboards" · "Retention analytics" · "Revenue tracking" · "Growth trends"
- Phone screenshot: App's analytics / dashboard screen

**Feature Block 4: Workout Tracking**
- Overline: "WORKOUTS & PROGRESS"
- Title: "Help members crush their goals."
- Body: "Exercise logging, progress visualization, workout plans, and personal records — keeping your members engaged and motivated."
- Bullet points: "Exercise logging" · "Progress charts" · "Workout templates" · "PR tracking"
- Phone screenshot: App's workout / exercise tracking screen

**Animation Details:**
- Text transitions: Current feature text fades out (opacity 1→0, y: 0→-16, 300ms) while next feature fades in (opacity 0→1, y: 16→0, 300ms)
- Phone screenshot: Crossfade with slight scale effect (scale 0.98→1, opacity 0→1, 400ms)
- Phone rotation: Subtle continuous rotation tied to scroll position — each feature has a slightly different tilt angle
- A small progress indicator (4 dots) on the left shows which feature is active

### Section 4: Bento Grid — Quick Feature Cards

**Layout:**
- Title: "Built for gym owners who ship."
- 2×3 grid of feature cards (bento-style, varying sizes)
- Each card: `var(--bg-elevated)` background, `1px solid var(--border)`, `12px` border-radius
- Each card has an icon (Lucide, 20px, `var(--accent)`), title, and 1-line description
- Card hover: `border-color: var(--border-hover)`, `translateY(-2px)`, no shadow

**Cards:**
1. **AI Barcode Scanning** — "Scan any product instantly with your camera."
2. **WhatsApp Integration** — "Send payment reminders and updates via WhatsApp."
3. **Multi-Location** — "Manage multiple gym branches from one dashboard."
4. **Gamification** — "Badges, streaks, and leaderboards to boost retention."
5. **Inventory Management** — "Track supplements, merch, and equipment in real time."
6. **Smart Notifications** — "Automated alerts for renewals, payments, and attendance."

**Animation:**
- Cards stagger-reveal on scroll (each card: opacity 0→1, y: 24→0, 500ms, stagger 80ms between cards)
- Grid area: `whileInView` trigger with `once: true`

### Section 5: Testimonial

**Layout:**
- Single centered testimonial, large format
- Large opening quotation mark (decorative, `var(--accent)`, 48px)
- Quote text: Inter 400, 22px, `var(--text-primary)`, max-width 640px
- Attribution below: Name (bold), Title, Company — `var(--text-muted)`
- No card, no background, no border — just floating text with generous whitespace

**Animation:**
- Quote fades up on scroll (opacity 0→1, y: 20→0, 700ms)
- Quotation mark fades in slightly ahead (delay: -100ms)

### Section 6: CTA Banner

**Layout:**
- Full-width section with `var(--bg-secondary)` background
- Center-aligned text stack
- Headline: "Ready to modernize your gym?" — Outfit 600, 40px
- Subtext: "Join 500+ gym owners already using GymCave." — Inter 400, 16px, `var(--text-secondary)`
- CTA: [Start Free Trial →] primary button, centered
- Dot-grid background pattern behind text
- Noise overlay

**Animation:**
- Text stack fades up on scroll (staggered: headline first, then subtext, then button)

---

## 5. Page 2: Features Page

### Section 1: Features Hero

**Layout:**
- Height: `60vh` minimum
- Center-aligned text
- Overline: "FEATURES"
- Headline: "Everything your gym needs. Nothing it doesn't."
- Subheadline: "From member management to AI-powered inventory — GymCave handles it all."
- Below headline: horizontal tab bar with feature categories

**Tab Bar:**
- Horizontal scrollable row of pill buttons
- Categories: CRM & Members | Payments | Inventory | Workouts | Analytics | Notifications
- Active tab: `var(--accent)` background, dark text
- Inactive tab: `var(--bg-elevated)` background, `var(--text-secondary)` text, `1px solid var(--border)`
- Tab switch animates the content below with crossfade

### Section 2: Feature Deep Dive (per tab)

**Layout:**
- Two-column layout: Left = text, Right = 3D phone mockup showing relevant app screen
- The phone mockup changes screenshot when the tab changes
- Text column: Feature title, description paragraph, bullet list of capabilities
- Each bullet has a small check icon in `var(--accent)`

**Animation:**
- Tab switch: text content crossfades (opacity transition, 300ms)
- Phone screenshot crossfades simultaneously
- Phone has subtle idle floating animation (translateY oscillation, 4s cycle)

### Section 3: Comparison Table

**Layout:**
- Section title: "How GymCave stacks up"
- Full-width table with alternating row backgrounds
- Columns: Feature | GymCave | Competitor A | Competitor B
- GymCave column highlighted with `var(--accent)` top border
- Checkmarks: `var(--accent)` for GymCave, `var(--text-muted)` for others
- X marks: `var(--text-muted)` with opacity 0.3
- Table container: `1px solid var(--border)`, `12px` border-radius, overflow hidden

**Animation:**
- Table rows stagger in on scroll (each row: opacity 0→1, x: -12→0, 300ms, stagger 60ms)

### Section 4: Integrations

**Layout:**
- Section title: "Works with tools you already use"
- Grid of integration logos in rounded-square containers
- Each container: `48px × 48px`, `var(--bg-elevated)`, `1px solid var(--border)`, `8px` radius
- Below each logo: integration name in `var(--text-muted)`, 12px
- Grid: 6 columns on desktop, 3 on mobile

**Animation:**
- Icons stagger-pop in on scroll (scale 0.8→1, opacity 0→1, stagger 40ms)

---

## 6. Page 3: Pricing Page

### Section 1: Pricing Hero

**Layout:**
- Center-aligned
- Overline: "PRICING"
- Headline: "Simple pricing. Zero surprises."
- Subheadline: "Flat monthly fee. No per-member charges. No hidden costs."

### Section 2: Pricing Cards

**Layout:**
- Two cards side by side (centered, max-width 800px)
- Card style: `var(--bg-elevated)`, `1px solid var(--border)`, `16px` border-radius

**Card 1: Monthly Subscription**
- Label pill: "STANDARD"
- Price: "₹999/month" — large text, Outfit 700
- Description: "Everything you need to run a single gym."
- Feature list with checkmarks
- CTA: Ghost button "Start Free Trial"

**Card 2: Hybrid License (Recommended)**
- Label pill: "RECOMMENDED" — `var(--accent)` background
- Top border: `2px solid var(--accent)`
- Price: "₹14,999 one-time + ₹499/month" — large text
- Description: "Own the software. Lower monthly costs forever."
- Feature list with checkmarks
- CTA: Primary button "Get Started →"

**Animation:**
- Cards slide up staggered on scroll
- Recommended card has a subtle `var(--accent)` top border glow (very subtle — just the border color, no shadow)

### Section 3: FAQ

**Layout:**
- Section title: "Common questions"
- Accordion-style FAQ items
- Each item: border-bottom `1px solid var(--border)`, question text left-aligned, chevron right-aligned
- Open state: answer slides down with 300ms ease, chevron rotates 180°
- Max-width: 640px, centered

---

## 7. Page 4: About Page

### Section 1: About Hero

**Layout:**
- Height: `50vh` minimum
- Center-aligned
- Overline: "ABOUT US"
- Headline: "We're building the future of gym management."
- Subheadline: "A team of fitness enthusiasts and engineers on a mission to modernize how gyms operate."
- Dot-grid background

### Section 2: Mission & Values

**Layout:**
- 3-column grid of value cards
- Each card: icon, title, description
- Icons: Lucide outline icons in `var(--accent)`
- Cards use same border-only style (no shadows)

**Values:**
1. **Simplicity** — "We fight complexity. Every feature must earn its place."
2. **Speed** — "Built with performance in mind. Your gym data loads instantly."
3. **Transparency** — "No hidden fees. No vendor lock-in. Your data is always yours."

### Section 3: Timeline / Journey

**Layout:**
- Vertical timeline with alternating left-right content blocks
- Thin vertical line: `1px solid var(--border)`, centered
- Each milestone: year/date label + brief description
- Active dot on the timeline: `var(--accent)` fill
- Past dots: `var(--bg-subtle)` fill

**Milestones:**
- "Idea born" → "First prototype" → "Beta launch" → "500+ users" → "2.0 release"

**Animation:**
- Timeline items reveal on scroll as user scrolls down
- Line draws in progressively (scaleY 0→1 based on scroll)

### Section 4: Team

**Layout:**
- Grid of team member cards (3 columns)
- Each card: real photo (circle, 80px), name, role, very brief bio
- Photos have `1px solid var(--border)` ring
- Cards: no background, just photo + text stack

### Section 5: Tech Stack

**Layout:**
- Simple grid of tech logos with labels
- Firebase, Flutter, Next.js, GSAP, etc.
- Same style as integrations on features page

---

## 8. Page 5: Impact Page

### Section 1: Impact Hero

**Layout:**
- Center-aligned
- Overline: "THE GYMCAVE IMPACT"
- Headline: "Legacy software is holding your gym back."
- Subheadline: "See the difference a modern platform makes."

### Section 2: Before / After Comparison

**Layout:**
- Two-column split view
- Left: "Before GymCave" — dark red/muted tones, pain points listed
- Right: "With GymCave" — `var(--accent)` highlights, benefits listed
- Each side: numbered list items with icons
- Separator: vertical line or diagonal split

**Before items:** Manual registers, Missed payments, No insights, Scattered data
**After items:** Digital everything, Auto-reminders, Real-time analytics, One unified platform

**Animation:**
- Left column slides in from left, right from right (simultaneously, 600ms)

### Section 3: Metrics Display

**Layout:**
- 4-column stat row
- Each stat: large number (Outfit 700, 48px, `var(--text-primary)`) with label below
- Numbers count up on scroll (CountUp animation)

**Stats:**
- "500+" Gym Owners
- "50K+" Members Managed
- "₹2Cr+" Revenue Processed
- "99.9%" Uptime

### Section 4: CTA

- Same CTA banner as homepage (shared component)

---

## 9. Page 6: Contact Page

### Section 1: Contact Hero

**Layout:**
- Compact hero, 40vh
- Overline: "CONTACT"
- Headline: "Let's talk about your gym."
- Subheadline: "Have questions? Want a demo? We're here."

### Section 2: Contact Form

**Layout:**
- Two-column: Left = form, Right = info panel
- Form fields: Name, Email, Phone, Gym Name, Message
- Input styling: `var(--bg-elevated)` background, `1px solid var(--border)`, `8px` radius, `var(--text-primary)` text
- Focus state: `border-color: var(--accent)`  
- Submit button: primary style
- Info panel: Email, phone, address, social links

### Section 3: FAQ

- Same accordion FAQ as pricing page (shared component)

---

## 10. Animation Architecture

### Technology Stack

| Tool | Purpose |
|---|---|
| **GSAP + ScrollTrigger** | Scroll-driven animations, sticky sections, parallax, pin-and-progress scrubbing |
| **Framer Motion** | Component-level entrance animations, layout animations, page transitions |
| **Lenis** | Smooth scroll behavior (already installed) |
| **CSS Transitions** | Hover states, micro-interactions, color transitions |

### Animation Rules

1. **Duration:** Entrance animations: 500-800ms. Hover transitions: 200-300ms. Never exceed 1200ms.
2. **Easing:** Use `ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`) for all entrances. Use `ease-in-out` for hover states.
3. **Direction:** Elements enter from bottom (y: 16-24px) or from their natural scroll direction. Never from sides unless it's a split comparison.
4. **Trigger:** `whileInView` with `once: true` for Framer Motion. `ScrollTrigger` with `start: "top 80%"` for GSAP.
5. **No Bounce:** No spring physics. No overshoot. Smooth, confident motion only.
6. **Stagger:** When multiple items animate, stagger by 60-100ms per item. Never more than 120ms.
7. **Reduced Motion:** Respect `prefers-reduced-motion` — disable all animations, show content immediately.

### Scroll-Linked Animation Patterns

**Pattern 1: Parallax Depth**
- Background elements move at 50% scroll speed
- Foreground elements move at 100% (normal)
- Creates depth without 3D transforms on backgrounds

**Pattern 2: Pin-and-Progress (Sticky Scroll)**
- Used for the feature showcase on homepage
- A container with `height: 300vh` wraps a `position: sticky` element
- GSAP ScrollTrigger `pin: true`, `scrub: 1`
- Progress (0→1) maps to content transitions

**Pattern 3: Reveal-on-Enter**
- Default pattern for all sections
- Element starts at `opacity: 0, y: 24`
- On entering viewport (80% threshold): `opacity: 1, y: 0` over 500ms
- Trigger once, never re-triggers

---

## 11. 3D Mobile Mockup System

### How the 3D Phone Mockup Works

The phone mockup is a central visual element of the redesigned site. It appears on:
- **Homepage Hero** — Single phone, 3D rotated, parallax on scroll
- **Homepage Feature Showcase** — Phone in right column, screenshots swap on scroll
- **Features Page** — Phone in feature deep-dive section, screenshots swap on tab change
- **Impact Page** — Optional: phone showing "after" state

### Phone Frame Construction (CSS)

The phone frame is built purely with CSS. No images for the frame itself:

```
┌─────────────────────────┐  ← 1px border, border-radius: 40px
│    ┌──────────────┐     │  ← Notch (CSS pseudo-element)
│    └──────────────┘     │
│                         │
│   ┌─────────────────┐   │
│   │                 │   │  ← Screenshot <img> fills this area
│   │   App Screen    │   │     with border-radius: 12px
│   │   Screenshot    │   │     and overflow: hidden
│   │                 │   │
│   │                 │   │
│   └─────────────────┘   │
│                         │
│          ───            │  ← Home indicator bar (optional)
└─────────────────────────┘
```

- Outer frame: `background: #1C1C1E`, `border: 1px solid rgba(255,255,255,0.1)`, `border-radius: 40px`
- Aspect ratio: `9:19.5` (modern smartphone)
- Width: `280px` on desktop, responsive down to `220px` on mobile
- The frame receives CSS `perspective: 1000px` on its parent and `transform: rotateY() rotateX()` on itself

### Screenshot Swapping Strategy

The user will provide actual app screenshots (PNGs). These are placed inside the phone frame's "screen area" div.

**On Homepage (scroll-driven):**
- 4-5 screenshots are preloaded as invisible `<img>` elements
- GSAP ScrollTrigger progress (0→1) maps to screenshot indices:
  - 0-0.25 → Screenshot 1 (Dashboard)
  - 0.25-0.5 → Screenshot 2 (Members)
  - 0.5-0.75 → Screenshot 3 (Billing)
  - 0.75-1.0 → Screenshot 4 (Workouts)
- Transition between screenshots: crossfade (opacity, 400ms)
- Optionally: slight scale pulse (0.98→1) during transition

**On Features Page (tab-driven):**
- Each tab has an associated screenshot
- Switching tabs crossfades the screenshot inside the phone
- Phone stays in the same position, only the screen content changes

### 3D Rotation Values

| State | rotateY | rotateX | scale |
|---|---|---|---|
| Hero initial (tilted) | -12deg | 5deg | 1.0 |
| Hero scrolled (straight) | 0deg | 0deg | 1.0 |
| Feature showcase (slight tilt) | -5deg | 3deg | 1.0 |
| Hover state | +2deg from current | -1deg from current | 1.01 |

---

## 12. Stitch Prompts — Page by Page

Below are detailed prompts to use in Stitch for generating design mockups for each page. Each prompt is written to produce a specific, high-quality result that matches the design system above.

---

### STITCH PROMPT 1: Landing Page — Hero Section

```
Design a hero section for a gym management SaaS product called "GymCave".

STYLE: Ultra-minimal, dark theme. Background color: #09090B. No gradients on text. No drop shadows anywhere. No glow effects. Inspired by Linear.app and Raycast.com hero sections.

BACKGROUND: Subtle dot-grid pattern (small dots at ~3% opacity, spaced 24px apart) on the #09090B background. Optionally a barely visible noise texture overlay at 2-3% opacity.

LAYOUT: Content is center-aligned. Full viewport height (100vh). Generous whitespace.

CONTENT (top to bottom):
1. OVERLINE TEXT: "GYM MANAGEMENT, REIMAGINED" — uppercase, 13px, font-weight 500, letter-spacing 0.08em, color: #C8FF00 (lime green accent).
2. HEADLINE: "The gym OS that doesn't get in your way." — Large bold heading, font Outfit or similar geometric sans-serif, weight 700, size ~72px, color: pure white #FAFAFA. Solid flat color, NO gradient on text.
3. SUBHEADLINE: "One platform for billing, members, analytics, and workouts. Built for gym owners who want clarity, not complexity." — 18px, color: #A1A1AA (muted gray), max-width ~560px, centered.
4. TWO BUTTONS side by side:
   - Primary: "Start Free Trial →" — solid #C8FF00 lime background, black text, 8px border-radius, no shadow.
   - Ghost: "Watch Demo" — transparent background, 1px border rgba(255,255,255,0.06), white text, 8px border-radius.
5. BELOW THE BUTTONS: A 3D-perspective mobile phone mockup. The phone frame is dark gray (#1C1C1E) with rounded corners (like an iPhone). Inside the phone screen, show a fitness/gym app dashboard screenshot. The phone should be slightly rotated in 3D space (tilted ~10-12 degrees on the Y axis and ~5 degrees on the X axis) to create depth. The phone floats with generous space below the buttons.

TYPOGRAPHY: Clean, geometric sans-serif (like Inter or Outfit). Tight letter-spacing on the headline (-0.03em).

COLORS: Only #09090B (background), #FAFAFA (white text), #A1A1AA (secondary text), #C8FF00 (accent for overline and primary button). No other colors.

DO NOT include: any gradient text effects, any box-shadows, any glow/halo effects, any background gradients, any decorative orbs or shapes. Keep it extremely clean and minimal.
```

---

### STITCH PROMPT 2: Landing Page — Feature Showcase (Sticky Scroll Section)

```
Design a feature showcase section for a gym management SaaS website called "GymCave".

STYLE: Ultra-minimal dark theme. Background: #09090B. No drop shadows. No glow effects. No gradient text. Inspired by Linear.app's feature sections with sticky scroll patterns.

LAYOUT: Two-column layout on desktop.
- LEFT COLUMN (40% width): Pinned/sticky text content. Shows the current feature being highlighted.
- RIGHT COLUMN (60% width): A 3D mobile phone mockup displaying a relevant app screenshot. The phone is slightly tilted in perspective for depth.

LEFT COLUMN CONTENT (for one feature state — design this as one snapshot):
- OVERLINE: "CRM & MEMBERS" — uppercase, 13px, #C8FF00 lime, letter-spacing 0.08em.
- TITLE: "Every member, fully visible." — 36px, Outfit font, weight 600, white #FAFAFA.
- DESCRIPTION: "Profiles, attendance history, plan details, notes, and communication logs — all in one place." — 16px, color #A1A1AA.
- BULLET POINTS (4 items): "Smart member profiles" / "Attendance tracking" / "Risk identification" / "Custom segmentation" — Each bullet has a small check icon in #C8FF00 followed by text in white.
- PROGRESS INDICATOR: 4 small dots vertically stacked on the far left, first dot filled (#C8FF00), rest hollow (border only). This indicates which feature is currently active.

RIGHT COLUMN:
- A mobile phone mockup (dark frame, #1C1C1E, rounded corners like iPhone, thin bezel). Inside the screen, a gym app screenshot showing a member list or member profile. The phone is slightly rotated (rotateY: -8deg, rotateX: 3deg) for subtle 3D depth.

BACKGROUND: Solid #09090B, subtle noise texture at 2% opacity.

TYPOGRAPHY: Outfit for headings, Inter for body. Clean, tight line-heights.

COLORS: #09090B, #111113, #18181B (for card surfaces), #FAFAFA (headings), #A1A1AA (body), #C8FF00 (accent).

DO NOT include: box-shadows, glow effects, gradient text, background gradients, decorative shapes, or floating orbs.
```

---

### STITCH PROMPT 3: Landing Page — Bento Grid Cards

```
Design a bento grid section for a SaaS gym management product called "GymCave".

STYLE: Minimal dark theme. Background: #09090B. No shadows, no glows, no gradient text. Clean, modern, Vercel/Linear-inspired.

LAYOUT:
- Section header centered at top:
  - OVERLINE: "BUILT FOR SPEED" — uppercase, 13px, #C8FF00, letter-spacing 0.08em.
  - TITLE: "Built for gym owners who ship." — 40px, Outfit font, weight 600, white #FAFAFA.
- Below: a 2×3 bento grid (6 cards total). Cards vary slightly in size — the top-left card is wider (spans 2 columns), creating an asymmetric bento layout. Other cards are equal-sized grid cells.

CARD STYLE:
- Background: #18181B
- Border: 1px solid rgba(255,255,255,0.06)
- Border-radius: 12px
- Padding: 24px
- Each card has:
  1. A small icon (24px, outline style, #C8FF00 color) — e.g., barcode scanner, chat bubble, location pin, trophy, box, bell.
  2. Title: 18px, white, Outfit font, weight 500.
  3. One-line description: 14px, #A1A1AA.
- NO shadow on cards. NO glow. NO gradient fills.
- On hover (show one card in hover state): border-color changes to rgba(255,255,255,0.12), card shifts up 2px (translateY).

CARD CONTENTS:
1. "AI Barcode Scanning" — "Scan any product instantly with your camera."
2. "WhatsApp Integration" — "Send payment reminders and updates via WhatsApp."
3. "Multi-Location Support" — "Manage multiple gym branches from one dashboard."
4. "Gamification" — "Badges, streaks, and leaderboards to boost retention."
5. "Inventory Management" — "Track supplements, merch, and equipment in real time."
6. "Smart Notifications" — "Automated alerts for renewals, payments, and attendance."

COLORS: #09090B (background), #18181B (card bg), #FAFAFA (heading text), #A1A1AA (body text), #C8FF00 (icons, accent).

DO NOT include: box-shadows, glow effects, gradient text, background gradients, or any decorative elements.
```

---

### STITCH PROMPT 4: Landing Page — Testimonial + CTA

```
Design a testimonial section followed by a CTA banner for a dark-themed SaaS website called "GymCave".

STYLE: Ultra-minimal. Dark background #09090B. No shadows, no glows, no gradients on text. Clean and spacious.

TESTIMONIAL SECTION:
- Centered layout with generous whitespace (120px+ vertical padding).
- Large decorative quotation mark " in #C8FF00 at ~48px size, positioned above the quote.
- Quote text: "GymCave replaced 4 different tools we were using. Now everything is in one place and our team saves hours every week." — 22px, Inter font, weight 400, white #FAFAFA, max-width 600px, centered, line-height 1.6.
- Attribution below: "Rahul Sharma" (bold, white) / "Owner, FitZone Gym, Mumbai" (14px, #52525B muted).
- No card background. No border. Just text floating on the dark background.

CTA BANNER SECTION (below testimonial, separated by 96px+ spacing):
- Background: #111113 (slightly lighter dark).
- Subtle dot-grid pattern at 3% opacity.
- Noise texture overlay at 2%.
- Top border: 1px solid rgba(255,255,255,0.06).
- Centered content:
  - Headline: "Ready to modernize your gym?" — 40px, Outfit 600, white.
  - Subtext: "Join 500+ gym owners already using GymCave." — 16px, #A1A1AA.
  - Button: "Start Free Trial →" — solid #C8FF00 background, black text, 8px radius, no shadow.
- Generous padding (96px top/bottom).

COLORS: #09090B, #111113, #FAFAFA, #A1A1AA, #52525B, #C8FF00.

DO NOT include: gradient text, box-shadows, glow effects, or any decorative elements.
```

---

### STITCH PROMPT 5: Features Page — Full Page

```
Design a full features page for a gym management SaaS product called "GymCave".

STYLE: Minimal dark theme, #09090B background. No shadows, no glows, no gradient text. Clean, inspired by Linear.app features page.

PAGE SECTIONS:

SECTION 1 — HERO (top):
- Center-aligned, generous padding (~160px top).
- Overline: "FEATURES" — 13px, #C8FF00, uppercase, letter-spacing 0.08em.
- Headline: "Everything your gym needs. Nothing it doesn't." — 52px, Outfit 700, white.
- Subheadline: "From member management to AI-powered inventory." — 18px, #A1A1AA.
- HORIZONTAL TAB BAR below: 6 pill-shaped tabs in a row.
  - Tabs: "CRM & Members" | "Payments" | "Inventory" | "Workouts" | "Analytics" | "Notifications"
  - Active tab: #C8FF00 background, black text, 999px radius (pill).
  - Inactive tabs: #18181B background, #A1A1AA text, 1px border rgba(255,255,255,0.06), pill shape.

SECTION 2 — FEATURE DETAIL (below tabs):
- Two-column layout.
- Left: Feature title, description, bullet list with check icons in #C8FF00.
- Right: 3D phone mockup with relevant app screenshot inside, slightly tilted.

SECTION 3 — COMPARISON TABLE:
- Title: "How GymCave stacks up" — centered.
- Table with columns: Feature | GymCave | Competitor A | Competitor B.
- GymCave column has #C8FF00 top border highlight.
- Rows: clean alternating backgrounds (#111113 / #09090B).
- Checkmarks in #C8FF00 for GymCave, muted gray for competitors.
- Table has 1px border, 12px border-radius, overflow hidden.

SECTION 4 — INTEGRATIONS:
- Title: "Works with tools you already use" — centered.
- Grid of 6 integration icons in rounded-square containers (48px, #18181B bg, 1px border, 8px radius).
- Integration names below: Firebase, Stripe, WhatsApp, Google Calendar, Razorpay, Twilio.

COLORS & RULES: #09090B background, #111113 alternating, #18181B cards, #FAFAFA text, #A1A1AA secondary, #C8FF00 accent. NO shadows, NO glows, NO gradient text, NO decorative shapes.
```

---

### STITCH PROMPT 6: Pricing Page

```
Design a pricing page for a gym management SaaS product called "GymCave".

STYLE: Minimal dark theme, #09090B background. No shadows, no glows, no gradient text. Clean, inspired by Linear and Vercel pricing pages.

SECTION 1 — HERO:
- Center-aligned.
- Overline: "PRICING" — 13px, #C8FF00, uppercase.
- Headline: "Simple pricing. Zero surprises." — 52px, Outfit 700, white.
- Subheadline: "Flat monthly fee. No per-member charges. No hidden costs." — 18px, #A1A1AA.

SECTION 2 — PRICING CARDS:
- Two cards side by side, centered, max-width ~800px total.
- Card style: #18181B background, 1px solid rgba(255,255,255,0.06) border, 16px border-radius, 32px padding. NO shadow.

Card 1 (left) — "Monthly Subscription":
- Label: "STANDARD" pill badge, #18181B bg, 1px border, muted text.
- Price: "₹999" large (48px, Outfit 700, white) + "/month" suffix (16px, #A1A1AA).
- Description: "Everything you need to run a single gym." — 14px, #A1A1AA.
- Feature list (6 items) with check icons in #C8FF00.
- Button: "Start Free Trial" — ghost style, 1px border, white text.

Card 2 (right) — "Hybrid License" (recommended):
- Highlight: top border 2px solid #C8FF00.
- Label: "RECOMMENDED" pill badge, #C8FF00 background, black text.
- Price: "₹14,999" large + " one-time" suffix, then below "+ ₹499/month" secondary.
- Description: "Own the software. Lower monthly costs forever." — 14px, #A1A1AA.
- Feature list (8 items) with check icons in #C8FF00.
- Button: "Get Started →" — primary style, #C8FF00 bg, black text.

SECTION 3 — FAQ:
- Title: "Common questions" — centered, 36px.
- Accordion items (5-6) with question on left, chevron on right. Bottom border per item. One item shown expanded with answer visible.

COLORS: #09090B, #18181B, #FAFAFA, #A1A1AA, #52525B, #C8FF00. NO shadows, NO glows.
```

---

### STITCH PROMPT 7: About Page

```
Design an about page for a gym management SaaS startup called "GymCave".

STYLE: Minimal dark theme, #09090B background. No shadows, no glows, no gradient text. Clean, modern, inspired by Linear/Vercel about pages.

SECTION 1 — HERO:
- Center-aligned, 50vh min height, dot-grid background.
- Overline: "ABOUT US" — 13px, #C8FF00.
- Headline: "We're building the future of gym management." — 52px, Outfit 700, white.
- Subheadline: "A team of fitness enthusiasts and engineers on a mission to modernize how gyms operate." — 18px, #A1A1AA, max-width 560px.

SECTION 2 — VALUES (3-column grid):
- Three cards in a row.
- Each card: #18181B bg, 1px border, 12px radius, 24px padding. Contains:
  - Icon (24px outline, #C8FF00) — target, zap, eye icons.
  - Title: "Simplicity" / "Speed" / "Transparency" — 20px, white, Outfit 500.
  - Description: one sentence, 14px, #A1A1AA.

SECTION 3 — TIMELINE:
- Vertical timeline. Thin line (1px, rgba(255,255,255,0.06)) runs down center.
- 5 milestone nodes along the line, alternating left and right content.
- Active node: 8px circle filled #C8FF00.
- Past nodes: 8px circle, border only, #52525B.
- Content per node: Year/date label (bold, white) + brief description (#A1A1AA).

SECTION 4 — TEAM:
- 3-column grid of team member cards.
- Each: circular photo (80px, 1px border ring), name (bold, white, 18px), role (#A1A1AA, 14px).
- No card background — just photo + text on #09090B.

SECTION 5 — TECH STACK:
- Title: "Built with modern tools" — centered.
- Grid of tech logos in rounded containers (similar to integrations style).

COLORS: #09090B, #111113, #18181B, #FAFAFA, #A1A1AA, #52525B, #C8FF00. NO shadows, NO glows, NO decorative elements.
```

---

### STITCH PROMPT 8: Impact Page

```
Design an impact/results page for a gym management SaaS product called "GymCave".

STYLE: Minimal dark theme, #09090B background. No shadows, glows, or gradient text. Clean and data-driven.

SECTION 1 — HERO:
- Center-aligned.
- Overline: "THE GYMCAVE IMPACT" — 13px, #C8FF00.
- Headline: "Legacy software is holding your gym back." — 52px, Outfit 700, white.
- Subheadline: "See the difference a modern platform makes." — 18px, #A1A1AA.

SECTION 2 — BEFORE/AFTER COMPARISON:
- Two-column split view.
- Left panel: "Before GymCave" header. Background slightly reddish-tinted (#1A1111). 4 pain points listed with X icons in muted red.
- Right panel: "With GymCave" header. Background normal #111113 with subtle #C8FF00 accent. 4 benefits listed with check icons in #C8FF00.
- Each side: 1px border, 12px radius, 32px padding.
- Items: "Manual registers" → "Digital everything", "Missed payments" → "Auto-reminders", etc.

SECTION 3 — METRICS ROW:
- 4 large stat blocks in a row, centered.
- Each stat: large number (48px, Outfit 700, white) + label below (14px, #A1A1AA).
- Stats: "500+" / "50K+" / "₹2Cr+" / "99.9%"
- Labels: "Gym Owners" / "Members Managed" / "Revenue Processed" / "Uptime"
- No card backgrounds — just numbers floating on #09090B.

SECTION 4 — CTA:
- Same CTA banner as homepage: #111113 bg, dot-grid, "Ready to modernize your gym?" headline, lime CTA button.

COLORS: #09090B, #111113, #1A1111 (before panel), #18181B, #FAFAFA, #A1A1AA, #C8FF00.
```

---

### STITCH PROMPT 9: Contact Page

```
Design a contact page for a gym management SaaS product called "GymCave".

STYLE: Minimal dark theme, #09090B background. No shadows, no glows, no gradient text.

SECTION 1 — HERO:
- Compact, 40vh.
- Overline: "CONTACT" — 13px, #C8FF00.
- Headline: "Let's talk about your gym." — 44px, Outfit 700, white.
- Subheadline: "Have questions? Want a demo? We're here." — 18px, #A1A1AA.

SECTION 2 — CONTACT FORM (two-column):
- Left (60%): Form with fields:
  - Full Name, Email, Phone Number, Gym Name — each input: #18181B background, 1px border rgba(255,255,255,0.06), 8px radius, white text, placeholder #52525B.
  - Focus state: border-color #C8FF00.
  - Message textarea: same style, taller.
  - Submit button: "Send Message →" — #C8FF00 bg, black text, 8px radius.

- Right (40%): Info card.
  - Background: #111113, 1px border, 12px radius.
  - Contains: Email (hello@gymcave.in), Phone, Office Address.
  - Social links row: GitHub, Twitter, LinkedIn icons (outline, 20px, #A1A1AA, hover #FAFAFA).

SECTION 3 — FAQ:
- Same accordion pattern as pricing page.
- 4-5 questions about getting started, pricing, data migration, support.

COLORS: #09090B, #111113, #18181B, #FAFAFA, #A1A1AA, #52525B, #C8FF00. NO shadows, NO glows.
```

---

### STITCH PROMPT 10: Navbar & Footer (Global)

```
Design a navbar and footer for a dark-themed SaaS website called "GymCave".

STYLE: Minimal, dark, no shadows, no glows. Inspired by Linear.app and Vercel navigation.

NAVBAR:
- Fixed at top, full-width, 56px height.
- Background: transparent when at top of page, becomes rgba(9,9,11,0.8) with backdrop-filter blur(12px) after user scrolls.
- Bottom border appears on scroll: 1px solid rgba(255,255,255,0.06).
- Layout: Logo (left) | Navigation links (center) | CTA button (right).
- Logo: Simple SVG mark, 24px height.
- Nav links: "Home" | "Features" | "Impact" | "Pricing" | "About" | "Contact" — 14px, Inter 400, #A1A1AA, hover: #FAFAFA with underline wipe animation.
- Active link: #FAFAFA with 2px bottom indicator in #C8FF00.
- CTA: "Get Started" — compact, #C8FF00 bg, black text, 6px 16px padding, 6px radius.

FOOTER:
- Background: #111113, top border 1px solid rgba(255,255,255,0.06).
- 4-column grid:
  - Column 1 "Product": Home, Features, Pricing, Impact.
  - Column 2 "Company": About, Blog, Careers.
  - Column 3 "Resources": Documentation, Changelog, Status.
  - Column 4 "Legal": Privacy Policy, Terms of Service.
- Column headers: 13px, uppercase, #52525B, letter-spacing 0.08em.
- Links: 14px, #A1A1AA, hover: #FAFAFA.
- Bottom bar: Logo + "© 2026 GymCave" on left, social icons on right.
- Padding: 64px top, 32px bottom.

COLORS: #09090B, #111113, #FAFAFA, #A1A1AA, #52525B, #C8FF00. NO shadows, NO glows.
```

---

## 13. Implementation Roadmap

### Phase 1: Design in Stitch (Week 1)
1. Generate all 10 Stitch prompts above to get visual mockups
2. Review and iterate on each page design
3. Finalize the design system tokens based on Stitch outputs
4. Collect and prepare all app screenshots for 3D mockups

### Phase 2: Foundation (Week 2)
1. Overhaul `globals.css` with the new design tokens (remove all shadows, glows, gradients)
2. Rebuild Navbar and Footer components
3. Create the 3D Phone Mockup component with CSS transforms
4. Set up GSAP ScrollTrigger infrastructure

### Phase 3: Landing Page (Week 2-3)
1. Rebuild Hero section with 3D phone mockup
2. Implement sticky-scroll Feature Showcase with ScrollTrigger
3. Rebuild Bento Grid cards
4. Implement Testimonial and CTA sections
5. Polish all scroll animations

### Phase 4: Inner Pages (Week 3-4)
1. Features page with tab system and phone mockup
2. Pricing page with comparison cards and FAQ
3. About page with timeline animation and team grid
4. Impact page with before/after split and counting metrics
5. Contact page with form and info panel

### Phase 5: Polish & QA (Week 4)
1. Animation timing and easing refinement
2. Mobile responsiveness audit for all pages
3. Performance optimization (lazy loading, scroll optimization)
4. Cross-browser testing
5. Accessibility audit (reduced motion, keyboard nav, contrast)

---

## Summary of Key Differences: Current vs. New

| Aspect | Current | New |
|---|---|---|
| Text effects | Gradient text, glow | Solid flat white only |
| Shadows | box-shadow on cards | None — border-only cards |
| Background | Multi-point gradients | Solid flat + noise + dot-grid |
| Mockups | Hand-coded fake UI divs | Real app screenshots in 3D phone frames |
| Animations | Basic fade-in | Scroll-driven: sticky, parallax, scrub, stagger |
| Feature showcase | Static two-column | Sticky-scroll with phone screenshot swaps |
| Overall feel | Heavy, decorative | Minimal, confident, Linear-level polish |

---

*This document serves as the complete design specification for the GymCave website redesign. Use the Stitch prompts in Section 12 to generate visual mockups, then implement following the roadmap in Section 13.*
