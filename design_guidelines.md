# Design Guidelines: Anime Embroidered Hoodie E-Commerce Platform

## Design Approach

**Reference-Based Approach** drawing from anime streetwear e-commerce leaders and vaporwave aesthetics:
- Primary inspiration: Anime streetwear brands (Hypland, AnimeBae) + vaporwave digital art movement
- Secondary references: Glossier (for glassmorphism), Spotify (for dark mode treatment)
- Key principle: Bold, youth-oriented, digitally-native aesthetic that merges Japanese pop culture with modern streetwear

## Core Aesthetic

**Anime + Gen Z Vaporwave Theme**
- Dark mode primary (with light mode toggle in header)
- Color palette: Lavender (#B794F6), Cyan (#22D3EE), Hot Pink (#EC4899), Deep Black (#0A0A0F), White (#FFFFFF) for text
- Heavy use of glassmorphism cards (backdrop-blur-xl with bg-opacity-10)
- Anime-style illustrations using placeholder SVGs or emoji (🎌 ⚡ 🌸 💫 👘) as decorative elements
- Neon glow effects on CTAs and accent elements using drop-shadow

## Typography

**Bold, Statement-Driven Hierarchy**
- Headlines: Extra bold sans-serif (font-extrabold), 3xl to 6xl sizes, tight leading
- Hero tagline: "Wear Your Anime Aura" - text-6xl font-black with gradient text effect
- Body: Medium weight (font-medium), text-base to text-lg for readability
- Product names: text-xl font-bold
- All caps for category labels and CTAs

## Layout System

**Spacing**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20 (p-4, gap-8, mb-12, py-20)
- Generous whitespace around glassmorphism cards
- Tight grouping within cards for information density

## Component Library

### Navigation
- Sticky header with blur background (backdrop-blur-lg bg-black/30)
- Logo left, nav center, cart/wishlist/profile icons right
- Mobile: Hamburger menu with slide-in panel
- Theme toggle button (sun/moon icon) in header

### Hero Section (Landing)
- Full viewport height (min-h-screen) with gradient background overlay
- Large anime-style illustration or abstract pattern background
- Centered bold tagline with gradient text (lavender to cyan)
- Dual CTAs: "Shop Hoodies" (primary neon pink) + "Create Your Style" (outline/ghost)
- Floating anime emoji decorations (position absolute with subtle animations)

### Product Cards
- Glassmorphism cards: rounded-2xl, backdrop-blur-xl, border border-white/10
- Product image with hover scale effect (hover:scale-105 transition-transform)
- Gradient overlay on image hover revealing quick "Add to Cart" button
- Card footer: Name (font-bold), Price (text-cyan-400), Rating stars
- Soft shadow on hover: hover:shadow-2xl hover:shadow-pink-500/20

### Buttons
- Primary CTA: bg-gradient-to-r from-pink-500 to-purple-600, rounded-full, px-8 py-3, font-bold, uppercase
- On hero images: Add backdrop-blur-md bg-white/10 border border-white/20
- Hover: brightness-110, scale-105, neon glow shadow
- Ghost/Outline: border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10

### Forms (Checkout, Auth)
- Input fields: bg-white/5 border border-white/10 rounded-lg, focus:border-cyan-400 glow
- Labels: text-sm font-medium text-purple-300
- Error states: border-pink-500 with text-pink-400 message

### Featured Products Section
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Or carousel with smooth scroll-snap on mobile
- Section header with neon underline accent

### Filters & Sorting (Product Listing)
- Sidebar on desktop (w-64), collapsible on mobile
- Checkbox groups with custom styled checkboxes (rounded accent-pink-500)
- Filter section headers with anime-style dividers (border-gradient)

### Product Detail Page
- Large image gallery: Main image with thumbnails below, zoom on hover
- Right panel: Name (text-4xl font-black), Price (text-3xl text-cyan-400), Description
- Size selector: Pill buttons (rounded-full) with active state glow
- Color swatches: Circle buttons with border on selection
- Embroidery options: Dropdown or button group for placement (Front/Back/Sleeve)
- Stock badge: bg-green-500/20 text-green-400 if available
- Related products carousel at bottom

### Cart & Checkout
- Cart items: Thumbnail left, details center, quantity controls + remove right
- Quantity: Outlined box with +/- buttons (rounded border-white/20)
- Subtotal card: Glassmorphism sticky card on right showing running total
- Checkout form: Single column on mobile, 2-column (form left, summary right) on desktop

### Admin Dashboard
- Clean table views with alternating row backgrounds (bg-white/5)
- Action buttons: Icon buttons with tooltips (Edit/Delete)
- Create product: Modal or slide-over panel with form
- Status badges for orders: Pending (yellow), Shipped (blue), Delivered (green)

### Footer
- Dark background (bg-black) with subtle grid pattern
- 4-column layout on desktop: About, Shop, Support, Social
- Links in muted cyan/lavender
- Newsletter signup with inline form (glassmorphism input + neon CTA)

## Animations

**Micro-interactions (subtle, not distracting)**
- Card hover: transform scale + shadow glow (duration-300)
- Button hover: scale-105 + brightness boost
- Page transitions: Fade in content (opacity + translate-y)
- Toast notifications: Slide in from top-right with backdrop blur
- No auto-playing carousels or excessive motion

## Images

**Hero Section**: Large abstract anime-vaporwave gradient background with geometric shapes or anime silhouette illustration (full-width, min-h-screen)

**Product Images**: High-quality hoodie mockups on colored backgrounds or worn by models, consistent aspect ratio (3:4), with hover zoom capability

**Category/Feature Icons**: Use Heroicons for UI elements, anime emoji for decorative accents

## Accessibility

- Maintain WCAG AA contrast ratios (test neon colors against dark backgrounds)
- Focus states: ring-2 ring-cyan-400 ring-offset-2 ring-offset-black
- Screen reader labels on icon-only buttons
- Keyboard navigation support for all interactive elements

## Responsive Breakpoints

- Mobile: Full-width cards, stacked layout, bottom nav for cart/profile
- Tablet (md:): 2-column grids, side-by-side form layouts
- Desktop (lg:): 3-4 column grids, fixed sidebar filters, expanded header navigation

**Design Personality**: Edgy, youthful, digitally-native, bold and unapologetic - merging anime fandom with streetwear culture through modern web glassmorphism and neon aesthetics.