import { motion } from "framer-motion";

const connections = [
  {
    strength: "Kekayaan SDA",
    process: "Hilirisasi",
    opportunity: "Industri Bernilai Tambah"
  },
  {
    strength: "Jumlah Penduduk",
    process: "Bonus Demografi",
    opportunity: "Ekonomi Digital"
  },
  {
    strength: "Keberagaman Budaya",
    process: "Kreativitas",
    opportunity: "Pariwisata & Ekonomi Kreatif"
  }
];

function SWOTConnection() {
  return (
    <div className="space-y-6">
      {connections.map((item, index) => (
        <motion.div
          key={item.strength}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
          className="border-t border-[#9A968E]/30 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 sm:gap-6 md:gap-4">
            {/* STRENGTH */}
            <div className="md:col-span-3">
              <span className="text-[11px] sm:text-xs font-mono text-[#F0442E] tracking-widest uppercase">
                STRENGTH
              </span>

              <h3 className="font-display text-2xl sm:text-3xl uppercase mt-1 sm:mt-2 text-white">
                {item.strength}
              </h3>
            </div>

            {/* ARROW 1 */}
            <div className="md:col-span-1 text-[#F0442E] text-xl md:text-2xl flex items-center justify-start md:justify-center">
              <span className="md:hidden font-mono text-sm tracking-widest text-[#F0442E]/70 flex items-center gap-1.5">
                ↓ <span className="text-[10px] text-zinc-500 uppercase">proses</span>
              </span>
              <span className="hidden md:inline">→</span>
            </div>

            {/* PROCESS */}
            <div className="md:col-span-3">
              <span className="text-[11px] sm:text-xs font-mono text-[#9A968E] tracking-widest uppercase">
                PROCESS
              </span>

              <h3 className="font-display text-2xl sm:text-3xl uppercase mt-1 sm:mt-2 text-zinc-200">
                {item.process}
              </h3>
            </div>

            {/* ARROW 2 */}
            <div className="md:col-span-1 text-[#F0442E] text-xl md:text-2xl flex items-center justify-start md:justify-center">
              <span className="md:hidden font-mono text-sm tracking-widest text-[#F0442E]/70 flex items-center gap-1.5">
                ↓ <span className="text-[10px] text-zinc-500 uppercase">hasil</span>
              </span>
              <span className="hidden md:inline">→</span>
            </div>

            {/* OPPORTUNITY */}
            <div className="md:col-span-4">
              <span className="text-[11px] sm:text-xs font-mono text-[#F0442E] tracking-widest uppercase">
                OPPORTUNITY
              </span>

              <h3 className="font-display text-2xl sm:text-3xl uppercase mt-1 sm:mt-2 text-white">
                {item.opportunity}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default SWOTConnection;