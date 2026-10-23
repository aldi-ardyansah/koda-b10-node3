export default tambahDataSiswa;

// Menambahkan data siswa
async function tambahDataSiswa(app) {
    const siswa = await app.bacaDataSiswa(app);

    console.log("\n=== INPUT DATA SISWA ===");

    const nis = (await app.rl.question("NIS: ")).trim();
    const nama = (await app.rl.question("Nama: ")).trim();
    const kelas = (await app.rl.question("Kelas: ")).trim();

    if (!nis || !nama || !kelas) {
        console.log("Semua data wajib diisi.");
        return;
    }

    const siswaBaru = {
        nis,
        nama,
        kelas
    };

    siswa.push(siswaBaru);

    await app.simpanDataSiswa(siswa);

    console.log("Data siswa berhasil disimpan!");
}