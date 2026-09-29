import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import SWOTCard from '../components/swot/SWOTCard'
import IndonesiaMap from '../components/interactive/IndonesiaMap'

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#111111] text-[#F4EFE5]">
      {/* =========================================================================
          SECTION 01: COVER / HERO (CONDENSED DISPLAY POSTER, RAW, ASYMMETRIC)
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-white/20 overflow-hidden">
        {/* Top Minimal Strip */}
        <div className="editorial-container w-full">
          <div className="flex items-center justify-between text-xs font-mono tracking-[0.3em] uppercase text-[#9A968E] pb-6 border-b border-white/15">
            <span className="text-[#F0442E] font-bold">INDONESIA / 2026</span>
            <span className="hidden sm:inline">ANALISIS SWOT STRATEGIS</span>
            <span>01 // COVER</span>
          </div>
        </div>

        {/* Massive Typographic Poster Center */}
        <div className="editorial-container w-full my-auto py-8 sm:py-16">
          <div className="relative">
            {/* Red Graphic Star Element */}
            <div className="absolute -top-12 sm:-top-20 right-0 sm:right-16 z-0 pointer-events-none opacity-90">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 sm:w-44 sm:h-44 lg:w-56 lg:h-56 fill-[#F0442E]"
                aria-hidden="true"
              >
                <polygon points="50,0 62,38 100,50 62,62 50,100 38,62 0,50 38,38" />
              </svg>
            </div>

            <div className="relative z-10">
              <h1 className="font-display text-[15vw] sm:text-[14vw] lg:text-[13vw] font-normal leading-[0.85] tracking-tight uppercase text-[#F4EFE5] select-none">
                DI PERSIMPANGAN
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 -mt-2 sm:-mt-6">
                <span className="font-editorial italic text-[17vw] sm:text-[16vw] lg:text-[14vw] font-normal leading-[0.82] tracking-tight text-[#F0442E] select-none lowercase">
                  nusantara
                </span>

                <div className="sm:text-right max-w-xs sm:max-w-sm sm:mb-6">
                  <p className="font-editorial text-2xl sm:text-3xl text-[#F4EFE5] italic mb-2">
                    "Antara Harapan dan Ancaman"
                  </p>
                  <p className="font-sans text-xs text-[#9A968E] tracking-wide">
                    Indonesia sedang memilih arah di panggung global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar & CTA */}
        <div className="editorial-container w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/15">
            <div className="flex items-center gap-6 text-xs font-mono text-[#9A968E] uppercase tracking-widest">
              <span>270M+ PENDUDUK</span>
              <span>•</span>
              <span>17.000+ PULAU</span>
            </div>

            <div className="flex items-center gap-4">
              <Button to="/strengths" variant="primary" size="lg" icon={ArrowRight}>
                JELAJAHI ANALISIS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: ONE LARGE GRAPHIC STATEMENT (TORN BANNER AESTHETIC)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-white/20 bg-[#171717] relative">
        <div className="editorial-container">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#F0442E] mb-8 font-bold">
            <span>02 // PERNYATAAN KUNCI</span>
          </div>

          <h2 className="font-display text-6xl sm:text-8xl lg:text-[9.5rem] text-[#F4EFE5] font-normal leading-[0.88] tracking-wider uppercase max-w-6xl mb-12">
            POTENSI BESAR. <br />
            <span className="text-[#F0442E]">TEKANAN NYATA.</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/20">
            <p className="font-sans text-sm sm:text-base text-[#9A968E] max-w-lg leading-relaxed">
              Empat sudut pandang strategis untuk menguji masa depan Indonesia menuju satu abad kemerdekaan.
            </p>

            <Link
              to="/connections"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4EFE5] hover:text-[#F0442E] font-bold"
            >
              <span>HUBUNGAN ANTARFAKTOR</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: THE FOUR DIRECTIONS (SWOT POSTER LIST)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-white/20">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8 mb-4 border-b border-white/20">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#F0442E] block mb-2 font-bold">
                03 // MATRIKS
              </span>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F4EFE5] tracking-wider leading-none">
                EMPAT ARAH
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9A968E]">
              PILIH PILAR EKSPLORASI
            </span>
          </div>

          {/* Full-width Typographic List */}
          <div className="flex flex-col border-t border-white/20">
            <SWOTCard
              code="01"
              category="Strengths"
              title="KEKUATAN"
              subtitle="MODAL DASAR YANG SUDAH DIMILIKI"
              statement="Modal geostrategis, keanekaragaman hayati, dan bonus usia produktif."
              to="/strengths"
            />

            <SWOTCard
              code="02"
              category="Weaknesses"
              title="KELEMAHAN"
              subtitle="FAKTOR INTERNAL YANG MENGHAMBAT"
              statement="Kesenjangan antarpulau, mutu SDM, dan tata kelola institusi."
              to="/weaknesses"
            />

            <SWOTCard
              code="03"
              category="Opportunities"
              title="PELUANG"
              subtitle="RUANG POTENSIAL UNTUK MELOMPAT"
              statement="Hilirisasi mineral energi bersih global dan akselerasi ekonomi digital."
              to="/opportunities"
            />

            <SWOTCard
              code="04"
              category="Threats"
              title="ANCAMAN"
              subtitle="TEKANAN EKSTERNAL YANG MENGINTAI"
              statement="Krisis iklim pesisir, friksi geopolitik kawasan, dan risiko keamanan siber."
              to="/threats"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: INDONESIA / REAL SVG MAP EXPERIENCE
          ========================================================================= */}
      <section className="border-b border-white/20">
        <div className="editorial-container">
          <IndonesiaMap />
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: TIMELINE TEASER (PAST -> PRESENT -> FUTURE)
          ========================================================================= */}
      <section className="py-24 sm:py-36 border-b border-white/20 bg-[#171717]">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8 mb-12 border-b border-white/20">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#F0442E] block mb-2 font-bold">
                05 // KONTINUITAS
              </span>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F4EFE5] tracking-wider leading-none">
                LINTAS WAKTU
              </h2>
            </div>

            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F4EFE5] text-[#111111] text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#F0442E] hover:text-white transition-colors"
            >
              <span>LIHAT LINIMASA LENGKAP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Timeline 3-Phase Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 sm:p-10 border border-white/20 bg-[#111111]">
              <span className="text-xs font-mono text-[#F0442E] uppercase tracking-widest block mb-4 font-bold">
                [01] MASA LALU
              </span>
              <h3 className="font-display text-4xl text-[#F4EFE5] tracking-wider mb-3">
                TITIK TOLAK
              </h3>
              <p className="font-sans text-xs text-[#9A968E] leading-relaxed">
                Jalur rempah maritim, Deklarasi Djuanda 1957, dan konsolidasi kedaulatan kepulauan.
              </p>
            </div>

            <div className="p-8 sm:p-10 border border-[#F0442E] bg-[#111111]">
              <span className="text-xs font-mono text-[#F0442E] uppercase tracking-widest block mb-4 font-bold">
                [02] MASA KINI
              </span>
              <h3 className="font-display text-4xl text-[#F4EFE5] tracking-wider mb-3">
                AKSELERASI
              </h3>
              <p className="font-sans text-xs text-[#9A968E] leading-relaxed">
                Pembangunan konektivitas, hilirisasi industri, dan ujian pemerataan mutu SDM.
              </p>
            </div>

            <div className="p-8 sm:p-10 border border-white/20 bg-[#111111]">
              <span className="text-xs font-mono text-[#F0442E] uppercase tracking-widest block mb-4 font-bold">
                [03] MASA DEPAN
              </span>
              <h3 className="font-display text-4xl text-[#F4EFE5] tracking-wider mb-3">
                VISI 2045
              </h3>
              <p className="font-sans text-xs text-[#9A968E] leading-relaxed">
                Transisi energi hijau, kemandirian teknologi, dan kepemimpinan di panggung dunia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: FINAL STATEMENT & DIRECT ACTION
          ========================================================================= */}
      <section className="py-28 sm:py-44">
        <div className="editorial-container text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#F0442E] font-bold mb-6">
            06 // TITIK AKHIR
          </span>

          <h2 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#F4EFE5] font-normal leading-[0.88] tracking-wider uppercase mb-10">
            KE MANA <br />
            <span className="text-[#F0442E]">INDONESIA</span> <br />
            BERGERAK?
          </h2>

          <Button to="/strengths" variant="primary" size="lg" icon={ArrowRight}>
            MULAI ANALISIS SEKARANG
          </Button>
        </div>
      </section>
    </div>
  )
}
