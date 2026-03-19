import { put, list } from "@vercel/blob";

const DB_FILE = "users-db.json";

// Helper: ambil semua data dari blob
async function getData() {
  try {
    const { blobs } = await list();
    const db = blobs.find(b => b.pathname === DB_FILE);
    if (!db) return [];
    const res = await fetch(db.url);
    const text = await res.text();
    return JSON.parse(text);
  } catch {
    return [];
  }
}

// Helper: simpan data ke blob
async function saveData(data) {
  await put(DB_FILE, JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
  });
}

// Helper: hitung usia dari tanggal lahir
function hitungUsia(tglLahir) {
  const today = new Date();
  const lahir = new Date(tglLahir);
  let usia = today.getFullYear() - lahir.getFullYear();
  const m = today.getMonth() - lahir.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < lahir.getDate())) usia--;
  return usia;
}

export default async function handler(req, res) {

  // ======= GET =======
  if (req.method === "GET") {
    try {
      const users = await getData();
      const { qn } = req.query;

      if (qn) {
        const found = users.filter(u =>
          u.nama.toLowerCase().includes(qn.toLowerCase())
        );

        if (found.length === 0) {
          return res.status(404).json({
            status: "error",
            message: `User '${qn}' tidak ditemukan`
          });
        }

        const result = found.map(u => ({ ...u, usia: hitungUsia(u.tgl_lahir) }));
        return res.json({ status: "ok", total: result.length, users: result });
      }

      const result = users.map(u => ({ ...u, usia: hitungUsia(u.tgl_lahir) }));
      return res.json({ status: "ok", total: result.length, users: result });

    } catch (e) {
      console.error("GET error:", e);
      return res.status(500).json({ status: "error", message: "Gagal ambil data" });
    }
  }

  // ======= POST =======
  if (req.method === "POST") {
    try {
      let body = req.body;

      // Handle kalau body masih string
      if (typeof body === "string") {
        body = JSON.parse(body);
      }

      const { nama, tgl_lahir, gender, notes } = body;

      if (!nama || !tgl_lahir || !gender) {
        return res.status(400).json({
          status: "error",
          message: "Field 'nama', 'tgl_lahir', dan 'gender' wajib diisi"
        });
      }

      if (!["laki-laki", "perempuan"].includes(gender.toLowerCase())) {
        return res.status(400).json({
          status: "error",
          message: "Gender harus 'laki-laki' atau 'perempuan'"
        });
      }

      // Validasi format tanggal
      const dateCheck = new Date(tgl_lahir);
      if (isNaN(dateCheck.getTime())) {
        return res.status(400).json({
          status: "error",
          message: "Format tgl_lahir salah, gunakan YYYY-MM-DD"
        });
      }

      const users = await getData();

      const exists = users.find(u => u.nama.toLowerCase() === nama.toLowerCase());
      if (exists) {
        return res.status(409).json({
          status: "error",
          message: `User '${nama}' sudah terdaftar`
        });
      }

      const newUser = {
        id: Date.now(),
        nama,
        tgl_lahir,
        usia: hitungUsia(tgl_lahir),
        gender: gender.toLowerCase(),
        notes: notes || "",
        terdaftar_at: new Date().toISOString()
      };

      users.push(newUser);
      await saveData(users);

      return res.status(201).json({
        status: "ok",
        message: "User berhasil didaftarkan!",
        user: newUser
      });

    } catch (e) {
      console.error("POST error:", e);
      return res.status(500).json({ status: "error", message: "Gagal daftarkan
