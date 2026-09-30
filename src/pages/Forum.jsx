import { useState } from 'react'
import { useOpinions } from '../hooks/useOpinions'
import FloatingBackground from '../components/forum/FloatingBackground'
import ForumHeader from '../components/forum/ForumHeader'
import FloatingOpinions from '../components/forum/FloatingOpinions'
import SubmissionForm from '../components/forum/SubmissionForm'
import { Plus } from 'lucide-react'

export default function Forum() {
  const { opinions, loading, error } = useOpinions()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F4EFE5] pt-10 sm:pt-16 pb-24 sm:pb-36 overflow-x-hidden">
      {/* Dark Background Atmosphere */}
      <FloatingBackground />

      <div className="editorial-container relative z-10">
        {/* Header */}
        <ForumHeader
          count={opinions.length}
          onOpenModal={() => setIsModalOpen(true)}
        />

        {/* Floating Opinions Canvas */}
        <FloatingOpinions
          opinions={opinions}
          loading={loading}
          error={error}
        />
      </div>

      {/* Central Submission Modal */}
      <SubmissionForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Sticky Floating Trigger for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 sm:hidden">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#F0442E] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_8px_25px_rgba(240,68,46,0.4)] cursor-pointer"
          aria-label="Tulis Pendapat Baru"
        >
          <Plus className="w-4 h-4" />
          <span>TULIS PENDAPAT</span>
        </button>
      </div>
    </div>
  )
}
