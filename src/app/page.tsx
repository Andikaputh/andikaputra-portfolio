"use client";

import React, { useState } from "react";
import { BentoHeader } from "@/components/BentoHeader";
import { BentoDock } from "@/components/BentoDock";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { LabCarousel } from "@/components/LabCarousel";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen bg-[#0d0e12] text-neutral-300 font-sans overflow-x-hidden selection:bg-rose-600 selection:text-white pb-32">
      {/* Background Lighting & Grid Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#171923_0%,#0d0e12_100%)] pointer-events-none -z-20" />
      <div className="fixed -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-rose-600/10 blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 -left-20 w-[450px] h-[450px] rounded-full bg-red-900/15 blur-[140px] pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Top Header */}
      <BentoHeader onOpenContact={() => setIsModalOpen(true)} />

      {/* Main Canvas Area */}
      <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === "overview" && (
          <div className="space-y-12">
            <Hero onNavigateToProjects={() => setActiveTab("projects")} />
            <About />
            <Skills />
            <LabCarousel />
          </div>
        )}
        {activeTab === "about" && <About />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "projects" && <LabCarousel />}
        {activeTab === "contact" && (
          <section className="text-center space-y-4 max-w-lg mx-auto py-20 px-6 bg-neutral-900/80 border border-neutral-800 rounded-3xl backdrop-blur-md">
            <h3 className="text-xl font-bold text-rose-500 font-mono">GET IN TOUCH</h3>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Let’s Build Something Great.
            </h2>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Terbuka untuk kolaborasi, proyek, maupun posisi profesional di bidang Data, Machine Learning, dan AI Engineering.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-8 py-3 bg-rose-600 text-white font-mono font-bold text-xs rounded-full shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:bg-rose-500 transition-all cursor-pointer"
            >
              Open Contact Form
            </button>
          </section>
        )}
      </div>

      {/* Floating Bottom Dock Navigation */}
      <BentoDock activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}