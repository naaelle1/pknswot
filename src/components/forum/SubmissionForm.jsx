import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '../ui/Button'

const CATEGORIES = ['Umum', 'Kekuatan', 'Kelemahan', 'Peluang', 'Ancaman']

export default function SubmissionForm() {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('Umum')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg('')
    setSuccess(false)

    const cleanName = name.trim()
    const cleanContent = content.trim()

    if (!cleanName || !cleanContent) {
      setErrorMsg('Nama/alias dan isi pendapat wajib diisi.')
      return
    }

    if (cleanName.length > 40) {
      setErrorMsg('Nama maksimal 40 karakter.')
      return
    }

    if (cleanContent.length > 500) {
      setErrorMsg('Isi pendapat maksimal 500 karakter.')
      return
    }

    setSubmitting(true)

    try {
      await addDoc(collection(db, 'opinions'), {
        name: cleanName,
        content: cleanContent,
        category,
        createdAt: serverTimestamp(),
      })

      setName('')
      setContent('')
      setCategory('Umum')
      setSuccess(true)

      // Auto-hide success message after 4s
      setTimeout(() => setSuccess(false), 4000)
    } catch (err) {
      console.error('Failed to submit opinion:', err)
      setErrorMsg('Gagal mengirim pendapat. Periksa koneksi internet atau coba lagi.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[#171717] border border-white/20 p-6 sm:p-10 relative">
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/15">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#F0442E] block mb-1 font-bold">
            PARTISIPASI PUBLIK
          </span>
          <h3 className="font-display text-4xl sm:text-5xl text-[#F4EFE5] tracking-wider leading-none">
            KIRIM PENDAPAT
          </h3>
        </div>
        <span className="font-mono text-xs text-[#9A968E] uppercase tracking-widest hidden sm:inline">
          KOLOM DISKUSI
        </span>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-[#F0442E]/10 border border-[#F0442E] text-[#F4EFE5] flex items-center gap-3 text-xs font-mono">
          <CheckCircle2 className="w-5 h-5 text-[#F0442E] shrink-0" />
          <span>Pendapatmu telah berhasil dikirim ke forum publik!</span>
        </div>
      )}

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-950/40 border border-red-500 text-red-200 flex items-center gap-3 text-xs font-mono">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name / Alias Input */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="name"
              className="text-xs font-mono uppercase tracking-widest text-[#F4EFE5] font-bold"
            >
              Nama / Alias <span className="text-[#F0442E]">*</span>
            </label>
            <span className="text-[10px] font-mono text-[#9A968E]">
              {name.length}/40
            </span>
          </div>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            placeholder="Contoh: Budi (Pelajar) / Warga Nusantara"
            className="w-full bg-[#111111] border border-white/20 focus:border-[#F0442E] focus:outline-none text-[#F4EFE5] p-3.5 text-sm font-sans placeholder-[#9A968E]/60 transition-colors"
            required
            disabled={submitting}
          />
        </div>

        {/* SWOT Category Selection */}
        <div>
          <label className="text-xs font-mono uppercase tracking-widest text-[#F4EFE5] font-bold block mb-2">
            Kategori Terkait
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = category === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  disabled={submitting}
                  className={`py-2.5 px-3 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#F0442E] text-white border-[#F0442E] font-bold'
                      : 'bg-[#111111] text-[#9A968E] border-white/15 hover:border-white hover:text-[#F4EFE5]'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content / Opinion Textarea */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="content"
              className="text-xs font-mono uppercase tracking-widest text-[#F4EFE5] font-bold"
            >
              Isi Pandangan / Pendapat <span className="text-[#F0442E]">*</span>
            </label>
            <span className="text-[10px] font-mono text-[#9A968E]">
              {content.length}/500
            </span>
          </div>
          <textarea
            id="content"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={500}
            placeholder="Bagikan pandanganmu mengenai kekuatan, kelemahan, peluang, atau ancaman bagi masa depan Indonesia..."
            className="w-full bg-[#111111] border border-white/20 focus:border-[#F0442E] focus:outline-none text-[#F4EFE5] p-3.5 text-sm font-sans placeholder-[#9A968E]/60 transition-colors resize-none leading-relaxed"
            required
            disabled={submitting}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={submitting}
            icon={Send}
            className="w-full justify-center"
          >
            {submitting ? 'MENGIRIM PENDAPAT...' : 'KIRIM KE FORUM'}
          </Button>
        </div>
      </form>
    </div>
  )
}