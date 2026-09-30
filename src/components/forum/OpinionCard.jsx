import { Clock, Tag } from 'lucide-react'

export default function OpinionCard({ opinion }) {
  const { name, content, category = 'Umum', createdAt } = opinion

  // Format timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return 'Baru saja'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  // Category badge styles
  const categoryStyles = {
    Kekuatan: 'text-[#F0442E] border-[#F0442E]/40 bg-[#F0442E]/10',
    Kelemahan: 'text-[#9A968E] border-[#9A968E]/40 bg-[#9A968E]/10',
    Peluang: 'text-[#F4EFE5] border-[#F4EFE5]/40 bg-[#F4EFE5]/10',
    Ancaman: 'text-[#F0442E] border-[#F0442E]/40 bg-[#F0442E]/10',
    Umum: 'text-[#9A968E] border-white/20 bg-white/5',
  }

  const badgeClass = categoryStyles[category] || categoryStyles.Umum

  return (
    <article className="p-6 sm:p-8 bg-[#171717] border border-white/15 transition-all duration-200 hover:border-white/40 flex flex-col justify-between">
      <div>
        {/* Header: Name & Category */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#F0442E]" />
            <h4 className="font-display text-2xl tracking-wider text-[#F4EFE5]">
              {name || 'Anonim'}
            </h4>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border text-[11px] font-mono uppercase tracking-widest ${badgeClass}`}
          >
            <Tag className="w-3 h-3" />
            {category}
          </span>
        </div>

        {/* Content Body */}
        <p className="font-sans text-sm sm:text-base text-[#F4EFE5]/90 leading-relaxed whitespace-pre-line mb-6">
          "{content}"
        </p>
      </div>

      {/* Footer: Timestamp */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#9A968E]">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#F0442E]" />
          {formatTime(createdAt)}
        </span>
        <span className="uppercase tracking-widest text-[10px]">Suara Publik</span>
      </div>
    </article>
  )
}
