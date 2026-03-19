import { put, get } from "@vercel/blob";

const DB_FILE = "users-db.json";

// Helper: ambil semua data dari blob
async function getData() {
  try {
    const res = await get(DB_FILE);
    if (!res) return [];
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
    const users = await getData();
    const { qn } = req.query;

    // Search by nama
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

      // Update usia realtime
      const result = found.map(u => ({
        ...u,
        usia: hitungUsia(u.tgl_lahir)
      }));

      return res.json({ status: "ok", total: result.length, users: result });
    }

    // Ambil semua
    const result = users.map(u => ({
      ...u,
      usia: hitungUsia(u.tgl_lahir)
    }));

    return res.json({ status: "ok", total: result.length, users: result });
  }

  // ======= POST =======
  if (req.method === "POST") {
    const { nama, tgl_lahir, gender, notes } = req.body;

    // Validasi
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

    const users = await getData();

    // Cek duplikat nama
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
  }

  // ======= DELETE =======
  if (req.method === "DELETE") {
    const { id } = req.query;
    if (!id) return res.status(400).json({ status: "error", message: "Parameter 'id' wajib diisi" });

    const users = await getData();
    const filtered = users.filter(u => u.id != id);

    if (filtered.length === users.length) {
      return res.status(404).json({ status: "error", message: "User tidak ditemukan" });
    }

    await saveData(filtered);
    return res.json({ status: "ok", message: "User berhasil dihapus" });
  }

  return res.status(405).json({ status: "error", message: "Method not allowed" });
}
