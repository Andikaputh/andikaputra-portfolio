import React from "react";
import {
  Activity,
  BarChart3,
  Brain,
  FileCode2,
  FileText,
  Keyboard,
  Layers,
  MessagesSquare,
  ScanFace,
  type LucideIcon,
} from "lucide-react";

export type CoverIcon =
  | "brain"
  | "scan"
  | "layers"
  | "file"
  | "chat"
  | "activity"
  | "chart"
  | "document"
  | "keyboard";

export interface ProjectCoverData {
  label: string;
  icon: CoverIcon;
}

const ICONS: Record<CoverIcon, LucideIcon> = {
  brain: Brain,
  scan: ScanFace,
  layers: Layers,
  file: FileText,
  chat: MessagesSquare,
  activity: Activity,
  chart: BarChart3,
  document: FileCode2,
  keyboard: Keyboard,
};

interface ProjectCoverProps {
  cover: ProjectCoverData;
  index: string;
  tag: string;
  featured?: boolean;
  className?: string;
}

/**
 * Cover generatif bergaya blueprint: monokrom + satu aksen oranye.
 * Tidak memakai screenshot palsu maupun foto stok.
 */
export const ProjectCover: React.FC<ProjectCoverProps> = ({
  cover,
  index,
  tag,
  featured,
  className = "",
}) => {
  const Icon = ICONS[cover.icon] ?? Brain;

  return (
    <div
      className={`relative w-full overflow-hidden border-b border-white/10 bg-[#0c0b0a] ${
        featured ? "h-48" : "h-44"
      } ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] [background-size:28px_28px]"
      />

      {/* Nomor indeks besar */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-3 right-3 font-display text-[92px] leading-none text-white/[0.045] transition-colors duration-500 group-hover:text-white/[0.07]"
      >
        {index}
      </span>

      {/* Radar / inti work */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full border border-white/10">
          <div className="absolute inset-2 rounded-full border border-dashed border-white/10" />
          <span className="absolute -left-6 top-1/2 h-px w-4 bg-white/15" />
          <span className="absolute -right-6 top-1/2 h-px w-4 bg-white/15" />
          <span className="absolute -top-6 left-1/2 h-4 w-px bg-white/15" />
          <span className="absolute -bottom-6 left-1/2 h-4 w-px bg-white/15" />
          <Icon
            size={38}
            strokeWidth={1}
            className="text-[#ff5a2b]/70 transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[#ff5a2b]" />
        </div>
      </div>

      {/* Penanda sudut */}
      <span aria-hidden className="absolute left-3 top-3 h-2 w-2 border-l border-t border-white/20" />
      <span aria-hidden className="absolute bottom-3 right-3 h-2 w-2 border-b border-r border-white/20" />

      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#c9c4bc]">
          <span className="h-1 w-1 rounded-full bg-[#ff5a2b]" aria-hidden />
          {tag}
        </span>
        {featured && (
          <span className="border border-[#ff5a2b]/30 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-[#ff5a2b]">
            Flagship
          </span>
        )}
      </div>

      <div className="absolute inset-x-4 bottom-4">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8c8781]">
          <span className="h-px w-4 bg-[#ff5a2b]/70 transition-all duration-500 group-hover:w-8" />
          <span className="truncate">{cover.label}</span>
        </div>
        <div className="mt-3 flex items-center gap-1.5" aria-hidden>
          <span className="h-1 w-1 rounded-full bg-[#57534c]" />
          <span className="h-px flex-1 bg-white/10" />
          <span className="h-1 w-1 rounded-full bg-[#57534c]" />
          <span className="h-px flex-1 bg-white/10" />
          <span className="h-1 w-1 rounded-full bg-[#ff5a2b]/80" />
        </div>
      </div>
    </div>
  );
};
