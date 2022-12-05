import fs from 'fs'
import crypto from 'crypto'
const calculateHash = async () => {
    // Write your code here
    const fileBuffer = fs.readFileSync('./src/hash/files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
    console.log('', hash)

};

await calculateHash();
