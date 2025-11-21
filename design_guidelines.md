# Design Guidelines: Technology Solutions Provider Website

## Design Approach

**Reference-Based Approach** drawing inspiration from modern tech leaders like Linear, Stripe, and Vercel. The design prioritizes credibility, innovation showcase, and enterprise trust-building through clean, sophisticated layouts with strategic visual impact.

**Color Direction:** Blue/green gradients as specified, with professional, authoritative treatment.

## Typography System

**Font Families:**
- Primary: Inter or DM Sans (headings, UI elements)
- Secondary: System-ui fallback for body text
- Accent: Space Grotesk for technical/innovative callouts

**Hierarchy:**
- Hero Headline: 3.5rem (desktop) / 2.5rem (mobile), bold weight
- Section Headers: 2.5rem (desktop) / 1.875rem (mobile), semibold
- Service Card Titles: 1.5rem, medium weight
- Body Text: 1.125rem, regular weight with 1.75 line height
- CTAs: 1rem, medium weight, uppercase tracking

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy:**
- Full-width sections with inner max-w-7xl containers
- Section padding: py-24 (desktop) / py-16 (mobile)
- Consistent horizontal padding: px-6 (mobile) / px-8 (desktop)

## Core Sections

### 1. Hero Section (90vh)
**Layout:** Asymmetric two-column design
- Left column: Headline, brand statement, dual CTA buttons (primary + secondary)
- Right column: Large hero image showcasing AI/tech innovation (abstract tech visualization, digital transformation imagery, or AI concept art)
- Background: Subtle gradient overlay, no distracting patterns
- CTAs: Blurred background treatment for buttons placed over hero imagery

### 2. Navigation
**Sticky header** (h-20) with:
- Logo left-aligned
- Center-aligned navigation links (Home, About, Services, Solutions, Contact)
- Right-aligned CTA button
- Mobile: Hamburger menu with smooth slide-in drawer
- Implementation: Backdrop blur effect, subtle border-bottom

### 3. About Us Section
**Three-column grid layout:**
- Column 1: Company overview (max-w-prose)
- Column 2-3: Leadership highlights with avatar images, names, titles, brief bios
- Include trust indicators: Years in business, client count, projects delivered
- Background: Clean white/light with subtle geometric accent shapes

### 4. Services Section
**Grid Layout:** 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)

**8 Service Cards** with:
- Icon at top (64x64px, using Heroicons)
- Service title (bold, 1.25rem)
- 2-3 line description
- "Learn More" link with arrow
- Card treatment: Border, padding p-8, hover elevation (subtle shadow)
- Grid gap: gap-8

Services:
1. AI Solutions
2. Machine Learning & Data Analytics
3. Web & Mobile App Development
4. Cloud Solutions & DevOps
5. UI/UX Design
6. Digital Marketing
7. AR/VR Development
8. IoT & Chatbot Solutions

### 5. Showcase / Case Studies
**Masonry-style or carousel layout:**
- 3 featured case studies/testimonials
- Each card: Client logo, quote/result, project type, industry
- Include metrics (e.g., "300% increase in efficiency")
- Images: Client logos, project screenshots, or abstract result visualizations
- Layout: Alternating text-left/image-right patterns

### 6. Contact Section
**Two-column split:**
- Left (60%): Contact form with fields (Name, Email, Company, Service Interest dropdown, Message)
- Right (40%): Company contact info, office hours, email, phone, social icons
- Form styling: Clean inputs with border-b focus states, generous spacing between fields
- Submit button: Prominent, full-width within form column

### 7. Footer
**Four-column layout:**
- Column 1: Company logo + tagline
- Column 2: Quick Links (About, Services, Solutions, Contact)
- Column 3: Services list (top 4 services)
- Column 4: Newsletter signup + social icons (LinkedIn, Twitter, GitHub)
- Footer bottom: Copyright, Privacy Policy, Terms links
- Background: Dark treatment, py-16 padding

## Component Library

**Buttons:**
- Primary: Solid fill, medium-large size (px-8 py-3), rounded-lg
- Secondary: Outline style with border-2
- Hover states: Slight scale (1.02), smooth transitions

**Cards:**
- Rounded-xl corners
- Border or subtle shadow
- Padding: p-6 to p-8
- Hover: Lift effect (translateY -2px, enhanced shadow)

**Form Inputs:**
- Height: h-12
- Border-b-2 style with focus accent
- Label floating above input
- Error states with red accent border

## Animations

**Micro-interactions (subtle, professional):**
- Button hover: 150ms scale transform
- Card hover: 200ms elevation change
- Scroll reveal: Fade-up on section entry (30px translateY, 400ms)
- CTA pulse: Subtle scale animation on primary hero CTA (once on load)
- Navigation: Smooth scroll behavior with 60ms easing

## Images

**Required Images:**
1. **Hero Image** (Large): AI/technology visualization - futuristic, abstract tech, neural networks, or digital transformation concept (1200x800px minimum)
2. **Leadership Photos**: 2-3 professional headshots for About section (300x300px)
3. **Service Icons**: Use Heroicons CDN for consistent iconography
4. **Case Study Visuals**: 3 project screenshots or abstract success graphics (800x600px)
5. **Client Logos**: 6-8 recognizable tech/enterprise client logos for trust building

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Priorities:**
- Navigation collapses to hamburger
- Services grid: 1 column
- Hero: Stack content vertically
- Contact: Stack form above info
- Footer: Stack all columns

## Accessibility

- Minimum touch target: 44x44px for all interactive elements
- Form labels always visible
- Focus indicators: 2px outline with offset
- Semantic HTML structure throughout
- Alt text for all images
- ARIA labels for icon-only buttons