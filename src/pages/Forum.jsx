import { useOpinions } from '../hooks/useOpinions'
import SubmissionForm from '../components/forum/SubmissionForm'
import OpinionList from '../components/forum/OpinionList'
import { MessageCircle } from 'lucide-react'

export default function Forum() {
  const { opinions, loading, error } = useOpinions()

  return (
    <div className="w-full min-h-screen bg-[#111111] text-[#F4EFE5] pt-12 sm:pt-20 pb-24 sm:pb-36">
      <div className="editorial-container">
        {/* Header Section */}
        <section className="pb-12 sm:pb-16 mb-16 border-b border-white/20">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-[#F0442E] mb-6 font-bold">
            <MessageCircle className="w-4 h-4" />
            <span>FORUM PARTISIPATIF</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl text-[#F4EFE5] tracking-wider leading-[0.88] uppercase">
                SUARA PUBLIK
              </h1>
              <p className="font-editorial text-2xl sm:text-3xl text-[#F0442E] italic mt-3">
                "Bagaimana kamu melihat Indonesia di persimpangan ini?"
              </p>
            </div>

            <div className="max-w-md lg:text-right">
              <p className="font-sans text-xs sm:text-sm text-[#9A968E] leading-relaxed">
                Ruang terbuka bagi setiap warga dan pelajar untuk menyampaikan aspirasi, telaah SWOT, serta harapan bagi arah bangsa menuju 2045.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-white/20 text-[11px] font-mono text-[#F4EFE5]">
                <span className="w-2 h-2 rounded-full bg-[#F0442E] animate-pulse" />
                <span>{opinions.length} Pendapat Tersimpan </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid: Form (Left) & Opinions (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SubmissionForm />
          </div>

          {/* Right Column: Realtime Opinion Stream */}
          <div className="lg:col-span-7">
            <OpinionList opinions={opinions} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </div>
  )
}
