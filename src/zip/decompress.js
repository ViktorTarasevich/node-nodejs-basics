import zlib from "zlib";
import fs from "fs";
const decompress = async () => {
    // Write your code here
    const unzip = zlib.createUnzip();
    const fileA = fs.createReadStream('./src/zip/files/archive.gz')
    const fileB = fs.createWriteStream('./src/zip/files/fileToCompress.txt')
    fileA.pipe(unzip).pipe(fileB);
};

await decompress();
