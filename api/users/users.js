const { put, list } = require("@vercel/blob");

const DB_FILE = "users-db.json";

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

async function saveData(data) {
  await put(DB_FILE, JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

function hitungUsia(tglLahir) {
  const today = new Date();
  const lahir = new Date(tglLahir);
  let usia = today.getFullYear() - lahir.getFullYear();
  const m = today.getMonth() - lahir.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < lahir.getDate())) usia--;
  return usia;
}

module.exports = async function handler(req, res) {

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
      if (typeof body === "string") body = JSON.parse(body);

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
      return res.status(500).json({ status: "error", message: "Gagal daftarkan user" });
    }
  }

  // ======= DELETE =======
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ status: "error", message: "Parameter 'id' wajib diisi" });
      }

      const users = await getData();
      const filtered = users.filter(u => u.id != id);

      if (filtered.length === users.length) {
        return res.status(404).json({ status: "error", message: "User tidak ditemukan" });
      }

      await saveData(filtered);
      return res.json({ status: "ok", message: "User berhasil dihapus" });

    } catch (e) {
      console.error("DELETE error:", e);
      return res.status(500).json({ status: "error", message: "Gagal hapus user" });
    }
  }

  return res.status(405).json({ status: "error", message: "Method not allowed" });
}
