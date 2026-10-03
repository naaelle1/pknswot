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
      defaultTo: '/strengths',
    },
    Weaknesses: {
      label: 'KELEMAHAN',
      defaultTo: '/weaknesses',
    },
    Opportunities: {
      label: 'PELUANG',
      defaultTo: '/opportunities',
    },
    Threats: {
      label: 'ANCAMAN',
      defaultTo: '/threats',
    },
  }

  const config = categoryConfig[category] || categoryConfig.Strengths
  const targetLink = to || config.defaultTo

  return (
    <Link
      to={targetLink}
      className={`group relative block w-full py-5 sm:py-7 lg:py-9 px-3 sm:px-6 lg:px-8 border-b border-white/20 transition-all duration-200 hover:bg-[#F0442E] hover:text-white ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
        {/* Left: Code & Display Title */}
        <div className="flex items-center gap-4 sm:gap-8">
          <span className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#F0442E] group-hover:text-white transition-colors shrink-0">
            {code}
          </span>

          <div>
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-[#F4EFE5] group-hover:text-white leading-none transition-transform group-hover:translate-x-1.5 duration-200 break-words">
              {title || config.label}
            </h3>
            {subtitle && (
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#9A968E] group-hover:text-white/80 block mt-1">
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Right: Short statement & Action Arrow */}
        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 ml-8 sm:ml-0">
          {statement && (
            <p className="font-sans text-xs sm:text-sm text-[#9A968E] group-hover:text-white/90 max-w-sm leading-relaxed transition-colors">
              {statement}
            </p>
          )}

          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white group-hover:text-[#111111] flex items-center justify-center shrink-0 transition-all duration-200">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
