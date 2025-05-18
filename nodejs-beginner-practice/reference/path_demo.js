const path = require('path');

// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename).root);
// console.log(path.join(__dirname, 'test', 'hello.html'));

// const http = require('http');
// http.createServer((req, res) => {
//     let filePath = path.join(
//         __dirname, 
//         'public', 
//         req.url === '/' ? 'index.html' : req.url
//     );
//     res.write(filePath);
//     res.end();
// }).listen(5000, () => console.log('Server is runnign'));