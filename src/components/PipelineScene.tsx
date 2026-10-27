"use client";

import React, { useRef, useState } from "react";

const LAYERS = [
  { z: 0, nodes: [ { x: "26%", y: "34%" }, { x: "68%", y: "28%" }, { x: "48%", y: "64%" } ] },
  { z: 72, nodes: [ { x: "34%", y: "46%" }, { x: "72%", y: "58%" } ] },
  { z: 144, nodes: [ { x: "50%", y: "42%" } ] },
];

const LEGEND = [
  { label: "Serving", detail: "FastAPI · Docker" },
  { label: "Model", detail: "XGBoost · TensorFlow" },
  { label: "Data", detail: "Batch · Stream" },
];

/**
 * Diagram pipeline isometrik 3D (murni CSS 3D).
 * Berfungsi sebagai "objek" hero: responsif terhadap kursor, ringan, tanpa library.
 */
export const PipelineScene: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  return (
    <div className="select-none">
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        className="relative flex h-[340px] items-center justify-center [perspective:1300px] sm:h-[400px]"
        aria-hidden
      >
        <div className="absolute h-[260px] w-[260px] rounded-full bg-[#ff5a2b]/10 blur-[90px]" />

        <div className="animate-[scene-float_9s_ease-in-out_infinite]">
          <div
            className="relative h-[220px] w-[220px] transition-transform duration-300 ease-out [transform-style:preserve-3d] sm:h-[240px] sm:w-[240px]"
            style={{
              transform: `rotateX(${54 + tilt.y * 6}deg) rotateZ(${-38 + tilt.x * 8}deg)`,
            }}
          >
            {LAYERS.map((layer) => (
              <div
                key={layer.z}
                className="absolute inset-0 border border-white/15 bg-[#ff5a2b]/[0.012] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                style={{ transform: `translateZ(${layer.z}px)` }}
              >
                <div
                  className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] [background-size:22px_22px]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5a2b]/50 to-transparent"
                />
                {layer.nodes.map((node, index) => (
                  <span
                    key={index}
                    className="absolute h-1.5 w-1.5 rounded-full bg-[#ff5a2b] shadow-[0_0_12px_rgba(255,90,43,0.9)]"
                    style={{ left: node.x, top: node.y }}
                  />
                ))}
              </div>
            ))}

            {/* Konektor vertikal antar layer */}
            {[
              { x: "26%", y: "34%" },
              { x: "68%", y: "28%" },
              { x: "48%", y: "64%" },
            ].map((link, index) => (
              <div key={index} className="absolute" style={{ left: link.x, top: link.y }}>
                <div className="absolute bottom-0 left-0 h-[144px] w-px origin-bottom bg-gradient-to-t from-[#ff5a2b]/80 to-[#ff5a2b]/5 [transform:rotateX(90deg)]" />
              </div>
            ))}

            {/* Paket data yang bergerak */}
            <div className="absolute inset-0" style={{ transform: "translateZ(145px)" }}>
              <span className="absolute left-1/2 top-[42%] h-1 w-1 rounded-full bg-[#ff8a5c] shadow-[0_0_8px_#ff5a2b] animate-[packet_4.5s_linear_infinite]" />
            </div>

            {/* Penanda sudut */}
            <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-[#ff5a2b]/70 [transform:translateZ(144px)]" />
            <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-white/30" />
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.14em]">
        {LEGEND.map((item, index) => (
          <li key={item.label} className="space-y-1">
            <span className="flex items-center gap-1.5 text-[#f4f1ea]">
              <span
                className="h-1 w-1 rounded-full bg-[#ff5a2b]"
                style={{ opacity: 1 - index * 0.28 }}
              />
              {item.label}
            </span>
            <span className="block text-[9.5px] normal-case tracking-normal text-[#8c8781]">
              {item.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
