"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Code2, Terminal } from "lucide-react";

export const About: React.FC = () => {
  const { personal, codeCard } = PORTFOLIO_DATA;

  return (
    <section className="w-full max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-rose-500 font-mono text-lg font-normal">02.</span> About & Architecture
        </h3>
        <div className="h-[1px] bg-neutral-800 flex-1 max-w-[260px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Bento: Narrative */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 lg:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between space-y-4 hover:border-rose-600/30 transition-all duration-300">
          <div className="space-y-4 text-neutral-300 text-xs lg:text-sm leading-relaxed">
            <p>{personal.description}</p>
            <p>
              Berpengalaman memimpin Capstone Project dalam perancangan aplikasi berbasis AI, melakukan analisis statistik data publik, serta mengoptimalkan alur pemrosesan streaming data berkecepatan tinggi.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="text-neutral-500 text-[10px] uppercase block">Location</span>
              <span className="text-white font-semibold">East Jakarta, Indonesia</span>
            </div>
            <div>
              <span className="text-neutral-500 text-[10px] uppercase block">Focus Area</span>
              <span className="text-rose-400 font-semibold">Data & AI Engineering</span>
            </div>
          </div>
        </div>

        {/* Right Bento: Interactive Code IDE Card */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl font-mono text-xs hover:border-rose-600/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-neutral-500 text-[11px] ml-2">engine.py</span>
            </div>
            <Code2 size={14} className="text-rose-500" />
          </div>

          <pre className="text-neutral-300 leading-relaxed overflow-x-auto p-2 bg-neutral-950/60 rounded-xl border border-neutral-800/60">
            <code>
              <span className="text-rose-400 font-semibold">class </span>
              <span className="text-white font-bold">{codeCard.className}</span> &#123;{"\n"}
              {"  "}
              <span className="text-rose-300">roles</span> = [{"\n"}
              {codeCard.roles.map((r, idx) => (
                <React.Fragment key={idx}>
                  {"    "}
                  <span className="text-emerald-400">&quot;{r}&quot;</span>
                  {idx < codeCard.roles.length - 1 ? "," : ""}
                  {"\n"}
                </React.Fragment>
              ))}
              {"  "}];{"\n\n"}
              {"  "}
              <span className="text-amber-400">getCurrentFocus</span>() &#123;{"\n"}
              {"    "}
              <span className="text-rose-400">return</span> [{"\n"}
              {codeCard.focus.map((f, idx) => (
                <React.Fragment key={idx}>
                  {"      "}
                  <span className="text-rose-300">&quot;{f}&quot;</span>
                  {idx < codeCard.focus.length - 1 ? "," : ""}
                  {"\n"}
                </React.Fragment>
              ))}
              {"    "}];{"\n"}
              {"  "}&#125;{"\n"}
              &#125;
              <span className="text-rose-500 font-bold animate-pulse">|</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};