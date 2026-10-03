import t1 from '../assets/analysis/threats/THREATS-01.webp';
import t2 from '../assets/analysis/threats/THREATS-02.webp';
import t3 from '../assets/analysis/threats/THREATS-03.webp';

const threats = [
  {
    number: "01",
    title: "Perubahan Iklim & Bencana",
    description:
      "Perubahan iklim dan kondisi geografis Indonesia meningkatkan tantangan berupa bencana hidrometeorologi, kenaikan muka laut, dan risiko terhadap masyarakat serta lingkungan.",
    image: t1,
    marqueeText: "PERUBAHAN IKLIM & BENCANA — RISIKO LINGKUNGAN & MASYARAKAT",

    past: {
      title: "Tsunami Aceh",
      text:
        "Tsunami Samudra Hindia 2004 menjadi salah satu bencana terbesar yang berdampak sangat besar terhadap Indonesia."
    },

    present: {
      title: "Risiko Iklim",
      text:
        "Perubahan iklim dapat meningkatkan risiko terhadap wilayah pesisir, pertanian, sumber daya air, dan kehidupan masyarakat."
    },

    source: "https://www.bmkg.go.id/"
  },

  {
    number: "02",
    title: "Polarisasi Sosial",
    description:
      "Perbedaan pandangan yang semakin tajam dapat menjadi tantangan bagi persatuan apabila tidak disertai sikap toleransi, literasi digital, dan kemampuan berdialog.",
    image: t2,
    marqueeText: "POLARISASI SOSIAL — TANTANGAN PERSATUAN & TOLERANSI",

    past: {
      title: "Perbedaan dalam Demokrasi",
      text:
        "Perbedaan pandangan politik merupakan bagian dari kehidupan demokrasi Indonesia."
    },

    present: {
      title: "Era Media Sosial",
      text:
        "Media sosial mempercepat penyebaran informasi sehingga literasi digital menjadi penting dalam menghadapi informasi yang menyesatkan dan konflik sosial."
    },

    source: "https://www.komdigi.go.id/"
  },

  {
    number: "03",
    title: "Middle-Income Trap",
    description:
      "Indonesia menghadapi tantangan untuk meningkatkan produktivitas, kualitas sumber daya manusia, inovasi, dan nilai tambah ekonomi agar pertumbuhan dapat terus berlanjut.",
    image: t3,
    marqueeText: "MIDDLE-INCOME TRAP — TANTANGAN PRODUKTIVITAS & INOVASI",

    past: {
      title: "Pertumbuhan Ekonomi",
      text:
        "Pertumbuhan ekonomi Indonesia berkembang melalui perubahan struktur ekonomi dan industrialisasi."
    },

    present: {
      title: "Produktivitas & Inovasi",
      text:
        "Peningkatan produktivitas, kualitas pendidikan, inovasi, dan industri bernilai tambah menjadi bagian penting dalam menghadapi tantangan pembangunan."
    },

    source: "https://www.worldbank.org/en/country/indonesia"
  }
];

export default threats;