"use client";

import React, { useMemo, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./ui/Reveal";

type ExperienceFilter = "technical" | "leadership";

const FILTERS: { id: ExperienceFilter; label: string }[] = [
  { id: "technical", label: "Technical & AI" },
  { id: "leadership", label: "Leadership" },
];

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<ExperienceFilter>("technical");

  const filteredExperiences = useMemo(
    () => experiences.filter((item) => item.type === filter),
    [experiences, filter]
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeading
        id="experience-title"
        index="03"
        kicker="Experience"
        title="Track record"
        subtitle="Technical, research, and leadership roles that shaped how I work."
      >
        <div
          role="group"
          aria-label="Filter experience type"
          className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.16em]"
        >
          {FILTERS.map(({ id, label }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={active}
                className={`relative cursor-pointer pb-2 transition-colors ${
                  active ? "text-[#f4f1ea]" : "text-[#8c8781] hover:text-[#c9c4bc]"
                }`}
              >
                {label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#ff5a2b] transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </SectionHeading>

      <ol className="border-t border-white/10">
        {filteredExperiences.map((item, index) => {
          const isCurrent = item.period.toLowerCase().includes("present");

          return (
            <Reveal
              as="li"
              key={`${item.title}-${item.company}`}
              delay={Math.min(index, 4) * 60}
              className="group grid gap-4 border-b border-white/10 py-8 md:grid-cols-[190px_1fr] md:gap-10"
            >
              <div className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em]">
                <p className={isCurrent ? "text-[#ff5a2b]" : "text-[#8c8781]"}>
                  {item.period}
                </p>
                {item.location && (
                  <p className="mt-1 normal-case tracking-normal text-[#8c8781]">
                    {item.location}
                  </p>
                )}
                {isCurrent && (
                  <p className="mt-3 flex items-center gap-1.5 normal-case text-[#8c8781]">
                    <span className="h-1 w-1 rounded-full bg-[#ff5a2b]" aria-hidden />
                    Ongoing
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-display text-[22px] leading-[1.15] text-[#f4f1ea] sm:text-[25px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed">
                  <span className="text-[#ff5a2b]">{item.role}</span>
                  <span aria-hidden className="mx-2 text-[#3a3731]">
                    /
                  </span>
                  <span className="text-[#8c8781]">{item.company}</span>
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-[13.5px] leading-relaxed text-[#8f8a83] before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2 before:bg-[#57534c]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                {item.skills && (
                  <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8c8781]">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="transition-colors group-hover:text-[#8c8781]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
};
