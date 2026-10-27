import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "figure";
}

/**
 * Animasi masuk berbasis CSS scroll-driven animation (`animation-timeline: view()`).
 * Hanya transform yang dianimasikan agar kontras teks tetap stabil saat reveal.
 * Konten tetap terlihat tanpa JavaScript, dan otomatis nonaktif pada
 * prefers-reduced-motion atau browser yang belum mendukung.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}) => {
  const Tag = as as React.ElementType;

  return (
    <Tag
      className={`reveal ${className}`}
      style={delay ? ({ animationDelay: `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
};
