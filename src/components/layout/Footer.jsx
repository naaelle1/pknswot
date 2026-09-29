import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#111111] text-[#F4EFE5] border-t border-white/20 mt-32">
      <div className="editorial-container py-16 sm:py-24">
        {/* Massive Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/20">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#F0442E] block mb-3 font-bold">
              INDONESIA / 2026
            </span>
            <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-wider text-[#F4EFE5] leading-none uppercase">
              DI PERSIMPANGAN <br />
              <span className="font-serif italic text-[#F0442E] lowercase text-5xl sm:text-7xl lg:text-8xl">nusantara</span>
            </h2>
          </div>

          <div>
            <Link
              to="/strengths"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#F0442E] text-white text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#F4EFE5] hover:text-[#111111] transition-colors"
            >
              <span>JELAJAHI ANALISIS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Directory Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs font-mono">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#9A968E] block mb-4">
              01 / ANALISIS
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/strengths" className="text-[#F4EFE5]/70 hover:text-white transition-colors">
                  01 KEKUATAN
                </Link>
              </li>
              <li>
                <Link to="/weaknesses" className="text-[#F4EFE5]/70 hover:text-white transition-colors">
                  02 KELEMAHAN
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#9A968E] block mb-4">
              02 / DINAMIKA
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/opportunities" className="text-[#F4EFE5]/70 hover:text-white transition-colors">
                  03 PELUANG
                </Link>
              </li>
              <li>
                <Link to="/threats" className="text-[#F4EFE5]/70 hover:text-white transition-colors">
                  04 ANCAMAN
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#9A968E] block mb-4">
              03 / EKSPLORASI
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/timeline" className="text-[#F4EFE5]/70 hover:text-white transition-colors">
                  LINIMASA
                </Link>
              </li>
              <li>
                <Link to="/connections" className="text-[#F4EFE5]/70 hover:text-white transition-colors">
                  KETERKAITAN
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#9A968E] block mb-4">
              04 / DATA
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/sources" className="text-[#F4EFE5]/70 hover:text-white transition-colors">
                  SUMBER
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#9A968E]">
          <span>INDONESIA — KAJIAN STRATEGIS PKN.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
