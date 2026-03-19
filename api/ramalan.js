const ramalans = [
  "Hari ini keberuntunganmu sedang di puncak, manfaatkan sebaik mungkin!",
  "Hati-hati dengan keputusan besar hari ini, pikirkan dua kali.",
  "Seseorang diam-diam mengagumimu dari jauh.",
  "Rezekimu datang dari arah yang tidak terduga hari ini.",
  "Lebih baik istirahat dulu, energimu sedang terkuras.",
  "Hari ini cocok untuk memulai sesuatu yang baru.",
  "Jaga kesehatan, tubuhmu butuh perhatian lebih.",
  "Keberanian kecilmu hari ini akan berdampak besar di masa depan.",
  "Hindari konflik hari ini, diammu lebih bernilai.",
  "Sesuatu yang kamu tunggu-tunggu akan segera tiba.",
];

export default function handler(req, res) {
  const { qn } = req.query;

  if (!qn) {
    return res.status(400).json({
      status: "error",
      message: "Parameter 'qn' wajib diisi. Contoh: /api/ramalan?qn=Budi"
    });
  }

  const ramalan = ramalans[Math.floor(Math.random() * ramalans.length)];

  return res.json({
    status: "ok",
    name: qn,
    ramalan: ramalan
  });
}
