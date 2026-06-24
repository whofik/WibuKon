# Dokumentasi Project WibuKon

WibuKon adalah platform web streaming anime modern yang dibangun menggunakan Node.js, Express, dan EJS untuk server-side rendering, dengan Tailwind CSS via CDN.

---

## Struktur Direktori

```text
Wibukon/
├── lib/
│   └── ServerData.js        # Provider API data anime (Mobinime)
├── public/
│   ├── wibukon-banner.jpg
│   └── wibukon.jpg
├── routes/
│   ├── index.js             # Aggregator semua route
│   ├── home.js              # GET /
│   ├── schedule.js          # GET /schedule
│   ├── search.js            # GET /search
│   ├── about.js             # GET /about
│   ├── anime.js             # GET /anime/:id
│   └── watch.js             # GET /watch/:animeId/:epsId
├── views/
│   ├── layout/
│   │   ├── head.ejs
│   │   └── navbar.ejs
│   ├── 404.ejs
│   ├── about.ejs
│   ├── detail.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── schedule.ejs
│   ├── search.ejs
│   └── watch.ejs
├── .env.example
├── index.js                 # Entry point server
└── package.json
```

---

## Arsitektur

### Server Core (index.js)
Entry point yang menginisialisasi Express, mengatur middleware, dan memanggil setupRoutes untuk mendaftarkan semua route.

### Routes (routes/)
Setiap route dipisahkan ke file sendiri dan menerima instance mobinime sebagai dependency injection:
- home.js: Menampilkan beranda dengan data ongoing dan rekomendasi.
- schedule.js: Menampilkan jadwal rilis harian.
- search.js: Menampilkan hasil pencarian berdasarkan query.
- about.js: Halaman tentang.
- anime.js: Halaman detail anime.
- watch.js: Halaman streaming episode.

### Data Provider (lib/ServerData.js)
Kelas Mobinime yang mengelola request ke API eksternal:
- fetchHomeData(): Data beranda (rekomendasi, ongoing, jadwal).
- search(query): Pencarian anime.
- detail(id): Detail anime dan daftar episode.
- stream(id, epsid): URL video streaming.

### Views (views/)
Template EJS dengan Tailwind CSS untuk dark mode UI. Layout partial: head.ejs (meta, styles) dan navbar.ejs (navigasi).

---

## Menjalankan

```bash
npm install
npm start
```

Buka http://localhost:3000

### Environment Variables (.env)

```env
PORT=3000
```
