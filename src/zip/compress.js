import zlib from "zlib";
import fs from "fs";
const compress = async () => {
    // Write your code here
    const gzip = zlib.createGzip();
    const fileA = fs.createReadStream('./src/zip/files/fileToCompress.txt')
    const fileB = fs.createWriteStream('./src/zip/files/archive.gz')
    fileA.pipe(gzip).pipe(fileB);
};

await compress();
