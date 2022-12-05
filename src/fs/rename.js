import fs from 'fs'
const rename = async () => {
    // Write your code here
    const c = 'wrongFilename.txt'
    const a = 'properFilename.md'
    fs.access(`./src/fs/files/${c}`, (err) => {
        if (err) {
            console.error('FS operation failed')
            return err
        } else {
            fs.rename(`./src/fs/files/${c}`, `./src/fs/files/${a}`, (err) => {
                if (err) {
                    return err
                }  else {
                    console.log('Файл переименован')
                }
            })
        }
    })
};

await rename();
