# 🌾 Website Profil Desa Bapangi

Website profil resmi **Desa Bapangi**, Kecamatan Panca Lautang, Kabupaten Sidenreng Rappang, Sulawesi Selatan.
Dibangun sebagai website statis (HTML, CSS, JavaScript) **tanpa database dan tanpa sistem login**, sehingga bisa langsung di-hosting gratis di GitHub Pages, Netlify, atau Vercel. Fokus website ini murni informasi desa — ringkas, cepat diakses, dan mudah diubah.

> Status: data pada situs ini masih **contoh/dummy** dan perlu diganti dengan data resmi desa sebelum dipublikasikan. Lihat bagian [Cara Mengganti Konten](#-cara-mengganti-konten).

---

## ✨ Fitur

- Desain modern, responsif (desktop / tablet / mobile), gaya website pemerintahan
- Navigasi sticky dengan scroll-spy (menu aktif mengikuti posisi scroll)
- Dark mode
- Animasi scroll halus (AOS)
- Statistik desa dengan animasi hitung naik
- Profil desa: sejarah, visi, misi, letak geografis, batas wilayah, peta lokasi Desa Bapangi
- Pemerintahan Desa: Kepala Desa tampil dengan foto (kartu unggulan), aparatur lain tampil ringkas dengan avatar inisial tanpa foto
- Potensi Desa & Program Desa
- Layanan administrasi desa
- Contact Center: WhatsApp, Email, Google Maps
- **Widget Chat Cepat WhatsApp** — tombol melayang yang membuka panel berisi beberapa topik pesan siap kirim (jam pelayanan, cara urus surat, aspirasi/pengaduan, dll), jadi pengunjung tinggal klik tanpa perlu mengetik dari nol
- FAQ dengan kolom pencarian
- Tombol kembali ke atas
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
│   │   └── script.js       # Interaktivitas (nav, dark mode, chat WhatsApp, FAQ, dst.)
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

Seluruh teks dan data ditulis dalam bentuk array/objek JavaScript di **`assets/js/data.js`** — tidak perlu menyentuh HTML.

| Ingin mengubah | Cari variabel di `data.js` |
|---|---|
| Nama, jabatan, foto Kepala Desa | `kepalaDesa` |
| Aparatur desa lainnya (tanpa foto) | `aparaturLain` |
| Potensi desa | `potensi` |
| Program desa | `program` |
| Layanan | `layanan` |
| FAQ | `faq` |

Untuk data lain yang tertulis langsung di HTML, edit di **`index.html`**:
- Sambutan Kepala Desa, statistik desa → section `#beranda`
- Sejarah, visi, misi, batas wilayah → section `#profil`
- Nomor WhatsApp, email, alamat, jam operasional, embed Google Maps → section `#kontak`
- Pesan-pesan cepat pada widget WhatsApp → cari `id="wa-panel"`
- Media sosial → bagian `<footer>`

**Mengganti foto Kepala Desa:** simpan foto ke `assets/img/`, lalu ganti nilai `foto` pada objek `kepalaDesa` di `data.js`, misalnya `foto: "assets/img/kepala-desa.jpg"`. Aparatur lain sengaja **tidak memakai foto** — otomatis ditampilkan sebagai avatar berisi inisial nama, jadi kamu tidak perlu menyiapkan foto untuk mereka.

**Mengganti Google Maps:** buka Google Maps, cari lokasi Desa Bapangi, klik *Bagikan → Sematkan peta*, salin URL di dalam atribut `src` iframe, lalu tempel menggantikan `src` iframe pada `index.html`.

---

## 💬 Widget Chat Cepat WhatsApp

Tombol WhatsApp melayang di pojok kanan bawah sekarang berupa **widget chat cepat**: saat diklik, muncul panel kecil berisi beberapa topik pesan siap kirim (jam pelayanan, cara urus surat, aspirasi/pengaduan, pertanyaan lain). Pengunjung tinggal klik salah satu topik, dan WhatsApp langsung terbuka dengan pesan yang sudah terisi otomatis.

**Cara mengubah nomor WhatsApp:** buka `index.html`, cari `6281234567890` (muncul beberapa kali — di widget chat cepat dan di section Contact Center), ganti semuanya dengan nomor kantor desa yang benar dalam format internasional tanpa tanda `+` atau spasi, contoh `6281298765432`.

**Cara mengubah/menambah topik pesan:** buka `index.html`, cari `id="wa-panel"`, di dalamnya ada beberapa tautan `<a href="https://wa.me/...">`. Ubah teks di dalam tag `<i>...</i>` (label topik) dan bagian `text=` pada URL (isi pesan otomatis, harus dalam format ter-encode URL — spasi ditulis `%20`).

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
