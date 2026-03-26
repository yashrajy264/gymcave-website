# 🏋️ GymCave — Website Design System & UI/UX Blueprint

> A premium, Awwwards-caliber marketing website for the GymCave gym management platform.  
> Built with **Next.js 14 (App Router)** + **React 18** + **Framer Motion** + **GSAP**

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Design Tokens](#design-tokens)
3. [Typography System](#typography-system)
4. [Component Library](#component-library)
5. [Page Blueprints](#page-blueprints)
6. [Micro-Interactions & Animation System](#micro-interactions--animation-system)
7. [Responsive Strategy](#responsive-strategy)
8. [Tech Stack & Architecture](#tech-stack--architecture)

---

## Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Dark-First Luxury** | Midnight Void (#0A0A0F) backgrounds with Electric Lime (#C8FF00) accents — premium, energetic, tech-forward |
| **Kinetic Storytelling** | Every scroll, hover, and click triggers purposeful animation — the site *breathes* |
| **Brutalist Minimalism** | Large whitespace, oversized typography, asymmetric grids — confident and editorial |
| **Performance-Obsessed** | Sub-2s LCP, smooth 60fps animations, progressive image loading |
| **Accessibility** | WCAG 2.1 AA compliance, keyboard navigation, reduced-motion support |

### Visual Mood

Think: **Apple.com** meets **Nike Training** meets **Linear.app** — dark, cinematic, with explosive accent pops.

---

## Design Tokens

### Color Palette

#### 🌙 Dark Theme (Primary — Default)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-void` | `#0A0A0F` | Page background |
| `--bg-carbon` | `#12121A` | Card/section backgrounds |
| `--bg-elevated` | `#1A1A26` | Elevated surfaces, modals |
| `--bg-subtle` | `#222232` | Input fields, code blocks |
| `--accent-lime` | `#C8FF00` | Primary CTA, interactive highlights |
| `--accent-lime-glow` | `rgba(200,255,0,0.15)` | Glow effects, hover states |
| `--accent-lime-muted` | `#A3CC00` | Secondary accent text |
| `--urgency-orange` | `#FF6B35` | Alerts, warnings, badges |
| `--text-primary` | `#FFFFFF` | Headings, primary content |
| `--text-secondary` | `#A0A0B8` | Body text, descriptions |
| `--text-muted` | `#6B6B80` | Captions, labels |
| `--border-default` | `rgba(255,255,255,0.06)` | Card borders, dividers |
| `--border-hover` | `rgba(200,255,0,0.2)` | Interactive border states |
| `--gradient-hero` | `linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #1A0A2E 100%)` | Hero section |
| `--gradient-cta` | `linear-gradient(135deg, #C8FF00 0%, #A3CC00 100%)` | CTA buttons |
| `--gradient-glow` | `radial-gradient(600px circle, rgba(200,255,0,0.06), transparent 70%)` | Cursor glow |

#### ☀️ Light Theme (Toggle)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-snow` | `#FAFAFA` | Page background |
| `--bg-white` | `#FFFFFF` | Cards |
| `--accent-fern` | `#66C40E` | Primary CTA |
| `--accent-mint` | `#94FF69` | Highlights |
| `--urgency-lobster` | `#EC5353` | Alerts |
| `--text-primary-light` | `#0A0A0F` | Headings |
| `--text-secondary-light` | `#4A4A5A` | Body |

### Spacing Scale (8px grid)

| Token | Value |
|-------|-------|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `48px` |
| `--space-8` | `64px` |
| `--space-9` | `96px` |
| `--space-10` | `128px` |
| `--space-hero` | `160px` |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Small inputs, badges |
| `--radius-md` | `12px` | Cards, buttons |
| `--radius-lg` | `20px` | Large cards, modals |
| `--radius-xl` | `28px` | Feature cards |
| `--radius-pill` | `999px` | Navbar, pill buttons, tags |
| `--radius-circle` | `50%` | Avatars, icons |

### Shadows & Effects

| Token | Value |
|-------|-------|
| `--shadow-card` | `0 4px 24px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)` |
| `--shadow-elevated` | `0 8px 48px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)` |
| `--shadow-glow-lime` | `0 0 40px rgba(200,255,0,0.15), 0 0 80px rgba(200,255,0,0.05)` |
| `--blur-glass` | `backdrop-filter: blur(16px) saturate(180%)` |
| `--noise-overlay` | `url('/noise.svg') — subtle grain texture` |

### Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary easing |
| `--ease-in-out-quart` | `cubic-bezier(0.76, 0, 0.24, 1)` | Page transitions |
| `--duration-fast` | `150ms` | Hover states |
| `--duration-normal` | `300ms` | Modals, menus |
| `--duration-slow` | `600ms` | Page transitions |
| `--duration-cinematic` | `1200ms` | Hero reveals |

---

## Typography System

### Font Stack

```css
--font-heading: 'Outfit', system-ui, sans-serif;  /* Geometric, bold, energetic */
--font-body: 'Inter', system-ui, sans-serif;        /* Clean, readable */
--font-mono: 'JetBrains Mono', monospace;            /* Code, stats */
```

### Type Scale

| Level | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Usage |
|-------|------|-----------------|----------------|--------|-------------|----------------|-------|
| **Display** | Outfit | `clamp(72px, 8vw, 120px)` | 48px | 800 | 0.95 | `-0.03em` | Hero headlines |
| **H1** | Outfit | `clamp(48px, 5vw, 72px)` | 36px | 700 | 1.05 | `-0.025em` | Section titles |
| **H2** | Outfit | `clamp(36px, 3.5vw, 48px)` | 28px | 600 | 1.1 | `-0.02em` | Subsections |
| **H3** | Outfit | `24px` | 20px | 600 | 1.2 | `-0.01em` | Card titles |
| **H4** | Outfit | `20px` | 18px | 500 | 1.3 | `0` | Labels |
| **Body LG** | Inter | `18px` | 16px | 400 | 1.7 | `0` | Hero paragraphs |
| **Body** | Inter | `16px` | 15px | 400 | 1.65 | `0` | General content |
| **Body SM** | Inter | `14px` | 13px | 400 | 1.6 | `0.01em` | Captions |
| **Overline** | Inter | `12px` | 11px | 600 | 1.4 | `0.12em` | Labels, pill tags |
| **Stat** | JetBrains Mono | `clamp(48px, 5vw, 80px)` | 36px | 700 | 1.0 | `-0.02em` | Large numbers |

---

## Component Library

### 1. Pill Navbar

```
┌──────────────────────────────────────────────────────────────┐
│ ○ GYMCAVE        Landing   About   Features   Contact   [☀/🌙] │
└──────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| **Shape** | Pill (`border-radius: 999px`) |
| **Position** | Fixed top, centered horizontally |
| **Width** | `max-width: 720px` (desktop), full-width with margin on mobile |
| **Height** | `56px` |
| **Background** | `rgba(10,10,15,0.7)` + `backdrop-filter: blur(16px) saturate(180%)` |
| **Border** | `1px solid rgba(255,255,255,0.06)` |
| **Margin Top** | `16px` from viewport top |
| **Logo** | "GYMCAVE" in Outfit 700, Electric Lime, left-aligned |
| **Nav Links** | Inter 500, 14px, `--text-secondary`, uppercase tracking `0.08em` |
| **Active Link** | Lime pill background `rgba(200,255,0,0.12)`, lime text |
| **Hover** | Link text transitions to white, subtle underline slide-in |
| **Theme Toggle** | Small circle button, 32px, toggles sun/moon icon with rotation animation |
| **Mobile** | Collapses to hamburger → full-screen overlay with staggered link reveal |
| **Scroll Behavior** | Subtle background opacity increase on scroll, slight scale-down to 95% width |

### 2. Buttons

#### Primary CTA
- Background: `--gradient-cta`
- Text: `#0A0A0F` (dark on lime), Outfit 600, 15px
- Padding: `16px 32px`
- Border-radius: `--radius-pill`
- Hover: Scale 1.03, shadow glow, slight gradient shift
- Press: Scale 0.97, shadow inset
- Icon: Optional arrow `→` with translate-x animation on hover

#### Secondary
- Background: transparent
- Border: `1px solid rgba(255,255,255,0.15)`
- Text: `--text-primary`, Inter 500
- Hover: Border color → lime, text → lime, subtle bg fill

#### Ghost
- Background: transparent, no border
- Text: `--text-secondary`
- Hover: Text → white, underline slide-in from left

### 3. Feature Cards

```
┌─────────────────────────────────────┐
│  ⬡ [Icon with lime glow]           │
│                                     │
│  CRM & Members                      │
│  Comprehensive member management,   │
│  lead tracking, and profiles.       │
│                                     │
│  Learn more →                       │
└─────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `--bg-carbon` with subtle noise overlay |
| Border | `1px solid --border-default` |
| Border-radius | `--radius-xl` (28px) |
| Padding | `40px` |
| Icon | 48px, Lime accent, floating glow effect |
| Hover | Border → `--border-hover`, translate-y `-4px`, shadow glow |
| Hover BG | Subtle gradient shift with cursor-tracking radial glow |
| "Learn more" | Ghost link with arrow slide |

### 4. Stat Counter

```
┌──────┐  ┌──────┐  ┌──────┐
│ 500+ │  │ 10K+ │  │ 99%  │
│ Gyms │  │Users │  │Uptime│
└──────┘  └──────┘  └──────┘
```

- Number: JetBrains Mono, stat size, lime color
- Animated count-up on scroll intersection
- Label: Inter 14px, text-secondary

### 5. Form Components

#### Text Input
- Height: `52px`
- Background: `--bg-subtle`
- Border: `1px solid --border-default`
- Border-radius: `--radius-md`
- Focus: Border → lime, lime glow shadow, floating label animation
- Error: Border → orange, shake animation
- Label: Floating label pattern — starts as placeholder, animates up on focus

#### Select / Dropdown
- Custom styled, matches input aesthetic
- Open animation: Scale-y from 0 with stagger on options

#### Textarea
- Min height: `120px`, auto-expand
- Character counter with lime accent

#### Submit Button
- Full primary CTA style
- Loading: Spinner with lime trail animation
- Success: Checkmark morph from spinner

### 6. Section Dividers

- Subtle gradient line: `linear-gradient(90deg, transparent, rgba(200,255,0,0.2), transparent)`
- Optional: Animated particle line using canvas

### 7. Badges / Tags

- Pill shape, `--radius-pill`
- Background: `rgba(200,255,0,0.08)`
- Text: Lime, Overline size, uppercase
- Border: `1px solid rgba(200,255,0,0.15)`

---

## Page Blueprints

---

### 📄 Page 1: Landing (Home)

**Goal:** Instant "wow", communicate the product's value in 5 seconds, drive sign-ups.

#### Section 1: Hero
```
┌─────────────────────────────────────────────────────────────────┐
│                        [Pill Navbar]                            │
│                                                                 │
│                                                                 │
│           The Future of                                         │
│           Gym Management.                                       │
│                                                                 │
│     One powerful platform to manage members,                    │
│     track payments, and grow your fitness empire.               │
│                                                                 │
│     [Get Started →]  [Watch Demo ▶]                             │
│                                                                 │
│                    ┌──────────────────┐                          │
│                    │  App Mockup with │                          │
│                    │  3D tilt effect  │                          │
│                    └──────────────────┘                          │
│                                                                 │
│     ●●● Trusted by 500+ Gym Owners Worldwide ●●●               │
│     [Logo Marquee — partner/gym logos scrolling]                 │
└─────────────────────────────────────────────────────────────────┘
```

- **Background**: `--gradient-hero` with animated grain noise overlay
- **Cursor**: Custom glow follows mouse (`--gradient-glow`)
- **Headline Animation**: Split text, letters stagger-in from below with blur-fade
- **Subtitle**: Fade-in with 200ms delay after headline
- **CTAs**: Scale-in with spring easing, 400ms delay
- **App Mockup**: 3D perspective tilt on mouse-move, floating shadow
- **Logo Marquee**: Infinite CSS scroll, grayscale → color on hover

#### Section 2: Social Proof Stats

```
┌───────────────────────────────────────────────┐
│    500+          10,000+         99.9%         │
│  Gyms Powered   Active Members   Uptime       │
└───────────────────────────────────────────────┘
```

- Scroll-triggered count-up animation
- Lime accent on numbers
- Divider lines between stats

#### Section 3: Feature Highlights (Bento Grid)

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│   CRM & Members      │   Transactions       │
│   [Large Card]       │   [Large Card]       │
│                      │                      │
├────────────┬─────────┴──────────┬───────────┤
│            │                    │           │
│  Inventory │   Workout Track    │ Analytics │
│  [Small]   │   [Medium]        │ [Small]   │
│            │                    │           │
└────────────┴────────────────────┴───────────┘
```

- **Bento Grid Layout**: CSS Grid with varying card sizes
- **Scroll Animation**: Cards stagger-in from bottom with intersection observer
- **Card Hover**: Cursor-tracking radial gradient glow, border highlight
- **Each card**: Icon, title, 2-line description, "Learn more →"

#### Section 4: Product Showcase

- Large app screenshot/mockup (full-width, edge-to-edge)
- Parallax scroll effect — image moves slower than content
- Overlay gradient from bottom for text readability
- Caption: "Designed for the daily grind." — Outfit H2

#### Section 5: Testimonials

```
┌─────────────────────────────────────┐
│  "GymCave transformed how we        │
│   manage our 3 locations."          │
│                                     │
│  — Sarah K., FitZone Owner          │
│  ⭐⭐⭐⭐⭐                            │
└─────────────────────────────────────┘
```

- Horizontal scroll carousel
- Auto-play with pause on hover
- Glassmorphic card backgrounds
- Star rating in lime

#### Section 6: CTA Banner

```
┌─────────────────────────────────────────┐
│                                         │
│    Ready to Transform Your Gym?         │
│    Start your free trial today.         │
│                                         │
│    [Get Started — It's Free →]          │
│                                         │
└─────────────────────────────────────────┘
```

- Full-width, gradient mesh background with animated blobs
- Large Outfit heading
- Single primary CTA
- Floating gym equipment illustrations (subtle)

#### Footer

```
┌─────────────────────────────────────────────────────┐
│  GYMCAVE           Features    About    Contact      │
│                    Pricing     Blog     Support      │
│                                                     │
│  © 2026 GymCave   Privacy  Terms  [Social Icons]    │
└─────────────────────────────────────────────────────┘
```

- Dark background (`--bg-carbon`)
- 4-column grid → stacked on mobile
- Social icons with hover color-fill animation
- Subtle top-border gradient

---

### 📄 Page 2: About

**Goal:** Build trust, tell the story, humanize the brand.

#### Section 1: Hero — Mission Statement
```
┌──────────────────────────────────────────────────┐
│                                                  │
│   We're building the operating                   │
│   system for modern gyms.                        │
│                                                  │
│   Born from the frustration of spreadsheets      │
│   and sticky notes. Built for the future.        │
│                                                  │
│   [Animated illustration: gym timeline]          │
│                                                  │
└──────────────────────────────────────────────────┘
```

- Cinematic text reveal with scroll-based parallax
- Animated SVG illustration
- Background: subtle gradient mesh

#### Section 2: Our Values (3 columns)

```
┌──────────┬──────────┬──────────┐
│ 🎯       │ 💡       │ 🤝       │
│ Simplify │ Innovate │ Empower  │
│ Complex  │ Daily    │ Fitness  │
│ (desc)   │ (desc)   │ (desc)   │
└──────────┴──────────┴──────────┘
```

- Glassmorphic cards
- Icon pulse animation on hover
- Stagger-in on scroll

#### Section 3: Timeline / Story

- Vertical timeline with alternating left/right content
- Scroll-triggered node activation (lime dot animation)
- Key milestones with dates

#### Section 4: Team Grid

- 2×3 grid of team member cards
- Hover: Card lifts, reveals social links + role
- Circular avatar with lime ring border
- Name in Outfit, role in Inter muted

#### Section 5: Tech Stack Showcase

- Horizontal scroll of tech logos (Flutter, Firebase, Next.js, etc.)
- Glassmorphic badge style
- Subtle floating animation

---

### 📄 Page 3: Features

**Goal:** Deep-dive into every feature module. Convince with detail.

#### Section 1: Hero

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   Everything Your Gym Needs.                     │
│   Nothing It Doesn't.                            │
│                                                  │
│   [Pill tabs: CRM | Payments | Inventory |       │
│    Workouts | Analytics | Notifications]         │
│                                                  │
└──────────────────────────────────────────────────┘
```

- Pill-shaped tab navigation for feature categories
- Tabs have active state with lime fill
- Content below transitions with crossfade animation

#### Section 2: Feature Deep-Dive (per tab)

```
┌──────────────────────────────────────────────────┐
│  ┌─────────────────┐                             │
│  │   App Screenshot │   CRM & Members            │
│  │   (interactive   │                             │
│  │    3D mockup)    │   • Member profiles         │
│  │                  │   • Lead tracking            │
│  │                  │   • Custom tags              │
│  │                  │   • Smart search             │
│  └─────────────────┘                             │
│                       [Try It Free →]             │
└──────────────────────────────────────────────────┘
```

- Split layout: 50/50 image + content
- Image has tilt/parallax effect
- Feature list items stagger-in with checkmark icons (lime)
- Alternating left/right per section

#### Section 3: Feature Comparison Grid

| Feature | GymCave | Competitor A | Competitor B |
|---------|---------|-------------|-------------|
| AI Scanning | ✅ | ❌ | ❌ |
| Real-time Analytics | ✅ | ⚠️ | ✅ |
| Payment Reminders | ✅ | ✅ | ❌ |

- Styled table with lime checkmarks
- Sticky header on scroll
- Hover row highlight

#### Section 4: Integration Ecosystem

- Grid of integration logos (Firebase, Stripe, WhatsApp, etc.)
- Animated connection lines between them (SVG)
- Central GymCave logo with pulse ring

---

### 📄 Page 4: Contact / Forms

**Goal:** Convert interest into leads. Accessible and trustworthy.

#### Section 1: Hero

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   Let's Get You Started.                         │
│                                                  │
│   Have questions? Want a demo?                   │
│   We'll get back within 24 hours.                │
│                                                  │
└──────────────────────────────────────────────────┘
```

#### Section 2: Contact Form (Full)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   Full Name          [________________]          │
│   Email              [________________]          │
│   Gym Name           [________________]          │
│   Subject            [▼ Dropdown_____]           │
│   Message            [                ]          │
│                      [                ]          │
│                      [________________]          │
│                                                  │
│   [Send Message →]                               │
│                                                  │
│   ✉ hello@gymcave.app                            │
│   📍 Bengaluru, India                            │
│                                                  │
└──────────────────────────────────────────────────┘
```

- Split layout: Form left (60%), Info right (40%)
- **Floating labels**: Placeholder → label animation on focus
- **Inline validation**: Real-time, with green check / orange error
- **Submit**: Loading spinner → success checkmark morph
- **Success state**: Form slides out, "Thank you!" message slides in with confetti burst
- Right side: Contact info, social links, embedded map (optional)

#### Section 3: FAQ Accordion

```
┌──────────────────────────────────────────────────┐
│  ▶ How much does GymCave cost?                   │
│  ▼ Is my data secure?                            │
│     Yes, all data is encrypted and stored on     │
│     enterprise-grade Firebase infrastructure...  │
│  ▶ Can I migrate from another platform?          │
│  ▶ Do you offer training?                        │
└──────────────────────────────────────────────────┘
```

- Animated expand/collapse with height transition
- Rotate chevron icon
- Only one open at a time (accordion pattern)
- Lime accent on active item

---

## Micro-Interactions & Animation System

### Global Animations

| Animation | Trigger | Effect | Duration |
|-----------|---------|--------|----------|
| **Cursor Glow** | Mouse move (desktop) | Radial gradient follows cursor | Continuous |
| **Scroll Reveal** | IntersectionObserver (threshold: 0.2) | Fade-up + translate(0, 30px→0) | 600ms |
| **Stagger Children** | Parent enters viewport | Children animate sequentially with 80ms delay | 400ms each |
| **Parallax Layers** | Scroll position | Different scroll speeds per layer | Continuous |
| **Page Transition** | Route change | Crossfade with slight scale (0.98→1) | 500ms |
| **Smooth Scroll** | Anchor links | `scroll-behavior: smooth` + `lenis` library | Variable |
| **Text Split Reveal** | Section hero enters | Letters/words stagger from below with blur | 800ms |
| **Noise Grain** | Always on | Subtle CSS animated noise overlay texture | Infinite |

### Component Micro-Interactions

| Component | Interaction | Effect |
|-----------|-------------|--------|
| **Navbar** | Scroll down >100px | Background becomes more opaque, slight shrink |
| **Navbar** | Scroll up | Re-expands, background becomes more transparent |
| **Navbar Link** | Hover | Text color → white, underline slides in from left |
| **Primary Button** | Hover | Scale(1.03), glow shadow, arrow translates +4px |
| **Primary Button** | Click/Press | Scale(0.97), shadow inset |
| **Feature Card** | Hover | Border → lime, translate-y(-4px), cursor glow follows mouse on card |
| **Feature Card** | Mouse move | Radial gradient follows cursor position within card |
| **Stat Numbers** | Enter viewport | Count-up from 0 to target, eased (2s) |
| **Form Input** | Focus | Border → lime, floating label rises, lime glow |
| **Form Input** | Error | Shake animation (3 cycles, 4px), border → orange |
| **Form Submit** | Loading | Button text fades, spinner appears with lime trail |
| **Form Submit** | Success | Spinner morphs to checkmark, button bg → green flash |
| **FAQ Accordion** | Click | Height transition 300ms, chevron rotates 180° |
| **Logo Marquee** | Always | Infinite horizontal scroll, 30s per loop |
| **Theme Toggle** | Click | Icon rotates 360°, smooth color scheme crossfade (300ms) |
| **Scroll-to-top** | Appears >500px scroll | Fade-in, bounces slightly, lime circle |
| **Image Mockup** | Mouse move | 3D perspective tilt (max 8°), floating shadow adjusts |
| **Timeline Node** | Scroll intersect | Dot scales from 0→1, line draws downward |

### Animation Libraries Strategy

| Library | Usage |
|---------|-------|
| **Framer Motion** | Component animations, page transitions, gesture handlers, layout animations |
| **GSAP + ScrollTrigger** | Complex scroll-based animations, text splitting, timeline sequences |
| **Lenis** | Smooth scroll engine (replaces native scroll) |
| **CSS @keyframes** | Simple loops (marquee, pulse, grain noise, float) |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Responsive Strategy

### Breakpoints

| Name | Min-Width | Max-Width | Target |
|------|-----------|-----------|--------|
| **Mobile S** | `0px` | `374px` | Small phones |
| **Mobile** | `375px` | `767px` | Standard phones |
| **Tablet** | `768px` | `1023px` | iPad, tablets |
| **Desktop** | `1024px` | `1439px` | Laptops |
| **Desktop L** | `1440px` | `1919px` | Standard monitors |
| **Desktop XL** | `1920px` | — | Ultrawide |

### Layout Rules

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Max Content Width** | `100% - 32px` | `720px` | `1200px` |
| **Navbar** | Full width, hamburger menu | Compact pill | Full pill, centered |
| **Hero Text** | 36px display, left-aligned | 48px, centered | `clamp(72px,8vw,120px)`, centered |
| **Feature Grid** | 1 column, stacked | 2 columns | Bento grid |
| **Stats** | Vertical stack | Horizontal, 3-col | Horizontal, 3-col with dividers |
| **Form Layout** | Full width, stacked | 2-col where possible | Split: form 60% / info 40% |
| **Footer** | 1 column, stacked | 2 columns | 4 columns |
| **Mockup Image** | Below text, smaller | Side by side, 50% | Side by side with tilt effect |
| **Typography** | Mobile scale | Fluid clamp mid | Desktop scale |

### Mobile-Specific Enhancements

- **Hamburger → Full-screen overlay menu** with staggered link animation
- **Swipeable** testimonial carousel (touch gestures)
- **Sticky CTA** bar at bottom on landing page (appears on scroll)
- **Optimized images**: WebP/AVIF with `srcSet` and `sizes`
- **Touch-friendly**: All interactive targets ≥ 44px
- **No cursor glow** on touch devices (performance)

---

## Tech Stack & Architecture

### Framework & Build

| Technology | Purpose |
|------------|---------|
| **Next.js 14** (App Router) | SSR, routing, API routes, SEO |
| **React 18** | Component architecture |
| **TypeScript** | Type safety |
| **Vanilla CSS** + CSS Modules | Styling (per design tokens) |
| **Framer Motion** | Component animations & gestures |
| **GSAP** + ScrollTrigger | Scroll-based animations |
| **Lenis** | Smooth scroll |
| **React Hook Form** + **Zod** | Form handling & validation |

### Project Structure

```
gymcave-website/
├── app/
│   ├── layout.tsx          # Root layout with navbar/footer
│   ├── page.tsx            # Landing page
│   ├── about/page.tsx      # About page
│   ├── features/page.tsx   # Features page
│   ├── contact/page.tsx    # Contact/Forms page
│   └── globals.css         # Design tokens + global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Pill navbar
│   │   ├── Footer.tsx      # Footer
│   │   └── PageTransition.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── Accordion.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTABanner.tsx
│   │   ├── Timeline.tsx
│   │   ├── FeatureDeepDive.tsx
│   │   └── ContactForm.tsx
│   └── effects/
│       ├── CursorGlow.tsx
│       ├── TextReveal.tsx
│       ├── CountUp.tsx
│       ├── Parallax.tsx
│       └── NoiseOverlay.tsx
├── hooks/
│   ├── useMousePosition.ts
│   ├── useInView.ts
│   └── useSmoothScroll.ts
├── lib/
│   ├── animations.ts       # GSAP/Framer presets
│   └── validation.ts       # Zod schemas
├── public/
│   ├── fonts/
│   ├── images/
│   └── noise.svg
└── types/
    └── index.ts
```

### Performance Targets

| Metric | Target |
|--------|--------|
| **LCP** | < 2.0s |
| **FID** | < 100ms |
| **CLS** | < 0.1 |
| **Lighthouse Performance** | > 90 |
| **Bundle Size** (gzipped) | < 150KB first load |

### SEO Strategy

- Dynamic `<title>` and `<meta>` per page via Next.js `metadata` API
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Structured data (JSON-LD) for Organization
- `sitemap.xml` and `robots.txt` auto-generated
- Open Graph + Twitter Card meta tags
- Optimized images with `next/image` + `alt` text

---

> **This design system is crafted to produce an Awwwards-caliber website — cinematic, kinetic, premium, and unforgettable.**
