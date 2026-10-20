"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { TelemetryStats } from "./TelemetryStats";

interface HeroProps {
  onNavigateToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToProjects }) => {
  const { personal } = PORTFOLIO_DATA;
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = personal.typingWords[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % personal.typingWords.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, personal.typingWords]);

  return (
    <section className="w-full max-w-6xl mx-auto space-y-6">
      {/* Top Bento Row: Main Bio + Profile Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: Primary Bio Card (Span 2 cols) */}
        <div className="lg:col-span-2 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-5 sm:p-6 lg:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-6 hover:border-rose-600/30 transition-all duration-300">
          <div className="space-y-4">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/40 border border-rose-600/30 text-rose-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>{personal.statusText}</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-extrabold tracking-tight leading-tight mb-3">
                {personal.name}.
              </h1>
              
              {/* Headline simetris */}
              <div className="text-lg sm:text-xl lg:text-3xl font-bold tracking-tight leading-snug flex items-baseline flex-wrap gap-x-2">
                <span className="text-white">and i build</span>
                <span className="text-rose-500 drop-shadow-[0_0_15px_rgba(225,29,72,0.6)]">
                  {personal.typingWords[textIndex].substring(0, charIndex)}
                </span>
                <span className="w-[3px] h-5 sm:h-6 lg:h-7 bg-rose-500 animate-pulse inline-block self-center ml-0.5" />
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-neutral-400 text-xs lg:text-sm leading-relaxed max-w-xl">
              {personal.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 pt-2 flex-wrap">
            <button
              onClick={onNavigateToProjects}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-rose-600 text-white font-mono font-bold text-xs rounded-full shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:bg-rose-500 hover:shadow-[0_0_30px_rgba(225,29,72,0.7)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex-1 sm:flex-initial"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>
            <a
              href={personal.cvPath}
              download
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-neutral-900 border border-neutral-700 text-neutral-200 font-mono font-bold text-xs rounded-full backdrop-blur-md hover:border-rose-500 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex-1 sm:flex-initial"
            >
              <Download size={14} className="text-rose-500" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Card 2: Full-Cover Profile Card */}
        <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl group hover:border-rose-600/50 transition-all duration-500 min-h-[320px] sm:min-h-[380px] lg:min-h-full flex flex-col justify-end p-5">
          {/* Background Image Full Cover */}
          <Image
            src={personal.profileImage}
            alt={personal.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 z-0"
            priority
          />

          {/* Dark Gradient Overlay di bagian bawah foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />

          {/* Floating Info Tag di bagian bawah foto */}
          <div className="relative z-20 bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-4 backdrop-blur-md shadow-lg group-hover:border-rose-600/40 transition-colors duration-300">
            <h3 className="text-white font-bold text-sm tracking-tight flex items-center justify-between">
              <span>{personal.name}</span>
              <Sparkles size={14} className="text-rose-500" />
            </h3>
            <p className="text-rose-400 font-mono text-[11px] font-semibold mt-0.5">
              Data & AI Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bento Row: Live Telemetry Cards */}
      <TelemetryStats />
    </section>
  );
};
