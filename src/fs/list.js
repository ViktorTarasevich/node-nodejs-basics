import fs from "fs";
const list = async () => {
    // Write your code here +
    fs.readdir(`./src/fs/files`,  'utf8', (err, data ) => {
        if (err) {
            console.log(err)
            return err
        } else if ([data] === null) {
            console.log('Error')
        } else {
            console.log(data)
        }
    })
};

await list();
