import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#111111] text-[#F4EFE5] border-t border-white/15 mt-24">
      <div className="editorial-container">

        {/* Main */}
        <div className="py-12 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

            {/* Identity */}
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-9 h-9 bg-[#F0442E] text-white font-mono text-sm font-bold">
                  05
                </span>

                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9A968E]">
                  Kelompok 5 / PKN
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.9] tracking-tight">
                Indonesia
                <br />
                <span className="font-serif italic font-normal text-[#F0442E]">
                  di persimpangan.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#F4EFE5]/60">
                Melihat yang kuat. Membaca yang lemah. Menemukan peluang. Menghadapi ancaman.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-8 text-xs font-mono">
              <div>
                <span className="block mb-3 text-[#9A968E] uppercase tracking-widest">
                  Analisis
                </span>

                <div className="flex flex-col gap-2">
                  <Link to="/strengths" className="text-[#F4EFE5]/70 hover:text-[#F0442E] transition-colors">
                    Kekuatan
                  </Link>

                  <Link to="/weaknesses" className="text-[#F4EFE5]/70 hover:text-[#F0442E] transition-colors">
                    Kelemahan
                  </Link>

                  <Link to="/opportunities" className="text-[#F4EFE5]/70 hover:text-[#F0442E] transition-colors">
                    Peluang
                  </Link>

                  <Link to="/threats" className="text-[#F4EFE5]/70 hover:text-[#F0442E] transition-colors">
                    Ancaman
                  </Link>
                </div>
              </div>

              <div>
                <span className="block mb-3 text-[#9A968E] uppercase tracking-widest">
                  Eksplorasi
                </span>

                <div className="flex flex-col gap-2">
                  <Link to="/timeline" className="text-[#F4EFE5]/70 hover:text-[#F0442E] transition-colors">
                    Linimasa
                  </Link>

                  <Link to="/connections" className="text-[#F4EFE5]/70 hover:text-[#F0442E] transition-colors">
                    Keterkaitan
                  </Link>

                  <Link to="/sources" className="text-[#F4EFE5]/70 hover:text-[#F0442E] transition-colors">
                    Sumber
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-[#68655F]">
              <span>PKN</span>
              <span>•</span>
              <span>XII SIJA 2</span>
              <span>•</span>
              <span>SMK Negeri 7 Semarang</span>
              <span>•</span>
              <span>2026</span>
            </div>

            <div className="flex items-center gap-5 text-[10px] font-mono uppercase tracking-widest">

              <Link
                to="/"
                className="flex items-center gap-1 text-[#9A968E] hover:text-white transition-colors"
              >
                Beranda
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={scrollToTop}
                className="group flex items-center gap-1.5 text-[#9A968E] hover:text-white transition-colors cursor-pointer"
              >
                Atas
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}