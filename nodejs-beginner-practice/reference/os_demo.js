const os = require('os');

console.log(os.platform());
console.log(os.freemem());
console.log('Memory taken: ' + (os.totalmem() - os.freemem()));
console.log(os.homedir());
console.log(os.uptime());