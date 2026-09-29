import SWOTConnection from "../components/interactive/SWOTConnection";

function Connections() {
  return (
    <main className="bg-[#111111] text-[#F4EFE5] min-h-screen">
      <section className="min-h-[70vh] px-6 md:px-12 lg:px-20 py-24 flex flex-col justify-center">
        <p className="text-[#F0442E] font-mono text-sm mb-6">
          SWOT / CONNECTIONS
        </p>

        <h1 className="font-['Bebas_Neue'] text-[15vw] leading-[0.75] uppercase">
          Connections
        </h1>

        <p className="max-w-2xl ml-auto mt-12 text-[#9A968E] text-lg leading-relaxed">
          SWOT tidak berdiri sendiri. Kekuatan dapat menjadi modal untuk
          memanfaatkan peluang, sementara kelemahan dapat memperbesar
          dampak dari ancaman.
        </p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#9A968E]/30">
        <div className="mb-16">
          <p className="font-mono text-xs text-[#F0442E]">
            STRENGTH → OPPORTUNITY
          </p>

          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl uppercase mt-4">
            Dari Potensi Menjadi Peluang
          </h2>
        </div>

        <SWOTConnection />
      </section>
    </main>
  );
}

export default Connections;