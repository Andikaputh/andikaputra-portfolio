"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const BentoHeader: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#08090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#overview" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-6 w-6 rotate-45 items-center justify-center border border-[#ff5a2b]/60 transition-colors duration-300 group-hover:border-[#ff5a2b]"
          >
            <span className="h-1.5 w-1.5 bg-[#ff5a2b]" />
          </span>
          <span className="font-display text-[16px] leading-none text-[#f4f1ea]">
            Andika Putra Perdana
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "text-[#f4f1ea]" : "text-[#8c8781] hover:text-[#f4f1ea]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-px h-px origin-left bg-[#ff5a2b] transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden h-8 w-8 items-center justify-center text-[#8c8781] transition-colors hover:text-[#f4f1ea] sm:flex"
          >
            <FaGithub size={15} aria-hidden />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-8 w-8 items-center justify-center text-[#8c8781] transition-colors hover:text-[#f4f1ea] sm:flex"
          >
            <FaLinkedin size={15} aria-hidden />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="ml-1 flex items-center gap-1.5 rounded-full bg-[#f4f1ea] px-4 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#08090b] transition-colors hover:bg-[#ff5a2b]"
          >
            <span>Email</span>
            <ArrowUpRight size={13} aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
};
