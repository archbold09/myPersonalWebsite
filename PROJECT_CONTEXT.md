# Angel Archbold - Personal Portfolio Website

## Project Overview
Personal portfolio website built with **Astro + TailwindCSS** featuring a glassmorphism design with emerald green color palette.

## Tech Stack
- **Framework:** Astro 5.x
- **Styling:** TailwindCSS 4.x
- **Language:** TypeScript
- **Deployment:** Vercel

## Key Features Implemented

### 1. Single Page Application
All content consolidated into one page with anchor navigation:
- Hero Section
- About Section (#about)
- Experience Section (#experience)
- Education Section (#education)
- Skills Section (#skills)
- Contact Section (#contact)

### 2. Internationalization (i18n)
- Support for Spanish (ES) and English (EN)
- Language toggle button in navbar
- Dynamic content switching without page reload
- Translations stored in `src/i18n/translations.ts`

### 3. Theme Support
- Dark mode as default
- Light mode support (ThemeToggle currently commented out in Navbar)
- Theme toggle component at `src/components/common/ThemeToggle.astro`

### 4. Design System
- **Primary Color:** Emerald Green (#00c58e) - matches logo
- **Accent Colors:** Teal (#14b8a6), Cyan (#22d3ee)
- **Glassmorphism effects:** backdrop-blur, glass cards
- **Animated background:** Floating gradient orbs

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── GlassCard.astro
│   │   ├── GradientText.astro
│   │   ├── ThemeToggle.astro
│   │   ├── LanguageToggle.astro
│   │   └── AnimatedBackground.astro
│   ├── home/
│   │   └── Hero.astro
│   └── about/
│       ├── ProfileCard.astro
│       ├── Timeline.astro
│       └── SkillsGrid.astro
├── data/
│   ├── personal.ts      # Personal info
│   ├── experience.ts    # Work & education
│   ├── skills.ts        # Technologies
│   └── methodology.ts   # Work process
├── i18n/
│   └── translations.ts  # ES/EN translations
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro      # Main single page
│   └── 404.astro
├── styles/
│   └── global.css       # TailwindCSS config
└── types/
    └── index.ts         # TypeScript interfaces
```

## Personal Information (from LinkedIn)

### Contact
- **Name:** Angel Archbold
- **Title:** Software Developer
- **Location:** Barranquilla, Colombia
- **Email:** angelarchbold09@gmail.com
- **Phone:** 3124484922
- **LinkedIn:** https://www.linkedin.com/in/archbold09/
- **GitHub:** https://github.com/archbold09

### Work Experience
1. **Mercado Libre** - Software Developer (Oct 2022 - Present)
2. **LAX #DataLovers** - Software Engineer (Aug 2021 - Dec 2022)
3. **Quality Telecom S.L** - Software Engineer (Jan 2021 - Dec 2021)
4. **Leader Center** - Software Engineer (Dec 2020 - May 2021)
5. **Extreme Technologies S.A.** - Software Developer (Jul 2020 - Dec 2020)
6. **INSUMOS Y SUMINISTROS DE LA COSTA** - Software Engineer (Jun 2019 - Jul 2020)
7. **SENA - SENNOVA** - Research Developer (Apr 2018 - Jul 2020)

### Education
1. **Platzi** - Software Developer (2020)
2. **Universidad del Atlántico** - English Language and Literature (2021 - 2024)
3. **SENA** - Technologist in Analysis and Development of Information Systems (2016 - 2019)

### Technologies
**Core Stack:** Node.js, React, NestJS, TypeScript, Go, Express, Python, Java, PHP
**UI & Styling:** JavaScript, Vue.js, Angular, TailwindCSS, Bootstrap, Material UI, HTML5, CSS3
**Databases:** MongoDB, PostgreSQL, MySQL, Redis
**Tools & Cloud:** Git, Docker, GCP, AWS, GraphQL, Jest

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Build
npm run build        # Build for production

# Preview
npm run preview      # Preview production build
```

## Deployment
- Platform: Vercel
- Node.js Version: 20.x (specified in .nvmrc and package.json engines)
- Build Command: `npm run build`
- Output Directory: `dist`

## Pending/Hidden Features
- **Projects Section:** Hidden, commented out in navbar
- **Methodology Section:** Removed from single page (was showing before)
- **Theme Toggle:** Commented out in Navbar (dark mode only currently)
- **Email Button:** Commented out in contact section

## Language Classes Convention
- `.lang-es` - Spanish content (visible by default)
- `.lang-en` - English content (hidden by default, shown when EN selected)
- `.nav-label-es` / `.nav-label-en` - Navigation specific

## Custom CSS Classes
- `.glass` - Glassmorphism effect
- `.glass-strong` - Stronger glass effect
- `.gradient-text` - Animated gradient text
- `.btn-primary` - Primary button style
- `.btn-glass` - Glass button style
- `.card-hover` - Card hover animation
- `.section-container` - Max-width container
- `.orb` - Floating background orbs

## Notes
- Hero illustration is custom SVG at `/public/images/hero/developer-illustration.svg`
- Logo at `/public/images/logo/logoAngel.png`
- Profile photo at `/public/images/profile/fotoAngel.jpg`
