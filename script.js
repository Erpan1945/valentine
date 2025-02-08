// Array pesan yang akan ditampilkan saat tombol "No" ditekan
const messages = [
    "Are you sure?",                    // Pesan pertama
    "Really sure??",                     // Pesan kedua
    "Are you positive?",                  // Pesan ketiga
    "Pookie please...",                   // Pesan keempat (lebih emosional)
    "Just think about it!",                // Pesan kelima (membujuk)
    "If you say no, I will be really sad...",  // Pesan keenam (mulai sedih)
    "I will be very sad...",               // Pesan ketujuh (lebih sedih)
    "I will be very very very sad...",      // Pesan kedelapan (drama meningkat)
    "Ok fine, I will stop asking...",       // Pesan kesembilan (berpura-pura menyerah)
    "Just kidding, say yes please! ❤️"      // Pesan kesepuluh (kembali membujuk)
];

// Variabel untuk melacak indeks pesan yang sedang digunakan
let messageIndex = 0;

/**
 * Fungsi yang dijalankan ketika tombol "No" ditekan.
 * - Mengubah teks tombol "No" ke pesan berikutnya dalam array `messages`.
 * - Memperbesar ukuran tombol "Yes" setiap kali tombol "No" ditekan.
 */
function handleNoClick() {
    const noButton = document.querySelector('.no-button');  // Ambil elemen tombol "No"
    const yesButton = document.querySelector('.yes-button'); // Ambil elemen tombol "Yes"

    // Ubah teks tombol "No" ke pesan berikutnya dalam array
    noButton.textContent = messages[messageIndex];

    // Perbarui indeks pesan, jika sudah mencapai akhir, kembali ke awal (looping)
    messageIndex = (messageIndex + 1) % messages.length;

    // Ambil ukuran font tombol "Yes" saat ini
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    // Perbesar ukuran tombol "Yes" sebesar 1.5x setiap kali tombol "No" ditekan
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

/**
 * Fungsi yang dijalankan saat tombol "Yes" ditekan.
 * - Menyembunyikan halaman utama.
 * - Menampilkan halaman "Yes".
 */
function showYesPage() {
    document.getElementById("valentinePage").style.display = "none"; // Sembunyikan halaman utama
    document.getElementById("yesPage").style.display = "block"; // Tampilkan halaman "Yes"
}

/**
 * Fungsi untuk mereset halaman kembali ke kondisi awal.
 * - Menampilkan kembali halaman utama.
 * - Menyembunyikan halaman "Yes".
 * - Mengembalikan ukuran tombol "Yes" ke ukuran awal.
 * - Mengembalikan teks tombol "No" ke "No".
 * - Mereset indeks pesan agar mulai dari awal.
 */
function restart() {
    document.getElementById("valentinePage").style.display = "block"; // Tampilkan kembali halaman utama
    document.getElementById("yesPage").style.display = "none"; // Sembunyikan halaman "Yes"

    document.querySelector(".yes-button").style.fontSize = "1.5em"; // Reset ukuran tombol "Yes"
    document.querySelector(".no-button").textContent = "No"; // Reset teks tombol "No"
    
    messageIndex = 0; // Reset indeks pesan agar kembali ke awal
}
