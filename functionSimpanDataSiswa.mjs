export default simpanDataSiswa;

// Menyimpan data siswa ke file JSON
async function simpanDataSiswa(app, siswa) {
    const data = JSON.stringify(siswa, null, 4);

    await app.fs.writeFile(
        app.dataSiswa,
        data + "\n",
        "utf8"
    );
}