import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "node:fs/promises";

import bacaDataSiswa from "./functionBacaDataSiswa.mjs";

const dataSiswa = "dataSiswa.json";

const rl = readline.createInterface({
    input,
    output
});

// Menyimpan data siswa ke file JSON
async function simpanDataSiswa(siswa) {
    const data = JSON.stringify(siswa, null, 4);
    await fs.writeFile(dataSiswa, data + "\n", "utf8");
}

// Menambahkan data siswa
async function tambahDataSiswa() {
    const siswa = await bacaDataSiswa(app);

    console.log("\n=== INPUT DATA SISWA ===");

    const nis = (await rl.question("NIS: ")).trim();
    const nama = (await rl.question("Nama: ")).trim();
    const kelas = (await rl.question("Kelas: ")).trim();

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

    await simpanDataSiswa(siswa);

    console.log("Data siswa berhasil disimpan!");
}

// Membaca dan menampilkan data siswa
async function tampilkanDataSiswa() {
    const siswa = await bacaDataSiswa(app);

    console.log("\n=== DAFTAR SISWA ===");

    if (siswa.length === 0) {
        console.log("Belum ada data siswa.");
        return;
    }

    console.table(siswa);
}

// Menu utama
async function main() {
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
                await rl.question("Pilih menu: ")
            ).trim();

            try {
                switch (pilihan) {
                    case "1":
                        await tambahDataSiswa();
                        break;

                    case "2":
                        await tampilkanDataSiswa();
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
        rl.close();
    }
}

main().catch((error) => {
    console.error("Program gagal:", error.message);
});

// Kumpulan property yang disimpan dalam parameter app
const app = {
    fs,
    dataSiswa,
    bacaDataSiswa,
    simpanDataSiswa
};

// Memanggil functions dengan parameter app
await bacaDataSiswa(app);