"use client";

import React from "react";
import {
  LayoutDashboard,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const DOCK_ITEMS: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "work", label: "Work", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

/**
 * Dock navigasi khusus mobile. Di desktop, navigasi ditangani header.
 */
export const BentoDock: React.FC = () => {
  const active = useActiveSection();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <nav
        aria-label="Page section navigation"
        className="flex items-center gap-0.5 rounded-full border border-white/10 bg-[#0c0b0a]/90 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl"
      >
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              aria-label={item.label}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                isActive
                  ? "text-[#ff5a2b]"
                  : "text-[#8c8781] hover:text-[#c9c4bc]"
              }`}
            >
              <Icon size={16} aria-hidden />
              {isActive && (
                <span
                  aria-hidden
                  className="absolute bottom-1 h-0.5 w-1 rounded-full bg-[#ff5a2b]"
                />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
