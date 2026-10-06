import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/ui/Button'
import SWOTCard from '../components/swot/SWOTCard'
import IndonesiaMap from '../components/interactive/IndonesiaMap'

export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const scrollReveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="w-full flex flex-col bg-[#111111] text-[#F4EFE5] overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="relative min-h-[70vh] sm:min-h-[78vh] lg:min-h-[82vh] flex flex-col justify-between pt-6 sm:pt-10 lg:pt-14 pb-10 sm:pb-14 border-b border-white/20 overflow-hidden">
        {/* Top Minimal Metadata */}
        <div className="editorial-container w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#9A968E] pb-3 sm:pb-4 border-b border-white/15"
          >
            <span>KELOMPOK 05 · PKN · XII SIJA 2</span>
            <span className="hidden sm:inline">SMK NEGERI 7 SEMARANG</span>
          </motion.div>
        </div>

        {/* Large Typographic Hero Center */}
        <div className="editorial-container w-full my-auto py-6 sm:py-10 lg:py-14">
          <div className="relative">
            {/* Red Graphic Star Element */}
            <div className="absolute -top-3 sm:-top-10 lg:-top-16 right-0 sm:right-8 lg:right-12 z-0 pointer-events-none opacity-80 sm:opacity-85">
              <svg
                viewBox="0 0 100 100"
                className="w-12 h-12 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 fill-[#F0442E]"
                aria-hidden="true"
              >
                <polygon points="50,0 62,38 100,50 62,62 50,100 38,62 0,50 38,38" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Intentional Eyebrow on Mobile & Desktop */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeIn}
                className="flex items-center gap-2 mb-2 sm:mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0442E]" />
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#F0442E]">
                  INDONESIA
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={0.05}
                variants={fadeIn}
                className="font-display text-[clamp(2.5rem,10.5vw,11.5rem)] font-normal leading-[0.88] tracking-tight uppercase text-[#F4EFE5] select-none break-words"
              >
                DI PERSIMPANGAN
              </motion.h1>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-6 mt-1 sm:-mt-2">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  custom={0.15}
                  variants={fadeIn}
                  className="font-editorial italic text-[clamp(3rem,12.5vw,12.5rem)] font-normal leading-[0.84] tracking-tight text-[#F0442E] select-none lowercase"
                >
                  nusantara
                </motion.span>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={0.25}
                  variants={fadeIn}
                  className="sm:text-right max-w-xs sm:max-w-md sm:mb-3 mt-2 sm:mt-0"
                >
                  <p className="font-sans text-xs sm:text-sm text-[#F4EFE5]/85 leading-relaxed">
                    Analisis kekuatan, kelemahan, peluang, dan ancaman Indonesia.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar & CTA */}
        <div className="editorial-container w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.35}
            variants={fadeIn}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 sm:pt-6 border-t border-white/15"
          >
            <Button
              to="/strengths"
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              JELAJAHI ANALISIS
            </Button>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SWOT INDONESIA
          ========================================================================= */}
      <section className="py-10 sm:py-16 md:py-20 border-b border-white/20">
        <div className="editorial-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={scrollReveal}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2 pb-4 sm:pb-6 mb-2 border-b border-white/20"
          >
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#F4EFE5] tracking-wider leading-none uppercase">
             ANALISIS
            </h2>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#9A968E]">
              Empat hal yang membantu melihat kondisi Indonesia.
            </span>
          </motion.div>

          {/* Typographic SWOT List */}
          <div className="flex flex-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={scrollReveal}
            >
              <SWOTCard
                code="01"
                category="Strengths"
                title="KEKUATAN"
                statement="Hal yang menjadi modal Indonesia."
                to="/strengths"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={scrollReveal}
            >
              <SWOTCard
                code="02"
                category="Weaknesses"
                title="KELEMAHAN"
                statement="Hal yang masih menjadi tantangan."
                to="/weaknesses"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={scrollReveal}
            >
              <SWOTCard
                code="03"
                category="Opportunities"
                title="PELUANG"
                statement="Hal yang dapat dikembangkan."
                to="/opportunities"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={scrollReveal}
            >
              <SWOTCard
                code="04"
                category="Threats"
                title="ANCAMAN"
                statement="Hal yang perlu diantisipasi."
                to="/threats"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PETA INDONESIA
          ========================================================================= */}
      <section className="border-b border-white/20">
        <div className="editorial-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={scrollReveal}
          >
            <IndonesiaMap />
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: LINIMASA
          ========================================================================= */}
      <section className="py-10 sm:py-16 md:py-20 border-b border-white/20 bg-[#171717]">
        <div className="editorial-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={scrollReveal}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 mb-6 sm:mb-10 border-b border-white/20"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#F4EFE5] tracking-wider leading-none uppercase">
                LINIMASA
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#9A968E]">
                Beberapa peristiwa yang membentuk Indonesia hari ini.
              </span>
              <Link
                to="/timeline"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#F4EFE5] hover:text-[#F0442E] font-bold py-1 transition-colors"
              >
                <span>LIHAT LINIMASA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Timeline 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={scrollReveal}
              className="p-5 sm:p-7 border border-white/15 bg-[#111111] hover:border-white/40 transition-colors"
            >
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#F0442E] tracking-wider mb-2 uppercase">
                MASA LALU
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#F4EFE5]/80 leading-relaxed">
                Deklarasi Djuanda dan perkembangan Indonesia sebagai negara kepulauan.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={scrollReveal}
              className="p-5 sm:p-7 border border-white/15 bg-[#111111] hover:border-white/40 transition-colors"
            >
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#F0442E] tracking-wider mb-2 uppercase">
                MASA KINI
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#F4EFE5]/80 leading-relaxed">
                Konektivitas, industri, ekonomi digital, dan pembangunan.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={scrollReveal}
              className="p-5 sm:p-7 border border-white/15 bg-[#111111] hover:border-white/40 transition-colors"
            >
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#F0442E] tracking-wider mb-2 uppercase">
                SELANJUTNYA
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#F4EFE5]/80 leading-relaxed">
                Tantangan dan peluang yang akan dihadapi Indonesia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
