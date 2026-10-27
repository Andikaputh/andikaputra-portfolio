"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Reveal } from "./ui/Reveal";

interface ContactSectionProps {
  onOpenContact: () => void;
}

const SOCIALS = [
  { key: "github", label: "GitHub", handle: "@Andikaputh", Icon: FaGithub },
  { key: "linkedin", label: "LinkedIn", handle: "andikaputraperdana", Icon: FaLinkedin },
  { key: "instagram", label: "Instagram", handle: "@andikaa_a_", Icon: FaInstagram },
] as const;

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  const { personal, education } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const markCopied = () => {
    setCopied(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 2200);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      markCopied();
      return;
    } catch {
      // Fallback untuk browser/konteks yang memblokir Clipboard API
    }

    const textarea = document.createElement("textarea");
    textarea.value = personal.email;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      if (document.execCommand("copy")) {
        markCopied();
      } else {
        window.location.href = `mailto:${personal.email}`;
      }
    } catch {
      window.location.href = `mailto:${personal.email}`;
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const facts = [
    {
      label: "Availability",
      value: personal.statusText,
      meta: "Full-time · contract · research collaboration",
    },
    {
      label: "Location",
      value: personal.location,
      meta: "Remote / hybrid · WIB (UTC+7)",
    },
    {
      label: "Response",
      value: "1-2 business days",
      meta: "Via email, LinkedIn, or the form",
    },
    {
      label: "Education",
      value: `${education.program}, ${education.institution}`,
      meta: education.status,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="border-t border-white/10 pt-10 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
                <span className="text-[#ff5a2b]">05</span>
                <span aria-hidden className="h-px w-8 bg-[#ff5a2b]/40" />
                <span className="text-[#8c8781]">Contact</span>
              </div>

              <h2
                id="contact-title"
                className="mt-5 max-w-xl font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.96] text-[#f4f1ea]"
              >
                Have a problem worth <span className="italic text-[#ff5a2b]">solving</span>?
              </h2>

              <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-[#8c8781]">
                Share the context and the goal. I’ll respond with a realistic approach, even if the
                smartest solution isn’t machine learning.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-9">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8c8781]">
                  Email
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="group mt-2 inline-flex max-w-full items-center gap-2.5 border-b border-white/20 pb-1.5 font-display text-[clamp(1.3rem,3.2vw,2.1rem)] leading-tight text-[#f4f1ea] transition-colors duration-300 hover:border-[#ff5a2b] hover:text-[#ff5a2b]"
                >
                  <span className="break-all">{personal.email}</span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c9c4bc] transition-colors duration-300 hover:border-[#ff5a2b] hover:text-[#ff5a2b]"
                  >
                    {copied ? (
                      <Check size={12} aria-hidden className="text-[#ff5a2b]" />
                    ) : (
                      <Copy size={12} aria-hidden />
                    )}
                    <span>{copied ? "Copied" : "Copy email"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.14em] text-[#8c8781] underline decoration-white/15 underline-offset-4 transition-colors hover:text-[#f4f1ea]"
                  >
                    or use the short form
                  </button>

                  <span aria-live="polite" className="sr-only">
                    {copied ? "Email address copied to clipboard" : ""}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <dl className="border-t border-white/10">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[100px_1fr] gap-4 border-b border-white/10 py-4"
                >
                  <dt className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-[#8c8781]">
                    {fact.label}
                  </dt>
                  <dd>
                    <p className="text-[12.5px] leading-snug text-[#e5e0d8]">{fact.value}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#8c8781]">{fact.meta}</p>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#8c8781]">
                Elsewhere
              </p>
              <ul>
                {SOCIALS.map(({ key, label, handle, Icon }) => (
                  <li key={key}>
                    <a
                      href={personal.socials[key]}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 border-b border-white/10 py-3 transition-colors hover:border-white/25"
                    >
                      <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#c9c4bc] transition-colors group-hover:text-[#f4f1ea]">
                        <Icon size={13} aria-hidden className="text-[#8c8781]" />
                        {label}
                      </span>
                      <span className="flex items-center gap-2 font-mono text-[9.5px] text-[#8c8781]">
                        {handle}
                        <ArrowUpRight
                          size={12}
                          aria-hidden
                          className="transition-colors group-hover:text-[#ff5a2b]"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={personal.cvPath}
              download
              className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8c8781] transition-colors hover:text-[#ff5a2b]"
            >
              <Download size={13} aria-hidden />
              Download CV (PDF)
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
