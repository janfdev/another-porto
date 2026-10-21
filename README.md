# Another Porto — Next.js Portfolio

A modern, high-performance portfolio built with **Next.js 15 App Router**, **Tailwind CSS**, and **TypeScript**.

## Architecture & Features
- **Next.js 15 App Router**: Server Components by default with client-side interactivity boundaries (`"use client"`).
- **Clean Semantic Routing**:
  - `/` (Home / Come In): Hero orbital showcase, brand clients, about card, experience timeline, selected work, and testimonials.
  - `/meet-me`: Full career history, academic background, professional certifications, and technical toolsets.
  - `/work`: Dynamic category-filtered project catalog (UI/UX, Branding, Social Media, Event, E-Commerce).
  - `/work/[slug]`: Dynamic case study pages generated statically via `generateStaticParams()`.
- **Motion & Smooth Scroll**:
  - Integrated [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis) provider for friction-free viewport scrolling.
  - Motion / CSS transforms for the 3D rotating hero orbit.
- **Image Optimization**: Powered by `next/image` with automatic WebP/AVIF compression.
- **Typography & Styling**: Instrument Serif, Inter, and Tailwind CSS.
- **Zero Broken Links**: Clean client-side navigation without `.html` file extensions.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

```bash
npm run build
npm run start
```

## Attribution & Credits
All original design work, client brand logos, case study media, and photography belong to **Fachri All Khijaro**.
Original site: https://fachri-ak-portfolio.vercel.app/
Rewritten strictly as an engineering benchmark and architectural modern-stack migration study.
