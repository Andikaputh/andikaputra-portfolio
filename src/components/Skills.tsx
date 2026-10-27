import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./ui/Reveal";

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeading
        id="skills-title"
        index="02"
        kicker="Skills"
        title="Toolkit"
        subtitle="What I use day to day, grouped by function. Not just a wall of logos."
      />

      <div className="border-t border-white/10">
        {skills.map((skillBox, boxIndex) => (
          <Reveal
            key={skillBox.category}
            delay={boxIndex * 80}
            className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <div>
              <p className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#ff5a2b]">
                <span className="h-1 w-1 rounded-full bg-[#ff5a2b]" aria-hidden />
                {skillBox.badge}
              </p>
              <h3 className="mt-2 font-display text-[21px] leading-tight text-[#f4f1ea]">
                {skillBox.category}
              </h3>
            </div>

            <div className="space-y-5">
              {skillBox.groups.map((group) => (
                <div key={group.label} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6">
                  <h4 className="font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.16em] text-[#8c8781] sm:pt-1">
                    {group.label}
                  </h4>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                    {group.items.map((item) => {
                      const Icon = item.Icon;
                      return (
                        <li
                          key={item.name}
                          className="group flex items-center gap-2 text-[13px] text-[#c9c4bc]"
                        >
                          <Icon
                            size={14}
                            aria-hidden
                            className="text-[#8c8781] transition-colors duration-300 group-hover:text-[#ff5a2b]"
                          />
                          <span>{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
