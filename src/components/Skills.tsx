"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Star } from "lucide-react";

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="w-full max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-rose-500 font-mono text-lg font-normal">03.</span> Tech Stack & Skills
        </h3>
        <div className="h-[1px] bg-neutral-800 flex-1 max-w-[260px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillBox, index) => (
          <div
            key={index}
            className={`relative bg-neutral-900/80 border rounded-3xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ${
              skillBox.featured
                ? "border-rose-600/50 shadow-[0_0_24px_rgba(225,29,72,0.15)] bg-neutral-900"
                : "border-neutral-800"
            }`}
          >
            {skillBox.featured && (
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-rose-600 to-transparent shadow-[0_0_12px_#e11d48]" />
            )}

            <div>
              <div className="pb-3 border-b border-neutral-800 mb-4 flex items-center justify-between">
                <div>
                  <span
                    className={`font-mono text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 ${
                      skillBox.featured ? "text-rose-500" : "text-neutral-500"
                    }`}
                  >
                    {skillBox.featured && <Star size={12} className="fill-rose-500 text-rose-500" />}
                    {skillBox.badge}
                  </span>
                  <h4 className="text-white font-bold text-lg mt-0.5">{skillBox.category}</h4>
                </div>
              </div>

              <div className="space-y-4">
                {skillBox.groups.map((group, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wide">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, itemIdx) => {
                        const Icon = item.Icon;
                        return (
                          <span
                            key={itemIdx}
                            className={`font-mono text-xs px-3 py-1.5 rounded-xl border flex items-center gap-2 transition-all duration-300 ${
                              skillBox.featured
                                ? "bg-rose-950/30 border-rose-600/30 text-rose-200 hover:border-rose-500 hover:bg-rose-900/40"
                                : "bg-neutral-800/60 border-neutral-700/80 text-neutral-300 hover:border-rose-500/50 hover:bg-neutral-800"
                            }`}
                          >
                            <Icon size={14} className={item.color || "text-rose-400"} />
                            <span>{item.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};