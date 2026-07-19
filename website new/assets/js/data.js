/* =========================================================
   Desa Bapangi — Data Konten (Dummy)
   Edit array di bawah ini untuk mengubah isi website.
   Tidak perlu database — cukup ubah teks/gambar di sini.
   ========================================================= */

(function () {
  "use strict";

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function getInitials(nama) {
    var words = String(nama).replace(/,.*$/, "").trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "?";
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  /* ---------------- Pemerintahan Desa ----------------
     Kepala Desa TAMPIL DENGAN FOTO (kartu unggulan/spotlight).
     Aparatur lain TANPA FOTO — otomatis memakai avatar inisial nama. */

  var kepalaDesa = {
    nama: "Rusnah Tappa",
    jabatan: "Kepala Desa Bapangi",
    desk: "Memimpin penyelenggaraan pemerintahan, pembangunan, dan pelayanan masyarakat Desa Bapangi.",
    foto: "assets/img/WhatsApp Image 2026-07-13 at 10.53.37.jpeg" // ganti dengan foto asli, mis. assets/img/kepala-desa.jpg
  };

  var aparaturLain = [
    { nama: "Andi Baso, S.STP", jabatan: "Sekretaris Desa", desk: "Mengoordinasikan administrasi umum, keuangan, dan tata usaha pemerintah desa." },
    { nama: "Nurhayati, S.Sos", jabatan: "Kasi Pemerintahan", desk: "Menangani urusan pemerintahan, kependudukan, dan ketertiban desa." },
    { nama: "Rusdi, S.E", jabatan: "Kaur Keuangan", desk: "Mengelola administrasi keuangan dan aset desa secara transparan." },
    { nama: "Hamsina", jabatan: "Kepala Dusun Bapangi", desk: "Mengoordinasikan kegiatan warga dan pelayanan di wilayah Dusun Bapangi." },
    { nama: "Baharuddin", jabatan: "Ketua BPD", desk: "Menyalurkan aspirasi masyarakat serta mengawasi kinerja pemerintah desa." },
    { nama: "Hj. Sitti Aminah", jabatan: "Ketua PKK", desk: "Menggerakkan program pemberdayaan keluarga, kesehatan, dan posyandu." },
    { nama: "Muh. Fadli", jabatan: "Ketua Karang Taruna", desk: "Mengoordinasikan kegiatan kepemudaan, olahraga, dan sosial kemasyarakatan." }
  ];

  var spotlightEl = document.getElementById("kepala-desa-spotlight");
  if (spotlightEl) {
    spotlightEl.innerHTML = `
      <div class="card overflow-hidden grid sm:grid-cols-[220px_1fr]" data-aos="fade-up">
        <img src="${escapeHtml(kepalaDesa.foto)}" alt="Foto ${escapeHtml(kepalaDesa.jabatan)}, ${escapeHtml(kepalaDesa.nama)}" class="w-full h-56 sm:h-full object-cover" />
        <div class="p-6 flex flex-col justify-center">
          <span class="chip w-fit">${escapeHtml(kepalaDesa.jabatan)}</span>
          <p class="font-display font-bold text-2xl text-green-800 dark:text-cream mt-3">${escapeHtml(kepalaDesa.nama)}</p>
          <p class="text-ink-soft text-sm mt-2 leading-relaxed">${escapeHtml(kepalaDesa.desk)}</p>
        </div>
      </div>`;
  }

  var aparaturGrid = document.getElementById("aparatur-grid");
  if (aparaturGrid) {
    aparaturLain.forEach(function (p, i) {
      aparaturGrid.insertAdjacentHTML("beforeend", `
        <div class="card p-5 flex items-start gap-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
          <div class="w-14 h-14 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-gold-400 flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
            ${escapeHtml(getInitials(p.nama))}
          </div>
          <div>
            <p class="font-display font-bold text-green-800 dark:text-cream leading-snug">${escapeHtml(p.nama)}</p>
            <p class="chip mt-1.5">${escapeHtml(p.jabatan)}</p>
            <p class="text-ink-soft text-xs mt-2.5 leading-relaxed">${escapeHtml(p.desk)}</p>
          </div>
        </div>`);
    });
  }

  /* ---------------- Potensi Desa ---------------- */
  var potensi = [
    { judul: "Pertanian Jagung", icon: "fa-seedling", desk: "Komoditas unggulan Desa Bapangi dengan luas tanam terbesar, menjadi sumber penghasilan utama sebagian besar petani.", foto: "https://images.unsplash.com/photo-1601472543880-c1e5dd0b3f30?q=80&w=800&auto=format&fit=crop" },
    { judul: "Pertanian Padi", icon: "fa-wheat-awn", desk: "Sawah irigasi menghasilkan padi dua kali setahun, menopang ketahanan pangan desa dan sekitarnya.", foto: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop" },
    { judul: "Peternakan", icon: "fa-cow", desk: "Peternakan sapi dan ayam skala rumah tangga yang berkembang sebagai usaha sampingan warga.", foto: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop" },
    { judul: "Batu Bata", icon: "fa-trowel-bricks", desk: "Kerajinan batu bata cetak menjadi mata pencaharian turun-temurun di beberapa dusun.", foto: "https://images.unsplash.com/photo-1590274853856-f724e2565a1b?q=80&w=800&auto=format&fit=crop" },
    { judul: "UMKM", icon: "fa-shop", desk: "Usaha rumahan seperti olahan selai jagung, kue tradisional, dan kerajinan mulai berkembang pesat.", foto: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop" },
    { judul: "Perkebunan", icon: "fa-leaf", desk: "Lahan perkebunan campuran seperti kakao dan sayur-mayur melengkapi keragaman hasil bumi desa.", foto: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop" }
  ];

  var potensiGrid = document.getElementById("potensi-grid");
  if (potensiGrid) {
    potensi.forEach(function (p, i) {
      potensiGrid.insertAdjacentHTML("beforeend", `
        <div class="rounded-xl2 overflow-hidden bg-white/10 border border-white/15 backdrop-blur-md" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
          <img src="${escapeHtml(p.foto)}" alt="${escapeHtml(p.judul)} di Desa Bapangi" class="w-full h-44 object-cover" />
          <div class="p-5">
            <div class="w-11 h-11 rounded-full bg-gold-500 text-green-900 flex items-center justify-center mb-3 -mt-9 relative z-10 shadow-md">
              <i class="fa-solid ${p.icon}"></i>
            </div>
            <p class="font-display font-bold text-white text-lg">${escapeHtml(p.judul)}</p>
            <p class="text-white/70 text-sm mt-1.5 leading-relaxed">${escapeHtml(p.desk)}</p>
          </div>
        </div>`);
    });
  }

  /* ---------------- Program Desa ---------------- */
  var program = [
    { judul: "Digitalisasi Informasi Desa", desk: "Pengembangan website dan media sosial resmi desa untuk mempermudah akses informasi bagi warga, dijalankan bersama mahasiswa KKN.", icon: "fa-satellite-dish" },
    { judul: "Pengolahan Selai Jagung", desk: "Pelatihan pengolahan jagung menjadi produk selai bernilai jual, mendukung pertumbuhan UMKM rumahan.", icon: "fa-jar" },
    { judul: "Jumat Bersih & Gotong Royong", desk: "Kegiatan rutin membersihkan fasilitas umum dan lingkungan desa yang melibatkan seluruh elemen masyarakat.", icon: "fa-broom" },
    { judul: "Pembinaan Keagamaan", desk: "Pengajian rutin dan kegiatan keagamaan sebagai wadah mempererat silaturahmi dan nilai spiritual warga.", icon: "fa-mosque" },
    { judul: "Pelayanan Kesehatan Posyandu", desk: "Pendampingan kegiatan Posyandu balita dan lansia bekerja sama dengan tenaga kesehatan setempat.", icon: "fa-briefcase-medical" },
    { judul: "Pembangunan Infrastruktur", desk: "Perbaikan dan pemeliharaan jalan, saluran irigasi, serta fasilitas umum untuk menunjang aktivitas warga.", icon: "fa-road" }
  ];

  var programList = document.getElementById("program-list");
  if (programList) {
    program.forEach(function (p, i) {
      programList.insertAdjacentHTML("beforeend", `
        <div class="relative pl-6 pb-10 last:pb-0" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
          <div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-cream dark:border-green-900 flex items-center justify-center">
          </div>
          <div class="card p-5 flex items-start gap-4">
            <div class="w-11 h-11 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 text-lg">
              <i class="fa-solid ${p.icon}"></i>
            </div>
            <div>
              <p class="font-display font-bold text-green-800 dark:text-cream">${escapeHtml(p.judul)}</p>
              <p class="text-ink-soft text-sm mt-1.5 leading-relaxed">${escapeHtml(p.desk)}</p>
            </div>
          </div>
        </div>`);
    });
  }

  /* ---------------- Layanan ---------------- */
  var layanan = [
    { judul: "Surat Keterangan", icon: "fa-file-lines", desk: "Penerbitan surat keterangan umum untuk berbagai keperluan administrasi warga." },
    { judul: "Surat Domisili", icon: "fa-house-circle-check", desk: "Bukti keterangan tempat tinggal resmi bagi warga Desa Bapangi." },
    { judul: "Surat Usaha", icon: "fa-briefcase", desk: "Surat keterangan usaha untuk mendukung legalitas UMKM dan pelaku usaha desa." },
    { judul: "Surat Pengantar", icon: "fa-file-signature", desk: "Pengantar untuk pengurusan dokumen lanjutan di tingkat kecamatan atau kabupaten." },
    { judul: "Informasi Administrasi", icon: "fa-circle-info", desk: "Layanan konsultasi dan informasi seputar persyaratan administrasi kependudukan." },
    { judul: "Jam Pelayanan", icon: "fa-clock", desk: "Kantor desa melayani warga setiap Senin–Jumat, pukul 08.00–15.00 WITA." }
  ];

  var layananGrid = document.getElementById("layanan-grid");
  if (layananGrid) {
    layanan.forEach(function (l, i) {
      layananGrid.insertAdjacentHTML("beforeend", `
        <div class="card p-6" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
          <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-gold-400 flex items-center justify-center text-lg mb-4">
            <i class="fa-solid ${l.icon}"></i>
          </div>
          <p class="font-display font-bold text-green-800 dark:text-cream">${escapeHtml(l.judul)}</p>
          <p class="text-ink-soft text-sm mt-2 leading-relaxed">${escapeHtml(l.desk)}</p>
        </div>`);
    });
  }

  /* ---------------- FAQ ---------------- */
  var faq = [
    { q: "Kapan jam pelayanan Kantor Desa Bapangi?", a: "Kantor Desa Bapangi melayani warga setiap hari Senin hingga Jumat, pukul 08.00–15.00 WITA. Di luar jam tersebut, pengaduan dapat disampaikan melalui WhatsApp." },
    { q: "Bagaimana cara mengurus surat keterangan di desa?", a: "Warga dapat datang langsung ke kantor desa dengan membawa KTP dan KK, atau menghubungi WhatsApp kantor desa terlebih dahulu untuk menanyakan persyaratan lengkap sebelum berkunjung." },
    { q: "Di mana lokasi Kantor Desa Bapangi?", a: "Kantor Desa Bapangi berada di Desa Bapangi, Kecamatan Panca Lautang, Kabupaten Sidenreng Rappang, Sulawesi Selatan. Lokasi lengkap dapat dilihat pada peta di bagian Contact Center." },
    { q: "Nomor apa saja yang bisa dihubungi untuk pengaduan?", a: "Warga dapat menghubungi WhatsApp Kantor Desa di +62 812-3456-7890 atau telepon kantor di (0421) 123-456 pada jam operasional." },
    { q: "Apa saja persyaratan umum pengurusan administrasi?", a: "Umumnya diperlukan KTP, Kartu Keluarga, dan surat pengantar RT/RW. Persyaratan spesifik dapat berbeda tergantung jenis surat yang diajukan." },
    { q: "Apakah layanan desa dikenakan biaya?", a: "Sebagian besar layanan administrasi dasar desa tidak dipungut biaya, kecuali ditentukan lain sesuai peraturan yang berlaku." },
    { q: "Bagaimana cara mengetahui program kerja yang sedang berjalan di desa?", a: "Informasi program kerja desa dan mahasiswa KKN dapat dilihat pada bagian Program Desa di website ini." },
    { q: "Apakah saya bisa mengajukan pertanyaan melalui website ini?", a: "Ya, silakan hubungi kami melalui tombol chat cepat WhatsApp atau email yang tersedia di bagian Contact Center untuk pertanyaan lebih lanjut." }
  ];

  var faqList = document.getElementById("faq-list");
  if (faqList) {
    faq.forEach(function (f, i) {
      faqList.insertAdjacentHTML("beforeend", `
        <details class="faq-item card p-0" data-aos="fade-up" data-aos-delay="${(i % 4) * 60}">
          <summary class="flex items-center justify-between gap-4 p-5">
            <span class="font-semibold text-ink text-sm sm:text-base">${escapeHtml(f.q)}</span>
            <i class="fa-solid fa-chevron-down faq-chevron text-gold-600 dark:text-gold-400 flex-shrink-0"></i>
          </summary>
          <div class="px-5 pb-5 -mt-1 text-ink-soft text-sm leading-relaxed">${escapeHtml(f.a)}</div>
        </details>`);
    });
  }
})();
