import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2004",
    title: "Tsunami Aceh",
    description:
      "Tsunami Samudra Hindia menjadi salah satu bencana besar yang berdampak sangat luas di Indonesia.",
    type: "PAST"
  },
  {
    year: "2010s",
    title: "Percepatan Digital",
    description:
      "Penggunaan internet dan teknologi digital berkembang semakin luas dalam kehidupan masyarakat.",
    type: "CHANGE"
  },
  {
    year: "2024",
    title: "Ekonomi Digital",
    description:
      "Ekonomi digital terus berkembang dan membuka peluang baru bagi masyarakat dan pelaku usaha.",
    type: "PRESENT"
  },
  {
    year: "2026",
    title: "Persimpangan",
    description:
      "Indonesia menghadapi peluang dan tantangan yang saling berkaitan dalam menentukan arah pembangunan.",
    type: "NOW"
  }
];

function Timeline() {
  return (
    <div className="relative">
      {/* GARIS */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#9A968E]/40" />

      <div className="space-y-20">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -40 : 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative grid md:grid-cols-2 ${
              index % 2 === 0 ? "" : "md:text-right"
            }`}
          >
            {/* TITIK */}
            <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 bg-[#F0442E]" />

            <div
              className={`pl-12 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-16"
                  : "md:col-start-2 md:pl-16"
              }`}
            >
              <span className="font-['Bebas_Neue'] text-6xl text-[#F0442E]">
                {item.year}
              </span>

              <p className="font-mono text-xs text-[#9A968E] mt-3">
                {item.type}
              </p>

              <h3 className="font-['Bebas_Neue'] text-3xl uppercase mt-2">
                {item.title}
              </h3>

              <p className="text-[#9A968E] mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;