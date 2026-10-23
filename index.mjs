import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "node:fs/promises";

import menuDataSiswa from "./functionMenuDataSiswa.mjs";
import bacaDataSiswa from "./functionBacaDataSiswa.mjs";
import tampilkanDataSiswa from "./functionTampilkanDataSiswa.mjs";
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
    simpanDataSiswa,
    tambahDataSiswa,
    tampilkanDataSiswa
};

menuDataSiswa(app).catch((error) => {
    console.error("Program gagal:", error.message);
});