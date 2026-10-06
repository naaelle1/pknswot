import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import img2004 from '../../assets/timeline/TIMELINE-2004.webp';
import img2010s from '../../assets/timeline/TIMELINE-2010S.webp';
import img2024 from '../../assets/timeline/TIMELINE-2024.webp';
import img2026 from '../../assets/timeline/TIMELINE-2026.webp';

const timelineData = [
  {
    year: "2004",
    title: "Tsunami Aceh",
    description: "Tsunami Samudra Hindia menjadi salah satu bencana besar yang berdampak sangat luas di Indonesia.",
    type: "PAST",
    image: img2004
  },
  {
    year: "2010s",
    title: "Percepatan Digital",
    description: "Penggunaan internet dan teknologi digital berkembang semakin luas dalam kehidupan masyarakat.",
    type: "CHANGE",
    image: img2010s
  },
  {
    year: "2024",
    title: "Ekonomi Digital",
    description: "Ekonomi digital terus berkembang dan membuka peluang baru bagi masyarakat dan pelaku usaha.",
    type: "PRESENT",
    image: img2024
  },
  {
    year: "2026",
    title: "Persimpangan",
    description: "Indonesia menghadapi peluang dan tantangan yang saling berkaitan dalam menentukan arah pembangunan.",
    type: "NOW",
    image: img2026
  }
];

// Clean triangular editorial arrowhead pointing in the exact tangent of the curve end
const ArrowHead = ({ x, y, angle }) => (
  <path
    d="M 6.5,0 L -3.5,-4 L -1.5,0 L -3.5,4 Z"
    fill="#F0442E"
    transform={`translate(${x}, ${y}) rotate(${angle})`}
  />
);

// Editorial hand-drawn curved arrows: smooth Bézier curves + moving dashed segments
const Arrow2004 = () => (
  <div className="w-full flex justify-start pl-8 md:pl-16 my-2">
    <svg className="w-20 h-28 fill-none overflow-visible" viewBox="0 0 100 130">
      <path
        d="M 24,12 C 24,60 72,65 78,118"
        className="editorial-arrow"
      />
      <ArrowHead x={78} y={118} angle={83.5} />
    </svg>
  </div>
);

// Upward loop arrow inspired directly by editorial reference (media_1791286522843.jpg)
const Arrow2010s = () => (
  <div className="w-full flex justify-end pr-8 md:pr-16 my-2">
    <svg className="w-24 h-32 fill-none overflow-visible" viewBox="0 0 100 160">
      <path
        d="M 32,148 C 36,120 46,96 52,86 C 56.8,78 26,76 24,60 C 22,44 44,42 50,62 C 56,82 66,72 72,48 C 76,32 76,20 76,14"
        className="editorial-arrow"
      />
      <ArrowHead x={76} y={14} angle={-90} />
    </svg>
  </div>
);

const Arrow2024 = () => (
  <div className="w-full flex justify-start pl-8 md:pl-16 my-2">
    <svg className="w-24 h-32 fill-none overflow-visible" viewBox="0 0 100 160">
      <path
        d="M 74,14 C 74,65 26,75 28,142"
        className="editorial-arrow"
      />
      <ArrowHead x={28} y={142} angle={88.3} />
    </svg>
  </div>
);

const Arrow2026 = () => (
  <div className="w-full flex justify-end pr-8 md:pr-16 my-2">
    <svg className="w-20 h-36 fill-none overflow-visible" viewBox="0 0 100 170">
      <path
        d="M 26,150 C 26,95 76,85 76,16"
        className="editorial-arrow"
      />
      <ArrowHead x={76} y={16} angle={-90} />
    </svg>
  </div>
);

// Mobile hand-drawn connecting arrow pointing down toward image
const ArrowMobile = () => (
  <div className="w-full flex items-center my-3 pl-2 overflow-visible">
    <svg className="w-16 h-8 fill-none overflow-visible" viewBox="0 0 74 34">
      <path
        d="M 8,6 C 26,6 48,16 66,28"
        className="editorial-arrow"
      />
      <ArrowHead x={66} y={28} angle={33.7} />
    </svg>
  </div>
);

const getArrow = (year) => {
  switch (year) {
    case "2004": return <Arrow2004 />;
    case "2010s": return <Arrow2010s />;
    case "2024": return <Arrow2024 />;
    case "2026": return <Arrow2026 />;
    default: return null;
  }
};

