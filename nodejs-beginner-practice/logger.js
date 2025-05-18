const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger;

const loggerObj = new Logger('message');

loggerObj.on('message', (data) => console.log(`Data has been received: `, data));

loggerObj.log('Hello World');