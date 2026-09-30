import { useState, useEffect } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

const CATEGORIES = ['Refleksi', 'Kekuatan', 'Kelemahan', 'Peluang', 'Ancaman', 'Umum']

function generateArchiveId() {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return `VOL-${result}`
}

export default function SubmissionForm({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('Refleksi')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg('')
    setSuccess(false)

    const cleanName = name.trim() || 'Anonim'
    const cleanContent = content.trim()

    if (!cleanContent) {
      setErrorMsg('Isi pendapat wajib diisi.')
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

    // Timeout protection
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              'Koneksi melebihi batas waktu (timeout). Pastikan koneksi internet aktif.'
            )
          ),
        8000
      )
    )

    try {
      const addDocPromise = addDoc(collection(db, 'opinions'), {
        name: cleanName,
        content: cleanContent,
        category,
        archiveId: generateArchiveId(),
        createdAt: serverTimestamp(),
      })

      await Promise.race([addDocPromise, timeoutPromise])

      setName('')
      setContent('')
      setCategory('Refleksi')
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 1500)
    } catch (err) {
      console.error('Failed to submit opinion:', err)
      const message =
        err?.code === 'permission-denied'
          ? 'Izin ditolak oleh aturan database Firestore. Pastikan aturan keamanan sudah diizinkan.'
          : err?.message || 'Gagal mengirim pendapat. Periksa koneksi internet Anda.'
      setErrorMsg(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/20 p-5 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#9A968E] hover:text-[#F4EFE5] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Tutup formulir"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-6 sm:mb-8">
              <h2
                id="modal-title"
                className="font-editorial text-2xl sm:text-4xl text-[#F4EFE5] font-normal leading-tight"
              >
                Tulis Pendapatmu
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#9A968E] mt-1.5 sm:mt-2">
                Bagikan pandanganmu tentang Indonesia.
              </p>
            </div>

            {/* Alerts */}
            {success && (
              <div className="mb-5 p-3.5 bg-[#F0442E]/10 border border-[#F0442E] text-[#F4EFE5] flex items-center gap-2.5 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#F0442E] shrink-0" />
                <span>Pendapatmu sudah masuk.</span>
              </div>
            )}

            {errorMsg && (
              <div className="mb-5 p-3.5 bg-red-950/40 border border-red-500 text-red-200 flex items-start gap-2.5 text-xs font-mono">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Name / Alias Input */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label
                      htmlFor="form-name"
                      className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#9A968E] font-bold"
                    >
                      NAMA / ANONIM
                    </label>
                    <span className="text-[10px] font-mono text-[#9A968E]/60">
                      {name.length}/40
                    </span>
                  </div>
                  <input
                    id="form-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={40}
                    placeholder="Anonim"
                    className="w-full bg-[#171717] border border-white/20 focus:border-[#F0442E] focus:outline-none text-[#F4EFE5] p-2.5 sm:p-3 text-xs font-sans placeholder-[#9A968E]/50 transition-colors"
                    disabled={submitting}
                  />
                </div>

                {/* Topic / Category Selection */}
                <div>
                  <label
                    htmlFor="form-category"
                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#9A968E] font-bold block mb-1"
                  >
                    TOPIK
                  </label>
                  <select
                    id="form-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    disabled={submitting}
                    className="w-full bg-[#171717] border border-white/20 focus:border-[#F0442E] focus:outline-none text-[#F4EFE5] p-2.5 sm:p-3 text-xs font-sans transition-colors cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#171717] text-[#F4EFE5]">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Textarea Content */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label
                    htmlFor="form-content"
                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#9A968E] font-bold"
                  >
                    PENDAPAT <span className="text-[#F0442E]">*</span>
                  </label>
                  <span className="text-[10px] font-mono text-[#9A968E]">
                    {content.length}/500
                  </span>
                </div>
                <textarea
                  id="form-content"
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  maxLength={500}
                  placeholder="Tulis pendapatmu di sini..."
                  className="w-full bg-[#171717] border border-white/20 focus:border-[#F0442E] focus:outline-none text-[#F4EFE5] p-3 text-xs sm:text-sm font-sans placeholder-[#9A968E]/50 transition-colors resize-none leading-relaxed"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={submitting}
                  icon={Send}
                  className="w-full justify-center py-3"
                >
                  {submitting ? 'MENGIRIM PENDAPAT...' : 'KIRIM PENDAPAT'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}