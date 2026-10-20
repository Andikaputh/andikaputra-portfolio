"use client";

import React from "react";
import { LayoutDashboard, User, Cpu, Briefcase, FolderGit2, Mail } from "lucide-react";

interface BentoDockProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const DOCK_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export const BentoDock: React.FC<BentoDockProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.5rem)]">
      <nav className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 bg-neutral-900/85 border border-rose-600/30 rounded-full backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(225,29,72,0.2)] max-w-full overflow-x-auto no-scrollbar">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              title={item.label}
              aria-label={item.label}
              className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer flex-shrink-0 ${
                isActive
                  ? "bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.6)]"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
              }`}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
