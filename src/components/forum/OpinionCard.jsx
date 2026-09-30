import { Quote } from 'lucide-react'

export default function OpinionCard({ opinion, className = '', style = {} }) {
  const { name, content, category = 'Refleksi', createdAt, archiveId } = opinion

  // Format timestamp cleanly into Indonesian
  const formatTime = (timestamp) => {
    if (!timestamp) return 'Hari Ini'
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
      return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(date)
    } catch {
      return 'Tersimpan'
    }
  }

  // Display author name in Indonesian (Anonim if empty/Anonymous)
  const displayName =
    !name || name.toLowerCase() === 'anonymous' ? 'Anonim' : name

  // Generate clean entry ID e.g. CATATAN #A82F
  const cleanId = (archiveId || opinion.id || 'A82F')
    .replace(/^VOL-/, '')
    .substring(0, 4)
    .toUpperCase()

  return (
    <article
      style={style}
      className={`group relative bg-[#111111]/90 backdrop-blur-md border border-white/20 p-5 sm:p-6 transition-all duration-300 hover:border-[#F0442E] hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* Top row: Quote icon + Name + Category Badge */}
      <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#F4EFE5]">
          <Quote className="w-3.5 h-3.5 text-[#F0442E] fill-[#F0442E]/20" />
          <span className="font-semibold truncate max-w-[140px]">
            {displayName}
          </span>
        </div>

        <span className="px-2 py-0.5 border border-white/20 text-[10px] font-mono uppercase tracking-widest text-[#9A968E] group-hover:text-[#F0442E] group-hover:border-[#F0442E]/50 transition-colors">
          {category}
        </span>
      </div>

      {/* Opinion Body */}
      <p className="font-sans text-xs sm:text-sm text-[#F4EFE5]/90 leading-relaxed whitespace-pre-line mb-6 font-normal">
        "{content}"
      </p>

      {/* Footer: Catatan ID + Date */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#9A968E]">
        <span className="tracking-widest uppercase">
          CATATAN #{cleanId}
        </span>
        <span>{formatTime(createdAt)}</span>
      </div>
    </article>
  )
}
