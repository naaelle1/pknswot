import React from 'react';
import { motion } from 'framer-motion';
import SourceList from './SourceList';

const TopicCard = ({ topic, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full border-t border-zinc-800 py-16 md:py-28 flex flex-col xl:flex-row gap-12 xl:gap-24 relative group"
    >
      {/* Number and Title Column */}
      <div className="w-full xl:w-[45%] flex flex-col md:flex-row gap-6 md:gap-12 items-start relative z-10">
        <span className="font-display text-[8rem] md:text-[12rem] lg:text-[14rem] leading-[0.75] text-zinc-800 group-hover:text-[#F0442E] transition-colors duration-700 opacity-80 select-none -mt-4">
          {String(topic.id).padStart(2, '0')}
        </span>
        <div className="flex flex-col mt-4 md:mt-8">
          <h2 className="font-display text-5xl md:text-7xl lg:text-7xl text-white uppercase leading-[0.85] tracking-wide break-words">
            {topic.title}
          </h2>
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full xl:w-[55%] flex flex-col gap-12 pt-4 xl:pt-10 z-10">
        <p className="text-xl md:text-3xl text-zinc-300 font-editorial italic leading-relaxed">
          "{topic.description}"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-8">
          {/* Past Segment */}
          <div className="flex flex-col relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px bg-[#F0442E] w-8"></span>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">
                Masa Lalu
              </h3>
            </div>
            <h4 className="font-display text-3xl md:text-4xl text-zinc-100 uppercase tracking-wider mb-4 leading-none">
              {topic.past.title}
            </h4>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
              {topic.past.description}
            </p>
          </div>

          {/* Present Segment */}
          <div className="flex flex-col relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px bg-zinc-600 w-8"></span>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">
                Saat Ini
              </h3>
            </div>
            <h4 className="font-display text-3xl md:text-4xl text-zinc-100 uppercase tracking-wider mb-4 leading-none">
              {topic.present.title}
            </h4>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
              {topic.present.description}
            </p>
          </div>
        </div>

        <SourceList sources={topic.sources} />
      </div>
    </motion.div>
  );
};

export default TopicCard;
