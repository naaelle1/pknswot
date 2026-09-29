import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMenu = () => setMobileMenuOpen(false)
  const location = useLocation()

  const navLinks = [
    { name: 'BERANDA', to: '/' },
    { name: 'ANALISIS', to: '/strengths', aliases: ['/weaknesses', '/opportunities', '/threats'] },
    { name: 'TIMELINE', to: '/timeline' },
    { name: 'KONEKSI', to: '/connections' },
    { name: 'SUMBER', to: '/sources' },
  ]

  const checkIsActive = (link, navLinkIsActive) => {
    if (navLinkIsActive) return true;
    if (link.aliases && link.aliases.includes(location.pathname)) return true;
    return false;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111]/95 backdrop-blur-md border-b border-white/10">
      <div className="editorial-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="INDONESIA - Beranda"
          >
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-[#F4EFE5] group-hover:text-[#F0442E] transition-colors">
              INDONESIA
            </span>
            <span className="text-[#F0442E] text-lg font-serif">✦</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] font-mono transition-colors relative py-1 ${
                    checkIsActive(link, isActive)
                      ? 'text-white font-bold'
                      : 'text-[#9A968E] hover:text-[#F4EFE5] font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    {checkIsActive(link, isActive) && <span className="w-1.5 h-1.5 rounded-full bg-[#F0442E]" />}
                    {link.name}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action / CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/strengths"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F0442E] text-white hover:bg-[#F4EFE5] hover:text-[#111111] text-xs font-sans font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
            >
              <span>JELAJAHI</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4EFE5] hover:text-[#F0442E] border border-white/20 bg-[#171717] focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/20 bg-[#111111] px-6 py-8 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9A968E] pb-2 border-b border-white/10">
              NAVIGASI
            </span>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between py-2 text-2xl font-display tracking-wider transition-colors ${
                    checkIsActive(link, isActive) ? 'text-[#F0442E]' : 'text-[#F4EFE5]'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#9A968E]">→</span>
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10">
              <Link
                to="/strengths"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#F0442E] text-white text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#F4EFE5] hover:text-[#111111] transition-colors"
              >
                <span>MULAI EKSPLORASI</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
