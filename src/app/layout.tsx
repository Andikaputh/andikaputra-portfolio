import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font dari Google Fonts (Optimal untuk UI & Teks Panjang)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://andikaputra.com"),
  title: {
    default: "Andika Putra Perdana | Data & AI Engineer",
    template: "%s | Andika Putra Perdana",
  },
  description:
    "Mahasiswa Informatika Universitas Gunadarma & Data / AI Engineer. Berpengalaman dalam MLOps, RAG, Analytics Dashboard, dan Real-time Data Pipelines.",
  keywords: [
    "Andika Putra Perdana",
    "Data Engineer",
    "AI Engineer",
    "MLOps",
    "Python",
    "Tableau",
    "Universitas Gunadarma",
    "Portfolio",
  ],
  authors: [{ name: "Andika Putra Perdana", url: "https://github.com/Andikaputh" }],
  creator: "Andika Putra Perdana",
  openGraph: {
    title: "Andika Putra Perdana | Data & AI Engineer",
    description:
      "Portfolio & Showcases of Production Machine Learning Systems, Interactive Dashboards, and Real-time AI Pipelines.",
    url: "/",
    siteName: "Andika Putra Perdana Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andika Putra Perdana - Data & AI Engineer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andika Putra Perdana | Data & AI Engineer",
    description:
      "Portfolio & Showcases of Production Machine Learning Systems, Interactive Dashboards, and Real-time AI Pipelines.",
    creator: "@andika_p_p",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-[#08080a] text-neutral-300 font-sans antialiased relative overflow-x-hidden min-h-screen selection:bg-rose-500 selection:text-white">
        {/* Ambient Glowing Red Gradients */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="fixed top-1/3 -left-40 w-[500px] h-[500px] bg-rose-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="fixed bottom-10 right-0 w-[600px] h-[400px] bg-rose-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

        {/* Subtle Netral Grid Overlay Pattern */}
        <div 
          className="fixed inset-0 bg-[linear-gradient(to_right,#26262615_1px,transparent_1px),linear-gradient(to_bottom,#26262615_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" 
        />

        {children}
      </body>
    </html>
  );
}