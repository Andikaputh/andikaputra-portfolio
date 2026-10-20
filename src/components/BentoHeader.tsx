"use client";

import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface BentoHeaderProps {
  onOpenContact: () => void;
}

export const BentoHeader: React.FC<BentoHeaderProps> = ({ onOpenContact }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-2 flex items-center justify-between gap-2 sm:gap-4 z-40">
      {/* Brand & Identity (Kiri) */}
      <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
        {/* Logo Container (Relatif agar titik cahaya mikro bisa mengunci di atas logo) */}
        <div className="relative flex items-center justify-center flex-shrink-0 group cursor-pointer">
          {/* 1. Logo Utama */}
          <Image
            src="/assets/logo.png"
            alt="APP Logo"
            width={80}
            height={80}
            priority
            className="h-10 sm:h-16 lg:h-20 w-auto object-contain filter brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300"
          />

          {/* 2. Titik Cahaya Mikro Berkedip (Tepat di atas titik merah asli logo) */}
          <div 
            className="absolute top-[35%] left-[65%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex items-center justify-center"
          >
            {/* Aura Pendaran Merah Tipis yang Berdenyut Lembut */}
            <span className="absolute inline-flex h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-red-600/60 blur-[1px] animate-ping" />
            
            {/* Cahaya Mikro Inti yang Berdenyut Halus */}
            <span className="absolute inline-flex h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-red-500 blur-[0.5px] animate-pulse" />
            
            {/* Titik Inti Merah Sangat Kecil (Solid Micro Center) */}
            <span className="relative inline-flex rounded-full h-[2.5px] sm:h-[3px] w-[2.5px] sm:w-[3px] bg-red-400" />
          </div>
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <h1 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
            {personal.name}
          </h1>
          <span className="font-mono text-[10px] sm:text-[11px] text-rose-400 font-medium flex items-center gap-1 sm:gap-1.5 mt-0.5 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="truncate hidden sm:inline">Universitas Gunadarma • Semester 7</span>
            <span className="truncate inline sm:hidden">Gunadarma • Sem 7</span>
          </span>
        </div>
      </div>

      {/* Social Links & Contact Button (Kanan) */}
      <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-950/30 transition-all duration-300"
          title="GitHub"
          aria-label="GitHub Profile"
        >
          <FaGithub className="text-sm sm:text-base" />
        </a>

        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-950/30 transition-all duration-300"
          title="LinkedIn"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="text-sm sm:text-base" />
        </a>

        <button
          onClick={onOpenContact}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-900/90 border border-rose-600/50 rounded-full text-rose-400 font-mono text-[11px] sm:text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(225,29,72,0.15)] hover:bg-rose-600 hover:text-white hover:shadow-[0_0_25px_rgba(225,29,72,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex-shrink-0"
        >
          <span className="hidden sm:inline">Contact System</span>
          <span className="inline sm:hidden">Contact</span>
          <Send size={11} className="sm:w-3 sm:h-3" />
        </button>
      </div>
    </header>
  );
};
