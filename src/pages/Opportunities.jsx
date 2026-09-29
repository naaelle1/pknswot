import React from 'react';
import { motion } from 'framer-motion';
import opportunities from '../data/opportunities';
import TopicCard from '../components/swot/TopicCard';
import AnalysisNav from '../components/swot/AnalysisNav';

const Opportunities = () => {
  // Map the local opportunities data structure to match what TopicCard expects
  const mappedOpportunities = opportunities.map((item) => {
    let sourceName = "Sumber Eksternal";
    try {
      sourceName = new URL(item.source).hostname.replace('www.', '');
    } catch (e) { }

    return {
      id: parseInt(item.number, 10),
      title: item.title,
      description: item.description,
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0442E] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col gap-12 lg:gap-16 relative z-10 border-b border-zinc-800/50 pb-16">
            <div className="w-full">
              <h4 className="text-[#F0442E] font-bold tracking-[0.4em] text-sm md:text-base uppercase mb-6 md:mb-10">
                Analisis Eksternal
              </h4>
              <h1 className="font-display text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[14rem] leading-[0.75] uppercase text-white -ml-2">
                OPPORTUNITIES
              </h1>
            </div>
            <div className="w-full lg:w-2/3 xl:w-1/2 flex flex-col gap-6 lg:gap-8">
              <div className="h-px w-1/3 bg-zinc-800"></div>
              <p className="text-lg md:text-2xl text-zinc-400 font-editorial italic leading-relaxed">
                Peluang Indonesia lahir dari potensi yang dimiliki dan kemampuan untuk mengubahnya menjadi nilai di masa depan.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col w-full">
          {mappedOpportunities.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;