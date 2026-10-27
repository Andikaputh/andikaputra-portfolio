"use client";

import React, { useState } from "react";
import { BentoHeader } from "@/components/BentoHeader";
import { BentoDock } from "@/components/BentoDock";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { ContactSection } from "@/components/ContactSection";
import { ContactModal } from "@/components/ContactModal";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#08090b] text-[#a5a09a]">
      <ScrollProgress />
      <BentoHeader />

      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactSection onOpenContact={() => setIsModalOpen(true)} />

      <footer className="mx-auto w-full max-w-[1200px] px-5 pb-28 sm:px-8 md:pb-10">
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8c8781] sm:flex-row sm:items-center sm:justify-between">
          <p>© Andika Putra Perdana · Data &amp; AI Engineer</p>
          <div className="flex items-center gap-5">
            <p className="hidden sm:block">Built with Next.js</p>
            <a
              href="#overview"
              className="transition-colors hover:text-[#ff5a2b]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

      <BentoDock />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
