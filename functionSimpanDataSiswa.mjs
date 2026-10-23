export default simpanDataSiswa;

// Menyimpan file data siswa ke JSON
async function simpanDataSiswa(app, siswa) {
    const data = JSON.stringify(siswa, null, 4);

    await app.fs.writeFile(
        app.dataSiswa,
        data + "\n",
        "utf8"
    );
}