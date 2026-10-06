import React, { useState } from 'react';
import { motion } from 'framer-motion';
import threats from '../data/threats';
import TopicCard from '../components/swot/TopicCard';
import AnalysisNav from '../components/swot/AnalysisNav';

const Threats = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const mappedThreats = threats.map((item) => {
    let sourceName = "Sumber Eksternal";
    try {
      sourceName = new URL(item.source).hostname.replace('www.', '');
    } catch (e) {}

    return {
      id: parseInt(item.number, 10),
      title: item.title,
      description: item.description,
      image: item.image,
      marqueeText: item.marqueeText,
      past: {
        title: item.past.title,
        description: item.past.text
      },
      present: {
        title: item.present.title,
        description: item.present.text
      },
      sources: [
        {
          name: sourceName.toUpperCase(),
          url: item.source
        }
      ]
    };
  });

  return (
    <div className="min-h-screen bg-[#111111] text-[#F4EFE5] pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-32">
      <div className="editorial-container">
        
        <AnalysisNav />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-28 md:mb-40 relative"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0442E] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-12 lg:gap-24 relative z-10 border-b border-zinc-800/50 pb-12 sm:pb-16">
            <div className="w-full lg:w-2/3">
              <h4 className="text-[#F0442E] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base uppercase mb-4 sm:mb-8">
                Analisis Eksternal
              </h4>
              <h1 className="font-display text-[clamp(3.5rem,14vw,14rem)] leading-[0.8] uppercase text-white -ml-1 sm:-ml-2 break-words select-none">
                THREATS
              </h1>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-6 sm:gap-8">
              <div className="h-px w-full bg-zinc-800"></div>
              <p className="text-base sm:text-xl md:text-2xl text-zinc-400 font-editorial italic leading-relaxed">
                Ancaman adalah kondisi eksternal yang dapat menghambat kemajuan atau mengancam stabilitas dan kedaulatan bangsa di masa depan.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col w-full">
          {mappedThreats.map((topic, index) => (
            <TopicCard 
              key={topic.id} 
              topic={topic} 
              index={index} 
              expandedId={expandedId}
              onToggleExpand={handleToggleExpand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Threats;