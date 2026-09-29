import { Link } from 'react-router-dom'

/**
 * Bold Graphic Button component.
 * High-contrast, sharp typography, poster interaction.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-bold uppercase tracking-[0.2em] transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none'

  const sizeStyles = {
    sm: 'text-[10px] px-4 py-2 gap-1.5',
    md: 'text-xs px-6 py-3.5 gap-2',
    lg: 'text-sm px-8 py-4.5 gap-3',
  }

  const variantStyles = {
    primary:
      'bg-[#F0442E] text-white hover:bg-[#F4EFE5] hover:text-[#111111] border border-[#F0442E] hover:border-[#F4EFE5] shadow-xs',
    secondary:
      'bg-transparent text-[#F4EFE5] border border-white/30 hover:border-white hover:bg-[#F4EFE5] hover:text-[#111111]',
    white:
      'bg-[#F4EFE5] text-[#111111] hover:bg-[#F0442E] hover:text-white border border-[#F4EFE5]',
    ghost:
      'bg-transparent text-[#F4EFE5] hover:text-[#F0442E] border-b border-transparent hover:border-[#F0442E] p-0 tracking-widest',
  }

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  )
}
