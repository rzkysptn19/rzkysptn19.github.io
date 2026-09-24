# Portofolio — Rizky Septian Anggara Putra Nawarsyah

Website portofolio pribadi seorang **Junior Full Stack Developer** dari Indonesia. Dibangun menggunakan HTML, CSS, dan JavaScript murni — tanpa framework, tanpa build tool, tanpa npm install.

**Live Website:** [rzkysptn19.github.io](https://rzkysptn19.github.io)

---

## Daftar Isi

1. [Tentang Proyek](#tentang-proyek)
2. [Fitur](#fitur)
3. [Struktur Berkas](#struktur-berkas)
4. [Cara Menjalankan Secara Lokal](#cara-menjalankan-secara-lokal)
5. [Panduan Kustomisasi Lengkap](#panduan-kustomisasi-lengkap)
   - [Mengubah Informasi Pribadi](#1-mengubah-informasi-pribadi)
   - [Menambahkan Foto Profil](#2-menambahkan-foto-profil)
   - [Menambahkan Proyek ke Portofolio](#3-menambahkan-proyek-ke-portofolio)
   - [Mengedit Riwayat Pendidikan & Pengalaman](#4-mengedit-riwayat-pendidikan--pengalaman)
   - [Mengubah Persentase Skill](#5-mengubah-persentase-skill)
   - [Mengubah Angka Statistik Hero](#6-mengubah-angka-statistik-hero)
   - [Mengubah Tema Warna](#7-mengubah-tema-warna)
6. [Menghubungkan Form Kontak](#menghubungkan-form-kontak)
7. [Deployment ke GitHub Pages](#deployment-ke-github-pages)
8. [Teknologi](#teknologi)
9. [Lisensi](#lisensi)

---

## Tentang Proyek

Website ini berfungsi sebagai portofolio digital yang menampilkan profil, riwayat pendidikan dan pengalaman, keahlian teknis, serta proyek-proyek yang telah saya kerjakan. Dirancang dengan tampilan gelap (*dark mode*), efek kaca (*glassmorphism*), dan animasi interaktif yang berjalan lancar di semua perangkat.

---

## Fitur

- **Animasi Partikel** — Partikel mengambang di latar belakang yang dirender via HTML Canvas
- **Cursor Glow** — Efek cahaya mengikuti kursor di perangkat desktop
- **Navbar Responsif** — Navigasi dengan menu hamburger untuk perangkat mobile
- **Efek Pengetikan** — Teks sambutan mengetik sendiri saat halaman dimuat
- **Role Rotator** — Rotasi teks jabatan di section hero (Full Stack Dev, Frontend, Backend)
- **Animasi Scroll Reveal** — Elemen muncul dengan animasi saat masuk ke viewport
- **Skill Bar Animasi** — Progress bar terisi secara animatif saat pertama kali terlihat
- **Counter Animasi** — Angka statistik di hero menghitung naik secara animatif
- **Timeline Pendidikan & Karir** — Section dua kolom yang menampilkan riwayat akademis dan profesional
- **Filter Proyek** — Proyek dapat disaring berdasarkan kategori (Full Stack, Frontend, Backend)
- **Form Kontak dengan Validasi** — Validasi real-time pada setiap field input
- **Scroll to Top** — Tombol kembali ke atas yang muncul saat menggulir jauh ke bawah
- **Desain Responsif** — Tampilan menyesuaikan dari mobile (320px) hingga layar besar

---

## Struktur Berkas

```
Portofolio/
├── index.html          # Halaman utama dan seluruh konten
├── style.css           # Semua styling (CSS custom properties, animasi, responsif)
├── main.js             # Interaktivitas dan animasi (Vanilla JS)
├── cv-rizky-septian.pdf  # CV (perlu ditambahkan sendiri)
├── .gitignore          # File yang dikecualikan dari Git
├── LICENSE             # Lisensi MIT
└── README.md           # Dokumentasi ini
```

---

## Cara Menjalankan Secara Lokal

Tidak diperlukan instalasi apapun. Cukup buka file di browser:

**Cara 1 — Buka Langsung:**
```
Klik dua kali file index.html → browser akan membukanya langsung
```

**Cara 2 — Menggunakan Live Server (direkomendasikan untuk development):**
```
1. Install ekstensi "Live Server" di VS Code
2. Klik kanan pada index.html
3. Pilih "Open with Live Server"
4. Browser otomatis terbuka di http://localhost:5500
```

**Cara 3 — Menggunakan Python:**
```bash
# Python 3
python -m http.server 3000

# Lalu buka: http://localhost:3000
```

---

## Panduan Kustomisasi Lengkap

Semua perubahan dilakukan pada file `index.html`. Buka file ini menggunakan VS Code atau teks editor lainnya.

### 1. Mengubah Informasi Pribadi

Cari dan ganti teks berikut di `index.html`:

| Yang Diubah | Cari Teks Ini | Ganti Dengan |
|---|---|---|
| Nama lengkap | `Rizky Septian Anggara Putra Nawarsyah` | Nama kamu |
| Nama singkat (hero) | `Rizky Septian` | Nama singkat kamu |
| Email | `rzky13579@gmail.com` | Email kamu |
| Username GitHub | `rzkysptn19` | Username GitHub kamu |
| Kota/lokasi | `Indonesia` | Kota kamu |
| Deskripsi singkat | Paragraf di section `#about` | Kalimat perkenalan kamu sendiri |

Untuk mengganti **semua** sekaligus, gunakan fitur **Find & Replace** di VS Code:
- Tekan `Ctrl + H`
- Cari: `rzkysptn19` → Ganti dengan username GitHub kamu
- Cari: `rzky13579@gmail.com` → Ganti dengan email kamu

---

### 2. Menambahkan Foto Profil

Di `index.html`, cari bagian ini (ada komentar panduan di atasnya):

```html
<!-- PANDUAN: Mengganti Foto Profil -->
<div class="img-placeholder">
  ...
</div>
```

Ganti seluruh blok `<div class="img-placeholder">` tersebut dengan:

```html
<img src="foto-kamu.jpg" alt="Nama Kamu" class="about-img" />
```

> **Catatan:** Simpan file foto di dalam folder `Portofolio/` (di sebelah `index.html`). Gunakan foto dengan rasio 1:1 (persegi) agar tampil proporsional. Format yang didukung: `.jpg`, `.png`, `.webp`.

---

### 3. Menambahkan Proyek ke Portofolio

Setiap proyek adalah satu blok `<article class="proj-card ...">` di dalam `#projects-grid`.

**Langkah-langkah:**

1. Buka `index.html` dan cari komentar ini:
   ```
   <!-- ===== PROYEK 1 ===== -->
   ```

2. Salin (copy) satu blok `<article>` lengkap dari `<!-- ===== PROYEK 1 ===== -->` hingga `</article>`.

3. Tempel (paste) di bawahnya, lalu ubah isinya:

```html
<!-- ===== PROYEK BARU ===== -->
<article class="proj-card reveal-up glass-card" data-category="fullstack">
  <!-- data-category: pilih "fullstack", "frontend", atau "backend" -->

  <div class="proj-thumb proj-thumb-a">
    <!-- Ganti proj-thumb-a ke proj-thumb-b, c, d, e, atau f untuk warna berbeda -->
    ...isi SVG icon tidak perlu diubah...
    <div class="proj-overlay">
      <!-- Ganti href berikut dengan URL repo GitHub proyekmu -->
      <a href="https://github.com/rzkysptn19/nama-repo-kamu" ...>
      
      <!-- Ganti href berikut dengan URL live demo. Hapus jika belum ada. -->
      <a href="https://nama-project.vercel.app" ...>
    </div>
  </div>

  <div class="proj-body">
    <div class="proj-meta">
      <!-- Ganti class badge: badge-fs (full stack), badge-fe (frontend), badge-be (backend) -->
      <span class="proj-badge badge-fs">Full Stack</span>
      <!-- Ganti tahun -->
      <span class="proj-year">2024</span>
    </div>
    <!-- Ganti judul proyek -->
    <h3 class="proj-title">Nama Proyek Kamu</h3>
    <!-- Ganti deskripsi -->
    <p class="proj-desc">Deskripsi singkat tentang proyekmu.</p>
    <div class="proj-tech">
      <!-- Ganti tag teknologi sesuai yang kamu pakai -->
      <span class="tech-tag">React</span>
      <span class="tech-tag">Node.js</span>
      <span class="tech-tag">PostgreSQL</span>
    </div>
  </div>
</article>
```

**Cara membuat proyek bisa dibuka:**
- Untuk tombol **GitHub**: isi `href` dengan URL repository GitHub proyekmu.
  Contoh: `https://github.com/rzkysptn19/ecommerce-app`
- Untuk tombol **Live Demo**: isi `href` dengan URL website/deploy proyekmu.
  Contoh (Vercel): `https://ecommerce-app.vercel.app`
  Contoh (GitHub Pages): `https://rzkysptn19.github.io/ecommerce-app`
- Jika proyek **belum di-deploy**, hapus saja blok `<a href="..." class="proj-icon-btn proj-link-live">` agar tombol live demo tidak muncul.

---

### 4. Mengedit Riwayat Pendidikan & Pengalaman

Cari section `id="journey"` di `index.html`. Di dalamnya ada dua kolom:

- **Kolom Kiri** — Pendidikan (`.journey-col` pertama)
- **Kolom Kanan** — Pengalaman (`.journey-col` kedua)

Setiap item adalah blok `<div class="tl-item">`. Yang perlu diubah di setiap item:

```html
<div class="tl-item reveal-up">
  <div class="tl-dot"></div>  <!-- tl-dot-accent untuk kolom pengalaman -->
  <div class="tl-card glass-card">
    <div class="tl-header">
      <div>
        <h4 class="tl-title">Nama Institusi / Jabatan</h4>
        <p class="tl-sub">Jurusan / Nama Perusahaan</p>
      </div>
      <span class="tl-period">2019 &mdash; 2023</span>
    </div>
    <p class="tl-desc">Deskripsi singkat pengalaman atau pendidikanmu.</p>
    <div class="tl-tags">
      <span class="tl-tag">Tag Relevan</span>
    </div>
  </div>
</div>
```

Untuk **menambah item baru**, duplikat blok di atas dan letakkan setelah item terakhir dalam kolom yang sesuai.

Untuk **menghapus item** (misal, jika belum punya pengalaman kerja), cukup hapus seluruh blok `<div class="tl-item">` tersebut.

---

### 5. Mengubah Persentase Skill

Cari bagian `id="skills"` lalu ubah dua hal di setiap `skill-bar-item`:

```html
<div class="skill-bar-item" data-level="80">  <!-- Ubah angka ini (0-100) -->
  <div class="skill-bar-label">
    <span class="skill-bar-name">Nama Skill</span>
    <span class="skill-bar-pct">80%</span>  <!-- Ubah teks ini sesuai angka di atas -->
  </div>
  ...
</div>
```

Untuk **menambah skill baru**, salin blok `<div class="skill-bar-item">` dan tempel setelah item terakhir.

Untuk **menambah/menghapus tag teknologi**, edit blok `<div class="skill-tags-grid">` dan ubah isi `<span class="skill-tag">`.

---

### 6. Mengubah Angka Statistik Hero

Cari di bagian hero:

```html
<div class="hero-stats animate-in" ...>
  <div class="stat-item">
    <span class="stat-number" data-target="6">0</span>  <!-- Ganti angka data-target -->
    <span class="stat-label">Proyek Selesai</span>      <!-- Ganti label -->
  </div>
  ...
```

Ubah nilai `data-target` dan teks `stat-label` sesuai kondisi nyata kamu.

---

### 7. Mengubah Tema Warna

Semua warna utama diatur di bagian `:root` di `style.css`:

```css
:root {
  --primary:    #6366f1;   /* Warna utama (ungu) */
  --primary-2:  #818cf8;   /* Warna utama terang */
  --accent:     #22d3ee;   /* Warna aksen (biru cyan) */
  --accent-2:   #a78bfa;   /* Warna aksen sekunder */
  --success:    #10b981;   /* Warna hijau (status aktif) */
  ...
}
```

Kamu bisa mengganti nilai hex di sana untuk mengubah palet warna keseluruhan.

---

## Menghubungkan Form Kontak

Secara default, form kontak hanya mensimulasikan pengiriman (tidak benar-benar mengirim email). Untuk membuat form berfungsi sungguhan secara gratis:

### Menggunakan Formspree (Mudah & Gratis)

1. Daftar di [formspree.io](https://formspree.io)
2. Buat form baru dan dapatkan endpoint-nya. Contoh: `https://formspree.io/f/xyzabcde`
3. Buka `main.js`, ganti bagian submit form:

```javascript
// Ganti blok berikut ini:
await new Promise(r => setTimeout(r, 1000));
```

Dengan kode ini:
```javascript
const data = new FormData(form);
const res  = await fetch('https://formspree.io/f/xyzabcde', {
  method: 'POST',
  body: data,
  headers: { 'Accept': 'application/json' }
});
if (!res.ok) throw new Error('Gagal mengirim');
```

---

## Deployment ke GitHub Pages

Setelah semua file di-push ke GitHub, aktifkan GitHub Pages agar website bisa diakses publik:

1. Buka repository di [github.com](https://github.com)
2. Klik tab **Settings**
3. Di sidebar kiri, klik **Pages**
4. Di bagian **Branch**, pilih `main` dan folder `/ (root)`
5. Klik **Save**
6. Tunggu 1–3 menit hingga website aktif

Website akan tersedia di:
```
https://rzkysptn19.github.io
```
(Atau `https://rzkysptn19.github.io/nama-repo` jika nama repositorinya bukan `rzkysptn19.github.io`)

**Memperbarui website setelah ada perubahan:**
```bash
git add .
git commit -m "Perbarui konten portofolio"
git push origin main
```
Perubahan akan otomatis live dalam beberapa menit.

---

## Teknologi

| Teknologi | Penggunaan |
|---|---|
| HTML5 Semantik | Struktur halaman dan aksesibilitas |
| CSS Custom Properties | Design system dan manajemen tema warna |
| CSS Keyframe Animations | Animasi blob, float, shimmer, dan transisi |
| CSS Scroll-driven Animations | Efek header mengecil saat scroll (Chrome/Edge) |
| IntersectionObserver API | Scroll reveal dan animasi skill bar |
| HTML Canvas API | Partikel latar belakang |
| Vanilla JavaScript | Semua interaksi dan logika |
| Google Fonts | Tipografi (Inter + JetBrains Mono) |

---

## Lisensi

Proyek ini menggunakan lisensi **MIT**. Silakan digunakan, dimodifikasi, dan didistribusikan secara bebas dengan tetap mencantumkan atribusi kepada penulis aslinya.

&copy; 2024 Rizky Septian Anggara Putra Nawarsyah
