import readline from 'readline'
import fs from "fs";
import {create} from './src/fs/create.js'
import {read} from './src/fs/read.js'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
})
rl.prompt()

rl.question('Name: ', name => {
    console.log(`Welcome to the File Manager, ${name}!`)

})
const commands = {
    create() {create()},
    ls() {
        const testFolder = './src/';
        fs.readdir(testFolder, (err, files) => {
            files.forEach(file => {
                console.log(file);
            });
        });
    },
    cd() {

    },
    cat() {read()}
}

rl.on('line', line => {
    line = line.trim()
    const command = commands[line]
    if (command){
        command()
    } else {
        console.log('Invalid input')
    }
    rl.prompt()
}).on('close', () => {
    console.log(`Thank you for using File Manager, , goodbye!`)
    process.exit(0)
})


