// ============================================
// DATA PENGUMUMAN
// Hanya masukkan peserta yang LOLOS.
// Siapa pun yang tidak ada di daftar ini otomatis "Tidak Lolos".
// Field "kelas" boleh dihapus jika tidak ada.
// ============================================

const KONFIG = {
    namaKegiatan: "Seleksi Anggota",
    // Isi dengan waktu pengumuman (format ISO, zona WIB) agar pencarian terkunci sebelum waktunya.
    // Contoh: "2026-10-10T19:00:00+07:00". Kosongkan (null) agar langsung terbuka.
    bukaPada: null,
};

const PESERTA_LOLOS = [
    // ---------- Semester 1 / 2 ----------
    // Sekretaris 2
    { id: "26312366", nama: "Amel Ismiandyta Febrian", posisi: "Sekretaris 2"},

    // Bendahara 2
    { id: "26312375", nama: "Wulan Ayu Anggraini", posisi: "Bendahara 2"},

    // Organisasi dan Perkaderan
    { id: "26312354", nama: "Laudya Amaradhani Eka Saputri", posisi: "Organisasi dan Perkaderan"},
    { id: "26312361", nama: "M. Hassan Al Banna", posisi: "Organisasi dan Perkaderan"},
    { id: "26312378", nama: "Muhammad Ramdan", posisi: "Organisasi dan Perkaderan"},
    { id: "26312381", nama: "Verina Lutfiah Wimala", posisi: "Organisasi dan Perkaderan"},

    // Bakat dan Minat
    { id: "26312390", nama: "Asma'ul Kurnia", posisi: "Bakat dan Minat"},
    { id: "26312358", nama: "Caesa Viasa Nurul Hidayah", posisi: "Bakat dan Minat"},
    { id: "26312362", nama: "Rafliyanto Khoiruroni Ihsan", posisi: "Bakat dan Minat"},
    { id: "26312364", nama: "Chalsea Mareina Olivia Echa Natasha", posisi: "Bakat dan Minat"},

    // Media dan Informasi
    { id: "26312359", nama: "Dias Rizky Puspitasari", posisi: "Media dan Informasi"},
    { id: "26312372", nama: "Anggi Aprilia Saputri", posisi: "Media dan Informasi"},
    { id: "26312379", nama: "Dista Wahyu Arila", posisi: "Media dan Informasi"},
    { id: "26312370", nama: "Eva Aulia Ramadhani", posisi: "Media dan Informasi"},

    // Sosial dan Masyarakat
    { id: "26312355", nama: "Mildiva Victoria Restu Andika", posisi: "Sosial dan Masyarakat"},
    { id: "26312382", nama: "Lorenza Dwi Anindita", posisi: "Sosial dan Masyarakat"},
    { id: "26312363", nama: "Pandu Octafiano", posisi: "Sosial dan Masyarakat"},
    { id: "26312357", nama: "Danar Cahyadi", posisi: "Sosial dan Masyarakat"},

    // Keagamaan dan Keislaman
    { id: "26312371", nama: "Salma Maulidya", posisi: "Keagamaan dan Keislaman"},
    { id: "26312376", nama: "Rindi Siti Fathonah", posisi: "Keagamaan dan Keislaman"},
    { id: "26312385", nama: "Septia Helga Ramadani", posisi: "Keagamaan dan Keislaman"},
    { id: "26312367", nama: "Nesya Okta Fiyani", posisi: "Keagamaan dan Keislaman"},

    // ---------- Semester 3 ----------
    // Organisasi dan Perkaderan
    { id: "25312336", nama: "Anisa Cahya Setyaningrum", posisi: "Organisasi dan Perkaderan" },

    // Bakat dan Minat
    { id: "25312337", nama: "Niquita Yolinda Putri", posisi: "Bakat dan Minat" },
    { id: "25312348", nama: "Anisa Cerlina Putri", posisi: "Bakat dan Minat" },

    // Media dan Informasi
    { id: "25312351", nama: "Anisa Anggun Sholihah", posisi: "Media dan Informasi" },

    // Sosial dan Masyarakat
    { id: "25312305", nama: "Shofinatul Yustikasari", posisi: "Sosial dan Masyarakat" },

    // Keagamaan dan Keislaman
    { id: "25312313", nama: "Luthfia Ranggi Nastiti", posisi: "Keagamaan dan Keislaman" },
];
