import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./ui/Reveal";

export const About: React.FC = () => {
  const { personal, education } = PORTFOLIO_DATA;

  const facts = [
    {
      label: "Education",
      value: `${education.program}, ${education.institution}`,
      meta: education.status,
    },
    {
      label: "Location",
      value: personal.location,
      meta: "Open to remote / hybrid",
    },
    {
      label: "Focus",
      value: "Data & AI Engineering · MLOps · Analytics",
      meta: education.focus,
    },
    {
      label: "Availability",
      value: personal.statusText,
      meta: "Response within 1-2 business days",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeading
        id="about-title"
        index="01"
        kicker="About"
        title="How I work"
        subtitle="Background, technical focus, and how I turn ambiguous problems into systems people can actually use."
      />

      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <Reveal>
          <figure className="lg:sticky lg:top-24">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 bg-[#0e0d0b]">
              <Image
                src={personal.profileImage}
                alt={`Portrait of ${personal.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover object-top grayscale-[25%] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#c9c4bc]">{personal.name}</span>
                <span className="text-[#ff5a2b]">Data &amp; AI</span>
              </figcaption>
            </div>
            <p className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-[#8c8781]">
              <span>Jakarta, Indonesia</span>
              <span>Portrait / 2026</span>
            </p>
          </figure>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <p className="max-w-2xl font-display text-[clamp(1.5rem,2.7vw,2.15rem)] leading-[1.32] text-[#f4f1ea]">
              “I enjoy the messy parts: dirty data, misleading metrics, and models that still have to
              be explained.”
            </p>
          </Reveal>

          <div className="mt-7 max-w-2xl space-y-4 text-[14px] leading-[1.8] text-[#8f8a83]">
            <p>{personal.description}</p>
            <p>
              I’m used to working end to end: cleaning raw data, choosing and evaluating models, then
              packaging them into APIs or dashboards that non-technical people can use. Leading capstone
              teams and supporting an HPC lab taught me to explain technical decisions without
              unnecessary jargon.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {facts.map((fact, index) => (
              <Reveal
                key={fact.label}
                delay={120 + index * 60}
                className="border-t border-white/10 py-4"
              >
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8c8781]">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-[13px] leading-snug text-[#e5e0d8]">{fact.value}</dd>
                <dd className="mt-1 text-[11.5px] leading-relaxed text-[#8c8781]">{fact.meta}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
