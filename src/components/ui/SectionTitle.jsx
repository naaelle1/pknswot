/**
 * Bold Editorial SectionTitle component.
 * Minimalist, asymmetric typography, strong hierarchy.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  description,
  align = 'left',
  className = '',
  eyebrowColor = 'text-[#B42318]',
  children,
}) {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }

  const selectedAlign = alignmentStyles[align] || alignmentStyles.left

  return (
    <div className={`flex flex-col ${selectedAlign} w-full ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[11px] font-mono font-bold tracking-[0.25em] uppercase ${eyebrowColor}`}>
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-[#171717]/30" />
        </div>
      )}

      {title && (
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#171717] font-normal tracking-tight leading-[1.05] mb-4">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="font-serif text-xl sm:text-2xl text-[#66615A] italic mb-3">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="font-sans text-xs sm:text-sm text-[#66615A] max-w-xl leading-relaxed">
          {description}
        </p>
      )}

      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
