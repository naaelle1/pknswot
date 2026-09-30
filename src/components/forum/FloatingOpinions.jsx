import { useState } from 'react'
import { motion } from 'framer-motion'
import OpinionCard from './OpinionCard'
import { Inbox, Filter } from 'lucide-react'

const CATEGORIES = ['Semua', 'Refleksi', 'Kekuatan', 'Kelemahan', 'Peluang', 'Ancaman', 'Umum']

// Deterministic layout offsets for floating desktop composition
const DESKTOP_SLOTS = [
  { className: 'lg:col-span-4 lg:translate-y-2' },
  { className: 'lg:col-span-4 lg:-translate-y-6 lg:translate-x-4' },
  { className: 'lg:col-span-4 lg:translate-y-8' },
  { className: 'lg:col-span-5 lg:translate-x-2' },
  { className: 'lg:col-span-7 lg:-translate-y-4' },
  { className: 'lg:col-span-4 lg:translate-y-4' },
  { className: 'lg:col-span-4 lg:-translate-y-2' },
  { className: 'lg:col-span-4 lg:translate-y-6' },
]

export default function FloatingOpinions({ opinions = [], loading = false, error = null }) {
  const [activeFilter, setActiveFilter] = useState('Semua')

  const filtered =
    activeFilter === 'Semua'
      ? opinions
      : opinions.filter((item) => item.category === activeFilter)

  return (
    <div className="relative z-10 w-full flex flex-col space-y-8">
      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F0442E] font-bold">
          <Filter className="w-3.5 h-3.5" />
          <span>TOPIK</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => {
            const isSelected = activeFilter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#F0442E] text-white border-[#F0442E] font-bold'
                    : 'bg-[#111111]/80 text-[#9A968E] border-white/15 hover:border-white hover:text-[#F4EFE5]'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-24 text-center flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-2 border-white/20 border-t-[#F0442E] rounded-full animate-spin" />
          <p className="font-mono text-xs text-[#9A968E] tracking-[0.2em] uppercase">
            Memuat pendapat...
          </p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-8 border border-[#F0442E]/40 bg-[#171717] text-center text-xs font-mono text-[#F4EFE5]">
          <p>Terjadi masalah saat memuat pendapat.</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filtered.length === 0 && (
        <div className="py-28 px-6 border border-white/15 bg-[#111111]/60 text-center flex flex-col items-center justify-center">
          <Inbox className="w-10 h-10 text-[#9A968E]/40 mb-4" />
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#F4EFE5] italic mb-2">
            BELUM ADA PENDAPAT
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#9A968E] max-w-sm">
            Jadilah yang pertama menyampaikan pendapat.
          </p>
        </div>
      )}

      {/* Floating Distributed Grid of Opinions */}
      {!loading && !error && filtered.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {filtered.map((opinion, index) => {
            const slot = DESKTOP_SLOTS[index % DESKTOP_SLOTS.length]
            return (
              <motion.div
                key={opinion.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                className={`w-full ${slot.className}`}
              >
                <OpinionCard opinion={opinion} />
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
