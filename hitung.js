// Fungsi sederhana untuk menjumlahkan angka
function tambah(a, b) {
    return a + b;
}

// Simulasi tes sederhana
if (tambah(2, 3) === 5) {
    console.log("Tes Berhasil: 2 + 3 adalah 5");
    process.exit(0); // Exit code 0 artinya sukses
} else {
    console.log("Tes Gagal!");
    process.exit(1); // Exit code 1 artinya error
}