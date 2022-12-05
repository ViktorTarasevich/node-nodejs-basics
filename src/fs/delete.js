import fs from 'fs'
const remove = async () => {
    // Write your code here
    const nameFile = 'fileToRemove.txt'
    fs.access(`./src/fs/files/${nameFile}`, (err) => {
        if (err) {
            console.log('FS operation failed');
            return err
        } else {
            fs.unlink(`./src/fs/files/${nameFile}`, (err) => {
                if (nameFile === false) {
                    console.log('FS operation failed', err)
                    return err
                }
            })
        }
    })
};

await remove();
