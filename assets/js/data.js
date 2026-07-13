/* =========================================================
   Desa Bapangi — Data Konten (Dummy)
   Edit array di bawah ini untuk mengubah isi website.
   Tidak perlu database — cukup ubah teks/gambar di sini.
   ========================================================= */

(function () {
  "use strict";

  /* ---------------- Aparatur Desa ---------------- */
  var aparatur = [
    { nama: "Drs. H. Muhammad Yusuf", jabatan: "Kepala Desa", desk: "Memimpin penyelenggaraan pemerintahan, pembangunan, dan pelayanan masyarakat Desa Bapangi.", foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { nama: "Andi Baso, S.STP", jabatan: "Sekretaris Desa", desk: "Mengoordinasikan administrasi umum, keuangan, dan tata usaha pemerintah desa.", foto: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400&auto=format&fit=crop" },
    { nama: "Nurhayati, S.Sos", jabatan: "Kasi Pemerintahan", desk: "Menangani urusan pemerintahan, kependudukan, dan ketertiban desa.", foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
    { nama: "Rusdi, S.E", jabatan: "Kaur Keuangan", desk: "Mengelola administrasi keuangan dan aset desa secara transparan.", foto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop" },
    { nama: "Hamsina", jabatan: "Kepala Dusun Bapangi", desk: "Mengoordinasikan kegiatan warga dan pelayanan di wilayah Dusun Bapangi.", foto: "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=400&auto=format&fit=crop" },
    { nama: "Baharuddin", jabatan: "Ketua BPD", desk: "Menyalurkan aspirasi masyarakat serta mengawasi kinerja pemerintah desa.", foto: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=400&auto=format&fit=crop" },
    { nama: "Hj. Sitti Aminah", jabatan: "Ketua PKK", desk: "Menggerakkan program pemberdayaan keluarga, kesehatan, dan posyandu.", foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
    { nama: "Muh. Fadli", jabatan: "Ketua Karang Taruna", desk: "Mengoordinasikan kegiatan kepemudaan, olahraga, dan sosial kemasyarakatan.", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
  ];

  var aparaturGrid = document.getElementById("aparatur-grid");
  if (aparaturGrid) {
    aparatur.forEach(function (p, i) {
      aparaturGrid.insertAdjacentHTML("beforeend", `
        <div class="card overflow-hidden text-center" data-aos="fade-up" data-aos-delay="${(i % 4) * 100}">
          <img src="${p.foto}" alt="Foto ${p.jabatan} Desa Bapangi, ${p.nama}" class="w-full h-52 object-cover" />
          <div class="p-5">
            <p class="font-display font-bold text-green-800 dark:text-cream">${p.nama}</p>
            <p class="chip mt-2">${p.jabatan}</p>
            <p class="text-ink-soft text-xs mt-3 leading-relaxed">${p.desk}</p>
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
          <img src="${p.foto}" alt="${p.judul} di Desa Bapangi" class="w-full h-44 object-cover" />
          <div class="p-5">
            <div class="w-11 h-11 rounded-full bg-gold-500 text-green-900 flex items-center justify-center mb-3 -mt-9 relative z-10 shadow-md">
              <i class="fa-solid ${p.icon}"></i>
            </div>
            <p class="font-display font-bold text-white text-lg">${p.judul}</p>
            <p class="text-white/70 text-sm mt-1.5 leading-relaxed">${p.desk}</p>
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
              <p class="font-display font-bold text-green-800 dark:text-cream">${p.judul}</p>
              <p class="text-ink-soft text-sm mt-1.5 leading-relaxed">${p.desk}</p>
            </div>
          </div>
        </div>`);
    });
  }

  /* ---------------- Berita & Kegiatan ---------------- */
  var berita = [
    { judul: "Jumat Bersih Serentak di Seluruh Dusun", tanggal: "4 Juli 2026", ringkas: "Warga bersama perangkat desa dan mahasiswa KKN membersihkan fasilitas umum sebagai bagian dari agenda rutin mingguan.", foto: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=800&auto=format&fit=crop", isi: "Kegiatan Jumat Bersih dilaksanakan serentak di empat dusun dengan melibatkan warga, perangkat desa, karang taruna, dan mahasiswa KKN. Fokus pembersihan meliputi saluran irigasi, jalan desa, dan area fasilitas umum. Kegiatan ini rutin dilaksanakan setiap pekan sebagai wujud kepedulian terhadap kebersihan lingkungan." },
    { judul: "Posyandu Balita dan Lansia Bulan Ini", tanggal: "28 Juni 2026", ringkas: "Pelayanan kesehatan rutin untuk balita dan lansia berjalan lancar dengan dukungan kader PKK dan tenaga kesehatan puskesmas.", foto: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop", isi: "Posyandu bulan ini melayani penimbangan balita, pemberian vitamin, serta pemeriksaan kesehatan lansia. Kegiatan didukung oleh kader PKK dan petugas Puskesmas Panca Lautang, dengan antusiasme warga yang cukup tinggi terlihat dari jumlah kunjungan yang meningkat dibanding bulan sebelumnya." },
    { judul: "Pengajian Rutin Malam Jumat", tanggal: "20 Juni 2026", ringkas: "Kegiatan keagamaan mingguan yang mempererat silaturahmi antarwarga sekaligus meningkatkan pemahaman keagamaan.", foto: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=800&auto=format&fit=crop", isi: "Pengajian rutin malam Jumat digelar bergiliran di rumah-rumah warga dan masjid desa. Kegiatan ini menjadi wadah mempererat silaturahmi sekaligus meningkatkan pemahaman keagamaan masyarakat Desa Bapangi." },
    { judul: "Panen Raya Jagung Musim Ini", tanggal: "12 Juni 2026", ringkas: "Hasil panen jagung tahun ini menunjukkan peningkatan berkat pendampingan teknik budi daya oleh penyuluh pertanian.", foto: "https://images.unsplash.com/photo-1601472543880-c1e5dd0b3f30?q=80&w=800&auto=format&fit=crop", isi: "Musim panen jagung tahun ini disambut gembira oleh petani karena hasil yang meningkat dibanding musim sebelumnya. Pendampingan teknik budi daya dari penyuluh pertanian kabupaten dinilai berkontribusi terhadap peningkatan produktivitas lahan." },
    { judul: "Gotong Royong Perbaikan Jalan Dusun", tanggal: "5 Juni 2026", ringkas: "Warga bergotong royong memperbaiki ruas jalan yang rusak akibat musim hujan sebelumnya.", foto: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=800&auto=format&fit=crop", isi: "Ruas jalan penghubung antar-dusun yang rusak akibat curah hujan tinggi diperbaiki secara swadaya oleh warga bersama pemerintah desa. Perbaikan difokuskan pada titik-titik jalan yang paling sering dilalui kendaraan pengangkut hasil panen." },
    { judul: "Seminar Program Kerja Mahasiswa KKN", tanggal: "28 Mei 2026", ringkas: "Mahasiswa KKN memaparkan rencana program kerja kepada perangkat dan masyarakat Desa Bapangi.", foto: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", isi: "Seminar program kerja menjadi tahap awal pelaksanaan KKN di Desa Bapangi. Mahasiswa memaparkan rencana program mencakup digitalisasi informasi desa, pengolahan selai jagung, hingga pendampingan posyandu, yang kemudian mendapat masukan dan persetujuan dari perangkat serta tokoh masyarakat." },
    { judul: "Kegiatan KKN: Pelatihan Digital Marketing UMKM", tanggal: "15 Mei 2026", ringkas: "Mahasiswa KKN memberikan pelatihan pemasaran digital kepada pelaku UMKM lokal untuk memperluas jangkauan pasar.", foto: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", isi: "Pelatihan digital marketing diberikan kepada pelaku UMKM Desa Bapangi, mencakup dasar pemasaran melalui media sosial dan penataan tampilan produk. Kegiatan ini merupakan bagian dari program digitalisasi yang dijalankan mahasiswa KKN bersama pemerintah desa." }
  ];

  var beritaGrid = document.getElementById("berita-grid");
  if (beritaGrid) {
    berita.forEach(function (b, i) {
      beritaGrid.insertAdjacentHTML("beforeend", `
        <article class="card overflow-hidden" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}" data-news-full>
          <img src="${b.foto}" alt="${b.judul}" class="w-full h-48 object-cover" />
          <div class="p-5">
            <p class="text-xs text-gold-600 dark:text-gold-400 font-bold uppercase tracking-wide"><i class="fa-regular fa-calendar mr-1.5"></i>${b.tanggal}</p>
            <h3 class="font-display font-bold text-green-800 dark:text-cream mt-2 leading-snug">${b.judul}</h3>
            <p class="text-ink-soft text-sm mt-2 leading-relaxed">${b.ringkas}</p>
            <button data-news-more class="mt-4 text-sm font-bold text-green-700 dark:text-gold-400 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Baca Selengkapnya <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
          <div class="hidden" data-news-full-content>
            <p class="text-xs text-gold-600 font-bold uppercase tracking-wide"><i class="fa-regular fa-calendar mr-1.5"></i>${b.tanggal}</p>
            <h3 class="font-display font-bold text-xl text-green-800 mt-2 leading-snug">${b.judul}</h3>
            <img src="${b.foto}" alt="${b.judul}" class="w-full h-56 object-cover rounded-xl2 my-4" />
            <p class="text-ink-soft text-sm leading-relaxed">${b.isi}</p>
          </div>
        </article>`);
    });
  }

  /* ---------------- Galeri ---------------- */
  var galeri = [
    { kategori: "desa", label: "Foto Desa", url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=900&auto=format&fit=crop" },
    { kategori: "desa", label: "Foto Desa", url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=900&auto=format&fit=crop" },
    { kategori: "desa", label: "Foto Desa", url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=900&auto=format&fit=crop" },
    { kategori: "masyarakat", label: "Kegiatan Masyarakat", url: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=900&auto=format&fit=crop" },
    { kategori: "masyarakat", label: "Kegiatan Masyarakat", url: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=900&auto=format&fit=crop" },
    { kategori: "masyarakat", label: "Kegiatan Masyarakat", url: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop" },
    { kategori: "pemdes", label: "Kegiatan Pemerintah Desa", url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop" },
    { kategori: "pemdes", label: "Kegiatan Pemerintah Desa", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=900&auto=format&fit=crop" },
    { kategori: "pemdes", label: "Kegiatan Pemerintah Desa", url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=900&auto=format&fit=crop" },
    { kategori: "kkn", label: "Kegiatan KKN", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop" },
    { kategori: "kkn", label: "Kegiatan KKN", url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop" },
    { kategori: "kkn", label: "Kegiatan KKN", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop" }
  ];

  var galeriGrid = document.getElementById("galeri-grid");
  if (galeriGrid) {
    galeri.forEach(function (g, i) {
      galeriGrid.insertAdjacentHTML("beforeend", `
        <div class="gallery-item" data-category="${g.kategori}" data-aos="zoom-in" data-aos-delay="${(i % 4) * 80}">
          <img src="${g.url}" data-full="${g.url.replace('w=900', 'w=1600')}" alt="${g.label} Desa Bapangi" class="w-full h-40 sm:h-48 object-cover" loading="lazy" />
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
          <p class="font-display font-bold text-green-800 dark:text-cream">${l.judul}</p>
          <p class="text-ink-soft text-sm mt-2 leading-relaxed">${l.desk}</p>
        </div>`);
    });
  }

  /* ---------------- FAQ ---------------- */
  var faq = [
    { q: "Kapan jam pelayanan Kantor Desa Bapangi?", a: "Kantor Desa Bapangi melayani warga setiap hari Senin hingga Jumat, pukul 08.00–15.00 WITA. Di luar jam tersebut, pengaduan dapat disampaikan melalui WhatsApp." },
    { q: "Bagaimana cara mengurus surat keterangan di desa?", a: "Warga dapat datang langsung ke kantor desa dengan membawa KTP dan KK, atau menghubungi WhatsApp kantor desa terlebih dahulu untuk menanyakan persyaratan lengkap sebelum berkunjung." },
    { q: "Di mana lokasi Kantor Desa Bapangi?", a: "Kantor Desa Bapangi berada di Kecamatan Panca Lautang, Kabupaten Sidenreng Rappang, Sulawesi Selatan. Lokasi lengkap dapat dilihat pada peta di bagian Contact Center." },
    { q: "Nomor apa saja yang bisa dihubungi untuk pengaduan?", a: "Warga dapat menghubungi WhatsApp Kantor Desa di +62 812-3456-7890 atau telepon kantor di (0421) 123-456 pada jam operasional." },
    { q: "Apa saja persyaratan umum pengurusan administrasi?", a: "Umumnya diperlukan KTP, Kartu Keluarga, dan surat pengantar RT/RW. Persyaratan spesifik dapat berbeda tergantung jenis surat yang diajukan." },
    { q: "Apakah layanan desa dikenakan biaya?", a: "Sebagian besar layanan administrasi dasar desa tidak dipungut biaya, kecuali ditentukan lain sesuai peraturan yang berlaku." },
    { q: "Bagaimana cara mengetahui program kerja KKN yang sedang berjalan?", a: "Informasi program kerja mahasiswa KKN dapat dilihat pada bagian Program Desa dan Berita & Kegiatan di website ini." },
    { q: "Apakah saya bisa mengajukan pertanyaan melalui website ini?", a: "Ya, silakan hubungi kami melalui WhatsApp atau email yang tersedia di bagian Contact Center untuk pertanyaan lebih lanjut." }
  ];

  var faqList = document.getElementById("faq-list");
  if (faqList) {
    faq.forEach(function (f, i) {
      faqList.insertAdjacentHTML("beforeend", `
        <details class="faq-item card p-0" data-aos="fade-up" data-aos-delay="${(i % 4) * 60}">
          <summary class="flex items-center justify-between gap-4 p-5">
            <span class="font-semibold text-ink text-sm sm:text-base">${f.q}</span>
            <i class="fa-solid fa-chevron-down faq-chevron text-gold-600 dark:text-gold-400 flex-shrink-0"></i>
          </summary>
          <div class="px-5 pb-5 -mt-1 text-ink-soft text-sm leading-relaxed">${f.a}</div>
        </details>`);
    });
  }
})();
