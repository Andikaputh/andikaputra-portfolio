"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Cpu, Users, MapPin, Calendar, CheckCircle2, Briefcase } from "lucide-react";

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<"technical" | "leadership">("technical");

  const filteredExperiences = experiences.filter((item) => item.type === filter);

  return (
    <section className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header & Filter Switch */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-rose-500 font-mono text-lg font-normal">04.</span> Experience Timeline
          </h3>
          <div className="h-[1px] bg-neutral-800 hidden sm:block w-32" />
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-full font-mono text-xs">
          <button
            onClick={() => setFilter("technical")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              filter === "technical"
                ? "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.5)] font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Cpu size={13} />
            <span>Technical & AI</span>
          </button>
          <button
            onClick={() => setFilter("leadership")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              filter === "leadership"
                ? "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.5)] font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Users size={13} />
            <span>Leadership & Volunteer</span>
          </button>
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative ml-2 sm:ml-6 pl-6 sm:pl-8 border-l-2 border-neutral-800 space-y-8">
        {filteredExperiences.map((item, index) => {
          const isCurrent = item.period.toLowerCase().includes("present");

          return (
            <div key={index} className="relative group">
              {/* Timeline Node Dot / Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isCurrent
                    ? "bg-neutral-950 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                    : "bg-neutral-950 border-rose-600 group-hover:border-rose-400 group-hover:scale-110"
                }`}
              >
                {isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                )}
              </div>

              {/* Experience Card */}
              <div
                className={`bg-neutral-900/80 border rounded-3xl p-6 backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 hover:-translate-y-1 ${
                  isCurrent
                    ? "border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-neutral-900/90"
                    : "border-neutral-800 hover:border-rose-600/40"
                }`}
              >
                {/* Top Title & Period Info */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-neutral-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold tracking-wider uppercase animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          PRESENT / ACTIVE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center flex-wrap gap-2 text-xs mt-1">
                      <span className="text-rose-400 font-mono font-semibold">{item.role}</span>
                      <span className="text-neutral-600">•</span>
                      <span className="text-neutral-300 font-medium">{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs">
                    <span
                      className={`px-3 py-1 rounded-full flex items-center gap-1.5 border font-semibold ${
                        isCurrent
                          ? "text-emerald-400 bg-emerald-950/40 border-emerald-500/40"
                          : "text-rose-400 bg-rose-950/40 border-rose-600/30"
                      }`}
                    >
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="text-neutral-500 text-[10px] flex items-center gap-1 mt-0.5">
                        <MapPin size={10} />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 text-neutral-300 text-xs lg:text-sm leading-relaxed">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={14}
                        className={`flex-shrink-0 mt-0.5 ${
                          isCurrent ? "text-emerald-400" : "text-rose-500"
                        }`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                {item.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800/60">
                    {item.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10.5px] px-2.5 py-0.5 bg-neutral-800/60 border border-neutral-700/70 text-neutral-300 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};