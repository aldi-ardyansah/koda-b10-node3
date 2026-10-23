export default bacaDataSiswa;

// Fungsi membaca data siswa dari file JSON
async function bacaDataSiswa(app) {
    try {
        const data = await app.fs.readFile(
            app.dataSiswa,
            "utf8"
        );

        const siswa = JSON.parse(data);

        if (!Array.isArray(siswa)) {
            throw new Error(
                "Format database harus berupa array."
            );
        }

        return siswa;
    } catch (error) {
        if (error.code === "ENOENT") {
            await app.simpanDataSiswa([]);
            return [];
        }

        throw error;
    }
}