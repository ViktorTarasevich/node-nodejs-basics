import fs from 'fs'
import path from "path";
export const read = async () => {
    // Write your code here
    const nameFile = 'fileToRead.txt'
    fs.access(`./src/fs/files/${nameFile}`, (err) => {
        if (err) {
            console.log('FS operation failed');
            return err
        } else {
            const d = fs.readFileSync(`./src/fs/files/${nameFile}`, 'utf8')
            console.log(d)
        }
    })
};

await read();
