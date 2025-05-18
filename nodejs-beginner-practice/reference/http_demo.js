const http = require('http');

http.createServer((req, res) => {
    res.write('This is response');
    res.end();
}).listen(5000, () => console.log('Server is running'));

// const body = document.querySelector('body');
// const smt = document.createElement('h1');
// smt.textContent = 'UwU';
// body.appendChild(smt);