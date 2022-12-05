import fs from 'fs'
const copy = async () => {
    // Write your code here
    console.log('./src/fs/files', fs.readdirSync(`./src/fs/files`,  'utf8'))

    fs.cp('./src/fs/files', './src/fs/files_copy',  { recursive: true },(err) => {
        if (err) {
            console.log("Error Found:", err);
        }
    })
};

copy();
