const quotes = [
  { lang: "id", flag: "🇮🇩", quote: "Jangan menyerah, setiap langkah kecil membawamu lebih dekat ke tujuan. 💪" },
  { lang: "id", flag: "🇮🇩", quote: "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan. 🌧️" },
  { lang: "id", flag: "🇮🇩", quote: "Kesuksesan bukan milik orang yang tidak pernah gagal, tapi milik orang yang tidak pernah berhenti. 🚀" },
  { lang: "id", flag: "🇮🇩", quote: "Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dirimu. ✨" },
  { lang: "id", flag: "🇮🇩", quote: "Mimpi bukan hanya saat tidur, mimpi adalah yang membuatmu terus terjaga. 🌙" },
  { lang: "id", flag: "🇮🇩", quote: "Jangan takut salah, karena dari kesalahan kamu belajar hal yang tidak diajarkan sekolah. 📚" },
  { lang: "id", flag: "🇮🇩", quote: "Keberanian bukan berarti tidak takut, tapi tetap melangkah meski takut. 🦁" },
  { lang: "id", flag: "🇮🇩", quote: "Hal terbaik dalam hidupmu mungkin belum terjadi. Sabar dan nikmati prosesnya. 🌱" },
  { lang: "id", flag: "🇮🇩", quote: "Kamu lebih kuat dari yang kamu kira, lebih berani dari yang kamu percaya. 💎" },
  { lang: "id", flag: "🇮🇩", quote: "Waktu tidak akan kembali, jadi gunakan sebaik mungkin mulai dari sekarang. ⏳" },
  { lang: "id", flag: "🇮🇩", quote: "Orang sukses bukan yang tidak punya masalah, tapi yang tahu cara mengatasinya. 🔑" },
  { lang: "id", flag: "🇮🇩", quote: "Senyummu hari ini bisa jadi cahaya bagi orang lain yang sedang dalam kegelapan. 😊" },
  { lang: "id", flag: "🇮🇩", quote: "Jangan bandingkan perjalananmu dengan orang lain, semua punya waktunya masing-masing. 🗺️" },
  { lang: "id", flag: "🇮🇩", quote: "Bersyukurlah atas hal kecil, karena hal kecil itulah yang membuat hidup bermakna. 🙏" },
  { lang: "id", flag: "🇮🇩", quote: "Kegagalan adalah guru terbaik yang tidak pernah meminta bayaran. 🎓" },
  { lang: "id", flag: "🇮🇩", quote: "Tetap semangat, bahkan di hari yang paling berat sekalipun. 🌅" },
  { lang: "id", flag: "🇮🇩", quote: "Percayalah pada prosesmu sendiri, bukan pada timeline orang lain. 🕰️" },
  { lang: "id", flag: "🇮🇩", quote: "Kebaikan kecil yang kamu lakukan hari ini bisa mengubah hidup seseorang. 💛" },
  { lang: "id", flag: "🇮🇩", quote: "Jangan tunggu sempurna untuk memulai, mulailah dan jadilah sempurna di perjalanan. 🛤️" },
  { lang: "id", flag: "🇮🇩", quote: "Kamu tidak harus hebat untuk memulai, tapi kamu harus memulai untuk menjadi hebat. ⭐" },
  { lang: "id", flag: "🇮🇩", quote: "Setiap malam yang gelap pasti diikuti fajar yang terang. 🌄" },
  { lang: "id", flag: "🇮🇩", quote: "Jadilah dirimu sendiri, karena orang lain sudah ada yang jadi. 🦋" },
  { lang: "id", flag: "🇮🇩", quote: "Hidupmu terlalu berharga untuk dihabiskan dengan membandingkan diri sendiri. 💫" },
  { lang: "id", flag: "🇮🇩", quote: "Bukan seberapa keras kamu jatuh, tapi seberapa cepat kamu bangkit. 🏃" },
  { lang: "id", flag: "🇮🇩", quote: "Rasa sakit hari ini adalah kekuatan besok. 💥" },
  { lang: "id", flag: "🇮🇩", quote: "Yang kamu tanam hari ini, kamu panen di masa depan. 🌾" },
  { lang: "id", flag: "🇮🇩", quote: "Jangan biarkan ketakutan menghalangi langkahmu menuju impian. 🌠" },
  { lang: "id", flag: "🇮🇩", quote: "Diam bukan berarti lemah, kadang diam adalah pilihan terkuat. 🤫" },
  { lang: "id", flag: "🇮🇩", quote: "Setiap orang punya cerita, jangan menghakimi buku dari sampulnya. 📖" },
  { lang: "id", flag: "🇮🇩", quote: "Kamu tidak perlu izin siapapun untuk menjadi bahagia. 🎉" },
  { lang: "id", flag: "🇮🇩", quote: "Perubahan dimulai dari langkah kecil yang konsisten setiap harinya. 🔄" },
  { lang: "id", flag: "🇮🇩", quote: "Jangan takut bermimpi besar, karena mimpi besar butuh nyali besar. 🦅" },
  { lang: "id", flag: "🇮🇩", quote: "Nikmati perjalanan, bukan hanya tujuan akhirnya. 🚂" },
  { lang: "en", flag: "🇬🇧", quote: "Believe you can and you're halfway there. 🌟" },
  { lang: "en", flag: "🇬🇧", quote: "The only way to do great work is to love what you do. ❤️" },
  { lang: "en", flag: "🇬🇧", quote: "It does not matter how slowly you go as long as you do not stop. 🐢" },
  { lang: "en", flag: "🇬🇧", quote: "In the middle of every difficulty lies opportunity. 🔓" },
  { lang: "en", flag: "🇬🇧", quote: "You miss 100% of the shots you don't take. 🏀" },
  { lang: "en", flag: "🇬🇧", quote: "The future belongs to those who believe in the beauty of their dreams. 🌈" },
  { lang: "en", flag: "🇬🇧", quote: "Don't watch the clock, do what it does — keep going. ⏰" },
  { lang: "en", flag: "🇬🇧", quote: "Success is not final, failure is not fatal — it is the courage to continue that counts. 🎯" },
  { lang: "en", flag: "🇬🇧", quote: "You are braver than you believe, stronger than you seem. 🦸" },
  { lang: "en", flag: "🇬🇧", quote: "The secret of getting ahead is getting started. 🚦" },
  { lang: "en", flag: "🇬🇧", quote: "Happiness is not something ready-made. It comes from your own actions. 😄" },
  { lang: "en", flag: "🇬🇧", quote: "What you get by achieving your goals is not as important as what you become. 🏆" },
  { lang: "en", flag: "🇬🇧", quote: "Dream big, work hard, stay focused. 🎯" },
  { lang: "en", flag: "🇬🇧", quote: "The harder you work for something, the greater you feel when you achieve it. 💪" },
  { lang: "en", flag: "🇬🇧", quote: "Do not be pushed around by fears in your mind. Be led by the dreams in your heart. 💖" },
  { lang: "en", flag: "🇬🇧", quote: "Every day is a second chance. 🌞" },
  { lang: "en", flag: "🇬🇧", quote: "The best time to plant a tree was 20 years ago. The second best time is now. 🌳" },
  { lang: "en", flag: "🇬🇧", quote: "Small steps every day lead to big changes over time. 👣" },
  { lang: "en", flag: "🇬🇧", quote: "Your only limit is your mind. 🧠" },
  { lang: "en", flag: "🇬🇧", quote: "Be the change you wish to see in the world. 🌍" },
  { lang: "en", flag: "🇬🇧", quote: "Life is short, make it sweet. 🍭" },
  { lang: "en", flag: "🇬🇧", quote: "Stars can't shine without darkness. 🌟" },
  { lang: "en", flag: "🇬🇧", quote: "Fall seven times, stand up eight. 🔝" },
  { lang: "en", flag: "🇬🇧", quote: "Difficult roads often lead to beautiful destinations. 🏔️" },
  { lang: "en", flag: "🇬🇧", quote: "Keep going. Everything you need will come to you at the perfect time. ⏳" },
  { lang: "en", flag: "🇬🇧", quote: "You did not come this far to only come this far. 🚀" },
  { lang: "en", flag: "🇬🇧", quote: "Chase the vision, not the money. The money will end up following you. 💰" },
  { lang: "en", flag: "🇬🇧", quote: "A little progress each day adds up to big results. 📈" },
  { lang: "en", flag: "🇬🇧", quote: "Do something today that your future self will thank you for. 🙌" },
  { lang: "en", flag: "🇬🇧", quote: "You are enough. You have always been enough. 💛" },
  { lang: "en", flag: "🇬🇧", quote: "Storms make trees take deeper roots. 🌪️" },
  { lang: "en", flag: "🇬🇧", quote: "Do not stop until you are proud. 🏅" },
  { lang: "en", flag: "🇬🇧", quote: "Great things never come from comfort zones. 🔥" },
  { lang: "en", flag: "🇬🇧", quote: "Push yourself because no one else is going to do it for you. 🏋️" },
  { lang: "en", flag: "🇬🇧", quote: "Wake up with determination, go to bed with satisfaction. 🛏️" },
  { lang: "en", flag: "🇬🇧", quote: "Little by little, a little becomes a lot. 🌊" },
  { lang: "jp", flag: "🇯🇵", quote: "七転び八起き — Jatuh tujuh kali, bangkit delapan kali. 🔝" },
  { lang: "jp", flag: "🇯🇵", quote: "一期一会 — Setiap pertemuan hanya terjadi sekali, hargailah. 🍵" },
  { lang: "jp", flag: "🇯🇵", quote: "継続は力なり — Ketekunan adalah kekuatan sejati. 💪" },
  { lang: "jp", flag: "🇯🇵", quote: "雨降って地固まる — Setelah hujan, tanah menjadi lebih kuat. 🌧️" },
  { lang: "jp", flag: "🇯🇵", quote: "失敗は成功の母 — Kegagalan adalah ibu dari kesuksesan. 🎓" },
  { lang: "jp", flag: "🇯🇵", quote: "笑う門には福来たる — Keberuntungan datang ke rumah yang penuh tawa. 😄" },
  { lang: "jp", flag: "🇯🇵", quote: "明日は明日の風が吹く — Biarkan angin besok berhembus esok hari. 🍃" },
  { lang: "jp", flag: "🇯🇵", quote: "一歩一歩 — Satu langkah demi satu langkah menuju puncak. 🗻" },
  { lang: "jp", flag: "🇯🇵", quote: "夢を持て — Miliki impian, karena tanpa impian hidup tak berarti. 🌙" },
  { lang: "jp", flag: "🇯🇵", quote: "今を生きる — Hiduplah di saat ini, bukan di masa lalu. 🕊️" },
  { lang: "jp", flag: "🇯🇵", quote: "諦めないで — Jangan menyerah, teruslah berjuang. 🔥" },
  { lang: "jp", flag: "🇯🇵", quote: "自分を信じて — Percayalah pada dirimu sendiri. ✨" },
  { lang: "jp", flag: "🇯🇵", quote: "感謝の心を忘れずに — Jangan pernah melupakan rasa syukur. 🙏" },
  { lang: "jp", flag: "🇯🇵", quote: "前向きに生きる — Jalani hidup dengan memandang ke depan. 🚀" },
  { lang: "jp", flag: "🇯🇵", quote: "努力は裏切らない — Kerja keras tidak akan pernah mengkhianatimu. 💎" },
  { lang: "jp", flag: "🇯🇵", quote: "光あるところに影がある — Di mana ada cahaya, di sana ada bayangan. 🌓" },
  { lang: "jp", flag: "🇯🇵", quote: "時は金なり — Waktu adalah emas, jangan sia-siakan. ⏳" },
  { lang: "jp", flag: "🇯🇵", quote: "人生は一度きり — Hidup hanya sekali, buatlah berarti. 🎆" },
  { lang: "jp", flag: "🇯🇵", quote: "山あり谷あり — Ada gunung ada lembah, itulah kehidupan. 🏔️" },
  { lang: "jp", flag: "🇯🇵", quote: "今日も頑張ろう — Ayo semangat lagi hari ini! 🔆" },
  { lang: "jp", flag: "🇯🇵", quote: "強くなれ — Jadilah lebih kuat dari sebelumnya. 💪" },
  { lang: "jp", flag: "🇯🇵", quote: "夢は逃げない、逃げるのはいつも自分 — Mimpi tidak lari, yang lari selalu dirimu sendiri. 🌠" },
  { lang: "jp", flag: "🇯🇵", quote: "笑顔が一番の武器 — Senyum adalah senjata terbaikmu. 😊" },
  { lang: "jp", flag: "🇯🇵", quote: "どんな暗闇にも必ず光がある — Di setiap kegelapan pasti ada cahaya. 💡" },
  { lang: "jp", flag: "🇯🇵", quote: "桜のように美しく散れ — Gugur dengan indah seperti bunga sakura. 🌸" },
  { lang: "jp", flag: "🇯🇵", quote: "生きることは戦うこと — Hidup adalah perjuangan. ⚔️" },
  { lang: "jp", flag: "🇯🇵", quote: "明るい未来を信じて — Percayalah pada masa depan yang cerah. 🌈" },
  { lang: "jp", flag: "🇯🇵", quote: "人生に無駄なことはない — Tidak ada yang sia-sia dalam kehidupan. 🌿" },
  { lang: "jp", flag: "🇯🇵", quote: "心が変われば行動が変わる — Bila hati berubah, tindakan pun berubah. ❤️" },
  { lang: "jp", flag: "🇯🇵", quote: "花は桜木、人は武士 — Bunga terbaik sakura, manusia terbaik adalah yang berjiwa ksatria. 🌸" },
];

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }

  const { lang } = req.query;

  let pool = quotes;
  if (lang) {
    pool = quotes.filter(q => q.lang === lang.toLowerCase());
    if (pool.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Bahasa tidak tersedia. Pilih: id, en, jp"
      });
    }
  }

  const random = pool[Math.floor(Math.random() * pool.length)];

  return res.json({
    status: "ok",
    total_quotes: quotes.length,
    lang: random.lang,
    flag: random.flag,
    quote: random.quote
  });
};
