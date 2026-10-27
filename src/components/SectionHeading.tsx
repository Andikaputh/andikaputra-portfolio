import React from "react";

interface SectionHeadingProps {
  id?: string;
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

/**
 * Header section bergaya editorial: indeks mono, judul serif besar,
 * dan deskripsi pendek di kanan. Tanpa kartu dan tanpa kotak.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  index,
  kicker,
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="text-[#ff5a2b]">{index}</span>
        <span aria-hidden className="h-px w-8 bg-[#ff5a2b]/40" />
        <span className="text-[#8c8781]">{kicker}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-b border-white/10 pb-6">
        <h2
          id={id}
          className="font-display text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[0.98] text-[#f4f1ea]"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-sm text-[13px] leading-relaxed text-[#8c8781] lg:max-w-xs lg:text-right">
            {subtitle}
          </p>
        )}
      </div>

      {children && <div className="mt-5">{children}</div>}
    </div>
  );
};
