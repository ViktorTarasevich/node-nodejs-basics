import fs from 'fs'
const create = async () => {
    // Write your code here
    const newFile = 'fresh.txt'
    fs.access(`./src/fs/files/fresh.txt`, (err) => {
        if (err) {
            console.log('FS operation failed');
            return err
        } else {
            const message = 'I am fresh and young'
            fs.writeFile('./src/fs/files/fresh.txt', message,  'utf8', (err) => {
                if ('fresh.txt' === true) {
                    console.log('Done', err);
                    return err
                }
            })
        }
    });
};

await create();
