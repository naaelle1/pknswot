import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const closeMenu = () => setMobileMenuOpen(false)

  // Automatically close mobile menu on route changes
  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  const navLinks = [
    { name: 'BERANDA', to: '/', number: '01' },
    { name: 'ANALISIS', to: '/strengths', number: '02' },
    { name: 'TIMELINE', to: '/timeline', number: '03' },
    { name: 'KONEKSI', to: '/connections', number: '04' },
    { name: 'SUMBER', to: '/sources', number: '05' },
    { name: 'ABOUT US', to: '/about', number: '06' },
  ]

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
            <span className="hidden sm:inline text-[#F0442E] text-lg font-serif">✦</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-9" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] font-mono transition-colors relative py-1 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#9A968E] hover:text-[#F4EFE5] font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F0442E]" />}
                    {link.name}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action / CTA -> Suara Publik (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/forum"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F0442E] text-white hover:bg-[#F4EFE5] hover:text-[#111111] text-xs font-sans font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>SUARA PUBLIK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button - Sharp editorial button with 3px radius containing ONLY hamburger / X */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-[3px] border border-white/20 bg-[#171717] hover:border-[#F0442E] flex items-center justify-center text-[#F4EFE5] focus:outline-none transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#F0442E]" />
              ) : (
                <Menu className="w-5 h-5 text-[#F4EFE5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Editorial Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-white/20 bg-[#111111] overflow-hidden"
          >
            <div className="editorial-container py-8 flex flex-col space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#9A968E]">
                  NAVIGASI
                </span>
                <span className="text-[10px] font-mono text-[#F0442E]">
                  XII SIJA 2
                </span>
              </div>

              {/* Navigation Links with Bebas Neue typography */}
              <div className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-baseline justify-between py-2 group border-b border-zinc-900/80 transition-colors ${
                          isActive ? 'text-[#F0442E]' : 'text-[#F4EFE5] hover:text-[#F0442E]'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-baseline gap-4">
                            <span className="font-mono text-xs text-[#9A968E] group-hover:text-[#F0442E] transition-colors">
                              {link.number}
                            </span>
                            <span className="font-display text-3xl sm:text-4xl tracking-wider uppercase leading-none">
                              {link.name}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-[#9A968E] group-hover:translate-x-1 transition-transform">
                            {isActive ? '●' : '→'}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Action Link: Suara Publik */}
              <div className="pt-2">
                <Link
                  to="/forum"
                  onClick={closeMenu}
                  className="flex items-center justify-between w-full py-4 px-5 bg-[#F0442E] text-white hover:bg-[#F4EFE5] hover:text-[#111111] transition-colors font-sans text-xs font-bold uppercase tracking-widest rounded-[3px]"
                >
                  <span>SUARA PUBLIK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                <span>PKN · KELOMPOK 5 · SMK N 7 SEMARANG</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
