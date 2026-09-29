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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="border-t border-[#9A968E]/30 py-8"
        >
          <div className="grid md:grid-cols-12 items-center gap-4">
            {/* STRENGTH */}
            <div className="md:col-span-3">
              <span className="text-xs font-mono text-[#F0442E]">
                STRENGTH
              </span>

              <h3 className="font-['Bebas_Neue'] text-3xl uppercase mt-2">
                {item.strength}
              </h3>
            </div>

            {/* ARROW */}
            <div className="md:col-span-1 text-[#F0442E] text-2xl">
              →
            </div>

            {/* PROCESS */}
            <div className="md:col-span-3">
              <span className="text-xs font-mono text-[#9A968E]">
                PROCESS
              </span>

              <h3 className="font-['Bebas_Neue'] text-3xl uppercase mt-2">
                {item.process}
              </h3>
            </div>

            {/* ARROW */}
            <div className="md:col-span-1 text-[#F0442E] text-2xl">
              →
            </div>

            {/* OPPORTUNITY */}
            <div className="md:col-span-4">
              <span className="text-xs font-mono text-[#F0442E]">
                OPPORTUNITY
              </span>

              <h3 className="font-['Bebas_Neue'] text-3xl uppercase mt-2">
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