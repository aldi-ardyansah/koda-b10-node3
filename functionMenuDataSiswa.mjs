export default menuDataSiswa;

// Menu utama database siswa
async function menuDataSiswa(app) {
    try {
        let berjalan = true;

        while (berjalan) {
            console.log(`
=== DATABASE SISWA ===
1. Simpan data siswa
2. Baca data siswa
0. Keluar
`);

            const pilihan = (
                await app.rl.question("Pilih menu: ")
            ).trim();

            try {
                switch (pilihan) {
                    case "1":
                        await app.tambahDataSiswa(app);
                        break;

                    case "2":
                        await app.tampilkanDataSiswa(app);
                        break;

                    case "0":
                        berjalan = false;
                        console.log("\nProgram selesai.");
                        break;

                    default:
                        console.log("Pilihan tidak valid.");
                }
            } catch (error) {
                console.error(
                    "Terjadi kesalahan:",
                    error.message
                );
            }
        }
    } finally {
        app.rl.close();
    }
}