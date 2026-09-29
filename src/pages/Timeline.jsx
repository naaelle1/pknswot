import TimelineComponent from "../components/interactive/Timeline";

function TimelinePage() {
  return (
    <main className="bg-[#111111] text-[#F4EFE5] min-h-screen">
      <section className="px-6 md:px-12 lg:px-20 py-24 min-h-[60vh] flex flex-col justify-center">
        <p className="text-[#F0442E] font-mono text-sm mb-6">
          INDONESIA / TIMELINE
        </p>

        <h1 className="font-['Bebas_Neue'] text-[16vw] leading-[0.75] uppercase">
          Timeline
        </h1>

        <p className="max-w-xl ml-auto mt-12 text-[#9A968E]">
          Beberapa peristiwa dan perubahan yang membantu memahami perjalanan
          Indonesia dari masa lalu menuju kondisi saat ini.
        </p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24">
        <TimelineComponent />
      </section>
    </main>
  );
}

export default TimelinePage;