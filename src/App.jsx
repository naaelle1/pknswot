import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Strengths from './pages/Strengths'
import Weaknesses from './pages/Weaknesses'
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
 * Dark Poster Placeholder Component for Routes belonging to Person 2 and Person 3 that are not yet implemented.
 * Kept inline inside App.jsx to avoid modifying or creating external files owned by other teammates.
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

            {/* Person 2 Pages (Active) */}
            <Route path="/strengths" element={<Strengths />} />
            <Route path="/weaknesses" element={<Weaknesses />} />

            {/* Person 2 / 3 Placeholders (Until Implemented) */}
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
            <Route
              path="/opportunities"
              element={
                <RoutePlaceholder
                  title="PELUANG (OPPORTUNITIES)"
                  category="03 / FAKTOR EKSTERNAL POSITIF"
                  owner="Person 3 (Opportunities.jsx)"
                  description="Kajian terperinci mengenai hilirisasi mineral kritis, transisi energi baru terbarukan, dan diplomasi regional."
                />
              }
            />
            <Route
              path="/threats"
              element={
                <RoutePlaceholder
                  title="ANCAMAN (THREATS)"
                  category="04 / FAKTOR EKSTERNAL NEGATIF"
                  owner="Person 3 (Threats.jsx)"
                  description="Kajian terperinci mengenai risiko perubahan iklim kepulauan, friksi geopolitik, dan ancaman siber."
                />
              }
            />
            <Route
              path="/timeline"
              element={
                <RoutePlaceholder
                  title="LINTAS WAKTU (TIMELINE)"
                  category="05 / KRONOLOGI HISTORIS & VISI 2045"
                  owner="Person 3 (Timeline.jsx)"
                  description="Kronologi interaktif perjalanan bangsa dari titik tolak sejarah hingga visi Indonesia 2045."
                />
              }
            />
            <Route
              path="/connections"
              element={
                <RoutePlaceholder
                  title="KETERKAITAN ANTARFAKTOR"
                  category="06 / RELASI SILANG S-W-O-T"
                  owner="Person 3 (Connections.jsx)"
                  description="Matriks interaktif analisis relasi silang antara kekuatan, kelemahan, peluang, dan ancaman."
                />
              }
            />

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
