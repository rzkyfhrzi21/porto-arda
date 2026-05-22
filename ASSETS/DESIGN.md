---
name: Cyber-Engine Portfolio
colors:
  surface: '#071424'
  surface-dim: '#071424'
  surface-bright: '#2e3a4b'
  surface-container-lowest: '#030f1e'
  surface-container-low: '#101c2c'
  surface-container: '#142031'
  surface-container-high: '#1f2b3c'
  surface-container-highest: '#2a3547'
  on-surface: '#d7e3fa'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#d7e3fa'
  inverse-on-surface: '#253142'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#47d6ff'
  primary: '#a5e7ff'
  on-primary: '#003543'
  primary-container: '#00d2ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#edb1ff'
  on-secondary: '#520070'
  secondary-container: '#6e208c'
  on-secondary-container: '#e498ff'
  tertiary: '#dbdde6'
  on-tertiary: '#2e3037'
  tertiary-container: '#bfc1ca'
  on-tertiary-container: '#4c4f56'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b6ebff'
  primary-fixed-dim: '#47d6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#f9d8ff'
  secondary-fixed-dim: '#edb1ff'
  on-secondary-fixed: '#320046'
  on-secondary-fixed-variant: '#6e208c'
  tertiary-fixed: '#e1e2eb'
  tertiary-fixed-dim: '#c4c6cf'
  on-tertiary-fixed: '#191c22'
  on-tertiary-fixed-variant: '#44474e'
  background: '#071424'
  on-background: '#d7e3fa'
  surface-variant: '#2a3547'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  section-padding: 120px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is engineered for high-impact game development showcases, targeting studio recruiters and technical collaborators. The personality is "High-Tech Professional"—fusing the precision of developer tools with the cinematic immersion of AAA gaming.

The aesthetic utilizes **Glassmorphism** and **Modern Dark** movements. It prioritizes depth through translucent layers and luminous accents, creating a "HUD" (Heads-Up Display) feel. Visual interest is driven by high-contrast neon highlights against a void-like background, ensuring that game screenshots and technical demos remain the focal point of the experience.

## Colors
The palette is rooted in **Deep Obsidian (#0B0E14)**, providing a pure, low-light canvas that eliminates visual noise. 

- **Neon Blue (#00D2FF)** serves as the primary action color, used for critical CTAs, active states, and primary data visualizations.
- **Electric Purple (#9D50BB)** acts as a secondary accent for hover states, progress bars, and categorizing different game genres or technical stacks.
- **Surface Tints**: Use 5-8% opacity overlays of the primary and secondary colors on top of the background to create "glowing" container depths.
- **Success/Error**: Use vibrant emerald for success and a high-saturated crimson for errors, keeping within the neon aesthetic.

## Typography
The typography strategy contrasts geometric display faces with highly technical mono-spaced labels. 

**Sora** is used for headlines to provide a futuristic, wide-set aesthetic that feels architectural and bold. **Inter** handles the heavy lifting for project descriptions, ensuring maximum readability. **JetBrains Mono** is utilized for "metadata" (e.g., Engine version, Language, FPS stats), reinforcing the developer identity. 

Headlines should use tight letter-spacing to feel "locked-in" and engineered, while labels should be tracked out for a technical, data-driven appearance.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop. To evoke a technical environment, use a subtle 32px CSS background grid pattern in the "Deep Obsidian" space.

- **Margins**: Use 24px margins for mobile, scaling to 80px or "auto" for ultra-wide displays.
- **Vertical Rhythm**: Large section gaps (120px+) create a "gallery" feel, allowing each game project to breathe. 
- **Alignment**: Use a mix of center-aligned hero sections and left-aligned technical data tables.
- **Reflow**: On mobile, 12-column grids collapse to a single column, with gutters reducing to 16px to maximize screen real estate for screenshots.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Backdrop Blurs**.

- **Level 0 (Background)**: Solid #0B0E14 with a faint grid texture.
- **Level 1 (Cards/Panels)**: Surface color #161B22 at 60% opacity with a `backdrop-filter: blur(12px)`. Give these a 1px border of #FFFFFF (10% opacity).
- **Level 2 (Modals/Active Elements)**: Increased background blur (24px) and a primary-color glow (#00D2FF) using a 0px 4px 20px shadow at 20% opacity.
- **Glow Effects**: Use `box-shadow` or `drop-shadow` sparingly to simulate light emission from neon borders.

## Shapes
This design system uses **Soft (0.25rem)** roundedness to maintain a precise, technical edge without appearing dated or aggressive. 

Large-scale components like image containers or background sections may use a slightly larger `rounded-lg` (0.5rem) to soften the overall composition. Avoid pill-shapes for buttons; instead, use slightly rounded rectangles to mirror the shape of code blocks and terminal windows.

## Components
- **Primary Buttons**: Solid Neon Blue background with black text for maximum contrast. Use a subtle outer glow on hover.
- **Project Cards**: Utilize a "Frameless" look where the image fills the card, and the technical metadata appears on a glassmorphic overlay at the bottom.
- **Chips/Tags**: Use JetBrains Mono text with a 1px Neon Purple border and no background fill.
- **Input Fields**: Darker than the background (#05070A) with a bottom-only Neon Blue border that glows when focused.
- **Status Indicators**: Pulse animations for "Currently Available" or "Live Project" using the primary accent color.
- **Technical Lists**: Use monospaced fonts and custom "plus" or "arrow" icons that look like terminal prompts.