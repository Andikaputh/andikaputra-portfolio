# Panduan Pembuatan & Penempatan Open Graph (OG) Image

Dokumen ini berisi panduan untuk menambahkan gambar preview media sosial (**Open Graph & Twitter Card Image**) untuk portofolio Anda.

---

## 1. Lokasi & Nama File

Simpan file gambar di direktori publik dengan path dan nama file persis seperti berikut:

```
public/
└── assets/
    └── og-image.png
```

Path URL di browser atau metadata akan merujuk ke:
```
/assets/og-image.png
```
Dengan konfigurasi `metadataBase` di `src/app/layout.tsx`, Next.js otomatis mengonversinya menjadi URL absolut:
```
https://andikaputra.com/assets/og-image.png
(atau mengikuti nilai NEXT_PUBLIC_SITE_URL)
```

---

## 2. Spesifikasi Teknis Standar

| Parameter | Rekomendasi | Keterangan |
| :--- | :--- | :--- |
| **Dimensi** | **1200 x 630 piksel** | Standar resmi Facebook, Twitter (summary_large_image), LinkedIn, WhatsApp, & Discord |
| **Aspek Rasio** | **1.91 : 1** | Rasio standar horizontal kartu preview |
| **Format** | **PNG** atau **JPG/JPEG** | PNG sangat disarankan untuk teks tajam & grafis UI |
| **Ukuran File** | **< 1 MB** (ideal 300 - 800 KB) | Mencegah timeout atau pembatalan scraping oleh bot crawler |
| **Color Space** | **sRGB** | Memastikan warna tampil konsisten di semua platform & layar |

---

## 3. Rekomendasi Konten & Desain Visual

Agar selaras dengan tema portofolio Anda:
- **Background**: Dark theme (`#08080a`) dengan ambient glow merah/rose (`#e11d48` / `#f43f5e`) dan grid aksen halus.
- **Identitas**: 
  - Nama: **Andika Putra Perdana** (Bold, kontras tinggi).
  - Role: **Data & AI Engineer**.
  - Institusi / Spesialisasi: *Universitas Gunadarma • MLOps • RAG • Analytics Dashboard • Real-time Pipelines*.
- **Elemen Grafis**:
  - Logo (`public/assets/logo.png`) atau foto profil (`public/assets/profile.png`).
  - Badge teknologi singkat (Python, PyTorch, LangChain, Tableau, Kafka, Docker).
- **Safe Zone (Area Aman)**:
  - Berikan margin/padding minimal **50–80 px** di setiap sisi (atas, kanan, bawah, kiri) agar elemen teks tidak terpotong saat ditampilkan di perangkat mobile atau platform dengan crop melingkar/membulat.

---

## 4. Konfigurasi Domain Produksi (`.env.local`)

Saat mendeploy ke platform seperti Vercel, Netlify, atau server pribadi, pastikan menambahkan Environment Variable:

```env
NEXT_PUBLIC_SITE_URL=https://nama-domain-anda.com
```

Jika variabel ini belum disetel, Next.js akan menggunakan fallback default `https://andikaputra.com`.

---

## 5. Cara Menguji (Debugging & Testing)

Setelah file `og-image.png` diletakkan dan website di-deploy:
1. **[OpenGraph.xyz](https://www.opengraph.xyz/)**: Masukkan URL portofolio Anda untuk melihat preview di Facebook, Twitter, LinkedIn, Discord.
2. **[Twitter/X Card Validator](https://cards-dev.twitter.com/validator)** atau buat tweet draft dengan menyalin link portofolio Anda.
3. **[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)**: Memaksa refresh cache preview LinkedIn.
4. **[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)**: Memaksa refresh cache preview Facebook/WhatsApp.
