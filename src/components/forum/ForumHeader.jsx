import { Plus, MessageSquare } from 'lucide-react'

export default function ForumHeader({ count = 0, onOpenModal }) {
  // Natural dynamic count copy in Indonesian
  const renderCountText = () => {
    if (count === 0) return 'Belum ada pendapat'
    return `${count} pendapat masuk`
  }

  return (
    <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-8 sm:mb-12 border-b border-white/15">
      {/* Editorial Title Block */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.3em] uppercase text-[#F0442E] mb-3 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0442E]" />
          <span>INDONESIA / SUARA PUBLIK</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F4EFE5] font-normal leading-[1.02] tracking-tight">
          Ruang <br className="hidden sm:inline" />
          <span className="italic text-[#F0442E]">Suara Publik</span>
        </h1>

        <p className="font-sans text-xs sm:text-sm text-[#9A968E] mt-4 leading-relaxed max-w-lg">
          Tempat untuk menyampaikan pendapat, tanggapan, dan pandangan tentang Indonesia.
        </p>
      </div>

      {/* Action / Trigger Button */}
      <div className="flex flex-col sm:items-end gap-4 shrink-0">
        <button
          type="button"
          onClick={onOpenModal}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F0442E] text-white hover:bg-white hover:text-[#111111] text-xs font-sans font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#F0442E]/20"
        >
          <Plus className="w-4 h-4" />
          <span>TULIS PENDAPAT</span>
        </button>

        <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#9A968E]">
          <MessageSquare className="w-3.5 h-3.5 text-[#F0442E]" />
          <span>{renderCountText()}</span>
        </div>
      </div>
    </div>
  )
}
