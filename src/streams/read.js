import fs from "fs";

const read = async () => {
    // Write your code here
    const readable = fs.createReadStream('./src/streams/files/fileToRead.txt', {encoding: 'utf8'});
    readable.on('readable', () => {
        console.log(`readable: ${readable.read()}`);
    });
};

await read();
