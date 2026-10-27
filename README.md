# Portofolio: Andika Putra Perdana

Live: https://andikaputra-portfolio.vercel.app

Website portofolio pribadi untuk menampilkan proyek Data & AI, pengalaman, dan kontak.
Dibangun dengan Next.js (App Router), React, Tailwind CSS v4, dan TypeScript.

Arah desain **editorial-technical**: latar near-black hangat, tipografi serif
untuk display, sans untuk teks, dan mono untuk metadata. Tanpa kartu berlebih,
tanpa glow ungu, dan tanpa ilustrasi stok.

## Menjalankan secara lokal

```bash
npm install
cp .env.example .env.local   # lalu isi kredensial EmailJS
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build produksi |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | ESLint |

## Environment Variables

Semua variabel bersifat publik (prefix `NEXT_PUBLIC_`) karena dipakai di browser.

| Variabel | Keterangan |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Service ID EmailJS untuk formulir kontak |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Template ID EmailJS |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Public key EmailJS |
| `NEXT_PUBLIC_SITE_URL` | URL kanonik situs (metadata, Open Graph, sitemap) |

Jika kredensial EmailJS belum diisi, formulir kontak menampilkan pesan kesalahan
yang jelas beserta alamat email langsung, sehingga pengunjung tidak menemui
kegagalan diam-diam.

## Kontak

Email publik: **andikaputh1@gmail.com**

Alamat ini dipakai di hero, section kontak (dengan tombol salin), JSON-LD, dan
metadata. Tombol salin memakai Clipboard API dan menampilkan status “Tersalin”;
jika API tidak tersedia, pengunjung diarahkan ke `mailto:`.

## Struktur

```
src/
├── app/
│   ├── layout.tsx      # Font, metadata, JSON-LD, grain overlay
│   ├── page.tsx        # Komposisi section (satu halaman, anchor navigation)
│   ├── robots.ts       # robots.txt
│   ├── sitemap.ts      # sitemap.xml
│   └── globals.css     # Tailwind theme, keyframes, reveal, reduced motion
├── components/
│   ├── BentoHeader.tsx      # Header sticky + monogram + scrollspy
│   ├── BentoDock.tsx        # Dock navigasi (khusus mobile)
│   ├── Hero.tsx             # Hero editorial + metrik
│   ├── PipelineScene.tsx    # Scene 3D CSS (layer pipeline + parallax pointer)
│   ├── TechMarquee.tsx      # Marquee tech stack, pause saat hover
│   ├── About.tsx / Skills.tsx / Experience.tsx
│   ├── Projects.tsx         # Filter + kartu spotlight/tilt
│   ├── ProjectCover.tsx     # Cover blueprint generatif per proyek
│   ├── ContactSection.tsx   # CTA, email, tombol salin, sosial
│   ├── ContactModal.tsx     # Dialog aksesibel (focus trap, Esc, scroll lock)
│   ├── SectionHeading.tsx
│   └── ui/                  # Reveal, ScrollProgress
├── data/
│   └── portfolioData.ts     # Sumber tunggal konten (profil, skill, proyek)
└── hooks/
    └── useActiveSection.ts  # Scrollspy bersama header & dock
```

## Font

Font di-self-host lewat paket `@fontsource`, bukan `next/font/google`, agar build
tidak bergantung pada akses ke Google Fonts:

- **Instrument Serif**: display / judul
- **Instrument Sans Variable**: teks antarmuka
- **IBM Plex Mono**: metadata, label, dan angka

## Efek & interaksi

- Scene pipeline isometrik 3D murni CSS dengan parallax mengikuti pointer.
- Kartu proyek memakai spotlight radial + tilt halus (maks. ±2,4°) saat hover.
- Reveal section memakai CSS scroll-driven animation (`animation-timeline: view()`),
  sehingga konten tetap terlihat tanpa JavaScript.
- Marquee tech stack berhenti saat hover; scroll progress bar di atas.
- Semua animasi dinonaktifkan otomatis pada `prefers-reduced-motion: reduce`.
- Tidak ada overflow horizontal pada viewport 390 px maupun 1440 px.

## Aset

- `public/assets/profile.webp`: foto profil teroptimasi (1200×1200, ±60 KB)
- `public/assets/og-image.png`: preview 1200×630 untuk media sosial
- `public/assets/cv.pdf`: CV yang dapat diunduh
- `public/assets/logo.png`: ikon/favicon (header memakai monogram CSS)

Gambar proyek sengaja tidak memakai screenshot palsu/foto stok. Setiap kartu
memakai cover generatif berbasis ikon, indeks, dan label teknis.

## Catatan performa & aksesibilitas

- `next/image` dengan `sizes` agar gambar tidak dikirim berlebihan.
- Palet teks dijaga pada rasio kontras minimal 4,5:1 untuk teks normal.
- Formulir kontak: focus trap, tombol Esc, scroll lock, dan pesan error.
- Target audit Lighthouse: 100 Accessibility / Best Practices / SEO.
