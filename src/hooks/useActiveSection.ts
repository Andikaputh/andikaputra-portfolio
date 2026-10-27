"use client";

import { useEffect, useState } from "react";

export const SECTION_IDS = [
  "overview",
  "about",
  "skills",
  "experience",
  "work",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/**
 * Menentukan section yang sedang aktif berdasarkan posisi scroll.
 * Dipakai oleh navigasi atas (desktop) dan dock (mobile).
 */
export function useActiveSection(): string {
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const update = () => {
      const markers = SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => Boolean(el)
      );
      if (markers.length === 0) return;

      const threshold = window.innerHeight * 0.3;
      let current = markers[0].id;

      for (const section of markers) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = markers[markers.length - 1].id;

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return active;
}
