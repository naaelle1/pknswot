import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SourceList from './SourceList';

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const MarqueeText = ({ text }) => {
  const content = `${text} → `;
  // Repeat enough times to fill the width and loop seamlessly
  const repeated = content.repeat(8);

  return (
    <div className="w-full overflow-hidden mt-3">
      <div
        className="whitespace-nowrap font-display text-xs sm:text-sm tracking-[0.2em] text-zinc-500 uppercase"
        style={{
          animation: 'marquee-scroll 20s linear infinite',
          width: 'max-content',
        }}
      >
        {repeated}
      </div>
    </div>
  );
};

const TopicCard = ({ topic, index, expandedId, onToggleExpand }) => {
  const isExpanded = expandedId === topic.id;

  const handleImageClick = () => {
    if (onToggleExpand) {
      onToggleExpand(topic.id);
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      className="w-full border-t border-zinc-800 py-10 sm:py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-y-8 sm:gap-y-12 md:gap-y-16 xl:gap-y-20 md:gap-x-12 xl:gap-x-16 relative group"
    >
      {/* 1. NUMBER AREA */}
      <motion.div 
        variants={fadeUp} 
        className="md:col-span-3 xl:col-span-2 flex items-start order-1"
      >
        <span className="font-display text-[clamp(4.5rem,14vw,10rem)] xl:text-[9rem] 2xl:text-[10rem] leading-[0.75] text-zinc-800 group-hover:text-[#F0442E] transition-colors duration-700 opacity-80 select-none -mt-2 sm:-mt-4">
          {String(topic.id).padStart(2, '0')}
        </span>
      </motion.div>

      {/* 2. MAIN TITLE AREA */}
      <motion.div 
        variants={fadeUp} 
        className="md:col-span-9 xl:col-span-5 flex flex-col mt-2 sm:mt-4 md:mt-0 order-2"
      >
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.85] tracking-wide break-words min-w-0">
          {topic.title}
        </h2>
      </motion.div>

      {/* 3. SUPPORTING TEXT / QUOTE AREA */}
      <motion.div 
        variants={fadeUp} 
        className="md:col-span-12 xl:col-span-5 flex flex-col pt-2 md:pt-4 xl:pt-0 order-4 xl:order-3"
      >
        <p className="text-xl md:text-3xl text-zinc-300 font-editorial italic leading-relaxed">
          "{topic.description}"
        </p>
      </motion.div>

      {/* 4. IMAGE AREA */}
      {topic.image && (
        <motion.div 
          variants={imageReveal}
          className="md:col-span-12 xl:col-start-3 xl:col-span-5 flex flex-col w-full sm:w-[85%] md:w-[75%] xl:w-full max-w-md order-3 xl:order-4"
        >
          {/* Clickable image container */}
          <motion.div
            onClick={handleImageClick}
            className="relative shadow-[6px_6px_0px_#000000] group/image bg-zinc-900 overflow-hidden cursor-pointer origin-center"
          >
            {/* Traveling Orange Outline */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_75%,#F0442E_100%)] animate-[spin_8s_linear_infinite] opacity-50 group-hover/image:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            {/* Inner padding & Image */}
            <div className="relative m-[1px] p-1.5 bg-[#0a0a0a] z-10 overflow-hidden">
              <motion.img 
                src={topic.image} 
                alt={topic.title} 
                className="w-full h-auto object-cover opacity-95 group-hover/image:opacity-100 [@media(hover:hover)]:grayscale group-hover/image:grayscale-0 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Marquee text — only visible when expanded */}
          <AnimatePresence>
            {isExpanded && topic.marqueeText && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <MarqueeText text={topic.marqueeText} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* 5. PAST, PRESENT & SOURCES AREA */}
      <motion.div 
        variants={fadeUp} 
        className="md:col-span-12 xl:col-start-8 xl:col-span-5 flex flex-col gap-12 pt-8 xl:pt-0 order-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
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
      </motion.div>
    </motion.div>
  );
};

export default TopicCard;
