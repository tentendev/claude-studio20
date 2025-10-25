# Studios20 - Micro-Influencer Marketing Platform

A modern Next.js 14 website for Studios20, the leading micro-influencer marketing platform. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion animations.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Webflow CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Features

- ✨ Smooth scroll-triggered animations with Framer Motion
- 📱 Fully responsive design with mobile-first approach
- ⚡ Optimized images with Next.js Image component
- 🎨 Modern UI with Tailwind CSS utilities
- 🔍 SEO optimized with metadata API
- 🚀 Fast page loads with Next.js 14 Turbopack

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
studios20-site/
├── app/
│   ├── layout.tsx          # Root layout with Webflow CSS
│   ├── page.tsx            # Homepage with animations
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Navigation component
│   └── footer.tsx          # Footer component
├── public/
│   └── webflow/            # Webflow assets (CSS, JS, images)
│       ├── css/
│       ├── images/
│       ├── js/
│       └── fonts/
├── lib/
│   └── utils.ts            # Utility functions
└── vercel.json             # Vercel configuration
```

## Deploy on Vercel

### Option 1: Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

### Option 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy from project directory:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

## Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

Built with Next.js 14, TypeScript, and Framer Motion
