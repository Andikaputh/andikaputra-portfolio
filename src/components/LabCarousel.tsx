"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, GraduationCap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const LabCarousel: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filterCategory, setFilterCategory] = useState<"all" | "academic" | "mlops" | "tools">("all");

  const filteredProjects = projects.filter((p) => {
    if (filterCategory === "academic") {
      return (
        p.category.includes("Academic") ||
        p.category.includes("Bootcamp") ||
        p.tag.includes("UG") ||
        p.tag.includes("DBS")
      );
    }
    if (filterCategory === "mlops") {
      return (
        p.category.includes("MLOps") ||
        p.category.includes("GenAI") ||
        p.category.includes("NLP") ||
        p.category.includes("Pipelines") ||
        p.category.includes("Machine Learning")
      );
    }
    if (filterCategory === "tools") {
      return p.category.includes("Tools") || p.category.includes("Interactive");
    }
    return true;
  });

  return (
    <section className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header & Category Filter Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-rose-500 font-mono text-base sm:text-lg font-normal">05.</span> Featured Projects
          </h3>
          <div className="h-[1px] bg-neutral-800 hidden sm:block w-32" />
        </div>

        {/* Filter Switch */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-full font-mono text-xs overflow-x-auto max-w-full no-scrollbar">
          <button
            onClick={() => setFilterCategory("all")}
            className={`px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full whitespace-nowrap transition-all cursor-pointer ${
              filterCategory === "all"
                ? "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.5)] font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            All ({projects.length})
          </button>
          <button
            onClick={() => setFilterCategory("academic")}
            className={`px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full whitespace-nowrap transition-all cursor-pointer ${
              filterCategory === "academic"
                ? "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.5)] font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Academic & Capstones
          </button>
          <button
            onClick={() => setFilterCategory("mlops")}
            className={`px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full whitespace-nowrap transition-all cursor-pointer ${
              filterCategory === "mlops"
                ? "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.5)] font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            AI & MLOps
          </button>
          <button
            onClick={() => setFilterCategory("tools")}
            className={`px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full whitespace-nowrap transition-all cursor-pointer ${
              filterCategory === "tools"
                ? "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.5)] font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Tools & Web
          </button>
        </div>
      </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`bg-neutral-900/80 border rounded-3xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
              project.featured
                ? "border-rose-600/60 shadow-[0_0_25px_rgba(225,29,72,0.15)]"
                : "border-neutral-800 hover:border-rose-600/40"
            }`}
          >
            {/* Image Banner */}
            <div className="relative w-full h-48 bg-neutral-950 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="bg-rose-950/90 border border-rose-600/50 text-rose-300 font-mono text-[10px] px-3 py-1 rounded-full font-bold backdrop-blur-md tracking-wider">
                  {project.tag}
                </span>
                {project.featured && (
                  <span className="bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono text-[10px] px-2.5 py-1 rounded-full font-bold backdrop-blur-md flex items-center gap-1">
                    <Sparkles size={10} /> FLAGSHIP
                  </span>
                )}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <h4 className="text-white text-base sm:text-lg font-bold mb-1 group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h4>

                {/* Sub-label konteks (Penulisan Ilmiah / Bootcamp) */}
                {project.context && (
                  <p className="font-mono text-[11px] text-rose-400/90 font-medium mb-2 flex items-center gap-1.5">
                    <GraduationCap size={13} className="text-rose-500 flex-shrink-0" />
                    <span>{project.context}</span>
                  </p>
                )}

                <p className="text-neutral-400 text-xs leading-relaxed mb-3">{project.desc}</p>

                {project.metrics && (
                  <span className="inline-block font-mono text-[10.5px] text-rose-400 bg-rose-950/40 border border-rose-600/30 px-2.5 py-1 rounded-md mb-3">
                    {project.metrics}
                  </span>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-neutral-300 bg-neutral-800/80 border border-neutral-700/80 px-2.5 py-0.5 rounded text-[10.5px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-4 border-t border-neutral-800/80">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-xl border border-neutral-700 bg-neutral-800/80 text-neutral-300 hover:text-white hover:border-rose-500 transition-all flex-1 sm:flex-initial"
                  >
                    <span>Source Code</span>
                    <FaGithub size={12} />
                  </a>
                )}
                {project.deployUrl && (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-xl bg-rose-600 text-white font-semibold shadow-[0_0_12px_rgba(225,29,72,0.4)] hover:bg-rose-500 hover:shadow-[0_0_20px_rgba(225,29,72,0.7)] transition-all flex-1 sm:flex-initial"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
