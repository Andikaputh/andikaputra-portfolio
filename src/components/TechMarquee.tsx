import React from "react";

const TECHS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "Docker",
  "Kafka",
  "PostgreSQL",
  "MLflow",
  "ChromaDB",
  "Tableau",
  "Next.js",
  "SQL",
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#08090b] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#08090b] to-transparent"
      />

      <div className="flex w-max animate-[marquee_48s_linear_infinite] hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            aria-label={copy === 0 ? "Technologies used" : undefined}
            className={`flex items-center ${copy === 1 ? "motion-reduce:hidden" : ""}`}
          >
            {TECHS.map((tech) => (
              <li
                key={tech}
                className="flex items-center whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#8c8781]"
              >
                <span aria-hidden className="mx-5 h-1 w-1 rounded-full bg-[#ff5a2b]/60" />
                {tech}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
