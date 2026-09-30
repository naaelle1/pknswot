import { useState } from 'react'
import OpinionCard from './OpinionCard'
import { MessageSquare, Filter } from 'lucide-react'

const FILTER_CATEGORIES = ['Semua', 'Umum', 'Kekuatan', 'Kelemahan', 'Peluang', 'Ancaman']

export default function OpinionList({ opinions = [], loading = false, error = null }) {
  const [selectedFilter, setSelectedFilter] = useState('Semua')

  const filteredOpinions =
    selectedFilter === 'Semua'
      ? opinions
      : opinions.filter((item) => item.category === selectedFilter)

  return (
    <div className="flex flex-col space-y-8">
      {/* Filter Tabs Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F0442E] font-bold">
          <Filter className="w-4 h-4" />
          <span>FILTER KATEGORI</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {FILTER_CATEGORIES.map((cat) => {
            const isSelected = selectedFilter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#F4EFE5] text-[#111111] border-[#F4EFE5] font-bold'
                    : 'bg-[#171717] text-[#9A968E] border-white/15 hover:border-white hover:text-[#F4EFE5]'
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
        <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-2 border-white/20 border-t-[#F0442E] rounded-full animate-spin" />
          <p className="font-mono text-xs text-[#9A968E] uppercase tracking-widest">
            Memuat opini publik secara realtime...
          </p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-8 border border-red-500/40 bg-red-950/20 text-center text-xs font-mono text-red-300">
          <p>Terjadi kendala saat menghubungkan ke database suara publik.</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredOpinions.length === 0 && (
        <div className="py-24 px-6 border border-white/15 bg-[#171717] text-center flex flex-col items-center justify-center">
          <MessageSquare className="w-12 h-12 text-[#9A968E]/40 mb-4" />
          <h4 className="font-display text-3xl sm:text-4xl text-[#F4EFE5] tracking-wider mb-2">
            BELUM ADA PENDAPAT DI KATEGORI INI
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#9A968E] max-w-sm">
            Jadilah yang pertama menyampaikan pandanganmu pada kolom kirim pendapat.
          </p>
        </div>
      )}

      {/* Opinions Grid / List */}
      {!loading && !error && filteredOpinions.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpinions.map((item) => (
            <OpinionCard key={item.id} opinion={item} />
          ))}
        </div>
      )}
    </div>
  )
}
