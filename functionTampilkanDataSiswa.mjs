export default tampilkanDataSiswa;

// Membaca dan menampilkan data siswa
async function tampilkanDataSiswa(app) {
    const siswa = await app.bacaDataSiswa(app);

    console.log("\n=== DAFTAR SISWA ===");

    if (siswa.length === 0) {
        console.log("Belum ada data siswa.");
        return;
    }

    console.table(siswa);
}