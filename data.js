// ============================================
// DATA PENGUMUMAN
// Hanya masukkan peserta yang LOLOS.
// Siapa pun yang tidak ada di daftar ini otomatis "Tidak Lolos".
// ============================================

const KONFIG = {
    namaKegiatan: "Seleksi Anggota",
    // Isi dengan waktu pengumuman (format ISO, zona WIB) agar pencarian terkunci sebelum waktunya.
    // Contoh: "2026-10-10T19:00:00+07:00". Kosongkan (null) agar langsung terbuka.
    bukaPada: null,
};

const PESERTA_LOLOS = [
    { id: "25312332", nama: "Aldrin Fahrul Hidayat", divisi: "Medkom" },
    { id: "2026002", nama: "Contoh Dua", divisi: "Acara" },
    { id: "2026003", nama: "Contoh Tiga", divisi: "Publikasi" },
    // Tambahkan baris baru di sini.
    // "divisi" boleh dihapus kalau tidak diperlukan.
];
