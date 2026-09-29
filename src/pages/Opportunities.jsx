import { motion } from "framer-motion";
import opportunities from "../data/opportunities";

function Opportunities() {
  return (
    <main className="bg-[#111111] text-[#F4EFE5] min-h-screen">

      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-24 border-b border-[#F4EFE5]/20">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#F0442E] font-mono text-sm tracking-widest mb-6">
            SWOT / 03
          </p>

          <h1 className="font-['Bebas_Neue'] text-[clamp(5rem,15vw,13rem)] leading-[0.8] uppercase">
            Opportunities
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
            <div className="md:col-span-5">
              <p className="text-2xl md:text-3xl leading-tight">
                Peluang Indonesia lahir dari potensi yang dimiliki dan
                kemampuan untuk mengubahnya menjadi nilai di masa depan.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-8">
              <p className="text-[#9A968E] leading-relaxed">
                Dari ekonomi, teknologi, pariwisata hingga sumber daya alam,
                berbagai peluang dapat menjadi kekuatan untuk membangun
                Indonesia yang lebih maju.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* OPPORTUNITIES LIST */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {opportunities.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="py-20 border-b border-[#F4EFE5]/20"
            >

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* NUMBER */}
                <div className="md:col-span-1">
                  <span className="font-mono text-[#F0442E] text-sm">
                    {item.number}
                  </span>
                </div>


                {/* TITLE + DESCRIPTION */}
                <div className="md:col-span-5">
                  <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl uppercase leading-none">
                    {item.title}
                  </h2>

                  <p className="mt-8 text-lg text-[#9A968E] leading-relaxed">
                    {item.description}
                  </p>
                </div>


                {/* PAST */}
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-[#F0442E] tracking-widest mb-4">
                    PAST
                  </p>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.past.title}
                  </h3>

                  <p className="text-[#9A968E] leading-relaxed">
                    {item.past.text}
                  </p>
                </div>


                {/* PRESENT */}
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-[#F0442E] tracking-widest mb-4">
                    PRESENT
                  </p>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.present.title}
                  </h3>

                  <p className="text-[#9A968E] leading-relaxed">
                    {item.present.text}
                  </p>
                </div>

              </div>


              {/* SOURCE */}
              {item.source && (
                <div className="mt-10 md:ml-[8.33%]">
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#F4EFE5] hover:text-[#F0442E] transition-colors"
                  >
                    SOURCE ↗
                  </a>
                </div>
              )}

            </motion.article>
          ))}

        </div>
      </section>


      {/* CLOSING */}
      <section className="px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono text-xs text-[#F0442E] tracking-widest mb-6">
            THE QUESTION
          </p>

          <h2 className="font-['Bebas_Neue'] text-5xl md:text-8xl uppercase leading-none max-w-5xl">
            Bisakah peluang menjadi kekuatan nyata?
          </h2>

        </div>
      </section>

    </main>
  );
}

export default Opportunities;