import React from "react";
import { ArrowDownRight, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { PipelineScene } from "./PipelineScene";
import { Reveal } from "./ui/Reveal";

export const Hero: React.FC = () => {
  const { personal, metrics } = PORTFOLIO_DATA;

  return (
    <section
      id="overview"
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pt-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="flex flex-col items-start gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.18em] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
              <span className="flex items-center gap-2 text-[#f4f1ea]">
                <span className="relative flex h-1.5 w-1.5" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a2b] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ff5a2b]" />
                </span>
                {personal.statusText}
              </span>
              <span aria-hidden className="hidden text-[#3a3731] sm:inline">
                /
              </span>
              <span className="text-[#8c8781]">{personal.location}</span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-[clamp(3.2rem,8.4vw,6.4rem)] font-normal leading-[0.87] tracking-[-0.02em] text-[#f4f1ea]"
            >
              Andika
              <span className="block">
                <span className="italic">Putra</span> Perdana
                <span className="text-[#ff5a2b]">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 max-w-lg text-[15px] leading-[1.75] text-[#a5a09a] sm:text-[16px]">
              {personal.tagline}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-[#f4f1ea] px-5 py-3 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#08090b] transition-colors duration-300 hover:bg-[#ff5a2b]"
              >
                View work
                <ArrowDownRight
                  size={14}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={personal.cvPath}
                download
                className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#c9c4bc] transition-colors duration-300 hover:border-white/40 hover:text-[#f4f1ea]"
              >
                Download CV
                <Download size={13} aria-hidden />
              </a>
            </div>

            <p className="mt-4 font-mono text-[10px] tracking-[0.06em] text-[#8c8781]">
              or email me at{" "}
              <a
                href={`mailto:${personal.email}`}
                className="text-[#8c8781] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#ff5a2b] hover:decoration-[#ff5a2b]/50"
              >
                {personal.email}
              </a>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mt-10 grid grid-cols-3 border-t border-white/10">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`py-5 pr-4 ${index > 0 ? "border-l border-white/10 pl-4 sm:pl-6" : ""}`}
                >
                  <dd className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-none text-[#f4f1ea]">
                    {metric.value}
                  </dd>
                  <dt className="mt-2.5 font-mono text-[8.5px] uppercase leading-relaxed tracking-[0.14em] text-[#8c8781]">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 hidden text-[10px] leading-relaxed text-[#8c8781] sm:block">
                    {metric.sub}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-[#8c8781]">
            <span className="flex items-center gap-2">
              <span className="h-px w-5 bg-[#ff5a2b]/60" aria-hidden />
              MLOps pipeline
            </span>
            <span>Interactive / 3D</span>
          </div>
          <PipelineScene />
        </Reveal>
      </div>
    </section>
  );
};
