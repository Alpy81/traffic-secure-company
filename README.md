# Sperrzone24 — Professional Traffic Safety Website

> A modern, high-performance website for a professional traffic safety company based in Frankfurt am Main, Germany.

🌐 **Live:** [https://sperrzone24.de](https://sperrzone24.de) <!-- Replace with actual URL after deployment -->

---

## Overview

Sperrzone24 is a full-stack web application built for a traffic safety service provider operating in Frankfurt and the surrounding area. The site is designed to attract municipal clients, construction companies, and event organizers who require professional road safety solutions.

---

## Tech Stack

| Layer      | Technology                       |
| ---------- | -------------------------------- |
| Framework  | Next.js 16 (App Router)          |
| Language   | TypeScript                       |
| Styling    | CSS Modules (CSS3) — no Tailwind |
| Font       | Inter (Google Fonts via Next.js) |
| Email      | Resend API                       |
| Booking    | Calendly Embed                   |
| Deployment | Vercel                           |
| Domain     | IONOS                            |

---

## Features

- **Mobile-first responsive design** — optimized from 320px smartphones to 4K/45" displays
- **Dark & authoritative design system** — built for trust with municipal and government clients
- **Full service pages** — dedicated subpages for all 6 service offerings
- **Contact form** — server-side form handling via Resend API
- **Appointment booking** — Calendly integration with custom UI
- **GDPR-compliant cookie banner** — with granular consent settings
- **SEO optimized** — metadata, Open Graph, Twitter Cards, sitemap & robots.txt
- **Performance optimized** — WebP/AVIF images, caching headers, Gzip compression
- **Security headers** — X-Frame-Options, X-Content-Type-Options, XSS Protection

---

## Project Structure

```
sperrzone24/
├── app/
│   ├── page.tsx                        # Homepage
│   ├── layout.tsx                      # Root layout
│   ├── globals.css                     # Design system & CSS variables
│   ├── legal.module.css                # Shared legal pages CSS
│   ├── ueber-uns/                      # About page
│   ├── leistungen/                     # Services overview + 6 subpages
│   │   ├── halteverbotszonen/
│   │   ├── strassensperrungen/
│   │   ├── baustellenabsicherung/
│   │   ├── verkehrsplanung/
│   │   ├── 24-7-bereitschaft/
│   │   └── beratung-service/
│   ├── kontakt/                        # Contact page + server action
│   ├── termin/                         # Appointment booking (Calendly)
│   ├── impressum/                      # Legal notice
│   ├── datenschutz/                    # Privacy policy
│   └── agb/                            # Terms & conditions
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── CTA/
│   ├── Footer/
│   └── CookieBanner/
├── public/
│   ├── images/                         # WebP optimized images
│   └── logo.png
├── next.config.ts
└── package.json
```

---

## Getting Started

---

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

---

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=info@sperrzone24.de
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

---

## Deployment

This project is deployed on **Vercel** with a custom domain connected via **IONOS**.

### Environment Variables on Vercel

Set the following in **Vercel Dashboard → Settings → Environment Variables**:

| Variable         | Description                       |
| ---------------- | --------------------------------- |
| `RESEND_API_KEY` | Customer's Resend API key         |
| `CONTACT_EMAIL`  | Customer's business email address |

### Domain Configuration (IONOS → Vercel)

1. Add custom domain in Vercel project settings
2. Set the following DNS records in IONOS:

| Type  | Name | Value                |
| ----- | ---- | -------------------- |
| A     | @    | 76.76.21.21          |
| CNAME | www  | cname.vercel-dns.com |

---

## Services Offered

- **Halteverbotszonen** — No-parking zones for moves, construction & events
- **Straßensperrungen** — Full & partial road closures with authority coordination
- **Baustellenabsicherung** — Construction site safety per RSA 21
- **Verkehrsplanung** — Traffic sign plans & permit applications
- **24/7 Bereitschaft** — Round-the-clock emergency response
- **Beratung & Service** — Individual consulting & tailored solutions

---

## License

This project was developed as a custom client website. All rights reserved © 2026 Sperrzone24.

---

## 👨‍💻 Built by

<div align="center">

<img src="/public/images/websylon.png" alt="WEBSYLON" width="200" />

**WEBSYLON** — Professional Web Development & Digital Solutions

_Frankfurt am Main, Germany_

</div>

---

<div align="center">
  <sub>© 2026 WEBSYLON. All rights reserved.</sub>
</div>
