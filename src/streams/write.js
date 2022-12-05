import fs from 'fs';
const write = async () => {
    // Write your code here
    const writableStreamNew = 'This file should be read using Streams API write'
    const writableStream = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
        writableStream.write(writableStreamNew)
};
await write();
