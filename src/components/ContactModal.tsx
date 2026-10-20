"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS configuration missing. Please define NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your environment variables."
      );
      setLoading(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        formData,
        publicKey
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Gagal mengirim email via EmailJS:", error);
        setLoading(false);
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#09090b] border border-rose-600/40 rounded-2xl p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(225,29,72,0.2)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-neutral-400 hover:text-rose-400 p-1 rounded-lg hover:bg-neutral-800/60 transition-colors"
        >
          <X size={20} />
        </button>

        {!success ? (
          <>
            <div className="mb-6">
              <span className="font-mono text-rose-500 text-[11px] font-semibold tracking-wider uppercase">
                GET IN TOUCH
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                Let’s Build Something Together.
              </h2>
              <p className="text-neutral-400 text-xs mt-1">
                Silakan isi detail di bawah ini, saya akan merespons melalui email Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-neutral-300 font-medium">Nama Lengkap</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/80 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-neutral-300 font-medium">Alamat Email</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="john@example.com"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/80 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-neutral-300 font-medium">Kebutuhan / Layanan</label>
                <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/80 transition-all"
                >
                  <option value="" className="bg-neutral-900 text-neutral-400">Pilih Fokus Proyek</option>
                  <option value="Data Science & ML" className="bg-neutral-900">Data Science & ML</option>
                  <option value="AI Project & OCR" className="bg-neutral-900">AI Project & System</option>
                  <option value="Data Pipeline" className="bg-neutral-900">Data Pipeline & Engineering</option>
                  <option value="Collaboration" className="bg-neutral-900">Kolaborasi / Freelance</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-neutral-300 font-medium">Pesan Anda</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Ceritakan gambaran singkat proyek Anda..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/80 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-semibold rounded-xl shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? "Sending..." : "Kirim Pesan"}</span>
                <Send size={14} />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 size={48} className="text-rose-500 mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-white">Pesan Terkirim! 🚀</h3>
            <p className="text-neutral-400 text-xs">
              Terima kasih sudah menghubungi. Saya akan segera membalas email Anda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2 bg-rose-950/40 border border-rose-500/40 text-rose-400 text-xs font-mono font-semibold rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-[0_0_15px_rgba(225,29,72,0.2)]"
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
