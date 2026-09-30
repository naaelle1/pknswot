export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep pitch black background with subtle warm radial illumination */}
      <div
        className="absolute inset-0 bg-[#080808]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(240, 68, 46, 0.04) 0%, rgba(17, 17, 17, 0.8) 50%, #080808 100%)',
        }}
      />

      {/* Extremely subtle archival grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#F4EFE5 1px, transparent 1px), linear-gradient(to right, #F4EFE5 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Vignette border */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />
    </div>
  )
}
