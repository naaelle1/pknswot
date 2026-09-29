/**
 * Editorial StatCard component.
 * Displays a clean numerical or metric highlight with labels, context, and optional source.
 */
export default function StatCard({
  value,
  label,
  description,
  source,
  highlight = false,
  className = '',
}) {
  return (
    <div
      className={`p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 border border-[#D8D1C5] ${
        highlight
          ? 'bg-[#EDE7DA]/70 border-[#B42318]/30'
          : 'bg-[#F5F1E8] hover:bg-[#EDE7DA]/40'
      } ${className}`}
    >
      <div>
        <div className="flex items-baseline justify-between gap-2 mb-3">
          <span className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight">
            {value}
          </span>
          {highlight && (
            <span className="w-2 h-2 rounded-full bg-[#B42318] shrink-0" aria-hidden="true" />
          )}
        </div>

        <h3 className="font-sans font-medium text-sm sm:text-base text-[#171717] tracking-wide mb-2">
          {label}
        </h3>

        {description && (
          <p className="font-sans text-xs sm:text-sm text-[#66615A] leading-relaxed mb-4">
            {description}
          </p>
        )}
      </div>

      {source && (
        <div className="pt-3 mt-auto border-t border-[#D8D1C5]/60 flex items-center justify-between text-[11px] text-[#66615A]">
          <span className="font-mono uppercase tracking-wider text-[10px]">Sumber</span>
          <span className="truncate italic max-w-[180px]">{source}</span>
        </div>
      )}
    </div>
  )
}
