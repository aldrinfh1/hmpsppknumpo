// --- AREA PENGATURAN TUGAS ---
// Ubah, tambah, atau hapus tugas Anda di dalam daftar di bawah ini.
// Format Tanggal: "Bulan Hari, Tahun Jam:Menit:Detik" (Bulan dalam Bahasa Inggris)
// Jika deadline dikosongkan (""), kartu akan menampilkan "Jadwal menyusul" tanpa hitung mundur.
document.addEventListener('DOMContentLoaded', function () {

    const tasks = [

        // ===== KEGIATAN =====
        {
            title: "Coming Soon",
            description: "<b>Kegiatan</b> | Postingan<p style='margin-top:10px;'><b>Jumat, 9 Oktober 2026</b></p>",
            deadline: "Oct 9, 2026 23:59:59",
            link: ""
        },
        {
            title: "H-? → H-? → H-?",
            description: "<b>Kegiatan</b> | Story<p style='margin-top:10px;'><b>Jadwal menyusul</b></p>",
            deadline: "",
            link: ""
        },
        {
            title: "Pengumuman Makrab",
            description: "<b>Kegiatan</b> | Postingan<p style='margin-top:10px;'><b>Minggu, 18 Oktober 2026</b></p>",
            deadline: "Oct 18, 2026 23:59:59",
            link: ""
        },
        {
            title: "Twibbon Makrab",
            description: "<b>Kegiatan</b> | Postingan<p style='margin-top:10px;'><b>Selasa, 20 Oktober 2026</b></p>",
            deadline: "Oct 20, 2026 23:59:59",
            link: ""
        },
        {
            title: "Video Per Kegiatan",
            description: "<b>Kegiatan</b> | Story<p style='margin-top:10px;'><b>Jadwal menyusul</b></p>",
            deadline: "",
            link: ""
        },
        {
            title: "Frame Kegiatan",
            description: "<b>Kegiatan</b> | Story<p style='margin-top:10px;'><b>Kamis, 22 Oktober 2026</b></p>",
            deadline: "Oct 22, 2026 23:59:59",
            link: ""
        },
        {
            title: "Postingan Hari H",
            description: "<b>Kegiatan</b> | Postingan (Pagi - Malam - Pagi)<p style='margin-top:10px;'><b>Minggu 25 - Senin 26 Oktober 2026</b></p>",
            deadline: "Oct 26, 2026 23:59:59",
            link: ""
        },

        // ===== KONTEN-KONTEN VIDEO =====
        {
            title: "Konten H-3, H-2, H-1 & Konten H",
            description: "<b>Konten Video</b> | 3 video<p style='margin-top:10px;'><b>22, 23, 24 Oktober 2026</b></p>",
            deadline: "Oct 24, 2026 23:59:59",
            link: ""
        },
        {
            title: "Konten Transisi",
            description: "<b>Konten Video</b> | Transisi di Kampus → di Lokasi<p style='margin-top:10px;'><b>Jadwal menyusul</b></p>",
            deadline: "",
            link: ""
        },
        {
            title: "Konten di Lokasi",
            description: "<b>Konten Video</b> | 2 video<p style='margin-top:10px;'><b>Jadwal menyusul</b></p>",
            deadline: "",
            link: ""
        },
        {
            title: "Video Recap",
            description: "<b>Konten Video</b><p style='margin-top:10px;'><b>Selasa, 27 Oktober 2026</b></p>",
            deadline: "Oct 27, 2026 23:59:59",
            link: ""
        },

        // ===== PERLENGKAPAN =====
        {
            title: "Banner",
            description: "<b>Perlengkapan</b> | Ukuran 3 × 1,5<p style='margin-top:10px;'><b>Minggu, 18 Oktober 2026</b></p>",
            deadline: "Oct 18, 2026 23:59:59",
            link: ""
        },
        {
            title: "PPT TM",
            description: "<b>Perlengkapan</b><p style='margin-top:10px;'><b>Kamis, 8 Oktober 2026</b></p>",
            deadline: "Oct 8, 2026 23:59:59",
            link: ""
        },
        {
            title: "Sertifikat Panitia & Pemateri",
            description: "<b>Perlengkapan</b><p style='margin-top:10px;'><b>23 Oktober 2026</b></p>",
            deadline: "Oct 23, 2026 23:59:59",
            link: ""
        },

        // ===== ANGGARAN =====
        {
            title: "Anggaran",
            description: "<b>Anggaran</b> | Kamera<p style='margin-top:10px;'><b>Rp. 160.000</b><br>1 × 2 × 80 = 160.000</p>",
            deadline: "",
            link: ""
        }

    ];

    const container = document.querySelector('.task-container');

    // Membuat HTML untuk setiap tugas
    tasks.forEach((task, index) => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.id = `task-${index}`;

        let descriptionHTML = task.description ? `<p>${task.description}</p>` : '';

        card.innerHTML = `
            <h2>${task.title}</h2>
            ${descriptionHTML}
            <div class="countdown-wrapper">
                <div class="countdown" id="countdown-${index}">
                    <div class="time-box" id="hari">
                        <div class="number" data-unit="days">0</div>
                        <div class="label">Hari</div>
                    </div>
                    <div class="time-box" id="jam">
                        <div class="number" data-unit="hours">0</div>
                        <div class="label">Jam</div>
                    </div>
                    <div class="time-box" id="menit">
                        <div class="number" data-unit="minutes">0</div>
                        <div class="label">Menit</div>
                    </div>
                    <div class="time-box" id="detik">
                        <div class="number" data-unit="seconds">0</div>
                        <div class="label">Detik</div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Fungsi utama untuk mengupdate semua countdown
    function updateAllCountdowns() {
        const now = new Date().getTime();

        tasks.forEach((task, index) => {
            const card = document.getElementById(`task-${index}`);
            const countdownWrapper = card.querySelector('.countdown-wrapper');

            // Tugas tanpa deadline: tampilkan pesan, tanpa hitung mundur
            if (!task.deadline) {
                if (!countdownWrapper.dataset.nodeadline) {
                    countdownWrapper.dataset.nodeadline = "1";
                    countdownWrapper.innerHTML = `<div class="message">Jadwal menyusul</div>`;
                }
                return;
            }

            const countDownDate = new Date(task.deadline).getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                // Jika waktu sudah habis
                countdownWrapper.innerHTML = `<div class="message overdue-msg">Selesai!</div>`;
                card.classList.add('overdue');
            } else {
                // Jika masih ada waktu
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                const countdownEl = document.getElementById(`countdown-${index}`);
                countdownEl.querySelector('[data-unit="days"]').innerText = days;
                countdownEl.querySelector('[data-unit="hours"]').innerText = hours;
                countdownEl.querySelector('[data-unit="minutes"]').innerText = minutes;
                countdownEl.querySelector('[data-unit="seconds"]').innerText = seconds;

                // Tandai jika deadline sudah dekat (kurang dari 30 hari)
                if (days < 30) {
                    card.classList.add('soon');
                }
            }
        });
    }

    // Jalankan fungsi update setiap detik
    setInterval(updateAllCountdowns, 1000);

    // Panggil fungsi sekali saat halaman dimuat
    updateAllCountdowns();
});
