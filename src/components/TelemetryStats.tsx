"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const TelemetryStats: React.FC = () => {
  const { metrics } = PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 backdrop-blur-md shadow-lg hover:border-rose-600/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
            {metric.label}
          </span>
          <div className="my-1">
            <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_12px_rgba(225,29,72,0.3)]">
              {metric.value}
            </span>
          </div>
          <span className="font-mono text-[10px] text-rose-400 font-medium">
            {metric.sub}
          </span>
        </div>
      ))}
    </div>
  );
};