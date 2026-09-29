import React from 'react';
import { motion } from 'framer-motion';
import { weaknesses } from '../data/weaknesses';
import TopicCard from '../components/swot/TopicCard';
import AnalysisNav from '../components/swot/AnalysisNav';

const Weaknesses = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F4EFE5] pt-32 pb-32">
      <div className="editorial-container">
        
        <AnalysisNav />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-32 md:mb-48 relative"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9A968E] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-24 relative z-10 border-b border-zinc-800/50 pb-16">
            <div className="w-full lg:w-2/3">
              <h4 className="text-zinc-500 font-bold tracking-[0.4em] text-sm md:text-base uppercase mb-6 md:mb-10">
                Analisis Internal
              </h4>
              <h1 className="font-display text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] leading-[0.75] uppercase text-white -ml-2">
                WEAKNESSES
              </h1>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
              <div className="h-px w-full bg-zinc-800"></div>
              <p className="text-lg md:text-2xl text-zinc-400 font-editorial italic leading-relaxed">
                Kelemahan atau tantangan internal yang harus diatasi untuk mempercepat pembangunan dan kesejahteraan bangsa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col w-full">
          {weaknesses.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weaknesses;
