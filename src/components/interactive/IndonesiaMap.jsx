import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { REGION_ELEMENTS } from './indonesiaMapElements'

const REGIONS = [
  {
    id: 'sumatra',
    name: 'SUMATRA',
    description: 'Jalur perdagangan, perkebunan, energi, dan sumber daya alam.',
    link: '/strengths',
  },
  {
    id: 'jawa',
    name: 'JAWA',
    description: 'Pusat populasi, industri, pemerintahan, dan kegiatan ekonomi.',
    link: '/strengths',
  },
  {
    id: 'kalimantan',
    name: 'KALIMANTAN',
    description: 'Sumber daya alam, kawasan hutan, dan perkembangan pusat pemerintahan baru.',
    link: '/opportunities',
  },
  {
    id: 'sulawesi',
    name: 'SULAWESI',
    description: 'Perikanan, pertambangan, industri, dan posisi strategis di Indonesia timur.',
    link: '/opportunities',
  },
  {
    id: 'bali-nusatenggara',
    name: 'BALI & NUSA TENGGARA',
    description: 'Pariwisata, pertanian, kelautan, dan potensi energi terbarukan.',
    link: '/opportunities',
  },
  {
    id: 'papua-maluku',
    name: 'PAPUA & MALUKU',
    description: 'Sumber daya alam, kekayaan laut, biodiversitas, dan wilayah kepulauan timur.',
    link: '/weaknesses',
  },
]

export default function IndonesiaMap() {
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[1]) // Default to JAWA
  const [hoveredRegion, setHoveredRegion] = useState(null)

  return (
    <div className="w-full py-16 sm:py-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-6 sm:mb-8 border-b border-white/20">
        <h2 className="font-display text-4xl sm:text-6xl text-[#F4EFE5] tracking-wider leading-none uppercase">
          PETA INDONESIA
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-[#9A968E]">
          Pilih wilayah untuk melihat potensi dan tantangannya.
        </span>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full bg-[#171717] border border-white/20 p-4 sm:p-8 lg:p-10 mb-6 sm:mb-8 overflow-hidden">
        <svg
          viewBox="0 0 1875 750"
          className="w-full h-auto max-h-[520px] select-none block"
          aria-label="Peta Interaktif Wilayah Indonesia"
        >
          {REGIONS.map((region) => {
            const isSelected = selectedRegion.id === region.id
            const isHovered = hoveredRegion === region.id
            const fill = isSelected ? '#F0442E' : isHovered ? '#606060' : '#4A4A4A'
            const stroke = '#171717'
            const strokeWidth = '0.35'
            const elements = REGION_ELEMENTS[region.id] || []

            return (
              <g
                key={region.id}
                id={`region-${region.id}`}
                role="button"
                tabIndex={0}
                aria-label={region.name}
                onClick={() => setSelectedRegion(region)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedRegion(region)
                  }
                }}
                className="cursor-pointer focus:outline-none"
              >
                {elements.map((elem, idx) => {
                  if (elem.tag === 'path') {
                    return (
                      <path
                        key={idx}
                        d={elem.d}
                        fill={elem.isLine ? 'none' : fill}
                        stroke={elem.isLine ? (isSelected ? '#F0442E' : '#333333') : stroke}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit="10"
                        style={{ transition: 'fill 0.2s ease, stroke 0.2s ease' }}
                      />
                    )
                  }
                  if (elem.tag === 'polygon') {
                    return (
                      <polygon
                        key={idx}
                        points={elem.points}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit="10"
                        style={{ transition: 'fill 0.2s ease, stroke 0.2s ease' }}
                      />
                    )
                  }
                  if (elem.tag === 'polyline') {
                    return (
                      <polyline
                        key={idx}
                        points={elem.points}
                        fill="none"
                        stroke={isSelected ? '#F0442E' : '#333333'}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit="10"
                        style={{ transition: 'stroke 0.2s ease' }}
                      />
                    )
                  }
                  return null
                })}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Region Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6 sm:mb-8">
        {REGIONS.map((region) => {
          const isSelected = selectedRegion.id === region.id
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedRegion(region)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              className={`p-3 sm:p-4 text-left border transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#F0442E] text-white border-[#F0442E]'
                  : 'bg-[#171717] text-[#F4EFE5] border-white/15 hover:border-white/50 hover:bg-[#202020]'
              }`}
            >
              <span className="font-display text-lg sm:text-xl block tracking-wider leading-tight">
                {region.name}
              </span>
            </button>
          )
        })}
      </div>

      {/* Selected Region Information Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 sm:py-8 border-t border-b border-white/20 bg-[#171717] px-6 sm:px-8">
        <div className="max-w-2xl">
          <h3 className="font-display text-3xl sm:text-4xl text-[#F4EFE5] tracking-wider leading-none mb-2">
            {selectedRegion.name}
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#F4EFE5]/90 leading-relaxed">
            {selectedRegion.description}
          </p>
        </div>

        {selectedRegion.link && (
          <Link
            to={selectedRegion.link}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4EFE5] hover:text-[#F0442E] font-bold py-2 shrink-0 transition-colors"
          >
            <span>LIHAT ANALISIS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
