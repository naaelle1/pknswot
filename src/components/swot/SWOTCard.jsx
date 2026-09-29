import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Bold Poster List / Chapter Item component.
 * Uses Bebas Neue display typography, full width, transforming to red on hover.
 */
export default function SWOTCard({
  code = '01',
  category = 'Strengths',
  title,
  subtitle,
  statement,
  to,
  className = '',
}) {
  const categoryConfig = {
    Strengths: {
      label: 'KEKUATAN',
      subtitle: 'MODAL DASAR YANG SUDAH DIMILIKI',
      defaultTo: '/strengths',
    },
    Weaknesses: {
      label: 'KELEMAHAN',
      subtitle: 'FAKTOR INTERNAL YANG MENGHAMBAT',
      defaultTo: '/weaknesses',
    },
    Opportunities: {
      label: 'PELUANG',
      subtitle: 'RUANG POTENSIAL UNTUK MELOMPAT',
      defaultTo: '/opportunities',
    },
    Threats: {
      label: 'ANCAMAN',
      subtitle: 'TEKANAN EKSTERNAL YANG MENGINTAI',
      defaultTo: '/threats',
    },
  }

  const config = categoryConfig[category] || categoryConfig.Strengths
  const targetLink = to || config.defaultTo

  return (
    <Link
      to={targetLink}
      className={`group relative block w-full py-8 sm:py-12 px-6 sm:px-12 border-b border-white/20 transition-all duration-200 hover:bg-[#F0442E] hover:text-white ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Code & Massive Display Title */}
        <div className="flex items-baseline gap-6 sm:gap-12">
          <span className="font-display text-4xl sm:text-6xl text-[#F0442E] group-hover:text-white transition-colors">
            {code}
          </span>

          <div>
            <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-wider text-[#F4EFE5] group-hover:text-white leading-none transition-transform group-hover:translate-x-3 duration-200">
              {title || config.label}
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#9A968E] group-hover:text-white/80 block mt-2">
              {subtitle || config.subtitle}
            </span>
          </div>
        </div>

        {/* Right: Short statement & Action Arrow */}
        <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-12">
          {statement && (
            <p className="font-sans text-xs sm:text-sm text-[#9A968E] group-hover:text-white/90 max-w-xs leading-relaxed transition-colors hidden sm:block">
              {statement}
            </p>
          )}

          <div className="w-14 h-14 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white group-hover:text-[#111111] flex items-center justify-center shrink-0 transition-all duration-200">
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
