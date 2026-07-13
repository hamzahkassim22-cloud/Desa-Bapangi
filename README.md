# 🌾 Website Profil Desa Bapangi

Website profil resmi **Desa Bapangi**, Kecamatan Panca Lautang, Kabupaten Sidenreng Rappang, Sulawesi Selatan.
Dibangun sebagai website statis (HTML, CSS, JavaScript) **tanpa database dan tanpa sistem login**, sehingga bisa langsung di-hosting gratis di GitHub Pages, Netlify, atau Vercel.

> Status: data pada situs ini masih **contoh/dummy** dan perlu diganti dengan data resmi desa sebelum dipublikasikan. Lihat bagian [Cara Mengganti Konten](#-cara-mengganti-konten).

---

## ✨ Fitur

- Desain modern, responsif (desktop / tablet / mobile), gaya website pemerintahan
- Navigasi sticky dengan scroll-spy (menu aktif mengikuti posisi scroll)
- Dark mode
- Animasi scroll halus (AOS)
- Statistik desa dengan animasi hitung naik
- Kartu profil aparatur desa
- Section Potensi Desa & Program Desa
- Berita & Kegiatan dengan modal "Baca Selengkapnya"
- Galeri foto dengan filter kategori + lightbox
- Layanan administrasi desa
- Contact Center: tombol WhatsApp, Email, Google Maps
- FAQ dengan kolom pencarian
- Tombol WhatsApp melayang & tombol kembali ke atas
- 100% statis — seluruh konten disimpan di file `assets/js/data.js`, mudah diubah tanpa database

---

## 🗂️ Struktur Folder

```
├── index.html              # Struktur utama halaman (semua section)
├── assets/
│   ├── css/
│   │   └── style.css       # Token desain (warna, font), komponen, animasi
│   ├── js/
│   │   ├── data.js         # Seluruh KONTEN website (edit di sini)
│   │   └── script.js       # Interaktivitas (nav, dark mode, lightbox, FAQ, dst.)
│   └── img/                # Taruh foto asli desa di sini
└── README.md
```

---

## 🚀 Menjalankan Secara Lokal

Karena murni HTML/CSS/JS statis, tidak perlu instalasi apa pun.

1. Clone atau download repository ini
2. Buka `index.html` langsung di browser, **atau** jalankan server lokal ringan:

   ```bash
   # Python
   python3 -m http.server 5500

   # atau Node.js
   npx serve .
   ```
3. Akses `http://localhost:5500`

---

## 🌐 Deploy Gratis

### GitHub Pages
1. Push repository ini ke GitHub
2. Buka **Settings → Pages**
3. Pilih branch `main` dan folder `/root`, lalu simpan
4. Situs akan tersedia di `https://<username>.github.io/<nama-repo>/`

### Netlify / Vercel
1. Import repository ini dari GitHub
2. Build command: **kosongkan** (tidak ada proses build)
3. Publish/output directory: `.` (root)
4. Deploy

---

## ✏️ Cara Mengganti Konten

Seluruh teks dan data ditulis dalam bentuk array JavaScript di **`assets/js/data.js`** — tidak perlu menyentuh HTML.

| Ingin mengubah | Cari variabel di `data.js` |
|---|---|
| Aparatur desa (foto, nama, jabatan) | `aparatur` |
| Potensi desa | `potensi` |
| Program desa | `program` |
| Berita & kegiatan | `berita` |
| Galeri foto | `galeri` |
| Layanan | `layanan` |
| FAQ | `faq` |

Untuk data lain yang tertulis langsung di HTML, edit di **`index.html`**:
- Nama Kepala Desa, sambutan, statistik desa → section `#beranda`
- Sejarah, visi, misi, batas wilayah → section `#profil`
- Nomor WhatsApp, email, alamat, jam operasional, embed Google Maps → section `#kontak` dan tombol WhatsApp melayang di bagian bawah `<body>`
- Media sosial → bagian `<footer>`

**Mengganti foto:** simpan foto asli ke folder `assets/img/`, lalu ganti nilai `foto`/`url` pada `data.js` (atau atribut `src` di `index.html`) dengan path lokal, misalnya `assets/img/kantor-desa.jpg`.

**Mengganti Google Maps:** buka Google Maps, cari lokasi kantor desa, klik *Bagikan → Sematkan peta*, salin URL di dalam atribut `src` iframe, lalu tempel menggantikan `src` iframe pada `index.html`.

---

## 🎨 Palet Warna

| Warna | Hex |
|---|---|
| Hijau tua | `#14321F` |
| Hijau utama | `#1B5E3F` |
| Hijau muda | `#3E8B63` |
| Kuning emas | `#E8B930` |
| Krem/putih | `#FBF9F3` |

Ubah token warna & font di bagian atas `assets/css/style.css` (`:root`) dan konfigurasi `tailwind.config` di `index.html`.

---

## 🧩 Teknologi

- HTML5 + [Tailwind CSS](https://tailwindcss.com/) (CDN, tanpa build step)
- CSS kustom untuk token desain & animasi
- Vanilla JavaScript (tanpa framework)
- [AOS](https://michalsnik.github.io/aos/) — animasi scroll
- [Font Awesome 6](https://fontawesome.com/) — ikon
- Google Maps Embed — tanpa API key

Catatan: mode gelap disimpan dalam memori sesi (tidak persisten). Jika ingin diingat setelah reload, tambahkan `localStorage` di `assets/js/script.js` pada bagian `Dark mode`.

---

## 📄 Lisensi

Dirilis di bawah [Lisensi MIT](LICENSE) — bebas digunakan dan dimodifikasi untuk keperluan Desa Bapangi maupun desa lain.

---

<p align="center">Dibuat untuk Pemerintah Desa Bapangi, Kecamatan Panca Lautang, Kabupaten Sidenreng Rappang, Sulawesi Selatan.</p>
