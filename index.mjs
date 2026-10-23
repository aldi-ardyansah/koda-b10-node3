import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "node:fs/promises";

import tampilkanDataSiswa from "./functionTampilkanDataSiswa.mjs";
import bacaDataSiswa from "./functionBacaDataSiswa.mjs";
import tambahDataSiswa from "./functionTambahDataSiswa.mjs";
import simpanDataSiswa from "./functionSimpanDataSiswa.mjs";

const dataSiswa = "dataSiswa.json";

const rl = readline.createInterface({
    input,
    output
});

// Kumpulan property yang disimpan dalam parameter app
const app = {
    rl,
    fs,
    dataSiswa,
    bacaDataSiswa,
    simpanDataSiswa
};

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
                        await tambahDataSiswa(app);
                        break;

                    case "2":
                        await tampilkanDataSiswa(app);
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