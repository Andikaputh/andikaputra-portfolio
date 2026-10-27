"use client";

import React, { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";
import { ProjectCover } from "./ProjectCover";
import { Reveal } from "./ui/Reveal";

type FilterId = "all" | "academic" | "mlops" | "tools";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "academic", label: "Academic" },
  { id: "mlops", label: "AI & MLOps" },
  { id: "tools", label: "Tools & Web" },
];

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<FilterId>("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (filter === "academic") {
        return (
          p.category.includes("Academic") ||
          p.category.includes("Bootcamp") ||
          p.tag.includes("UG") ||
          p.tag.includes("DBS")
        );
      }
      if (filter === "mlops") {
        return (
          p.category.includes("MLOps") ||
          p.category.includes("GenAI") ||
          p.category.includes("NLP") ||
          p.category.includes("Pipelines") ||
          p.category.includes("Machine Learning")
        );
      }
      if (filter === "tools") {
        return p.category.includes("Tools") || p.category.includes("Interactive");
      }
      return true;
    });
  }, [filter, projects]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--ry", `${(x / rect.width - 0.5) * 2.4}deg`);
    el.style.setProperty("--rx", `${-(y / rect.height - 0.5) * 2.4}deg`);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20"
    >
      <SectionHeading
        id="work-title"
        index="04"
        kicker="Work"
        title="Selected work"
        subtitle="Nine systems built and documented: from clinical ML and fraud decisioning to mission-aware recommendations."
      >
        <div className="flex items-center justify-between gap-6">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="no-scrollbar flex items-center gap-x-5 gap-y-2 overflow-x-auto font-mono text-[10px] uppercase tracking-[0.16em]"
          >
            {FILTERS.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={active}
                  className={`relative cursor-pointer whitespace-nowrap pb-2 transition-colors ${
                    active ? "text-[#f4f1ea]" : "text-[#8c8781] hover:text-[#c9c4bc]"
                  }`}
                >
                  {item.label}
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
          <span className="hidden shrink-0 font-mono text-[10px] tracking-[0.16em] text-[#8c8781] sm:block">
            {String(filteredProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {filteredProjects.map((project, position) => {
          const sourceIndex = projects.findIndex((item) => item.title === project.title);
          const index = String(sourceIndex + 1).padStart(2, "0");
          const isWide = project.featured && filter === "all";

          return (
            <Reveal
              key={project.title}
              delay={Math.min(position, 4) * 60}
              className={isWide ? "md:col-span-2" : ""}
            >
              <article
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className={`group relative h-full overflow-hidden rounded-sm border border-white/10 bg-[#0c0b0a] transition-[transform,border-color] duration-300 ease-out will-change-transform hover:border-white/25 [transform:perspective(1200px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] ${
                  isWide ? "md:grid md:grid-cols-2" : "flex flex-col"
                }`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(540px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,43,0.10), transparent 46%)",
                  }}
                />

                <ProjectCover
                  cover={project.cover}
                  index={index}
                  tag={project.tag}
                  featured={project.featured}
                  className={
                    isWide
                      ? "md:h-full md:min-h-[280px] md:border-b-0 md:border-r"
                      : ""
                  }
                />

                <div className="relative z-10 flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#ff5a2b]">
                        {project.category}
                      </p>
                      <span className="font-mono text-[9.5px] text-[#8c8781]">{index}</span>
                    </div>

                    <h3 className="mt-2 font-display text-[22px] leading-[1.1] text-[#f4f1ea] sm:text-[24px]">
                      {project.title}
                    </h3>

                    {project.context && (
                      <p className="mt-1.5 font-mono text-[10px] leading-relaxed text-[#8c8781]">
                        {project.context}
                      </p>
                    )}

                    <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-[#8f8a83]">
                      {project.desc}
                    </p>

                    {project.metrics && (
                      <p className="mt-4 border-l border-[#ff5a2b]/50 pl-3 font-mono text-[10px] leading-relaxed text-[#c9c4bc]">
                        {project.metrics}
                      </p>
                    )}

                    <ul
                      aria-label="Technologies used"
                      className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] text-[#8c8781]"
                    >
                      {project.tech.map((tech, techIndex) => (
                        <li key={tech} className="flex items-center gap-2.5">
                          {tech}
                          {techIndex < project.tech.length - 1 && (
                            <span aria-hidden className="text-[#3a3731]">
                              /
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-end justify-between gap-4 border-t border-white/[0.07] pt-4">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em]">
                      {project.codeUrl ? (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-[#c9c4bc] transition-colors hover:text-[#ff5a2b]"
                        >
                          Code
                          <FaGithub size={12} aria-hidden />
                        </a>
                      ) : (
                        <span className="text-[#8c8781]">Private repository</span>
                      )}

                      {project.deployUrl && (
                        <a
                          href={project.deployUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-[#c9c4bc] transition-colors hover:text-[#ff5a2b]"
                        >
                          Live demo
                          <ArrowUpRight size={12} aria-hidden />
                        </a>
                      )}
                    </div>

                    <ArrowUpRight
                      aria-hidden
                      size={16}
                      className="shrink-0 text-[#403c36] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff5a2b]"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-16 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-[#8c8781]">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
};
