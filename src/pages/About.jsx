import React from 'react';
import { motion } from 'framer-motion';

const members = [
  { number: '02', name: 'AMELIA GALUH WIDIANINGRUM' },
  { number: '08', name: 'BIMA RADITYA MEGA PUTRA' },
  { number: '09', name: 'CALLISTA PUTRI RELVIAN' },
  { number: '10', name: 'DAFA RIZQI ARKANANTA' },
  { number: '12', name: 'ELOK CHANDRA KIRANA' },
  { number: '19', name: 'JYOTIS PASTIKA BATARA BUANA ANGKOSO' },
  { number: '25', name: 'MUHAMMAD IQBAL MAULANA' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F4EFE5] pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-32 overflow-hidden">
      <div className="editorial-container relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0442E] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 relative z-10 border-b border-zinc-800/50 pb-12 sm:pb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 sm:gap-12">
            <div className="w-full md:w-2/3">
              <h4 className="text-[#F0442E] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base uppercase mb-4 sm:mb-8">
                Tim Proyek
              </h4>
              <h1 className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.8] uppercase text-white -ml-1 sm:-ml-2 break-words select-none">
                ABOUT<br />US
              </h1>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-6 sm:gap-8 md:pb-2">
              <div className="h-px w-full bg-zinc-800 hidden md:block"></div>
              <p className="text-base sm:text-xl md:text-2xl text-zinc-400 font-editorial italic leading-relaxed">
                "Nama-nama di balik proyek ini."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Members List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full max-w-5xl relative z-10"
        >
          {members.map((member, index) => (
            <motion.div 
              key={member.number}
              variants={itemVariants}
              className="group border-b border-zinc-800 hover:border-[#F0442E] transition-colors duration-500 py-8 sm:py-12 flex flex-col md:flex-row md:items-baseline gap-4 sm:gap-8 md:gap-16"
            >
              <div className="w-full md:w-auto shrink-0">
                <span className="font-display text-5xl sm:text-7xl text-zinc-700 group-hover:text-[#F0442E] transition-colors duration-500 select-none">
                  {member.number}
                </span>
              </div>
              <div className="w-full">
                <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors duration-500 leading-snug">
                  {member.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
