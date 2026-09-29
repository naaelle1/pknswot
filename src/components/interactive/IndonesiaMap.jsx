import { useState } from 'react'
import mapSvgUrl from '../../assets/images/indonesia-map.svg'

const REGIONS = [
  {
    id: 'sumatra',
    name: 'SUMATRA',
    category: 'JALUR MARITIM & AGRARIS',
    summary: 'Selat Malaka sebagai urat nadi logistik global serta sentra komoditas energi dan perkebunan.',
  },
  {
    id: 'jawa',
    name: 'JAVA',
    category: 'POPULASI & INDUSTRI',
    summary: 'Sentra demografi terbesar (56% populasi), episentrum manufaktur nasional, dan jaringan infrastruktur terpadu.',
  },
  {
    id: 'kalimantan',
    name: 'KALIMANTAN',
    category: 'SUMBER DAYA & IBU KOTA',
    summary: 'Paru-paru hutan hujan tropis dunia, cadangan mineral dan energi, serta pusat orientasi Ibu Kota Nusantara (IKN).',
  },
  {
    id: 'sulawesi',
    name: 'SULAWESI',
    category: 'INDUSTRI & BIODIVERSITAS',
    summary: 'Sentra pengolahan nikel dan mineral kritis energi bersih global serta kekayaan hayati Wallacea.',
  },
  {
    id: 'bali-nusatenggara',
    name: 'BALI & NUSA TENGGARA',
    category: 'PARIWISATA & ENERGI TERBARUKAN',
    summary: 'Episentrum ekonomi pariwisata internasional dan potensi energi surya kawasan kepulauan timur.',
  },
  {
    id: 'maluku-papua',
    name: 'PAPUA & MALUKU',
    category: 'REMPAH & EKOLOGI PRIMER',
    summary: 'Kepulauan rempah historis, tutupan hutan alam terluas, cadangan tembaga-emas raksasa, dan laut kaya biodiversitas.',
  },
]

export default function IndonesiaMap() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0])

  return (
    <div className="w-full py-20 sm:py-32">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8 mb-12 border-b border-white/20">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#F0442E] block mb-2 font-bold">
            PETA NUSANTARA
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F4EFE5] tracking-wider leading-none">
            GUGUS KEPULAUAN
          </h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#9A968E]">
          17.000+ PULAU • 3 ZONA WAKTU
        </span>
      </div>

      {/* Large SVG Map Showcase */}
      <div className="relative w-full bg-[#171717] border border-white/20 p-6 sm:p-12 lg:p-16 mb-10 overflow-hidden">
        {/* Subtle grid lines background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#F4EFE5 1px, transparent 1px), linear-gradient(to right, #F4EFE5 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        {/* Real Accurate SVG Indonesia Map */}
        <div className="relative z-10 w-full flex items-center justify-center py-4">
          <img
            src={mapSvgUrl}
            alt="Peta Resmi Wilayah Kepulauan Indonesia"
            className="w-full h-auto max-h-[500px] object-contain filter invert opacity-90 transition-all hover:opacity-100"
          />
        </div>
      </div>

      {/* Interactive Region Selector Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {REGIONS.map((region) => {
          const isSelected = activeRegion.id === region.id
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setActiveRegion(region)}
              className={`p-4 text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#F0442E] text-white border-[#F0442E]'
                  : 'bg-[#171717] text-[#F4EFE5] border-white/15 hover:border-white'
              }`}
            >
              <span className="font-display text-2xl block tracking-wider leading-none mb-1">
                {region.name}
              </span>
              <span className={`text-[10px] font-mono uppercase tracking-widest block truncate ${
                isSelected ? 'text-white/80' : 'text-[#9A968E]'
              }`}>
                {region.category}
              </span>
            </button>
          )
        })}
      </div>

      {/* Selected Region Highlight Display */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-t border-b border-white/20 bg-[#171717] px-6 sm:px-10">
        <div className="flex items-center gap-4">
          <span className="w-3.5 h-3.5 bg-[#F0442E] shrink-0" />
          <div>
            <h3 className="font-display text-4xl sm:text-5xl text-[#F4EFE5] tracking-wider leading-none">
              {activeRegion.name}
            </h3>
            <span className="text-xs font-mono text-[#F0442E] uppercase tracking-widest block mt-1 font-bold">
              {activeRegion.category}
            </span>
          </div>
        </div>

        <p className="font-sans text-sm sm:text-base text-[#F4EFE5]/90 max-w-xl leading-relaxed">
          {activeRegion.summary}
        </p>
      </div>
    </div>
  )
}
