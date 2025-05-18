const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if(err) throw err;
//     console.log('File created...');

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'thhird try', err => {
//         if(err) throw err;
//         console.log('uga buga');
//     });
// });

// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'fifth.txt'), err => {
//     if(err) throw err;
//     console.log('File renamed');
// });

fs.readFile(path.join(__dirname, '/test', 'fifth.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});