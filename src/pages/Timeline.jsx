import { motion } from "framer-motion";
import TimelineComponent from "../components/interactive/Timeline";

function TimelinePage() {
  return (
    <main className="bg-[#111111] text-[#F4EFE5] min-h-screen pt-32 pb-32">
      <div className="editorial-container">
        
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-28 md:mb-36 relative border-b border-zinc-800/50 pb-12 sm:pb-16"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="text-[#F0442E] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base uppercase mb-4 sm:mb-8">
              INDONESIA / TIMELINE
            </p>

            <h1 className="font-display text-[clamp(3.5rem,14vw,12rem)] leading-[0.8] uppercase text-white mb-6 sm:mb-10 select-none">
              TIMELINE
            </h1>

            <div className="h-px w-20 sm:w-24 bg-[#F0442E] mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-xl md:text-2xl text-zinc-400 font-editorial italic leading-relaxed max-w-2xl px-2">
              Beberapa peristiwa dan perubahan yang membantu memahami perjalanan
              Indonesia dari masa lalu menuju kondisi saat ini.
            </p>
          </div>
        </motion.section>

        {/* Content Section */}
        <section className="w-full">
          <TimelineComponent />
        </section>
      </div>
    </main>
  );
}

export default TimelinePage;