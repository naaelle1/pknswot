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
          className="mb-32 md:mb-48 relative border-b border-zinc-800/50 pb-16"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="text-[#F0442E] font-bold tracking-[0.4em] text-xs sm:text-sm md:text-base uppercase mb-6 md:mb-10">
              INDONESIA / TIMELINE
            </p>

            <h1 className="font-display text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] leading-[0.75] uppercase text-white mb-10">
              TIMELINE
            </h1>

            <div className="h-px w-24 bg-[#F0442E] mb-8"></div>
            
            <p className="text-lg md:text-2xl text-zinc-400 font-editorial italic leading-relaxed max-w-2xl">
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