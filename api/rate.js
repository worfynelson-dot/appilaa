export default function handler(req, res) {
  const { qn } = req.query;

  if (!qn) {
    return res.status(400).json({
      status: "error",
      message: "Parameter 'qn' wajib diisi. Contoh: /api/rate?qn=Budi"
    });
  }

  const rating = Math.floor(Math.random() * 1000000);

  return res.json({
    status: "ok",
    name: qn,
    rating: rating
  });
}
