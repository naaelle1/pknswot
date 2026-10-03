import { motion } from "framer-motion";
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

const Arrow2004 = () => (
  <div className="w-full flex justify-start pl-8 md:pl-16 my-2">
    <svg className="w-20 h-28 fill-none" viewBox="0 0 100 140" preserveAspectRatio="none">
      {/* Gentle 2-bend curve flowing DOWN */}
      <path d="M 15,0 C 15,40 40,60 40,80 C 40,110 85,110 85,140" strokeWidth="1.5" className="stroke-zinc-700 opacity-40" />
      <path d="M 15,0 C 15,40 40,60 40,80 C 40,110 85,110 85,140" strokeWidth="2.5" strokeDasharray="6 8" className="stroke-[#F0442E] animate-dash-flow opacity-90" />
      <path d="M 72,128 L 85,140 L 98,128" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" className="stroke-[#F0442E] opacity-90" />
    </svg>
  </div>
);

const Arrow2010s = () => (
  <div className="w-full flex justify-end pr-8 md:pr-16 my-2">
    <svg className="w-24 h-32 fill-none" viewBox="0 0 100 160" preserveAspectRatio="none">
      {/* Longer S-like curve flowing UP */}
      <path d="M 80,160 C 80,90 20,100 20,50 C 20,20 35,15 35,0" strokeWidth="1.5" className="stroke-zinc-700 opacity-40" />
      <path d="M 80,160 C 80,90 20,100 20,50 C 20,20 35,15 35,0" strokeWidth="2.5" strokeDasharray="6 10" className="stroke-[#F0442E] animate-dash-flow opacity-90" />
      <path d="M 23,12 L 35,0 L 47,12" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" className="stroke-[#F0442E] opacity-90" />
    </svg>
  </div>
);

const Arrow2024 = () => (
  <div className="w-full flex justify-start pl-8 md:pl-16 my-2">
    <svg className="w-24 h-32 fill-none" viewBox="0 0 100 160" preserveAspectRatio="none">
      {/* Slightly sharper multi-bend curve flowing DOWN */}
      <path d="M 20,0 C 20,40 90,30 90,80 C 90,110 50,110 50,130 C 50,145 80,150 80,160" strokeWidth="1.5" className="stroke-zinc-700 opacity-40" />
      <path d="M 20,0 C 20,40 90,30 90,80 C 90,110 50,110 50,130 C 50,145 80,150 80,160" strokeWidth="2.5" strokeDasharray="7 9" className="stroke-[#F0442E] animate-dash-flow opacity-90" />
      <path d="M 68,148 L 80,160 L 92,148" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" className="stroke-[#F0442E] opacity-90" />
    </svg>
  </div>
);

const Arrow2026 = () => (
  <div className="w-full flex justify-end pr-8 md:pr-16 my-2">
    <svg className="w-20 h-36 fill-none" viewBox="0 0 100 180" preserveAspectRatio="none">
      {/* Long sweeping curve flowing UP */}
      <path d="M 85,180 C 85,80 20,120 20,0" strokeWidth="1.5" className="stroke-zinc-700 opacity-40" />
      <path d="M 85,180 C 85,80 20,120 20,0" strokeWidth="2.5" strokeDasharray="8 12" className="stroke-[#F0442E] animate-dash-flow opacity-90" />
      <path d="M 8,12 L 20,0 L 32,12" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" className="stroke-[#F0442E] opacity-90" />
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
          <div className="relative z-10 bg-[#111111] rounded-lg border border-zinc-800 p-1 md:p-1.5">
            <img src={item.image} alt={item.year} className="w-full h-auto object-cover opacity-95 rounded-md" />
          </div>
        </div>
        {getArrow(item.year)}
      </div>
    )}

    {/* TEXT CONTENT */}
    <div>
      <span className="font-display text-6xl text-[#F0442E]">
        {item.year}
      </span>
      <p className="font-mono text-xs text-[#9A968E] mt-3">
        {item.type}
      </p>
      <h3 className="font-display text-3xl uppercase mt-2">
        {item.title}
      </h3>
      <p className="text-[#9A968E] mt-4 leading-relaxed">
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
          <div className="relative z-10 bg-[#111111] rounded-lg border border-zinc-800 p-1 md:p-1.5">
            <img src={item.image} alt={item.year} className="w-full h-auto object-cover opacity-95 rounded-md" />
          </div>
        </div>
      </div>
    )}
  </div>
);

function Timeline() {
  const leftItems = timelineData.filter((_, i) => i % 2 === 0);
  const rightItems = timelineData.filter((_, i) => i % 2 !== 0);

  return (
    <div className="relative w-full">
      <style>{`
        @keyframes dashFlow {
          from { stroke-dashoffset: 14; }
          to { stroke-dashoffset: 0; }
        }
        .animate-dash-flow {
          animation: dashFlow 1.2s linear infinite;
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

      {/* MOBILE LAYOUT (Single Column) */}
      <div className="md:hidden relative space-y-24">
        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#9A968E]/40" />
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12"
            >
              <div className="absolute left-[10px] top-3 w-3 h-3 bg-[#F0442E]" />
              <TimelineContent item={item} isLeft={isLeft} />
            </motion.div>
          );
        })}
      </div>

      {/* DESKTOP LAYOUT (Two Independent Columns) */}
      <div className="hidden md:grid grid-cols-2 relative">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#9A968E]/40 -translate-x-1/2" />

        {/* LEFT COLUMN */}
        <div className="flex flex-col pr-16 space-y-24">
          {leftItems.map((item) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              {/* Dot centered precisely on the middle line (64px padding + 6px half-width = 70px offset) */}
              <div className="absolute right-[-70px] top-3 w-3 h-3 bg-[#F0442E]" />
              <TimelineContent item={item} isLeft={true} />
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col pl-16 space-y-24 mt-32 lg:mt-48">
          {rightItems.map((item) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              {/* Dot centered precisely on the middle line */}
              <div className="absolute left-[-70px] top-3 w-3 h-3 bg-[#F0442E]" />
              <TimelineContent item={item} isLeft={false} />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Timeline;