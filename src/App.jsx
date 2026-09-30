import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Strengths from './pages/Strengths'
import Weaknesses from './pages/Weaknesses'
import Opportunities from './pages/Opportunities'
import Threats from './pages/Threats'
import Timeline from './pages/Timeline'
import Connections from './pages/Connections'
import Forum from './pages/Forum'
import { ArrowLeft, Clock, Info } from 'lucide-react'

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/**
 * Dark Poster Placeholder Component for Routes that are not yet implemented.
 */
function RoutePlaceholder({ title, category, owner, description }) {
  return (
    <main className="editorial-container py-24 sm:py-36">
      <div className="max-w-3xl mx-auto border border-white/20 bg-[#171717] p-8 sm:p-14 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/20 text-xs font-mono uppercase tracking-widest text-[#F0442E] mb-8 font-bold">
          <Info className="w-3.5 h-3.5" />
          <span>FONDASI NAVIGASI — {owner}</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl text-[#F4EFE5] tracking-wider uppercase mb-2">
          {title}
        </h1>
        {category && (
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#9A968E] mb-6">
            {category}
          </p>
        )}

        <p className="font-sans text-sm text-[#9A968E] leading-relaxed mb-10 max-w-md">
          {description ||
            'Halaman ini disiapkan dalam fondasi routing. Modul detail sedang dikerjakan oleh rekan tim.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-bold uppercase tracking-widest bg-[#F0442E] text-white hover:bg-[#F4EFE5] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>KEMBALI KE BERANDA</span>
          </Link>
          <Link
            to="/timeline"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-bold uppercase tracking-widest border border-white/30 bg-transparent text-[#F4EFE5] hover:bg-[#F4EFE5] hover:text-[#111111] transition-colors"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>CEK LINIMASA</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#111111] text-[#F4EFE5] selection:bg-[#F0442E] selection:text-white">
        <Navbar />

        <main className="flex-1">
          <Routes>
            {/* Person 1 Main Page */}
            <Route path="/" element={<Home />} />

            {/* Person 2 Pages */}
            <Route path="/strengths" element={<Strengths />} />
            <Route path="/weaknesses" element={<Weaknesses />} />
            <Route
              path="/sources"
              element={
                <RoutePlaceholder
                  title="DAFTAR SUMBER & REFERENSI"
                  category="04 / BIBLIOGRAFI & ARSIP DATA"
                  owner="Person 2 (Sources.jsx)"
                  description="Kompilasi dokumen resmi, jurnal ilmiah, dan data statistik terpercaya."
                />
              }
            />

            {/* Person 3 Pages */}
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/threats" element={<Threats />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/connections" element={<Connections />} />

            {/* Public Interactive Forum */}
            <Route path="/forum" element={<Forum />} />

            {/* Fallback 404 Route */}
            <Route
              path="*"
              element={
                <RoutePlaceholder
                  title="HALAMAN TIDAK DITEMUKAN"
                  category="404 NOT FOUND"
                  owner="Sistem"
                  description="Alamat yang Anda tuju tidak tersedia dalam direktori situs."
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
