import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { groupedSources } from '../data/sources';
import { ExternalLink, ChevronDown } from 'lucide-react';

const SourceItem = ({ source, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const number = String(index + 1).padStart(2, '0');
  const hasArticle = !!source.article && !!source.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group block border-b border-zinc-800/50 hover:border-[#F0442E]/30 transition-colors"
    >
      <div className="flex flex-row items-start justify-between py-8 md:py-10">
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 focus:outline-none focus:ring-2 focus:ring-[#F0442E] focus:ring-offset-8 focus:ring-offset-[#111111]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="text-zinc-600 font-mono text-sm tracking-widest group-hover:text-[#F0442E] transition-colors">
              {number}
            </div>
            
            <div className="flex-1 w-full min-w-0">
              <h3 className="font-sans text-xl md:text-3xl font-bold uppercase tracking-wide text-[#F4EFE5] group-hover:text-[#F0442E] transition-colors flex items-center gap-4 mb-3">
                {source.name}
                <ExternalLink className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#F0442E]" />
              </h3>
              <p className="text-zinc-500 font-mono text-xs md:text-sm truncate w-full group-hover:text-zinc-300 transition-colors pr-4">
                {source.url}
              </p>
            </div>
          </div>
        </a>

        {/* Expand button (only if article exists) */}
        {hasArticle && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="shrink-0 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 hover:text-[#F0442E] transition-colors focus:outline-none self-start md:self-center mt-1 md:mt-0 py-2 pl-4"
            aria-expanded={isExpanded}
          >
            <span className="hidden sm:inline">{isExpanded ? 'LESS' : 'MORE'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        )}
      </div>

      {/* Expandable panel */}
      <AnimatePresence>
        {isExpanded && hasArticle && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-2 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:pl-[4.5rem]">
              <div className="w-full md:w-5/12 shrink-0">
                <img 
                  src={source.image} 
                  alt={`Referensi dari ${source.name}`} 
                  className="w-full h-auto aspect-[4/3] object-cover bg-zinc-900 border border-zinc-800/50"
                />
              </div>
              <div className="w-full md:w-7/12">
                <p className="font-editorial text-lg md:text-xl lg:text-2xl text-[#F4EFE5] leading-relaxed italic border-l-2 border-[#F0442E] pl-6 md:pl-8 py-2 opacity-90">
                  {source.article}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Sources = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F4EFE5] pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-32">
      <div className="editorial-container">

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-24 md:mb-32 relative"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0442E] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-12 lg:gap-24 relative z-10 border-b border-zinc-800/50 pb-12 sm:pb-16">
            <div className="w-full lg:w-2/3">
              <h4 className="text-[#F0442E] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base uppercase mb-4 sm:mb-8">
                Bibliografi & Referensi
              </h4>
              <h1 className="font-display text-[clamp(3.5rem,14vw,14rem)] leading-[0.8] uppercase text-white -ml-1 sm:-ml-2 break-words select-none">
                SOURCES
              </h1>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-6 sm:gap-8">
              <div className="h-px w-full bg-zinc-800"></div>
              <p className="text-base sm:text-xl md:text-2xl text-zinc-400 font-editorial italic leading-relaxed">
                Kompilasi seluruh referensi, berita, dan data statistik yang digunakan sebagai dasar analisis dalam proyek ini.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col w-full gap-24 md:gap-32">
          {groupedSources.map((group, groupIndex) => (
            <div key={group.category} className="flex flex-col">
              
              {/* Category Header */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white">
                  {group.category}
                </h2>
              </motion.div>

              <div className="border-t-2 border-[#F0442E] mb-2 w-16" />
              <div className="border-t border-zinc-800/50 mb-8 w-full" />

              {/* Source Items */}
              <div className="flex flex-col w-full">
                {group.items.map((source, index) => (
                  <SourceItem key={source.id} source={source} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sources;
