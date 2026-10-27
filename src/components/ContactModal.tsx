"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMPTY_FORM = {
  from_name: "",
  from_email: "",
  interest: "",
  message: "",
};

const inputClass =
  "w-full rounded-none border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-[#f4f1ea] placeholder:text-[#8c8781] transition-colors focus:border-[#ff5a2b] focus:outline-none";

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Kunci scroll body + kelola fokus saat modal terbuka
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  // Fokus awal: field pertama, atau panel setelah pesan terkirim
  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => {
      if (success) {
        panelRef.current?.focus();
      } else {
        firstFieldRef.current?.focus();
      }
    }, 50);
    return () => window.clearTimeout(timer);
  }, [isOpen, success]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (loading) return;
    setError(null);
    setSuccess(false);
    setFormData(EMPTY_FORM);
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "The contact form isn’t configured yet. Please email me directly at"
      );
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setSuccess(true);
      setFormData(EMPTY_FORM);
    } catch (sendError) {
      console.error("Gagal mengirim email via EmailJS:", sendError);
      setError("Message wasn’t sent. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Focus trap sederhana agar fokus tidak keluar dari dialog
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panelRef.current) return;

    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/85 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-sm border border-white/10 bg-[#0b0a09] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.8)] md:p-8"
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5a2b]/70 to-transparent"
        />

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close contact form"
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center text-[#8c8781] transition-colors hover:text-[#f4f1ea]"
        >
          <X size={18} aria-hidden />
        </button>

        {!success ? (
          <>
            <div className="mb-6 pr-8">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#ff5a2b]">
                Quick brief
              </span>
              <h2
                id="contact-modal-title"
                className="mt-2 font-display text-[26px] leading-tight text-[#f4f1ea] md:text-[30px]"
              >
                Let’s build something.
              </h2>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#8c8781]">
                Share a few details below. I’ll get back to you by email within 1-2 business days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="from_name"
                    className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8c8781]"
                  >
                    Full name
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="from_name"
                    type="text"
                    name="from_name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="from_email"
                    className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8c8781]"
                  >
                    Email address
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    required
                    autoComplete="email"
                    placeholder="name@email.com"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="interest"
                  className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8c8781]"
                >
                  What do you need?
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="">Select a project focus</option>
                  <option value="Data Science & ML">Data Science &amp; ML</option>
                  <option value="AI Project & System">AI Project &amp; System</option>
                  <option value="Data Pipeline">Data Pipeline &amp; Engineering</option>
                  <option value="Collaboration">Collaboration / Freelance</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8c8781]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me briefly about the project or role you have in mind..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="flex items-start gap-2 border-l border-[#ff5a2b] bg-[#ff5a2b]/5 p-3 text-[11.5px] leading-relaxed text-[#e5b8a6]"
                >
                  <AlertCircle size={14} aria-hidden className="mt-0.5 flex-shrink-0" />
                  <span>
                    {error}{" "}
                    <a
                      href={`mailto:${personal.email}`}
                      className="underline decoration-[#ff5a2b]/40 underline-offset-2 hover:text-[#ff5a2b]"
                    >
                      {personal.email}
                    </a>
                  </span>
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#f4f1ea] py-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#08090b] transition-colors hover:bg-[#ff5a2b] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>{loading ? "Sending..." : "Send message"}</span>
                <Send size={13} aria-hidden />
              </button>
            </form>
          </>
        ) : (
          <div className="space-y-3 py-8 text-center">
            <CheckCircle2 size={40} aria-hidden className="mx-auto text-[#ff5a2b]" />
            <h2
              id="contact-modal-title"
              className="font-display text-[26px] text-[#f4f1ea]"
            >
              Message sent
            </h2>
            <p className="mx-auto max-w-sm text-[12.5px] leading-relaxed text-[#8c8781]">
              Thanks for reaching out. I will reply to your email soon.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-4 cursor-pointer rounded-full border border-white/15 px-6 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c9c4bc] transition-colors hover:border-[#ff5a2b] hover:text-[#ff5a2b]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
