import type { Metadata, Viewport } from "next";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://andikaputra.com";
const { personal, education } = PORTFOLIO_DATA;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andika Putra Perdana | Data & AI Engineer",
    template: "%s | Andika Putra Perdana",
  },
  description:
    "Informatics student at Universitas Gunadarma and a Data / AI Engineer. Experienced in MLOps, RAG, analytics dashboards, and real-time data pipelines.",
  keywords: [
    "Andika Putra Perdana",
    "Data Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "MLOps",
    "Python",
    "Tableau",
    "Universitas Gunadarma",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: personal.socials.github }],
  creator: personal.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Andika Putra Perdana | Data & AI Engineer",
    description:
      "A portfolio of production machine learning systems, interactive dashboards, and real-time AI pipelines.",
    url: "/",
    siteName: "Andika Putra Perdana Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andika Putra Perdana — Data & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andika Putra Perdana | Data & AI Engineer",
    description:
      "A portfolio of production machine learning systems, interactive dashboards, and real-time AI pipelines.",
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

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Data & AI Engineer",
  email: `mailto:${personal.email}`,
  url: siteUrl,
  image: `${siteUrl}${personal.profileImage}`,
  sameAs: [personal.socials.github, personal.socials.linkedin, personal.socials.instagram],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.institution,
  },
  knowsAbout: [
    "Machine Learning",
    "MLOps",
    "Data Engineering",
    "Retrieval-Augmented Generation",
    "Data Visualization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-[#08090b] font-sans text-[#a5a09a] antialiased selection:bg-[#ff5a2b] selection:text-[#08090b]">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,#151210_0%,#08090b_60%)]" />
          <div className="absolute inset-x-0 top-0 h-[520px] opacity-[0.35] [background-image:linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] [background-size:5rem_5rem] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_100%)]" />
        </div>

        {/* Grain overlay: tekstur halus agar tidak terasa seperti template */}
        <svg
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.035] mix-blend-soft-light"
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
