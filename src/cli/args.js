const parseArgs = () => {
    // Write your code here
    process.argv.forEach((index, arg) => {
        console.log(`propName is ${index}`);
    });
};

parseArgs();