const TimelineContent = ({ item, isLeft }) => (
  <div className={`flex flex-col w-full ${isLeft ? "" : "md:text-right"}`}>
    {/* RIGHT SIDE: Image ABOVE Text */}
    {!isLeft && (
      <div className="flex flex-col w-full mb-2">
        <div className="relative p-2 md:p-3 bg-[#050505] rounded-xl group w-full sm:w-[85%] max-w-xs md:max-w-sm mr-auto md:mr-0 md:ml-auto border-2 border-zinc-900 shadow-[8px_8px_0px_#000000]">
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-90">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_30%,#F0442E_80%,transparent_100%)] animate-wave-ccw" />
          </div>
          <div className="relative z-10 bg-[#111111] rounded-lg border border-zinc-800 p-1 md:p-1.5 overflow-hidden">
            <img src={item.image} alt={item.year} className="w-full h-auto object-cover opacity-95 rounded-md" loading="lazy" />
          </div>
        </div>
        {getArrow(item.year)}
      </div>
    )}

    {/* TEXT CONTENT */}
    <div>
      <span className="font-display text-5xl sm:text-6xl text-[#F0442E]">
        {item.year}
      </span>
      <p className="font-mono text-xs text-[#9A968E] mt-3">
        {item.type}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl uppercase mt-2 text-white">
        {item.title}
      </h3>
      <p className="text-[#9A968E] mt-4 leading-relaxed font-sans text-sm sm:text-base">
        {item.description}
      </p>
    </div>

    {/* LEFT SIDE: Image BELOW Text */}
    {isLeft && (
      <div className="flex flex-col w-full mt-2">
        {getArrow(item.year)}
        <div className="relative p-2 md:p-3 bg-[#050505] rounded-xl group w-full sm:w-[85%] max-w-xs md:max-w-sm ml-auto md:ml-0 md:mr-auto border-2 border-zinc-900 shadow-[8px_8px_0px_#000000]">
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-90">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_30%,#F0442E_80%,transparent_100%)] animate-wave-cw" />
          </div>
          <div className="relative z-10 bg-[#111111] rounded-lg border border-zinc-800 p-1 md:p-1.5 overflow-hidden">
            <img src={item.image} alt={item.year} className="w-full h-auto object-cover opacity-95 rounded-md" loading="lazy" />
          </div>
        </div>
      </div>
    )}
  </div>
);

export default function Timeline() {
  const isReducedMotion = useReducedMotion();
  const leftItems = timelineData.filter((_, i) => i % 2 === 0);
  const rightItems = timelineData.filter((_, i) => i % 2 !== 0);

  return (
    <div className="relative w-full">
      <style>{`
        /* Clean Editorial Hand-drawn Red Arrow with moving dash segments */
        .editorial-arrow {
          fill: none;
          stroke: #F0442E;
          stroke-width: 1.75;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 6 8;
          animation: arrowFlow 5s linear infinite;
        }

        @keyframes arrowFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -140;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .editorial-arrow {
            animation: none !important;
          }
        }

        @keyframes waveCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waveCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-wave-cw {
          animation: waveCW 6s linear infinite;
        }
        .animate-wave-ccw {
          animation: waveCCW 6s linear infinite;
        }
      `}</style>

      {/* =========================================================================
          MOBILE RECOMPOSED LAYOUT (< md)
          Dotted axis along left, static red markers, continuous flowing arrows
          ========================================================================= */}
      <div className="md:hidden relative space-y-16 sm:space-y-20 py-2">
        {/* Continuous DOTTED vertical timeline guide line */}
        <div className="absolute left-[15px] top-2 bottom-2 border-l-2 border-dotted border-[#9A968E]/40 pointer-events-none z-0" />
        
        {timelineData.map((item, index) => {
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-11 pr-2"
            >
              {/* Static Event Marker on dotted timeline axis (sitting above axis) */}
              <div className="absolute left-[10px] top-3 w-3 h-3 bg-[#F0442E] rounded-full ring-4 ring-[#111111] z-10" />

              {/* Event Header Information */}
              <div>
                <span className="font-display text-5xl sm:text-6xl text-[#F0442E] leading-none block">
                  {item.year}
                </span>
                <p className="font-mono text-xs text-[#9A968E] mt-2 tracking-widest uppercase">
                  {item.type}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl uppercase mt-1 text-white">
                  {item.title}
                </h3>
              </div>

              {/* Mobile connecting arrow with static base and continuous flow */}
              <ArrowMobile />

              {/* Image Container with identical wave gradient border */}
              <div className="relative p-2 bg-[#050505] rounded-xl group w-full max-w-sm border-2 border-zinc-900 shadow-[6px_6px_0px_#000000] overflow-hidden my-1">
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-90">
                  <div className={`absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_30%,#F0442E_80%,transparent_100%)] ${index % 2 === 0 ? 'animate-wave-cw' : 'animate-wave-ccw'}`} />
                </div>
                <div className="relative z-10 bg-[#111111] rounded-lg border border-zinc-800 p-1 overflow-hidden">
                  <img src={item.image} alt={item.year} className="w-full h-auto object-cover opacity-95 rounded-md" loading="lazy" />
                </div>
              </div>

              {/* Event Description */}
              <p className="text-[#9A968E] text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* =========================================================================
          DESKTOP LAYOUT (>= md)
          DOTTED central line, static red event markers, continuous flowing tracer arrows
          ========================================================================= */}
      <div className="hidden md:grid grid-cols-2 relative">
        {/* DOTTED CENTER TIMELINE LINE (Always visible continuously) */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-2 border-dotted border-[#9A968E]/40 pointer-events-none z-0" />

        {/* LEFT COLUMN */}
        <div className="flex flex-col pr-12 lg:pr-16 space-y-24">
          {leftItems.map((item) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              {/* Static Dot centered precisely on the dotted middle line (sitting above axis) */}
              <div className="absolute right-[-54px] lg:right-[-70px] top-3 w-3 h-3 bg-[#F0442E] rounded-full ring-4 ring-[#111111] z-10" />
              <TimelineContent item={item} isLeft={true} />
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN (Staggered offset as in reference) */}
        <div className="flex flex-col pl-12 lg:pl-16 space-y-24 mt-32 lg:mt-48">
          {rightItems.map((item) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isReducedMotion ? 0 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              {/* Static Dot centered precisely on the dotted middle line (sitting above axis) */}
              <div className="absolute left-[-54px] lg:left-[-70px] top-3 w-3 h-3 bg-[#F0442E] rounded-full ring-4 ring-[#111111] z-10" />
              <TimelineContent item={item} isLeft={false} />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}