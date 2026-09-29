import { motion } from "framer-motion";
import SWOTConnection from "../components/interactive/SWOTConnection";

function Connections() {
  return (
    <main className="bg-[#111111] text-[#F4EFE5] min-h-screen pt-32 pb-32">
      <div className="editorial-container">
        
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-32 md:mb-48 relative border-b border-zinc-800/50 pb-16"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="text-[#F0442E] font-bold tracking-[0.4em] text-xs sm:text-sm md:text-base uppercase mb-6 md:mb-10">
              SWOT / CONNECTIONS
            </p>

            <h1 className="font-display text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] leading-[0.75] uppercase text-white mb-10">
              CONNECTIONS
            </h1>

            <div className="h-px w-24 bg-[#F0442E] mb-8"></div>
            
            <p className="text-lg md:text-2xl text-zinc-400 font-editorial italic leading-relaxed max-w-2xl">
              SWOT tidak berdiri sendiri. Kekuatan dapat menjadi modal untuk
              memanfaatkan peluang, sementara kelemahan dapat memperbesar
              dampak dari ancaman.
            </p>
          </div>
        </motion.section>

        {/* Content Section */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <p className="font-bold tracking-[0.4em] text-xs sm:text-sm text-[#F0442E] mb-4 uppercase">
              STRENGTH → OPPORTUNITY
            </p>

            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase text-white tracking-wide">
              Dari Potensi Menjadi Peluang
            </h2>
          </motion.div>

          <SWOTConnection />
        </section>
      </div>
    </main>
  );
}

export default Connections;