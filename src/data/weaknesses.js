import w1 from '../assets/analysis/strengths/weakness/weakness-01.webp';
import w2 from '../assets/analysis/strengths/weakness/weakness-02.webp';
import w3 from '../assets/analysis/strengths/weakness/weakness-03.webp';

export const weaknesses = [
  {
    id: 1,
    title: "Korupsi dan Penyalahgunaan Wewenang",
    description: "Korupsi menjadi tantangan karena dapat merugikan keuangan negara dan mengurangi kepercayaan masyarakat terhadap lembaga pemerintahan.",
    image: w1,
    marqueeText: "KORUPSI & PENYALAHGUNAAN WEWENANG — TANTANGAN TATA KELOLA",
    past: {
      title: "Kasus Bank Century",
      description: "Pada 2014, Budi Mulya divonis 10 tahun penjara dalam perkara korupsi terkait pemberian fasilitas pendanaan kepada Bank Century."
    },
    present: {
      title: "Korupsi sebagai Persoalan Berkelanjutan",
      description: "Kasus korupsi masih menjadi persoalan yang ditangani aparat penegak hukum di berbagai daerah."
    },
    sources: [
      {
        name: "Kompas",
        url: "https://nasional.kompas.com/read/2014/07/16/16425681/Kasus.Century.Budi.Mulya.Divonis.10.Tahun.Penjara?utm_source=Various&utm_medium=Referral&utm_campaign=AIML_Widget_Mobile"
      },
      {
        name: "Sumber Lainnya",
        url: "https://share.google/PmCEIIx70Bj6OX0aH"
      }
    ]
  },
  {
    id: 2,
    title: "Ketimpangan Pendidikan",
    description: "Pendidikan di Indonesia belum sepenuhnya merata karena fasilitas, akses internet, dan kualitas pembelajaran masih berbeda antarwilayah.",
    image: w2,
    marqueeText: "KETIMPANGAN PENDIDIKAN — KESENJANGAN AKSES & KUALITAS",
    past: {
      title: "Pembelajaran Jarak Jauh saat Pandemi",
      description: "Pada masa pandemi, pembelajaran jarak jauh memperlihatkan kesenjangan pendidikan. Pemerintah mengakui bahwa PJJ semakin memperlihatkan kesenjangan pendidikan Indonesia."
    },
    present: {
      title: "Kesenjangan Akses Internet Sekolah",
      description: "Pada 2025, sekitar 190.000 sekolah atau 86% dari total sekolah belum memiliki akses internet tetap."
    },
    sources: [
      {
        name: "Kompas",
        url: "https://nasional.kompas.com/read/2021/02/08/07331031/menko-pmk-akui-pjj-makin-perlihatkan-kesenjangan-pendidikan?utm_source=Various&utm_medium=Referral&utm_campaign=AIML_Widget_Mobile"
      },
      {
        name: "Kompas",
        url: "https://tekno.kompas.com/read/2025/06/13/07222527/komdigi-siapkan-internet-100-mbps-prioritas-sekolah-dan-puskesmas-blank-spot?utm_source=Various&utm_medium=Referral&utm_campaign=traffic_share-04ec0e45bfc85bc5258b8711981e955f"
      }
    ]
  },
  {
    id: 3,
    title: "Kemiskinan dan Ketimpangan Ekonomi",
    description: "Kemiskinan dan ketimpangan ekonomi menunjukkan bahwa hasil pembangunan belum sepenuhnya dirasakan secara merata oleh seluruh masyarakat.",
    image: w3,
    marqueeText: "KEMISKINAN & KETIMPANGAN — TANTANGAN PEMERATAAN EKONOMI",
    past: {
      title: "Krisis Moneter 1997–1998",
      description: "Krisis moneter 1997–1998 menyebabkan perekonomian Indonesia mengalami kemerosotan dan harga kebutuhan pokok meningkat sehingga daya beli masyarakat menurun."
    },
    present: {
      title: "Kemiskinan pada 2026",
      description: "BPS mencatat pada Maret 2026 masih terdapat 22,93 juta penduduk miskin, atau 8,07% dari penduduk Indonesia."
    },
    sources: [
      {
        name: "Kompas",
        url: "https://www.kompas.com/stori/read/2023/11/15/120000379/apa-penyebab-krisis-moneter-1997-1998-di-indonesia-?utm_source=Various&utm_medium=Referral&utm_campaign=traffic_share-04ec0e45bfc85bc5258b8711981e955f"
      },
      {
        name: "BPS",
        url: "https://www.bps.go.id/id/pressrelease/2026/08/05/persentase-penduduk-miskin-maret-2026-turun-menjadi-8-07-persen-.html"
      }
    ]
  }
];
