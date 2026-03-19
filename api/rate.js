export default function handler(req, res) {
  const { qn } = req.query;

  if (!qn) {
    return res.status(400).json({
      status: "error",
      message: "Parameter 'qn' wajib diisi. Contoh: /api/rate?qn=Budi"
    });
  }

  const rating = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER));

  return res.json({
    status: "ok",
    name: qn,
    rating: rating
  });
}
```

---

## 🔗 Cara Pakai
```
/api/rate?qn=Budi
/api/rate?qn=Ani
